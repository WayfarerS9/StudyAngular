import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatDialogsComponent } from '../mat-dialogs.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-use-diallog',
  templateUrl: './use-diallog.component.html',
  styleUrls: ['./use-diallog.component.scss']
})
export class UseDiallogComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(MatDialogsComponent, {
      width: '250px',
      data: {name: 'Ostin'}
    }).afterClosed().subscribe( res => {
      //this.showSuccess();
      this.showBroken();
    })
  }

  // https://www.npmjs.com/package/ngx-toastr - здесь опции тостеров
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showBroken() {
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 1000,
    });
  }






}
