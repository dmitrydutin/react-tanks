import pool from '../db';
import { Router } from 'express';
const router = Router();

router.get('/tanks', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) return res.status(500).json({ message: err.message, err });

        let query = 'SELECT id, name FROM tanks;';

        connection.query(query, (error, results) => {
            connection.release();
            if (error) return res.status(500).json({ message: error.message, error });

            return res.json(results);
        });
    });
});

router.post('/create', (req, res) => {
    const { nation, class: rClass, level, name, photo, video, strength, armor, damage, scatter } = req.body;

    pool.getConnection((err, connection) => {
        if (err) return res.status(500).json({ message: err.message, err });

        let query = `INSERT INTO tanks (id_nation, id_class, id_level, name, photo, video, strength, armor, damage, scatter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

        connection.query(
            query,
            [nation, rClass, level, name, photo, video, strength, armor, damage, scatter],
            (error, results) => {
                connection.release();
                if (error) return res.status(500).json({ message: error.message, error });

                return res.json(results);
            }
        );
    });
});

router.post('/edit', (req, res) => {
    const { tankInfo, nation, class: rClass, level, name, photo, video, strength, armor, damage, scatter } = req.body;

    pool.getConnection((err, connection) => {
        if (err) return res.status(500).json({ message: err.message, err });

        let query = `UPDATE tanks SET id_nation = ?, id_class = ?, id_level = ?, name = ?, photo = ?, video = ?, strength = ?, armor = ?, damage = ?, scatter = ? WHERE (id = ?);`;

        connection.query(
            query,
            [nation, rClass, level, name, photo, video, strength, armor, damage, scatter, tankInfo],
            (error, results) => {
                connection.release();
                if (error) return res.status(500).json({ message: error.message, error });

                return res.json(results);
            }
        );
    });
});

router.post('/delete', (req, res) => {
    const { id } = req.body;

    pool.getConnection((err, connection) => {
        if (err) return res.status(500).json({ message: err.message, err });

        let query = 'DELETE FROM tanks WHERE (id = ?);';

        connection.query(query, [id], (error, results) => {
            connection.release();
            if (error) return res.status(500).json({ message: error.message, error });

            return res.json(results);
        });
    });
});

router.get('/diagram/classes', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) return res.status(500).json({ message: err.message, err });

        let query = 'SELECT id_class, COUNT(id_class) as count FROM tanks GROUP BY id_class;';

        connection.query(query, (error, results) => {
            connection.release();
            if (error) return res.status(500).json({ message: error.message, error });

            return res.json(results);
        });
    });
});

router.get('/diagram/levels', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) return res.status(500).json({ message: err.message, err });

        let query = 'SELECT id_level, COUNT(id_level) as count FROM tanks GROUP BY id_level;';

        connection.query(query, (error, results) => {
            connection.release();
            if (error) return res.status(500).json({ message: error.message, error });

            return res.json(results);
        });
    });
});

router.get('/diagram/nations', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) return res.status(500).json({ message: err.message, err });

        let query = 'SELECT id_nation, COUNT(id_nation) as count FROM tanks GROUP BY id_nation;';

        connection.query(query, (error, results) => {
            connection.release();
            if (error) return res.status(500).json({ message: error.message, error });

            return res.json(results);
        });
    });
});

export default router;
