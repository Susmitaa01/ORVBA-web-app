import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-mechanic-list',
  templateUrl: './mechanic-list.component.html',
  styleUrls: ['./mechanic-list.component.scss']
})
export class MechanicListComponent implements OnInit {

  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  mechanics = []
  searchTerm: string = ""

  searchInitiated(searchValue: string) {
    this.searchTerm = searchValue
    console.log(this.searchTerm)
    this.userService.getPosts(this.searchTerm)
    .subscribe((result: any) => {
      
        this.mechanics = result
        console.log('[+] mechanics assigned')
      
    })
  }
}
