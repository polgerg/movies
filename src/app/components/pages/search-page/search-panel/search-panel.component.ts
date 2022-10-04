import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.scss']
})
export class SearchPanelComponent implements OnInit {

  public inputValue: string = "";
  @Output() public inputEmitter = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  public checkAndEmitInputValue(): void {
    if(this.inputValue.length >= 3) {
      this.inputEmitter.emit(this.inputValue)
    }
  }

}
