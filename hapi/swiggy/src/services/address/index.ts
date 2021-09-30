import Address, { Area } from "@models/Address";
import { mapper } from "@services/db/connection";
import { Location } from "aws-sdk";



export interface AddressInfo{
    name: string;
    address1: string;
    address2?: string;
    landmark: string;
    area: Area;
    city: string;
    location: Location;
}
export class AddressService {


    static async get(addressId: string): Promise<Address>{
        const address = await mapper.get(
            Object.assign(new Address(), { id: addressId})
            ).catch(err => { console.log(err.message); return null });
        return address
    }
    
    static async batchGet(items: Array<Address>, isKeyValuePair = false)
        : Promise<Record<string, Address> | Array<Address>> {
        let result : Record<string, any> | Array<any> = isKeyValuePair ? {} : []
        for await (const address of mapper.batchGet(items)) {
            if(isKeyValuePair)result[address.id] = address
            else result.push(address)
        }
        return result
    }

    static async batchPut(items: Array<Address>) {
        let result = []
        for await (const persisted of mapper.batchPut(items)) {
            // items will be yielded as they are successfully written
            result.push(persisted)
        }
        return result

    }

    static async getAddresses(addressIds: Array<string>, isKeyValuePair = false)
        : Promise<Record<string, Address> | Array<Address>> {
        const toGet = addressIds.map(
            addressId => Object.assign(new Address(), { id: addressId }
            ))
        const items = await this.batchGet(toGet, isKeyValuePair)
        return items
    }

    static async addAddresses(addresses: Array<AddressInfo>) {
        const toPut = addresses.map(
            addressInfo => Object.assign(new Address(), { ...addressInfo }
            ))
        const items = await this.batchPut(toPut)
        return items
    }
}