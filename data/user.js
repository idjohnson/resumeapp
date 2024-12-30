const fs = require('fs');
const path = require('path');

const userDataPath = path.join(__dirname, '..', 'data_json', 'user.json');
const userJson = fs.readFileSync(userDataPath, 'utf8');

exports.userInfo = JSON.parse(userJson);