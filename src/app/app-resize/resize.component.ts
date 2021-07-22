import { Component, ElementRef, OnInit } from '@angular/core';
import { ResizeService } from './resize.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css'],
})
export class ResizeComponent implements OnInit {
  file: File = null;
  fileName: string = null;
  height = 150;
  width = 150;
  loading = false;
  uploaded = false;
  data: SafeResourceUrl = null;
  hide = true;
  errorMessage = '';

  resizedImage = false;

  constructor(
    private resizeService: ResizeService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}

  onUpload(event): void {
    this.file = event.target.files[0];

    let label = document.getElementById('chooseFileLabel');
    label.innerHTML = this.file.name;
  }

  onSubmit(f: NgForm): void {
    this.loading = !this.loading;
    this.errorMessage = '';
    this.fileName = f.form.value['file'];
    this.width = f.form.value['width'];
    this.height = f.form.value['height'];

    this.resizeService.upload(this.file, this.width, this.height).subscribe(
      (data: any) => {
        if (typeof data === 'object') {
          this.loading = !this.loading;
          this.uploaded = true;
          this.data = data['id'];
          this.hide = false;
        }
      },
      (error) => {
        this.errorMessage = 'Error Resizing File';
      }
    );
    console.log(this.data);
    this.resizedImage = true;
  }

  getResizedImage(): void {
    this.resizeService.getImage(this.data).subscribe(
      (downloadFile) => {
        const blob = new Blob([downloadFile], {
          type: 'application/zip',
        });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      (error) => {
        console.log('error downloading file');
      }
    );
  }
}
