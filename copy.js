// copy-cname.js
const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'CNAME');
const destination = path.join(__dirname, 'dist', 'CNAME');

fs.copyFile(source, destination, (err) => {
    if (err) {
        console.error('❌ Failed to copy CNAME:', err);
    } else {
        console.log('✅ CNAME copied to dist/');
    }
});
