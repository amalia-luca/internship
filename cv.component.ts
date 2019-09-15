import { Component, OnInit } from '@angular/core';
import { FirstServiceService} from "../first-service.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CVComponent implements OnInit {
  user;
  constructor(private firstService: FirstServiceService) { }

  ngOnInit() {
    this.firstService.getData().subscribe((data) =>{
      console.log(data);
    });

}

}
