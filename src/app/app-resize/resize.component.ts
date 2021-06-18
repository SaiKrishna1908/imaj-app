import {Component, ElementRef, OnInit} from '@angular/core';
import {ResizeService} from './resize.service';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css']
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

  constructor(private resizeService: ResizeService, private domSanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  onUpload(event): void {
    console.log(event);
    this.file = event.target.files[0];
  }

  
  onSubmit(f: NgForm): void {

    this.loading = !this.loading;
    console.log(f);

    this.fileName = f.form.value['file'];
    this.width = f.form.value['width'];
    this.height = f.form.value['height'];

    this.resizeService.upload(this.file, this.width, this.height).subscribe(
      (data: any) => {
        if (typeof (data) === 'object') {
          this.loading = !this.loading;
          this.uploaded = true;
          // console.log(data['id']); --> id of image
          this.data = data['id'];
          this.hide = false;          
        }
      }
    );
  }


}
