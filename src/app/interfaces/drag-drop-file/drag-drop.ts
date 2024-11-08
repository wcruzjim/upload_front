export interface SummaryFile {
    data: SummaryGoalAgreement[];
    summary: Summary[];
    hasSummary: boolean;
}

export interface SummaryGoalAgreement {
    documento: number;
    pcrc: string;
    indicador: string;
    cumplimiento: string;
    updated_by: string;
    updated_at: Date;
    nombre: string;
}

export interface Summary {
    key: string;
    value: number;
}

export interface AditionalData{
    key:string,
    value:string
}