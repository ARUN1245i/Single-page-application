const db = require('../config/db');

exports.getStatus = (req, res) => {
    const { applicationId } = req.params;

    db.query('SELECT * FROM applications WHERE id = ?', [applicationId], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (result.length === 0) return res.status(404).json({ message: 'Application not found' });

        res.json({ status: result[0].status });
    });
};
