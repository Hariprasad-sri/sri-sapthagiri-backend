const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/sri_sapthagiri';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ Local MongoDB Connected');
    process.exit(0);
}).catch(err => {
    console.error('❌ Local MongoDB Connection Error:', err.message);
    process.exit(1);
});
