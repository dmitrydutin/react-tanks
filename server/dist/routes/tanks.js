"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
const express_1 = require("express");
const router = express_1.Router();
router.get('/tanks', (req, res) => {
    const { tLevel = '%', tClass = '%', tNation = '%' } = req.query;
    db_1.default.getConnection((err, connection) => {
        if (err)
            return res.status(500).json({ message: err.message, err });
        let query = `
            SELECT
                tanks.id,
                nation.value as nation,
                class.value as class,
                level.value as level,
                tanks.name
            FROM tanks
            INNER JOIN nation ON tanks.id_nation=nation.id
            INNER JOIN class ON tanks.id_class=class.id
            INNER JOIN level ON tanks.id_level=level.id
            WHERE 
                tanks.id_level LIKE ? 
                AND tanks.id_class LIKE ? 
                AND tanks.id_nation LIKE ?;
        `;
        connection.query(query, [tLevel, tClass, tNation], (error, results) => {
            connection.release();
            if (error)
                return res.status(500).json({ message: error.message, error });
            return res.json(results);
        });
    });
});
router.get('/tanks/:id', (req, res) => {
    const id = req.params.id;
    db_1.default.getConnection((err, connection) => {
        if (err)
            return res.status(500).json({ message: err.message, err });
        let query = `
            SELECT
                tanks.id,
                nation.value as nation,
                class.value as class,
                level.value as level,
                tanks.name,
                tanks.photo,
                tanks.video,
                tanks.strength,
                tanks.armor,
                tanks.damage,
                tanks.scatter
            FROM tanks
            INNER JOIN nation ON tanks.id_nation=nation.id
            INNER JOIN class ON tanks.id_class=class.id
            INNER JOIN level ON tanks.id_level=level.id
            WHERE tanks.id=?;
        `;
        connection.query(query, [id], (error, results) => {
            connection.release();
            if (error)
                return res.status(500).json({ message: error.message, error });
            return res.json(results);
        });
    });
});
router.get('/levels', (req, res) => {
    db_1.default.getConnection((err, connection) => {
        if (err)
            return res.status(500).json({ message: err.message, err });
        const query = 'SELECT * FROM level';
        connection.query(query, (error, results) => {
            connection.release();
            if (error)
                return res.status(500).json({ message: error.message, error });
            return res.json(results);
        });
    });
});
router.get('/classes', (req, res) => {
    db_1.default.getConnection((err, connection) => {
        if (err)
            return res.status(500).json({ message: err.message, err });
        const query = 'SELECT * FROM class';
        connection.query(query, (error, results) => {
            connection.release();
            if (error)
                return res.status(500).json({ message: error.message, error });
            return res.json(results);
        });
    });
});
router.get('/nations', (req, res) => {
    db_1.default.getConnection((err, connection) => {
        if (err)
            return res.status(500).json({ message: err.message, err });
        const query = 'SELECT * FROM nation';
        connection.query(query, (error, results) => {
            connection.release();
            if (error)
                return res.status(500).json({ message: error.message, error });
            return res.json(results);
        });
    });
});
exports.default = router;
