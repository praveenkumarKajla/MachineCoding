import { Location } from "@typeroot/models";


export const ASCII_LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
export const ASCII_UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export const ASCII_LETTERS = ASCII_LOWERCASE + ASCII_UPPERCASE;
export const DIGITS = "0123456789";


export const generateRandomKeyWithLength = (
    length: number,
    characters = ASCII_LOWERCASE + DIGITS,
) => {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
        const char = characters.charAt(Math.floor(Math.random() * charactersLength));
        result += char;
    }
    return result;
};

export const getDistanceLine = (location1: Location, location2: Location) => {

    return Math.sqrt(Math.pow(location1.latitude - location2.latitude, 2) + Math.pow(location1.longitude - location2.longitude, 2))
}