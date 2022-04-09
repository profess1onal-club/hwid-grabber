const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const hwid = req.header('Syn-Fingerprint') || req.header('SW-Fingerprint') || req.header('Krnl-Hwid') || 'Unknown';
    
    if (hwid === 'Unknown') {
        res.send('Unknown');
    } else {
        res.send(hwid);
    }
});

app.listen(1337, () => {
    console.log(`Listening.`);
});