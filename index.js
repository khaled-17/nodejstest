const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // قم بتعيين رقم المنفذ الذي تفضله هنا

// عرض رسالة الترحيب على مسار "/"
app.get('/', (req, res) => {
    res.send('مرحبا!');
});

// عرض رسالة الترحيب على مسار "/users"
app.get('/users', (req, res) => {
    res.send('مرحبا بالمستخدمين على راوت /users');
});

// استمع على المنفذ المحدد
app.listen(port, () => {
    console.log(`التطبيق يعمل على المنفذ ${port}`);
});
