// eslint-disable-next-line import/no-cycle
import { ILesson } from "./lesson";
import { IUser } from "./user";

export interface ICourse {
    name: string;
    "current_active_lesson": ILesson;
    owner: IUser
}

export interface CoursePayload {
    name: string;
    "owner_id": number;
    "current_active_lesson"?: number
}
