import {Component, OnInit} from '@angular/core';
import {ResizeService} from './resize.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-resize',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.css']
})
export class ResizeComponent implements OnInit {

  file: File = null;
  loading = false;
  uploaded = false;
  data: any = null;
  constructor(private resizeService: ResizeService) {
  }

  ngOnInit(): void {
  }

  onChange(event): void {
    this.file = event.target.files[0];
  }

  onUpload(): void {
    this.loading = !this.loading;
    console.log(this.file);

    this.resizeService.upload(this.file).subscribe(
      (data: any) => {
        if (typeof (data) === 'object') {
          this.loading = !this.loading;
          this.uploaded = true;
          console.log(data['data']);
        }
      }
    );
  }


}
