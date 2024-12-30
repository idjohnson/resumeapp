/*

exports.userInfo = {
  firstName: "John",
  lastName: "Doe",
  title: "Senior Software Engineer",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Lane, San Francisco, CA 94105",
  social: {
    mastodon: "@johndoe@mastodon.social",
    bluesky: "@johndoe.bsky.social"
  },
  photo: "/images/profile.jpg"
};

*/

const fs = require('fs');
const path = require('path');

let userInfo = {}; // Initialize userInfo
const userDataPath = path.join(__dirname, '..', 'data_json', 'user.json');
const userJson = fs.readFileSync(userDataPath, 'utf8');

try {
  userInfo = JSON.parse(userJson);
} catch (err) {
  console.error("Error loading user data:", err);
  // Handle the error appropriately, e.g., set default values for userInfo
}

export { userInfo };