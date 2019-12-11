import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  month;
  year;
  constructor(private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    console.log('ArchiveComponent ngOnInit');
    this.route.paramMap.subscribe(params => {
      this.year = params.get('year');
      this.month = params.get('month');
    });
  }

  submit(){
    this.router.navigate(['']);
  }

}
