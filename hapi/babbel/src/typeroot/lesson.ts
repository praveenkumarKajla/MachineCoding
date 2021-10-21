// eslint-disable-next-line import/no-cycle
import { ICourse } from "./course";
import { ILanguage } from "./language";

export interface ILesson{
    name: string;
    course: ICourse;
    language: ILanguage;
    text: string;
}

export interface LessonPayload {
    name: string;
    "course_id": string;
    "language_code": string;
    text: string
}
