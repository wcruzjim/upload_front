export interface pdfRender {
	headers: Headers;
	status: number;
	statusText: string;
	url: string;
	ok: boolean;
	type: number;
	body?: Blob;
}

export interface exporteMes {
    name: string,
    value: number
}