import { Response } from "../../models/Response";

export interface MapItem {
	name: string;
	action: () => void;
	show?: boolean;
	icon?: string;
	permission?: string[];
	color?: string;
	requiresDivider?: boolean;
	selected?: boolean;
}

export interface BuildingOrFloorDropdown {
	id: number;
	name: string;
}
export interface IClientsToDelimit {
	id: number;
	name: string;
	count: number;
	isHovering?: boolean;
	isUnpinned?: boolean;
}

export interface NotificationContextDropdown {
	context: string;
	name: string;
}

export interface NotificationFormData {
	id_login: string;
	first_name: string;
	context: string;
	message: string;
	title: string;
}

export interface CellQuery {
	label: number;
	extension: string;
	machine: string;
	profile: number;
	status: number;
	x?: number;
	y?: number;
	cells_map_id?: number;
	floors_map_id?: number;
	direction?: number;
	operations_id?: number;
	operation_name?: string;
	programs_id?: number;
	cost_center?: string;
	cost_center_name?: string;
	pcrc?: string;
	size_width?: number;
	size_height?: number;
	outOfBound?: boolean;
	disabled?: boolean;
	in_branch?: string;
	availability?: string;
}

export interface CellActions extends CellQuery {
	isHovered?: boolean;
	userConnection?: UserConnection;
	client?: string;
	userSkills?: { value: number; description: string }[];
	background?: string;
	tempBackground?: string;
	tempLabel?: string;
	font_color?: string;
	icon?: string;
	tempIcon?: string;
	highlight?: boolean;
	exoneratedID?: string;
}

export interface CellDialog {
	floors_map_id?: number;
	createMode?: boolean;
	cell: CellActions;
	labels?: number[];
}

export interface MapCellDetail extends CellDialog {
	client: BuildingOrFloorDropdown[];
	userConnection: UserConnection[];
	skills?: SkillConfiguration[];
}

export interface ObjectDialog {
	floors_map_id?: number;
	createMode: boolean;
	object: ObjectQuery;
}

export interface BuildingQuery {
	id: number;
	name: string;
	status: number;
	is_admin: number;
	sync_resources_id: number;
}

export interface MapsNav {
	id: number;
	name: string;
	status: number;
	is_admin: number;
	syncId?: number;
}

export interface FloorQuery {
	floors_map_id: number;
	label: string;
	buildings_map_id: number;
	status: number;
	width: number;
	height: number;
	sync_resources_id: number;
	orientation1: number;
	orientation2: number;
	orientation3: number;
	orientation4: number;
	opacity: number;
}

export interface FloorSettings {
	width: number;
	height: number;
	opacity: number;
	sync_resources_id: number;
}

export interface CompassSettings {
	orientation1: number;
	orientation2: number;
	orientation3: number;
	orientation4: number;
}

export interface BuildingOrFloor {
	title: string;
	createMode: boolean;
	isBuilding: boolean;
	useExternalClients?: boolean;
	cityId?: number;
	cities?: BuildingOrFloorDropdown[];
	buildingID?: number;
	updateID?: number;
	syncResourcesId?: number;
	floor?: FloorQuery;
	building?: BuildingQuery;
	isUpdate?: boolean;
}

export interface ObjectQuery {
	type: string;
	content: string;
	x: number;
	y: number;
	status: number;
	tooltip_active?: number;
	tooltip_content?: string;
	items_map_id?: number;
	floors_map_id?: number;
	outOfBound?: boolean;
}

export interface UploadImage {
	floorID: number;
}

export interface UserConnection {
	first_name: string;
	id_login: string;
	extension: string;
	reason: string;
	state: string;
	skill: string;
	time: string;
	platform: string;
	list_skills: string;
	skillsArray: string[];
	stateTranslation?: string;
}

export interface LogHistory {
	username: string;
	date_create: string;
}

export interface StateTranslation {
	client: number;
	status: string;
	translation: string;
}

export interface ClientStates {
	state: string;
	translation: string;
	quantity: number;
}

export interface SkillsPermissions {
	client: string;
	pcrc: string;
	skills: string;
	skillsSplited?: string[];
}

export interface SkillConfiguration {
	state: string;
	skill: string;
	ranges: string;
	colorRanges?: string[][];
}

export interface ResourceLocations {
	label_city?: string;
	location_id: string;
	label_building: string;
	label_floor: string;
}

export interface TypeValue {
	type: string;
	value: string;
}

export interface SearchSpots {
	cityId?: string;
	building: string;
	buildingID?: string;
	floor: string;
	floorID?: string;
	syncResourcesID?: string;
	spot: string;
	cellID?: string;
	extension: string;
	machine: string;
}

export interface CellDetail {
	puesto: string;
	ciudad: string;
	edificio: string;
	piso: string;
	servicio: string;
	cliente: string;
	programa: string;
	perfil: string;
	centro_costo: string;
	extension: string;
	extension2: string;
	maquina: string;
	ip: string;
	tipo_equipo: string;
	requiere_grabacion: string;
	grabacion: string;
	plataforma: string;
	plataforma2: string;
	telefono: string;
}

export interface Exonerated {
	exonerated_id: string;
	login_id: string;
	user_name: string;
	client_id: string;
	client: string;
	pcrc_id: string;
	pcrc: string;
	reason: string;
	platform: string;
	leader: string;
	created: Date;
	creator_id: string;
	creator: string;
}

export interface ExoneratedQuery {
	id_login: number;
	name: string;
	reason: number;
}

export interface SkillsColorRange {
	estado: string;
	tiempo_inicio: string;
	tiempo_fin: string;
	color_fondo: string;
	color_fuente: string;
	icono: string;
}

export type ColumnValue = [column: string, value: string];

export interface FollowUser {
	id_login: string;
	agent_name: string;
	follow_users_id?: number;
	date_create?: string;
	users_id?: string;
	state?: string;
	time?: string;
	cityId?: string;
	building_id?: string;
	floor_id?: string;
	cell_id?: string;
}

export interface GetBuildings extends Response {
	result: BuildingQuery[];
}

export interface MapSpot {
	cityId: number;
	buildingID: number;
	floorID: number;
	cellID: number;
}
export interface NotifyAllAgents {
	id_login: string;
	first_name: string;
	agentsToNotify: NotificationFormData[];
}

export interface PcUsageRange {
	start: number;
	end: number;
	bgColor?: string;
	range?: string;
	accumulatedTime?: number;
	machinesCount?: number;
}

export interface PcUsageHours {
	machine: string;
	powered_on: string;
	in_use: string;
}

export interface PcUsageHoursExport {
	client: string;
	branch: string;
	floor: string;
	spot: string;
	machine: string;
	powered_on: number;
	in_use: number;
	idle: number;
	utilization: number;
	registered: string;
	activeCategory?: string;
	inUseCategory?: string;
	rangesActive?: string;
	rangesInUse?: string;
}

export interface SelectedMapNav {
	city: BuildingOrFloorDropdown;
	building: BuildingOrFloorDropdown;
	floor: BuildingOrFloorDropdown;
}

export interface CompassOrientations {
	orientation1: number;
	orientation2: number;
	orientation3: number;
	orientation4: number;
}

export interface IGuardianHighlight {
	isGuardian: boolean;
	reset: boolean;
	status: boolean;
	guardianHighlightInfo: IGuardianHighlightInfo[];
}

export interface IGuardianHighlightInfo {
	spot: string;
	extension?: string;
}

export interface IGuardianAlarm {
	cause: string;
	guardian_alarms_id: number;
	username: string;
	status: string;
	status_sound: string;
	machine: string;
	guardian_causes_id: number;
	date_create: string;
	unix_date_create: number;
	label: string;
	extension: string;
}

export interface IUserMapsConnection {
	first_name: string;
	id_login: string;
	extension: string;
	reason: string;
	state: string;
	skill: string;
	time: string;
	client_id: string;
	skill_name: string;
	platform: string;
}

export interface ICityMap {
	id_municipio?: number;
	name: string;
	status?: string;
	statusName?: string;
}

export interface IBuildingMap {
	id_municipio?: number;
	buildings_map_id?: number;
	city: number;
	label: string;
	status?: string;
	statusName?: string;
}

export interface IFloorMap {
	id_municipio?: number;
	buildings_map_id?: number;
	floors_map_id?: number;
	city: string;
	building: string;
	label: string;
	status?: string;
	statusName?: string;
}

export interface INumbering {
	cells_map_id: number;
	label: number;
}

export interface IColorDelimiter extends Partial<IClientsToDelimit> {
	color_delimiter_map_id?: string;
	client_id: string;
	background: string;
	color: string;
}

export interface IConsolidatedSpots {
	city: string;
	building: string;
	floor: string;
	operative_spots: number;
	admin_spots: number;
	occupied_operative_spots: number;
	available_operative_spots: number;
	occupied_admin_spots: number;
	available_admin_spots: number;
	spots: number;
}

export interface IDetailedSpots {
	city: string;
	building: string;
	floor: string;
	spot: string;
	extension: string;
	profile: string;
	machine: string;
}

export interface ISpotsOnMaintenance {
	cellId: string;
	label: string;
	status: string;
}
export interface ISpotItem {
	itemId?: string;
	item: string;
	info1: string;
	info2?: string;
}

export interface MenuItemsRouted {
	route: string;
	name: string;
	icon?: string;
}

export interface NewResource {
	id?: number;
	cells_map_id?: number;
	service?: number;
	program?: number;
	building: number;
	city: number;
	floor: number;
	spot: number;
	alternative_extension: string;
	alternative_platform: number;
	brand: string;
	chat: number;
	client: number;
	connection_type: string;
	cost_center: number;
	cpu_serial: string;
	cti: number;
	data_point: number;
	description: string;
	device_type: number;
	domain: string;
	email: string;
	extension: string;
	hard_drive: string;
	headset: string;
	inBranch: number;
	availability: number;
	ip: string;
	last_connection_ocs: string;
	mac: string;
	machine: string;
	model: string;
	monitor_serial: string;
	monitor: string;
	office_version: string;
	operating_system: string;
	pcrc: number;
	phone_type: number;
	platform: number;
	position: number;
	processor: string;
	profile: number;
	ram_memory: string;
	recording_type: number;
	requires_recording: number;
	software: string;
	status: number;
	tag: string;
	user_id: string;
	voice_point: number;
	web_call_back: string;
	wildcard_1: string;
	wildcard_2: string;
	wildcard_3: string;
	wildcard_4: string;
}

export interface GetFloors extends Response {
	result: [FloorQuery[], boolean];
}

export interface GetCells extends Response {
	result: CellQuery[];
}

export interface GetObjects extends Response {
	result: ObjectQuery[];
}

export interface GetFloorSettings extends Response {
	result: FloorSettings[];
}

export interface GetDropdownItem extends Response {
	result: BuildingOrFloorDropdown[];
}

export interface ManageBuilding extends Response {
	result: boolean;
}

export interface ResponseStatusData extends Response {
	result: { status: string; data: string };
}

export interface GetUserConnections extends Response {
	result: UserConnection[];
}

export interface GetLogHistories extends Response {
	result: LogHistory[];
}

export interface GetStateTranslations extends Response {
	result: StateTranslation[];
}

export interface GetClientStates extends Response {
	result: ClientStates[];
}

export interface GetSkillsPermissions extends Response {
	result: SkillsPermissions[];
}

export interface GetResourceLocations extends Response {
	result: ResourceLocations[];
}

export interface GetSearchSpots extends Response {
	result: { status: string; data: SearchSpots[] };
}

export interface GetCellDetail extends Response {
	result: { status: string; data: CellDetail };
}

export interface GetSkillConfiguration extends Response {
	result: SkillConfiguration[];
}

export interface GetExonerated extends Response {
	result: Exonerated[];
}

export interface GetSkillsColorRange extends Response {
	result: SkillsColorRange[];
}

export interface GetFollowUser extends Response {
	result: FollowUser[];
}

export interface GetPcHours extends Response {
	result: PcUsageHours[];
}
export interface GetPcHoursExport extends Response {
	result: PcUsageHoursExport[];
}

export interface GetMapsNav extends Response {
	result: MapsNav[];
}

export interface GetInsertedId extends Response {
	result: number;
}

export interface GetCompassSettings extends Response {
	result: CompassSettings[];
}

export interface GetGuardianAlert extends Response {
	result: IGuardianAlarm[];
}
export interface GetUserMapsConnection extends Response {
	result: IUserMapsConnection[];
}
export interface GetCitiesBuildingsFloorsMap extends Response {
	result: {
		cities: ICityMap[];
		buildings: IBuildingMap[];
		floors: IFloorMap[];
	};
}

export interface GetColorDelimiter extends Response {
	result: IColorDelimiter[];
}

export interface GetConsolidatedSpots extends Response {
	result: IConsolidatedSpots[];
}

export interface GetDetailedSpots extends Response {
	result: IDetailedSpots[];
}

export interface GetSpotsItems extends Response {
	result: ISpotItem[];
}

export interface GetResources extends Response {
	result: Partial<NewResource>[];
}

export interface GetResource extends Response {
	result: NewResource;
}
