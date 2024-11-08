import { Response } from "../../models/Response";

export interface Emotion {
    intEmotionID: number;
    intEmotionNumber: number;
    desEmotionName: string;
    intEmotionState: string;
    desEmotionColorCode: string;
    idImg: number;
}

export interface EmotionTable extends Response {
    result: Array<Emotion>
}

export interface Question {
    intQuestionID: number;
    desQuestionDescrip: string;
    intQuestionState: string;
}

export interface QuestionTable extends Response {
    result: Array<Question>
}

export interface ZentirResponse extends Response {
    result: string;
}

export interface UploadImageResponse extends Response {
    result: number;
}

export interface ImagesEmotions {
    idImg: number;
    url: string; 
}



