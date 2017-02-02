import { UploadItem } from 'angular2-http-file-upload';

export class FileUploadItem extends UploadItem {
    constructor(file: any) {
        super();
        this.url = 'http://localhost:3000/upload';
        this.headers = {};
        this.file = file;
    }
}