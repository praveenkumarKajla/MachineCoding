// const x = {
//     provider: 'google',
//     query: {},
//     token: 'ya29.a0AfH6SMDuqekuxLJ-KAI29a_czRJB8rjz6qS4PL_-I4Nug4Cxm2uG1P9NtvQJ6GZrrHtYW7GsNbqJ9-wdZgchHknCDuHrUaxUhQhVm5KE9Esh9IC38lPy0_nQco7lcg8qmJufAzi6D8OJ6TH7hadIRZ9qXAFB',
//     refreshToken: undefined,
//     expiresIn: 3598,
//     profile: {
//         id: '107114781313819402575',
//         displayName: 'Praveen Kumar',
//         name: { given_name: 'Praveen', family_name: 'Kumar' },
//         email: 'praveenkajla80994@gmail.com',
//         raw: {
//             sub: '107114781313819402575',
//             name: 'Praveen Kumar',
//             given_name: 'Praveen',
//             family_name: 'Kumar',
//             picture: 'https://lh3.googleusercontent.com/a/AATXAJwCM33My8tGv0vjc962ZjpuaugdD6zZ_4QTHJF2=s96-c',
//             email: 'praveenkajla80994@gmail.com',
//             email_verified: true,
//             locale: 'en-GB'
//         }
//     }
// }

export interface GoogleCredentials {

    token: string;
    refreshToken: string;
    expiresIn: number;
    profile: GoogleProfile

}

export interface GoogleProfile {

    id: string;
    displayName: string;
    name: Name;
    email: string;
    raw: GoogleRaw
}

export interface GoogleRaw {
    sub: string;
    name: string;
    given_name: string;
    family_name: string;
    picture: string;
    email: string;
    email_verified: boolean;
    locale: string;
}

export interface Name {
    given_name: string;
    family_name: string;
}