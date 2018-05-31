import { Component, OnInit ,Output,EventEmitter,Inject,NgModule} from '@angular/core';

import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selected = 'option1';

   @Output()
   toggle=new EventEmitter<void>();
   @Output()
   toggleDarkTheme=new EventEmitter<boolean>();


  constructor(public dialog: MatDialog) {}

  openDialog() {

  }



  ngOnInit() {
  }
  openSidebar(){
     this.toggle.emit()
  }
  onchange(checked:boolean){
  this.toggleDarkTheme.emit(checked);
  }

}

