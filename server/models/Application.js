const db = require('../config/db');

const Application = {
    create: (businessName, businessType, ownerId, callback) => {
        db.query('INSERT INTO applications (businessName, businessType, ownerId, status) VALUES (?, ?, ?, ?)',
            [businessName, businessType, ownerId, 'Pending'], callback);
    },
    findByOwner: (ownerId, callback) => {
        db.query('SELECT * FROM applications WHERE ownerId = ?', [ownerId], callback);
    }
};

module.exports = Application;
