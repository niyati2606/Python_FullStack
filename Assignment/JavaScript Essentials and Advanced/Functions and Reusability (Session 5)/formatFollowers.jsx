// const formatFollowers = (number) => {

//     if (number >= 1000000) {
//         let followers = number / 1000000
//         console.log(followers + "M")
//     } else if (number >= 1000) {
//         let followers = number / 1000
//         console.log(followers + "K")
//     }

// }

// formatFollowers(1500)
// formatFollowers(2500000)

const formatFollowers = (count) => {
    if (count >= 1000) {
        return (count / 1000).toFixed(1) + 'K';
    }
    return count;
};

console.log(formatFollowers(1500)); // 1.5K
console.log(formatFollowers(500));  // 500