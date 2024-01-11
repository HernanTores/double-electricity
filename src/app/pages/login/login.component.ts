import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ButtonComponent } from '../../components/button/button.component';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ButtonComponent,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    TranslateModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  hide = true;
  loading = false;

  constructor(
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private router: Router,
    private translate: TranslateService
  ) {}

  login() {
    const isAuthenticated = this.authService.login(
      this.email.value!,
      this.password.value!
    );
    if (isAuthenticated) {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.router.navigateByUrl('/bills');
      }, 2000);
    } else if (!isAuthenticated && this.email.value && this.password.value) {
      this._snackBar.open(
        this.translate.instant('invalid-credentials'),
        this.translate.instant('close'),
        {
          duration: 3000,
        }
      );
    } else {
      this.email.markAsTouched();
      this.password.markAsTouched();
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
