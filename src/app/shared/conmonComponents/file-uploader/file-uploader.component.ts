import { Component, Input, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { ServiceFileUploaderService } from 'src/app/services/service-file-uploader.service';
import fileToBase64 from 'src/app/shared/helpers/fileToBase64';
import constants from 'src/app/utilities/constants';
@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styles: [],
})
export class FileUploaderComponent implements OnInit {
  @Input() acceptFile: string = '*';
  public fileTemp:
    | {
        fileRaw?: File;
        fileName?: string;
      }
    | undefined;
  public loaded = false;
  public imgSrc: string | ArrayBuffer | null =
    '../../../../assets/img/upload.png';
  constructor(private emitterFile: ServiceFileUploaderService) {}

  ngOnInit(): void {
    this.emitterFile.updatefileTrigger.pipe(take(1)).subscribe((data) => {
      if (data) {
        this.imgSrc = data?.fileRaw;
        this.loaded = true;
      }
    });
  }
  async getFileEvent($event: Event) {
    const target = $event.target as HTMLInputElement;
    if (target.files) {
      const file = target.files[0];
      this.fileTemp = {
        fileRaw: file,
        fileName: file?.name,
      };
      const accept = this.acceptFile.split(',').map((item) => item.trim());
      if (accept.includes(file.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.loaded = true;
          this.imgSrc = constants.COMMON.ACCEPTED_IMG.split(',').some((item) =>
            accept.includes(item.trim())
          )
            ? reader.result
            : '../../../../assets/img/upload2.png';
        };
        reader.readAsDataURL(file);

        if (this.fileTemp && this.fileTemp.fileRaw) {
          const fileRawto64: string = await fileToBase64(this.fileTemp.fileRaw);
          const fileString = fileRawto64.split(',')[1];
          this.emitterFile.fileReaderTrigger.emit({
            fileRaw: fileString,
            fileName: this.fileTemp.fileName,
          });
        }
      } else {
        this.fileTemp = undefined;
        alert('Tipo de archivo no admitido');
      }
    }
  }
  onRemoveimg() {
    this.loaded = false;
    this.imgSrc = '../../../../assets/img/upload.png';
    this.fileTemp = {
      fileRaw: undefined,
      fileName: undefined,
    };
    this.emitterFile.fileReaderTrigger.emit(undefined);
  }
}
