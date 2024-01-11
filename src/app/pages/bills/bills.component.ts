import { Bill } from '../../models/bill.model';
import { Component } from '@angular/core';
import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    TranslateModule,
  ],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.scss',
})
export class BillsComponent {
  bills: Bill[] = [
    {
      id: 1,
      name: 'Photos',
      date: new Date('1/1/16'),
      amount: 15,
      address: 'Barcelona',
    },
    {
      id: 2,
      name: 'Recipes',
      date: new Date('1/17/16'),
      amount: 15,
      address: 'Barcelona',
    },
    {
      id: 3,
      name: 'Work',
      date: new Date('1/28/16'),
      amount: 15,
      address: 'Barcelona',
    },
  ];

  constructor(public dialog: MatDialog) {}

  openModal(bill: Bill): void {
    this.dialog.open(ConfirmationModalComponent, {
      data: bill,
    });
  }
}
