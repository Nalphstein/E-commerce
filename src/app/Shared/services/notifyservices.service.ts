import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotifyservicesService {

  constructor(private snackbar: MatSnackBar) { }

  alert(message: string) {
    this.snackbar.open(message, 'close', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 2000,
    });
  }
}


