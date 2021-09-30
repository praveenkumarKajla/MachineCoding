
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