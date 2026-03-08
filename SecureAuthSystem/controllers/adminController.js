const db = require('../config/db');

// Get all pending login requests
exports.getPendingRequests = async (req, res) => {
    try {
        const query = `
            SELECT r.id as request_id, r.status, r.created_at as login_time,
                   u.name, u.email,
                   d.id as device_id, d.device_name, d.ip_address, d.browser
            FROM login_requests r
            JOIN users u ON r.user_id = u.id
            JOIN devices d ON r.device_id = d.id
            WHERE r.status = 'pending'
            ORDER BY r.created_at DESC
        `;
        const [requests] = await db.query(query);
        res.status(200).json(requests);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error retrieving requests' });
    }
};

// Approve a device and request
exports.approveRequest = async (req, res) => {
    try {
        const { request_id, device_id } = req.body;

        // Mark device as approved to allow future successful logins
        await db.query('UPDATE devices SET approved = TRUE WHERE id = ?', [device_id]);

        // Update request status
        await db.query('UPDATE login_requests SET status = "approved" WHERE id = ?', [request_id]);

        res.status(200).json({ message: 'Device approved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error approving request' });
    }
};

// Reject a request
exports.rejectRequest = async (req, res) => {
    try {
        const { request_id } = req.body;

        // Just reject the request, the device remains unapproved
        await db.query('UPDATE login_requests SET status = "rejected" WHERE id = ?', [request_id]);

        res.status(200).json({ message: 'Device login rejected' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error rejecting request' });
    }
};
