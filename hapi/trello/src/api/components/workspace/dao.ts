
import { ERROR } from "@errors/index";
import { WORKSPACE_ERRORS } from "@errors/workspace";
import { WorkspaceService } from "@services/workspace";
import { NewWorkspacePayload } from "@typeroot/payload";

export class WorkspaceDao {



    static async createNew(info: NewWorkspacePayload){


        const workspace = await WorkspaceService.put(info)
        if(!workspace)throw new ERROR(WORKSPACE_ERRORS.NOT_ABLE_TO_ADD)

        const existingMembers = await MemberService.getMembers(info.members) 
    }
}