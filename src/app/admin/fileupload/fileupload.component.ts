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
  private uploadError = false;
  private uploadSuccess = false;

  public uploadInProgress = false;
  public fileUploadItem: FileUploadItem;

  constructor(private uploader: Uploader) { }

  ngOnInit() {
    // init uploader
    this.initUploader();
  }

  onTriggerFileUpload(event) {
    $("#fileUpload").click();
  }

  onDragOver(event: any) {
    // prevent event propagation
    event.preventDefault();
    event.stopPropagation();
    // add dragover style
    $(".filedrag").addClass("dragover");
  }

  onDragLeave(event: any) {
    // prevent event propagation
    event.preventDefault();
    event.stopPropagation();
    // remove dragover style
    $(".filedrag").removeClass("dragover");
  }

  onDrop(event: any) {
    // prevent event propagation
    event.preventDefault();
    event.stopPropagation();
    // remove dragover style
    $(".filedrag").removeClass("dragover");
    // file upload
    this.onFileUpload(event);
  }

  onFileUpload(event) {
    // reset flags
    this.reset();
    //let uploadFile = (<HTMLInputElement>window.document.getElementById('fileUpload')).files[0];
    let uploadFiles = event.target.files || event.dataTransfer.files;
    let uploadFile = uploadFiles[0];
    this.fileUploadItem = new FileUploadItem(uploadFile);
    //myUploadItem.formData = { FormDataKey: 'Form Data Value' };  // (optional) form data can be sent with file
    // start upload
    this.startUpload();
  }

  private initUploader() {
    // success callback
    this.uploader.onSuccessUpload = (item, response, status, headers) => {
      this.uploadSuccess = true;
    };
    // error callback
    this.uploader.onErrorUpload = (item, response, status, headers) => {
      this.uploadError = true;
    };
    // complete callback, called regardless of success or failure
    this.uploader.onCompleteUpload = (item, response, status, headers) => {
      this.uploadPercentage = 0;
      this.uploadInProgress = false;
    };
    // progress callback
    this.uploader.onProgressUpload = (item, percentComplete) => {
      this.uploadPercentage = percentComplete;
    };
  }

  private startUpload(): void {
    // start progress bar
    this.uploadInProgress = true;
    let interval = setInterval(() => {
      if (this.uploadPercentage >= 100) {
        this.uploadPercentage = 100;
        clearInterval(interval);
      }
    }, 500);
    // upload
    this.uploader.upload(this.fileUploadItem);
  }

  private reset() {
    this.fileUploadItem = null;
    this.uploadPercentage = 0;
    this.uploadInProgress = false;
    this.uploadError = false;
    this.uploadSuccess = false;
  }

}
