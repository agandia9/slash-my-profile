import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { FileUploader, FileUploaderOptions, ParsedResponseHeaders } from 'ng2-file-upload';
@Injectable({
  providedIn: 'root'
})
export class ImagesUploadServiceService {

  private hasBaseDropZoneOver: boolean = false;
  private title: string;
  // public uploader:FileUploader = new FileUploader({url: `https://api.cloudinary.com/v1_1/dfmugdupi/upload`});
  responses = []
  constructor(
    private cloudinary: Cloudinary,
    private zone: NgZone,
    private http: HttpClient
    ) {
      this.responses = []
     }

  uploadImage(uploader) {
      }
  }
