import {Response} from '../../models/Response';

export interface GetCargasMasivasResult extends Response{
    result:GetCargasMasivas;
}

export interface GetCargasMasivas {
    icon: string;
    infoModal: InfoModal;
    permiso: string;
    titulo: string;
}

export interface InfoModal{
    rutaCargaExcel:string;
    rutaDescargaExcel:string;
    tituloModal:string;
}