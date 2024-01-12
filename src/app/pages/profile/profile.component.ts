import { ButtonComponent } from '../../components/button/button.component';
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ButtonComponent,
    DatePipe,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
//Este componente permite la visualización y edición de los datos del usuario
export class ProfileComponent {
  user: User = {
    id: 1,
    name: 'Juan',
    lastName: 'Perez',
    email: 'juanperez@mail.com',
    date: new Date(),
    address: 'Gran vía 150',
    isLoggedId: true,
  };

  loading = false;

  name = new FormControl(this.user.name, [Validators.required]);
  lastName = new FormControl(this.user.lastName, [Validators.required]);
  email = new FormControl(this.user.email, [
    Validators.required,
    Validators.email,
  ]);
  date = new FormControl({ value: this.formattedDate, disabled: true }, [
    Validators.required,
  ]);
  address = new FormControl(this.user.address, [Validators.required]);

  constructor(
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) {}

  get formattedDate(): string {
    return this.user.date.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  }

  save() {
    if (
      this.name.value &&
      this.lastName.value &&
      this.email.value &&
      this.address.value
    ) {
      this.user.name = this.name.value;
      this.user.lastName = this.lastName.value;
      this.user.email = this.email.value;
      this.user.address = this.address.value;
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this._snackBar.open(
          this.translate.instant('profile-save-success'),
          this.translate.instant('close'),
          {
            duration: 3000,
          }
        );
      }, 2000);
    } else {
      this._snackBar.open(
        this.translate.instant('all-fields-required'),
        this.translate.instant('close'),
        {
          duration: 3000,
        }
      );
    }
  }
}
