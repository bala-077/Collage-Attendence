const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const attendanceRoutes = require('./routes/attendance');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/attendance', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use('/api/attendance', attendanceRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
