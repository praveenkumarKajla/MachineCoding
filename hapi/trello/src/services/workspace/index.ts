import { TeamType, Workspace } from "@models/workspace";
import { mapper } from "@services/db/connection";
import { generateRandomKeyWithLength } from "@utils/index";


export interface WorkspaceInfo{
    displayName:string;
    teamType: TeamType;
}

export class WorkspaceService{


    static async put(info: WorkspaceInfo){
        const toPut = Object.assign(
            new Workspace(), 
            {
                ...info,
                name: `${info.displayName.toLowerCase()}_${generateRandomKeyWithLength(4)}`
            });
        const wspace = await mapper.put(toPut).catch(err => { console.log(err.message); return null})
        return wspace;

    }



}