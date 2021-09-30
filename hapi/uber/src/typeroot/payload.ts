import { Location } from "./models";

export interface RidePayload {
    riderId: string;
    source: Location;
    destination: Location;
}