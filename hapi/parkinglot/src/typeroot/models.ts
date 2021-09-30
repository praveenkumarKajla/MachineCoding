import { GarageRates, VehicleType } from "@models/Garage";
import { SpotStatus } from "@models/Spot";

export interface Location {
  latitude: number;
  longitude: number;
}

export interface UserInfo {
  first_name: string;
  last_name: string;
  email: string;
  picture: string;
}

export interface GarageInfo {
  zipcode: string;
  rates: GarageRates;
}

export interface SpotInfo {
  garage_id: string;
  vehicle_type: VehicleType;
  status: SpotStatus;
}

export interface ReservationInfo {
  garage_id: string;
  spot_id: string;
}
