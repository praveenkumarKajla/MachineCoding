import User from "@models/User";
import { mapper } from "@services/db/connection";
import { GoogleCredentials } from "@typeroot/auth";
import { Share } from "@typeroot/payload";
import { ProjectionExpression } from "aws-sdk/clients/dynamodb";
import { Users } from "aws-sdk/clients/identitystore";




export interface UserInfo {
    first_name: string;
    last_name?: string;
    email: string,
    picture?: string,
    invitedBy?: string
}

export class UserService {


    static async batchUsersByEmail(emails: Array<string>) {
        if (emails.length > 10) return { err: "Only 10 items allowed!" }
        return { users: await Promise.all(emails.map(email => this.getByEmail(email))) }
    }

    static async getByEmail(email: string): Promise<{ user?: User, err?: string }> {
        try {
            const query = await mapper.query(User, { email }, {
                indexName: "email",
            })
            const users = []
            for await (let item of query) {
                users.push(item)
            }
            if (users.length === 0) return { err: "no user found" }
            return { user: users[0] }
        }
        catch (err) {
            console.log(err.message)
            return { err: err.message }
        }
    }

    static async login(credentials: GoogleCredentials) {


        const email = credentials.profile.email
        const { given_name: first_name, family_name: last_name } = credentials.profile.name
        const { picture } = credentials.profile.raw
        let { user, err } = await this.getByEmail(email)
        if (!user || err) {
            user = await this.addNewUser({
                first_name,
                last_name,
                email,
                picture
            })
        }
        return user
    }


    static async batchUsers(
        userUids: Array<string>,
        isKeyValuePair = false,
        projection?: any)
        : Promise<Record<string, User> | Array<User>> {
        const toGet = userUids.map(ID => Object.assign(new User(), { ID }))
        const batchGet = await mapper.batchGet(toGet, {
            perTableOptions: {
                [User.table_name]: {
                    projection
                }
            }
        })
        const users: Record<string, any> | Array<any> = isKeyValuePair ? {} : []
        for await (const user of batchGet) {
            if (isKeyValuePair) users[user.ID] = user
            else users.push(user)
        }
        return users
    }

    static async addNewUser(userInfo: UserInfo) {

        const toPut = Object.assign(new User(), {
            ...userInfo
        })

        const user = await mapper.put(toPut)
        return user
    }

}