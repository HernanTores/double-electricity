import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { PdfViewerComponent } from '../pdf-viewer/pdf-viewer.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-confirmation-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, TranslateModule],
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss',
})
export class ConfirmationModalComponent {
  constructor(
    public http: HttpClient,
    public dialogRef: MatDialogRef<ConfirmationModalComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  openPdfModal(): void {
    this.dialog.open(PdfViewerComponent, {
      width: '80%',
      data: { id: this.data.id },
    });
    this.dialogRef.close();
  }

  downloadPdf() {
    const url = `../../../assets/pdfs/${this.data.id}.pdf`;
    this.http
      .get(url, { responseType: 'arraybuffer' })
      .subscribe((data: ArrayBuffer) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(blob);
        downloadLink.download = `${this.data.name}.pdf`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      });
    this.dialogRef.close();
  }
}
