import { TeamType } from "@models/workspace";

export interface NewWorkspacePayload{
    displayName: string;
    members: string[];
    teamType: TeamType;
}