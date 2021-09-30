import { Member } from "@models/member"
import { mapper } from "@services/db/connection"

export class MemberService{



    static async batchGet(items: Array<Member>, isKeyValuePair = false)
    : Promise<Record<string, Member> | Array<Member>> {
    let result : Record<string, any> | Array<any> = isKeyValuePair ? {} : []
    for await (const member of mapper.batchGet(items)) {
        if(isKeyValuePair)result[member.user_id] = member
        else result.push(member)
    }
    return result
}

static async batchPut(items: Array<Member>) {
    let result = []
    for await (const persisted of mapper.batchPut(items)) {
        // items will be yielded as they are successfully written
        result.push(persisted)
    }
    return result

}


static async getMemberItems(memberIds: Array<string>, isKeyValuePair = false)
    : Promise<Record<string, Member> | Array<Member>> {
    const toGet = memberIds.map(
        memberId => Object.assign(new Member(), { user_id: memberId }
        ))
    const items = await this.batchGet(toGet, isKeyValuePair)
    return items
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

}