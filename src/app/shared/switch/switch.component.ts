import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  isNewProfile =true;
  @Input() form_Control: FormControl;
  @Output() valueChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
    if(!this.form_Control){
      this.form_Control = new FormControl();
    }
  }

  onValueChange() {
    this.valueChange.emit(this.form_Control.value);
  }

}
