import user1 from "../assets/user1.jpeg"

const recentUpdatesList = [
    {
        id: 1,
        name: "reena",
        updateDay: "today",
        time: "9:06",
        imageSource: user1
    },
    {
        id: 2,
        name: "Emma",
        updateDay: "today",
        time: "10:15",
        imageSource: require("../assets/user2.jpeg")
    },
    {
        id: 3,
        name: "John",
        updateDay: "yesterday",
        time: "15:30",
        imageSource: require("../assets/user3.jpeg")
    },
    {
        id: 4,
        name: "Sophia",
        updateDay: "yesterday",
        time: "13:45",
        imageSource: require("../assets/user4.jpeg")
    }
    // Add more items as needed
];


export default recentUpdatesList