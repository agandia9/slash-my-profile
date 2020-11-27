import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FileUploaderOptions, FileUploader, ParsedResponseHeaders } from 'ng2-file-upload';

@Component({
  selector: 'app-profile-img',
  templateUrl: './profile-img.component.html',
  styleUrls: ['./profile-img.component.sass']
})
export class ProfileImgComponent implements OnInit {
  selectedFile: any;
  responses;
  uploaderOptions: FileUploaderOptions = {
    url: `https://api.cloudinary.com/v1_1/dfmugdupi/upload`,
    autoUpload: true,
    isHTML5: true,
    removeAfterUpload: true,
    headers: [
      {
        name: 'X-Requested-With',
        value: 'XMLHttpRequest'
      }
    ]
  };
  public uploader:FileUploader = new FileUploader({url: `https://api.cloudinary.com/v1_1/dfmugdupi/upload`});
  
  constructor(
    private zone: NgZone,
    private http: HttpClient,
    ) { 
      this.responses = [];
    }
    
    ngOnInit(): void {
      this.uploader = new FileUploader(this.uploaderOptions);
      this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
        form.append('upload_preset', 'gqndrpzs');
        let tags = 'slash';
        form.append('context', `photo=jeje`);
        form.append('folder', 'angular_sample');
        form.append('tags', tags);
        form.append('file', fileItem);
        
        fileItem.withCredentials = false;
        return { fileItem, form };
      };
      const upsertResponse = fileItem => {
        this.zone.run(() => {
          const existingId = this.responses.reduce((prev, current, index) => {
            if (current.file.name === fileItem.file.name && !current.status) {
              return index;
            }
            return prev;
          }, -1);
          if (existingId > -1) {
            this.responses[existingId] = Object.assign(this.responses[existingId], fileItem);
          } else {
            this.responses.push(fileItem);
          }
        });
      };
      
      this.uploader.onCompleteItem = (item: any, response: string, status: number, headers: ParsedResponseHeaders) =>
      upsertResponse(
        {
          file: item.file,
          status,
          data: JSON.parse(response)
        }
        );
        
        this.uploader.onProgressItem = (fileItem: any, progress: any) =>
        upsertResponse(
          {
            file: fileItem.file,
            progress,
            data: {}
          }
          );
          
          
        }
        
        getImage() {
          if(this.responses.length) {
            return this.responses[this.responses.length - 1].data.url
          } else {
            return 'https://www.pngkit.com/png/full/126-1262807_instagram-default-profile-picture-png.png'
          }
        }
        
        
      }
      