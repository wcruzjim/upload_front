import { SummaryTime } from "./SummaryTime";

export interface TotalSummarizeOptionalShift{
    total:SummaryTime;
    events:Array<{'event':string,'total':SummaryTime}>;
    rest:number;
}