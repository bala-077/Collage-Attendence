import React, { useState } from 'react';
import axios from 'axios';

const AttendanceForm = ({ fetchAttendance }) => {
    const [name, setName] = useState('');
    const [attendance, setAttendance] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/attendance', { name, attendance });
            fetchAttendance();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Student Name"
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={attendance}
                    onChange={(e) => setAttendance(e.target.checked)}
                />
                Present
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default AttendanceForm;
