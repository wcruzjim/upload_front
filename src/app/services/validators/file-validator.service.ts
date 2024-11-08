import { Injectable } from "@angular/core";

import { FileListValidMimetype } from "../../interfaces/file/file-validator.interface";

@Injectable({
	providedIn: "root"
})
export class FileValidatorService {

    readonly typeList : FileListValidMimetype = {
        "asf": "video/x-ms-asf",
        "asx": "video/x-ms-asf",
        "wmv": "video/x-ms-wmv",
        "wmx": "video/x-ms-wmx",
        "wm": "video/x-ms-wm",
        "avi": "video/avi",
        "divx": "video/divx",
        "flv": "video/x-flv",
        "mov": "video/quicktime",
        "qt": "video/quicktime",
        "mpeg": "video/mpeg",
        "mpg": "video/mpeg",
        "mpe": "video/mpeg",
        "mp4": "video/mp4",
        "m4v": "video/mp4",
        "ogv": "video/ogg",
        "webm": "video/webm",
        "mkv": "video/x-matroska",
        "3gp": "video/3gpp",
        "3gpp": "video/3gpp",
        "3g2": "video/3gpp2",
        "3gp2": "video/3gpp2",
        "jpg": "image/jpeg",
        "jpeg": "image/jpeg",
        "gif": "image/gif",
        "png": "image/png",
        "bmp": "image/bmp",
        "tiff": "image/tiff",
        "tif": "image/tiff",
        "ico": "image/x-icon",
        "svg": "image/svg+xml",
        "txt": "text/plain",
        "csv": "text/csv",
        "pdf": "application/pdf",
        "xla": "application/vnd.ms-excel",
        "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "xlsm": "application/vnd.ms-excel.sheet.macroEnabled.12",
        "xlsb": "application/vnd.ms-excel.sheet.binary.macroEnabled.12",
        "xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
        "xltm": "application/vnd.ms-excel.template.macroEnabled.12",
        "xlam": "application/vnd.ms-excel.addin.macroEnabled.12"
      }

	constructor(
	) {
        // This is intentional
    }

    

    isValidTypeFile( mimetype: string ): boolean{

        return Object.keys(this.typeList).map( (type : string) => {
            return this.typeList[type]
        } ) .indexOf( mimetype ) !== -1;
    }
}
