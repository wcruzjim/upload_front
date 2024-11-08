import { Response } from '../../../models/Response';
import { DinamicInterface } from '../../generic';

export interface ListClienteSelect {
	id: number;
	name: string;
}

export interface ResponseListClienteSelect extends Response {
	result: Array<ListClienteSelect>
}

export interface InfoClienteDimen {
	fielObservacion: string;
	fielClienteDimensionamiento: string;
}

export interface ResponseBoolean extends Response {
	result: boolean;
}

export interface ClienteDimensionamiento {
	id: string;
	cliente: string;
	id_cliente: string;
	descripcion: string;
	creador: string;
	fecha_creacion: string;
	style?: DinamicInterface;
}

export interface ClienteDimensionamientoFormato {
	id: string;
	cliente: string;
	id_cliente: string;
	'descripción': string;
	creador: string;
	fecha_creacion: string;
	style?: DinamicInterface;
}

export interface ResponseClienteDimensionamiento extends Response {
	result: Array<ClienteDimensionamiento>;
}

export interface Dimensionamiento {
	id: string;
	id_dim_cliente: string;
	nombre: string;
	descripcion: string;
	intervalo: string;
	tiempo: string;
	utilizacion_agentes: string;
	creador: string;
	fecha_inicial: string;
	fecha_final: string;
	fecha_creacion: string;
	documento_modificador: string;
	fecha_modificacion: string;
}

export interface DimensionamientoFormat {
	id: string;
	id_dim_cliente: string;
	nombre: string;
	'descripción': string;
	intervalo: string;
	tiempo: string;
	'utilización agentes': string;
	creador: string;
	'fecha inicial': string;
	'fecha final': string;
	'fecha creación': string;
	documento_modificador: string;
	fecha_modificacion: string;
}

export interface ResponseDimensionamiento extends Response {
	result: Array<Dimensionamiento>;
}

export interface ListTipoServicioSelect {
	id: number;
	name: string;
}

export interface ResponseListTipoServicioSelect extends Response {
	result: Array<ListTipoServicioSelect>
}

export interface ListTipoTiempoSelect {
	id: number;
	name: string;
}

export interface ResponseListTipoTiempoSelect extends Response {
	result: Array<ListTipoTiempoSelect>
}

export interface ListPcrcSelect {
	id: number;
	name: string;
}

export interface ResponseListPcrcSelect extends Response {
	result: Array<ListPcrcSelect>
}

export interface Cliente {
	id: string;
}

export interface ResponseCliente extends Response {
	result: Cliente
}

export interface ListIntervaloSelect {
	id: number;
	name: string;
}

export interface ResponseListIntervaloSelect extends Response {
	result: Array<ListIntervaloSelect>
}


export interface Dimensionamiento {
	fielIntervalo: string;
	fielNombreDimen: string;
	fielObservacion: string;
	tipoTiempo: string;
	valorOcupacion: string;
}

export interface NuevoServicio {
	fielPcrc: string;
	fielTipoServicio: string;
	fielNombreServicio: string;
}

export interface ServicioResumen {
	cod_pcrc?: string;
	nombre_servicio?: string;
	uuid?: string;
	tipo_servicio?: string;
	id_dim_tipo_servicio?: string;
	id_dim_intervalo?: string;
	style?: DinamicInterface
}

export interface ResponseServicioResumen extends Response {
	result: Array<ServicioResumen>;
}

export interface InfoDimesionamientoServicio {
	arrayColumns: Array<string>;
	arrayTable: Array<Object>;
	arrayTableTwo: Array<Object>;
}

export interface ResponseInfoDimesionamientoServicio extends Response {
	result: InfoDimesionamientoServicio;
}

export interface ResponseConsolidadoActa extends Response {
	result: InformacionConsolidadoActa;
}

export interface InformacionConsolidadoActa {
	arrayColumns: Array<string>;
	arrayTable: Array<Object>;
}



export interface Level {
	level?: string
	style?: DinamicInterface
}

export interface Uuid {
	uuid: string
	columna: string
	infoFilaSeleccionada?: IntraSemanaData
	intervalo?: string
}

export interface DataIntraSemana {
	lunes: string
	martes: string
	miercoles: string
	jueves: string
	viernes: string
	sabado: string
	domingo: string
}

export interface ResponseDataIntraSemana extends Response {
	result: Array<DataIntraSemana>;
}

export interface DataGraph {
	x: string;
	y: number;
}

export interface ResponseIntradia extends Response {
	result: Array<Intradia>;
}

export interface Intradia {
	'id_dim_tipo_metrica'?: string;
	'00_00'?: string;
	'00_05'?: string;
	'00_10'?: string;
	'00_15'?: string;
	'00_20'?: string;
	'00_25'?: string;
	'00_30'?: string;
	'00_35'?: string;
	'00_40'?: string;
	'00_45'?: string;
	'00_50'?: string;
	'00_55'?: string;
	'01_00'?: string;
	'01_05'?: string;
	'01_10'?: string;
	'01_15'?: string;
	'01_20'?: string;
	'01_25'?: string;
	'01_30'?: string;
	'01_35'?: string;
	'01_40'?: string;
	'01_45'?: string;
	'01_50'?: string;
	'01_55'?: string;
	'02_00'?: string;
	'02_05'?: string;
	'02_10'?: string;
	'02_15'?: string;
	'02_20'?: string;
	'02_25'?: string;
	'02_30'?: string;
	'02_35'?: string;
	'02_40'?: string;
	'02_45'?: string;
	'02_50'?: string;
	'02_55'?: string;
	'03_00'?: string;
	'03_05'?: string;
	'03_10'?: string;
	'03_15'?: string;
	'03_20'?: string;
	'03_25'?: string;
	'03_30'?: string;
	'03_35'?: string;
	'03_40'?: string;
	'03_45'?: string;
	'03_50'?: string;
	'03_55'?: string;
	'04_00'?: string;
	'04_05'?: string;
	'04_10'?: string;
	'04_15'?: string;
	'04_20'?: string;
	'04_25'?: string;
	'04_30'?: string;
	'04_35'?: string;
	'04_40'?: string;
	'04_45'?: string;
	'04_50'?: string;
	'04_55'?: string;
	'05_00'?: string;
	'05_05'?: string;
	'05_10'?: string;
	'05_15'?: string;
	'05_20'?: string;
	'05_25'?: string;
	'05_30'?: string;
	'05_35'?: string;
	'05_40'?: string;
	'05_45'?: string;
	'05_50'?: string;
	'05_55'?: string;
	'06_00'?: string;
	'06_05'?: string;
	'06_10'?: string;
	'06_15'?: string;
	'06_20'?: string;
	'06_25'?: string;
	'06_30'?: string;
	'06_35'?: string;
	'06_40'?: string;
	'06_45'?: string;
	'06_50'?: string;
	'06_55'?: string;
	'07_00'?: string;
	'07_05'?: string;
	'07_10'?: string;
	'07_15'?: string;
	'07_20'?: string;
	'07_25'?: string;
	'07_30'?: string;
	'07_35'?: string;
	'07_40'?: string;
	'07_45'?: string;
	'07_50'?: string;
	'07_55'?: string;
	'08_00'?: string;
	'08_05'?: string;
	'08_10'?: string;
	'08_15'?: string;
	'08_20'?: string;
	'08_25'?: string;
	'08_30'?: string;
	'08_35'?: string;
	'08_40'?: string;
	'08_45'?: string;
	'08_50'?: string;
	'08_55'?: string;
	'09_00'?: string;
	'09_05'?: string;
	'09_10'?: string;
	'09_15'?: string;
	'09_20'?: string;
	'09_25'?: string;
	'09_30'?: string;
	'09_35'?: string;
	'09_40'?: string;
	'09_45'?: string;
	'09_50'?: string;
	'09_55'?: string;
	'10_00'?: string;
	'10_05'?: string;
	'10_10'?: string;
	'10_15'?: string;
	'10_20'?: string;
	'10_25'?: string;
	'10_30'?: string;
	'10_35'?: string;
	'10_40'?: string;
	'10_45'?: string;
	'10_50'?: string;
	'10_55'?: string;
	'11_00'?: string;
	'11_05'?: string;
	'11_10'?: string;
	'11_15'?: string;
	'11_20'?: string;
	'11_25'?: string;
	'11_30'?: string;
	'11_35'?: string;
	'11_40'?: string;
	'11_45'?: string;
	'11_50'?: string;
	'11_55'?: string;
	'12_00'?: string;
	'12_05'?: string;
	'12_10'?: string;
	'12_15'?: string;
	'12_20'?: string;
	'12_25'?: string;
	'12_30'?: string;
	'12_35'?: string;
	'12_40'?: string;
	'12_45'?: string;
	'12_50'?: string;
	'12_55'?: string;
	'13_00'?: string;
	'13_05'?: string;
	'13_10'?: string;
	'13_15'?: string;
	'13_20'?: string;
	'13_25'?: string;
	'13_30'?: string;
	'13_35'?: string;
	'13_40'?: string;
	'13_45'?: string;
	'13_50'?: string;
	'13_55'?: string;
	'14_00'?: string;
	'14_05'?: string;
	'14_10'?: string;
	'14_15'?: string;
	'14_20'?: string;
	'14_25'?: string;
	'14_30'?: string;
	'14_35'?: string;
	'14_40'?: string;
	'14_45'?: string;
	'14_50'?: string;
	'14_55'?: string;
	'15_00'?: string;
	'15_05'?: string;
	'15_10'?: string;
	'15_15'?: string;
	'15_20'?: string;
	'15_25'?: string;
	'15_30'?: string;
	'15_35'?: string;
	'15_40'?: string;
	'15_45'?: string;
	'15_50'?: string;
	'15_55'?: string;
	'16_00'?: string;
	'16_05'?: string;
	'16_10'?: string;
	'16_15'?: string;
	'16_20'?: string;
	'16_25'?: string;
	'16_30'?: string;
	'16_35'?: string;
	'16_40'?: string;
	'16_45'?: string;
	'16_50'?: string;
	'16_55'?: string;
	'17_00'?: string;
	'17_05'?: string;
	'17_10'?: string;
	'17_15'?: string;
	'17_20'?: string;
	'17_25'?: string;
	'17_30'?: string;
	'17_35'?: string;
	'17_40'?: string;
	'17_45'?: string;
	'17_50'?: string;
	'17_55'?: string;
	'18_00'?: string;
	'18_05'?: string;
	'18_10'?: string;
	'18_15'?: string;
	'18_20'?: string;
	'18_25'?: string;
	'18_30'?: string;
	'18_35'?: string;
	'18_40'?: string;
	'18_45'?: string;
	'18_50'?: string;
	'18_55'?: string;
	'19_00'?: string;
	'19_05'?: string;
	'19_10'?: string;
	'19_15'?: string;
	'19_20'?: string;
	'19_25'?: string;
	'19_30'?: string;
	'19_35'?: string;
	'19_40'?: string;
	'19_45'?: string;
	'19_50'?: string;
	'19_55'?: string;
	'20_00'?: string;
	'20_05'?: string;
	'20_10'?: string;
	'20_15'?: string;
	'20_20'?: string;
	'20_25'?: string;
	'20_30'?: string;
	'20_35'?: string;
	'20_40'?: string;
	'20_45'?: string;
	'20_50'?: string;
	'20_55'?: string;
	'21_00'?: string;
	'21_05'?: string;
	'21_10'?: string;
	'21_15'?: string;
	'21_20'?: string;
	'21_25'?: string;
	'21_30'?: string;
	'21_35'?: string;
	'21_40'?: string;
	'21_45'?: string;
	'21_50'?: string;
	'21_55'?: string;
	'22_00'?: string;
	'22_05'?: string;
	'22_10'?: string;
	'22_15'?: string;
	'22_20'?: string;
	'22_25'?: string;
	'22_30'?: string;
	'22_35'?: string;
	'22_40'?: string;
	'22_45'?: string;
	'22_50'?: string;
	'22_55'?: string;
	'23_00'?: string;
	'23_05'?: string;
	'23_10'?: string;
	'23_15'?: string;
	'23_20'?: string;
	'23_25'?: string;
	'23_30'?: string;
	'23_35'?: string;
	'23_40'?: string;
	'23_45'?: string;
	'23_50'?: string;
	'23_55'?: string;
}

export interface IntraSemanaData {
	item: string;
	id_dim_tipo_metrica: string;
	lunes: number;
	martes: number;
	miercoles: number;
	jueves: number;
	viernes: number;
	sabado: number;
	domingo: number;
}

export interface IntraSemanaDataTransformada {
	dia: string;
	transacciones: number;
	aht: number;
}

export interface ResponseIntraSemanaData extends Response {
	result: Array<IntraSemanaData>;
}

export interface Intervalo {
	intervalo: string;
}

export interface ResponseIntervalo extends Response {
	result: Array<Intervalo>;
}


export interface DataChangedTable {
	changed: Array<Object>;
	original: Array<Object>;
	rowChanged: Array<Object>;
}

export interface DataUpdateTable {
	mesesActualizar: Array<string>;
	datosActualizar: Array<DataActualizarDimensionamiento>;
}

export interface DataUpdateTableEstadoAsesores {
	mesesActualizar: Array<string>;
	datosActualizar: Array<DataActualizarEstadoAsesoresActa>;
}

export interface DataActualizarDimensionamiento {
	mesActualizar: string;
	tipo: string;
	valorActualizar: string;
	idMetrica: number;
}

export interface RespuestaDialogIntrasemana {
	result?: boolean;
	mes?: string;
}

export interface ResponseInformacionBasicaActa extends Response {
	result: ResultadoInformacionBasicaActa;
}
export interface ResultadoInformacionBasicaActa {
	informacionBasica: Array<InformacionBasicaActa>;
	participantes: Array<InformacionBasicaParticipantes>;
	compromisos: Array<InformacionBasicaCompromisos>;
}


export interface InformacionBasicaActa {
	documento: string;
	nombre_completo: string;
}

export interface InformacionBasicaParticipantes {
	documento: string;
	nombre_completo: string;
	cargo: string;
	sociedad: string;
}

export interface InformacionBasicaParticipantesFormato {
	documento: string;
	"nombre completo": string;
	cargo: string;
	sociedad: string;
}

export interface ResponseSelectGenerico extends Response {
	result: Array<ListSelectGenerico>
}

export interface ListSelectGenerico {
	id: number;
	name: string;
}

export interface ResponseSelectGenericoString extends Response {
	result: Array<ListSelectGenericoString>
}

export interface ListSelectGenericoString {
	id: number;
	name: string;
}

export interface IdDimensionamiento {
	id: string;
	idActa: number;
}


export interface InformacionBasicaCompromisos {
	id_compromiso: string;
	participante: string;
	compromiso: string;
	fecha_entrega_compromiso: string;
}

export interface InformacionBasicaCompromisosFormato {
	id_compromiso: string;
	participante: string;
	compromiso: string;
	"fecha entrega compromiso": string;
}

export interface InformacionBasicaCompromisosSet {
	participante: string;
	fechaCompromiso: string;
	compromiso: string;
}

export interface ServicioResumenLista {
	id: string;
	name: string;
}

export interface DataActualizarEstadoAsesoresActa {
	acta_asesores_inicio_mes: number;
	acta_vacaciones: number;
	acta_prestamo: number;
	acta_incapacidades_licencia_maternidad: number;
	acta_proximos_ingresos: number;
}


export interface ErrorValorEstadoAsesor {
	is_error: boolean
	mensaje: string
}

export interface InformacionProximasSolicitudes {
	id_proxima_solicitud: number
	id_dim_dimensionamiento: string
	uuid_servicio: string
	cantidad_asesores: number
	inicio_formacion: string
	inicio_ojt: string
	inicio_conexion: string
	radicado_jarvis: number
	radicado_recursos: string
	radicado_puestos: string
	documento_creador: string
	fecha_creacion: string
}

export interface ResponseInformacionProximasSolicitudes extends Response {
	result: Array<InformacionProximasSolicitudes>;
}

export interface InformacionProximasSolicitudesFormato {
	"id": number
	"id dimensionamiento": string
	"uuid servicio": string
	"cantidad asesores": number
	"inicio formacion": string
	"inicio ojt": string
	"inicio conexion": string
	"radicado jarvis": number
	"radicado recursos": string
	"radicado puestos": string
	"documento creador": string
	"fecha creacion": string
}

export interface DataDialogProximaSolicitud {
	proximaSolicitud: InformacionProximasSolicitudesFormato
	tipoAccion: number
	uuid?: string
	idDimensionamiento?: string
	idActa?: number
}
export interface ArrayFormularioProximaSolicitud {
	cantidadAsesores: number
	inicioConexion: string
	inicioFormacion: string
	inicioOjt: string
	radicadoJarvis: number
	radicadoPuestos: string
	radicadoRecursos: string
	uuid?: string
}


export interface InformacionActascreadas {
	id_dim_exportado_acta: number
	id_dim_dimensionamiento: number
	fecha_proxima_reunion: string
	nombe_acta: string
	conclusiones: string
	servicios: string
	meses: string
	observacion: string
	estado: number
	documento_creador: string
	nombre_creador: string
	fecha_creacion: string
	documento_modificador: string
	nombre_modificador: string
	fecha_modificacion: string
	style_action: string
}

export interface ResponseInformacionActascreadas extends Response {
	result: Array<InformacionActascreadas>;
}

export interface InformacionActascreadasFormat {
	"id acta": number
	"id dimensionamiento": number
	"fecha proxima reunion": string
	"nombre acta": string
	"conclusiones": string
	"servicios": string
	"meses": string
	"observacion": string
	"estado": string
	"id estado": number
	"documento creador": string
	"nombre creador": string
	"fecha creacion": string
	"documento modificador": string
	"nombre modificador": string
	"fecha modificacion": string
	"styleAction": string
}

export interface ListSelectString {
	id: string;
	name: string;
}

export interface ResponseListSelectString extends Response {
	result: Array<ListSelectString>
}

export interface NuevaActa {
	nombreActa: string;
	observacionActa: string;
}

export interface ResponseNumber extends Response {
	result: number
}

export interface Acciones {
	class: string
	icon: string
	id: number
	name: string
	view: boolean
}

export interface AccionBtnActagenerada {
	action: Acciones
	element: InformacionActascreadasFormat
}

export interface FormularioActaNuevoExportado {
	conclusionSugerencia: string
	meses: string
	presentadoPor: string
	proximaReunion: string
	servicios: string
}

export interface DataDialogCopiarActa {
	idDimensionamiento: string
	idActa: number
}

export interface FormularioNuevoNombre {
	nuevoNombre: string
}

