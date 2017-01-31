import { Component, OnInit } from '@angular/core';
import { Uploader } from 'angular2-http-file-upload';
import { FileUploadItem } from './fileupload-item';

declare var $; // declare jquery

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  private uploadPercentage: number = 0;
  private uploadInProgress = false;
  private uploadError = false;
  private uploadSuccess = false;

  constructor(private uploader: Uploader) { }

  ngOnInit() {
    // init interval for progress bar
    let interval = setInterval(() => {
      if (this.uploadPercentage >= 100) {
        this.uploadPercentage = 100;
        clearInterval(interval);
      }
    }, 500);
  }

  onTriggerFileUpload(event) {
    $("#fileUpload").click();
  }

  onDragOver(event: any) {
    // prevent event propagation
    event.preventDefault();
    event.stopPropagation();
  }

  onDrop(event: any) {
    // prevent event propagation
    event.preventDefault();
    event.stopPropagation();
    // file upload
    this.onFileUpload(event);
  }

  onFileUpload(event) {
    console.log("onfileupload");
    this.reset();

    //let uploadFile = (<HTMLInputElement>window.document.getElementById('fileUpload')).files[0];
    let uploadFiles = event.target.files || event.dataTransfer.files;

    let uploadFile = uploadFiles[0];

    let myUploadItem = new FileUploadItem(uploadFile);
    //myUploadItem.formData = { FormDataKey: 'Form Data Value' };  // (optional) form data can be sent with file

    this.uploader.onSuccessUpload = (item, response, status, headers) => {
      // success callback
      this.uploadSuccess = true;
    };
    this.uploader.onErrorUpload = (item, response, status, headers) => {
      // error callback
      this.uploadError = true;
    };
    this.uploader.onCompleteUpload = (item, response, status, headers) => {
      // complete callback, called regardless of success or failure
      this.uploadPercentage = 0;
      this.uploadInProgress = false;
    };
    this.uploader.onProgressUpload = (item, percentComplete) => {
      // progress callback
      this.uploadPercentage = percentComplete;
    };

    this.uploadInProgress = true;
    this.uploader.upload(myUploadItem);
  }

  private reset() {
    this.uploadPercentage = 0;
    this.uploadInProgress = false;
    this.uploadError = false;
    this.uploadSuccess = false;
  }

}
