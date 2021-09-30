import Driver, { DriverStatus } from "@models/Driver";
import { mapper } from "@services/db/connection";
import request from "request";
import { getBoundsOfDistance } from "geolib";

const names = {
    "male": [
        "Aarav",
        "Vihaan",
        "Vivaan",
        "Ananya",
        "Diya",
        "Advik",
        "Kabir",
        "Anaya",
        "Aarav",
        "Vivaan",
        "Aditya",
        "Vivaan",
        "Vihaan",
        "Arjun",
        "Vivaan",
        "Reyansh",
        "Mohammed",
        "Sai",
        "Arnav",
        "Aayan",
        "Krishna",
        "Ishaan",
        "Shaurya",
        "Atharva",
        "Advik",
        "Pranav",
        "Advaith",
        "Aaryan",
        "Dhruv",
        "Kabir",
        "Ritvik",
        "Aarush",
        "Kian",
        "Darsh",
        "Veer"
    ],
    "surnames": [
        "Bedi",
        "Gandhi",
        "Parekh",
        "Kohli",
        "Ahluwalia",
        "Chandra",
        "Jha",
        "Khanna",
        "Bajwa",
        "Chawla",
        "Lal",
        "Anand",
        "Gill",
        "Chakrabarti",
        "Dubey",
        "Kapoor",
        "Khurana",
        "Modi",
        "Kulkarni",
        "Khatri",
        "Kaur",
        "Dhillon",
        "Kumar",
        "Gupta",
        "Naidu",
        "Das",
        "Jain",
        "Chowdhury",
        "Dalal",
        "Thakur",
        "Gokhale",
        "Apte",
        "Sachdev",
        "Mehta",
        "Ganguly",
        "Bhasin",
        "Mannan",
        "Ahuja",
        "Singh",
        "Bakshi",
        "Basu",
        "Ray",
        "Mani",
        "Datta",
        "Balakrishna",
        "Biswas",
        "Laghari",
        "Malhotra",
        "Dewan",
        "Purohit"
    ]
}

function randomLocation() {
    const randomnumber = (min = 0, max = 3) => (Math.random() * (max - min) + min);
    return getBoundsOfDistance({ latitude: 12.934987642754665, longitude: 77.62492524528516 }, randomnumber())[0]

}
const zipObject = (props, values) => {
    return props.reduce((prev, prop, i) => {
        return Object.assign(prev, { [prop]: values[i] });
    }, {});
};

export async function addCabs() {

    const data = new Array(20).fill(0).map(x => ({
        first_name: `${names.male[Math.floor(Math.random() * names.male.length - 1)]}`,
        last_name: `${names.surnames[Math.floor(Math.random() * names.surnames.length - 1)]}`,
        email: "random@xyz.com",
        picture: "abc.png",
        location: randomLocation(),
        status: [DriverStatus.ONLINE, DriverStatus.OFFLINE, DriverStatus.BOOKED][Math.floor(Math.random() * 3)]
    }))
    const toPut = data.map(item => (Object.assign(new Driver(), { ...item })))
    let res = []
    for await (const persisted of mapper.batchPut(toPut)) {
        // items will be yielded as they are successfully written
        res.push(persisted)
    }
    console.log(res)
    return res
}
addCabs()