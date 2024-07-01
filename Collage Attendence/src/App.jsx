import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AttendanceForm from './components/AttendanceForm';
import AttendanceList from './components/AttendanceList';

const App = () => {
    const [students, setStudents] = useState([]);

    const fetchAttendance = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/attendance');
            setStudents(response.data);
        } catch (error) {
            console.error("Error fetching attendance:", error);
            if (error.response) {~
                console.error("Server responded with status:", error.response.status);
            }
        }
    };

    useEffect(() => {
        fetchAttendance();
    }, []);

    return (
        <div>
            <h1>College Attendance App</h1>
            <AttendanceForm fetchAttendance={fetchAttendance} />
            <AttendanceList students={students} />
        </div>
    );
};

export default App;
