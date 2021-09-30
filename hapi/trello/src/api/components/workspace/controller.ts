import { Request, ResponseToolkit, Util as HapiUtil } from "@hapi/hapi";
import { Workspace } from "@models/workspace";
import { NewWorkspacePayload } from "@typeroot/payload";

export class WorkspaceController {
  static async create(request: Request, h: ResponseToolkit) {
    const payload = request.payload as NewWorkspacePayload;

    // try{
    //     const workspace = await WorkspaceDao.createNew(payload)
    // }
  }
}
