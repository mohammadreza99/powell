import {Component, EventEmitter} from '@angular/core';
import {NgDialogOptions} from '@powell/models';

@Component({
  selector: 'ng-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  onClose = new EventEmitter<void>();
  options: NgDialogOptions = {};
  visible: boolean = true;

  show() {
    this.visible = true;
  }

  close() {
    this.visible = false;
  }

  onButtonClick() {
    this.visible = false;
    this.onClose.emit();
  }

  onHide() {
    this.onClose.emit();
  }
}
