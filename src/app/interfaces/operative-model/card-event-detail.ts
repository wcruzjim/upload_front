export interface OptionSelected {
    id: number;
    icon: string;
    path: string;
    title: string;
    value: number;
    isSelected: boolean;
    isDisable: boolean;
}

export interface FakeAttributes {
    title: string;
    value: number
}

export interface LateralBar {
    nombreChange: string;
    avatar: number
}

export interface DataAction {
    id: number;
    name: string;
    view: boolean;
    icon: string;
    class: string;
}

export interface ResponseFakeService {
    result: ResultM1[] | ResultM2[] | ResultM3[] | ResultM4[] | ResultM5[];
    jwt: string;
    status: number;
    statusText: string;
}

export interface fackeActionData {
    action: DataAction;
    element: ResultM1[] | ResultM2[] | ResultM3[] | ResultM4[] | ResultM5[];
}

export interface ResultM1 {
    documento: string;
    nombreCompleto: string;
    pcrc: string;
    avatar: string;
    Metrica1Formacion: string;
    Metrica2Formacion: string;
}

export interface ResultM2 {
    documento: string;
    nombreCompleto: string;
    pcrc: string;
    avatar: string;
    Metrica1Valoracion: string;
    Metrica2Valoracion: string;
}


export interface ResultM3 {
    documento: string;
    nombreCompleto: string;
    pcrc: string;
    avatar: string;
    Metrica1Tecnologia: string;
    Metrica2Tecnologia: string;
}


export interface ResultM4 {
    documento: string;
    nombreCompleto: string;
    pcrc: string;
    avatar: string;
    Metrica1Satelite: string;
    Metrica2Satelite: string;
}


export interface ResultM5 {
    documento: string;
    nombreCompleto: string;
    pcrc: string;
    avatar: string;
    Metrica1CDG: string;
    Metrica2CDG: string;
}
