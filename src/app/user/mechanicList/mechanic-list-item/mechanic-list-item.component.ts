import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mechanic-list-item',
  templateUrl: './mechanic-list-item.component.html',
  styleUrls: ['./mechanic-list-item.component.scss']
})
export class MechanicListItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() mechanicid: number = 0
  @Input() mechanicName: string = ""
  @Input() mechanicPhoneNumber: string = ""
  @Input() mechanicEmailId:string= ""
  @Input() mechanicLocation:string=""
}
