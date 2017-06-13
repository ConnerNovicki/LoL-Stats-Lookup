import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  @Input() text: string;
  @Input() placeholder: string;
  @Output() _onInput: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onTextInput() {
    this._onInput.emit(this.text);
  }

}
