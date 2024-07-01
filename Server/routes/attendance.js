// backend/routes/attendance.js
const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// Get all students' attendance
router.get('/', async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add new student attendance
router.post('/', async (req, res) => {
    const student = new Student({
        name: req.body.name,
        attendance: req.body.attendance,
    });

    try {
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
