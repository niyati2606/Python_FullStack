import formatFollowers from "./JS/instaHelpers.js";

const users = [
    { name: "ravi", followers: 1200 },
    { name: "niya", followers: 2500000 },
    { name: "ns", followers: 850 }
];

users.forEach((user) => {
    console.log(`${user.name}: ${formatFollowers(user.followers)} followers`);
});