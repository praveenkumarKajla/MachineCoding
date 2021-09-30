import Rider from "@models/Rider";
import { mapper } from "@services/db/connection";
import { GoogleCredentials } from "@typeroot/auth";
import { RiderInfo } from "@typeroot/models";

export class RiderService {



    static async get(riderId: string): Promise<Rider | null> {

        const rider = await mapper.get(
            Object.assign(new Rider(),
                { id: riderId })).catch(err => {
                    console.log(err); return null
                });
        return rider;
    }

    static async getByEmail(email: string): Promise<{ rider?: Rider, err?: string }> {
        try {
            const query = await mapper.query(Rider, { email }, {
                indexName: "email",
            })
            const riders = []
            for await (let item of query) {
                riders.push(item)
            }
            if (riders.length === 0) return { err: "no rider found" }
            return { rider: riders[0] }
        }
        catch (err) {
            console.log(err.message)
            return { err: err.message }
        }
    }

    static async register(credential: GoogleCredentials) {

        const { name: { given_name: first_name, family_name: last_name }, email } = credential.profile
        const { rider, err } = await this.getByEmail(email)
        if (rider) {
            return rider
        }
        const { picture } = credential.profile.raw

        const riderInfo: RiderInfo = {
            first_name,
            last_name,
            email,
            picture

        }
        const new_rider = await mapper.put(Object.assign(new Rider(), { ...riderInfo }))
        return new_rider


    }


}