import React from 'react';

const AttendanceList = ({ students }) => {
    return (
        <div>
            <h2>Attendance List</h2>
            <ul>
                {students.map((student) => (
                    <li key={student._id}>
                        {student.name}  {student.attendance ? 'Present' : 'Absent'}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AttendanceList;
