import { SeriesOptionsType } from "highcharts";

export interface ArraySeries{
    series: Array<[Array<DataGraph>, Array<DataGraph>]>;
}

export interface DataGraph{
    x: Date | string;
    y: number;
}

export interface Serie{
    type: string;
    name: string;
    data: Array<Array<number | string>>;
}

export interface DataGraphicsResult{
    categories:Array<string>,
    legendLabel:string,
    title?:string,
    meta?:Array<string>,
    series?:SeriesOptionsType[]
    typeColumn?:number,
    values:Array<number>
    yLabel:string,
    xLabel?:string,
    min?:number
}
export interface DataBasicColumnMultiSeries {
    person:string[],
    configurationChart:SeriesOptionsType[]
}



