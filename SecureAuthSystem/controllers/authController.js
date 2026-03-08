const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// Register a new user
exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if user exists
        const [existingUsers] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (existingUsers.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert user
        await db.query(
            'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
            [name, email, hashedPassword, 'user']
        );

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// Login user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Identify Device
        // Using IP from request and User-Agent header
        const ip_address = req.ip || req.connection.remoteAddress;
        const browser = req.headers['user-agent'] || 'Unknown Browser';
        const device_name = 'Web Session';

        // Check user
        const [users] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        if (users.length === 0) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = users[0];

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If user is Admin, bypass device approval
        if (user.role === 'admin') {
            const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
            return res.status(200).json({ message: 'Admin login successful', token, role: user.role });
        }

        // Check if device is recognized and approved
        const [devices] = await db.query(
            'SELECT * FROM devices WHERE user_id = ? AND ip_address = ? AND browser = ?',
            [user.id, ip_address, browser]
        );

        let device;
        if (devices.length === 0) {
            // New device, insert it as not approved
            const [deviceResult] = await db.query(
                'INSERT INTO devices (user_id, device_name, ip_address, browser, approved) VALUES (?, ?, ?, ?, ?)',
                [user.id, device_name, ip_address, browser, false]
            );
            device = { id: deviceResult.insertId, approved: false };
        } else {
            device = devices[0];
        }

        if (!device.approved) {
            // Check if there is already a pending login request for this device
            const [requests] = await db.query(
                'SELECT * FROM login_requests WHERE user_id = ? AND device_id = ? AND status = ?',
                [user.id, device.id, 'pending']
            );

            // If no pending request, create one
            if (requests.length === 0) {
                await db.query(
                    'INSERT INTO login_requests (user_id, device_id, status) VALUES (?, ?, ?)',
                    [user.id, device.id, 'pending']
                );
            }

            // Refuse login immediately
            return res.status(403).json({ message: 'Login pending admin approval' });
        }

        // Device is approved, grant login token
        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1d' });
        res.status(200).json({ message: 'Login successful', token, role: user.role });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
