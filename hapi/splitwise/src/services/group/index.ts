import Group from "@models/Group";
import { mapper } from "@services/db/connection";

export interface GroupInfo {
    name: string,
    admin: string,
    members: Array<string>;
}


export class GroupService {


    static async getByID(groupId: string) {
        const group = await mapper.get(
            Object.assign(new Group(), { ID: groupId }))
            .catch(err => { console.log(err.message); return null });
        return group;
    }


    static async addNewGroup(groupInfo: GroupInfo) {
        const toPut = Object.assign(new Group(), {
            name: groupInfo.name,
            admin: groupInfo.admin,
            members: groupInfo.members
        })
        const group = await mapper.put(toPut)
        return group;
    }
}