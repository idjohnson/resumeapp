const fs = require('fs');
const path = require('path');

const expDataPath = path.join(__dirname, '..', 'data_json', 'experiences.json');
const expJSON = fs.readFileSync(expDataPath, 'utf8');

exports.experiences = JSON.parse(expJSON);