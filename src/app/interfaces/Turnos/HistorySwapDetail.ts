import { EventTemplate } from "./EventTemplate";

export interface HistorySwapDetail{
    events:Array<EventTemplate>;
    id_shift:number;
    identification:number;
    lastName:string;
    name:string;
    isRest:boolean;
    startShift:string;
    endShift:string;
    summary_events;
}