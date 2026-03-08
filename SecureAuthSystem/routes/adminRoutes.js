const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyAdmin } = require('../middleware/authMiddleware');

router.get('/requests', verifyAdmin, adminController.getPendingRequests);
router.post('/approve', verifyAdmin, adminController.approveRequest);
router.post('/reject', verifyAdmin, adminController.rejectRequest);

module.exports = router;
