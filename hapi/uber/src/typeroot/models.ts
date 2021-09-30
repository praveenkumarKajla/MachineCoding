

export interface Location {
    latitude: number;
    longitude: number;
}

export interface RiderInfo {
    first_name: string;
    last_name: string;
    email: string;
    picture: string;
    invitedBy?: string;
}

export interface RideInfo {
    driver_id: string;
    rider_id: string;
    source: Location;
    destination: Location;
    fee: number;
}