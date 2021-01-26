import pool from '../db';
import { Router } from 'express';
const router = Router();

router.post('/login', (req, res) => {
    const { login, password } = req.body;

    pool.getConnection((err, connection) => {
        if (err) return res.status(500).json({ message: err.message, err });

        const query = 'SELECT isAdmin FROM users where login=? AND password=?';

        connection.query(query, [login, password], (error, results) => {
            connection.release();
            if (error) return res.status(500).json({ message: error.message, error });

            if (results.length === 0) {
                return res.json({ isAuth: false, isAdmin: false });
            }

            switch (results[0].isAdmin) {
                case 0:
                    return res.json({ isAuth: true, isAdmin: false });
                case 1:
                    return res.json({ isAuth: true, isAdmin: true });
                default:
                    return res.json({ isAuth: false, isAdmin: false });
            }
        });
    });
});

router.post('/join', (req, res) => {
    const { login, password } = req.body;

    pool.getConnection((err, connection) => {
        if (err) return res.status(500).json({ message: err.message, err });

        const query = 'SELECT id FROM users where login=?';

        connection.query(query, [login], (error, results) => {
            if (error) return res.status(500).json({ message: error.message, error });

            if (results.length !== 0) {
                connection.release();
                return res.json({ isAuth: false, isAdmin: false });
            }

            const insertQuery = 'INSERT INTO users (`login`, `password`, `isAdmin`) VALUES (?, ?, "0");';

            connection.query(insertQuery, [login, password], (error) => {
                connection.release();
                if (error) return res.status(500).json({ message: error.message, error });

                return res.json({ isAuth: true, isAdmin: false });
            });
        });
    });
});

export default router;
