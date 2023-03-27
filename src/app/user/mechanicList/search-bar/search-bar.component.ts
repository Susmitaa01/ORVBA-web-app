import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  searchTerm: string = ""


  onKey(event: any) {
    this.searchTerm += event.target.value;
  }

  @Output()
  searchInitiated: EventEmitter<string> = new EventEmitter<string>()

  onSearchInitiated() {
    this.searchInitiated.emit(this.searchTerm);
  }
}
