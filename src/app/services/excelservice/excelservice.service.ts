import {Injectable} from '@angular/core';
import {BookType, utils, WorkBook, WorkSheet, writeFile} from 'xlsx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError  } from 'rxjs';
import { urlBase } from '../../../app/config/globals';
import { catchError } from 'rxjs/operators';
import { HelperService } from '../helper/helper.service';

@Injectable()
export class ExcelService {

  constructor(
    private http: HttpClient,
    private helper: HelperService
  ) {
    // This is intentional
  }

  static toExportFileName(excelFileName: string, extensionType: string): string {
    return `${excelFileName}_export_${new Date().getTime()}.${extensionType}`;
  }

  public exportAsExcelFile(json, excelFileName: string, sheetNameOption?: string, extensionType?: BookType): void {
    sheetNameOption = typeof sheetNameOption !== 'undefined' ? sheetNameOption : 'data';
    extensionType = typeof extensionType !== 'undefined' ? extensionType : 'xlsx';
    const worksheet: WorkSheet = utils.json_to_sheet(json);
    const workbook: WorkBook = {Sheets: {[sheetNameOption]: worksheet}, SheetNames: [sheetNameOption]};
    writeFile(workbook, ExcelService.toExportFileName(excelFileName, extensionType), {bookType: extensionType, compression: true});
  }

  public exportAsExcelFileManySheets(data, excelFileName: string, sheetNameOption?: Array<string>, extensionType?: BookType): void {
    extensionType = typeof extensionType !== 'undefined' ? extensionType : 'xlsx';
    const workbook = utils.book_new();
    data.forEach((element,index) => {
      const name = typeof sheetNameOption !== 'undefined' && sheetNameOption.length >= index + 1 ? sheetNameOption[index] : `Hoja_` + index
      utils.book_append_sheet(workbook, utils.json_to_sheet(element), name);
    });    
    writeFile(workbook, ExcelService.toExportFileName(excelFileName, extensionType), {bookType: extensionType, compression: true});
  }

  public downloadExcelFormat(params): Observable<Blob> {
    const url = 'DescargarFormatoBase/' + params.formatFunctionName; 

    return this.http.post(urlBase + url, params, {
      responseType: 'blob'
    }).pipe(
      catchError(() => {
          const errorMessage = `Error obteniendo datos de plantilla.`;
          return throwError(errorMessage);
      })
    );
  }

  public getTemplateName(idTemplate:Number){
    return this.helper.get('DescargarFormatoBase/obtenerNombrePlantilla',{idTemplate:idTemplate});
  }

	public exportJsonToExcel(jsonData, fileName: string): void {
		const workBook = utils.book_new();
		const workSheet = utils.json_to_sheet(jsonData);

		utils.book_append_sheet(workBook, workSheet, `Resultado`);
		writeFile(workBook, fileName + ".xlsx");
	}
}
