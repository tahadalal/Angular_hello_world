import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { ActivatedRoute } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/combineLatest';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/switchMap';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

followers;

  constructor(
    private route : ActivatedRoute,
    private service : GithubService) { }

  ngOnInit() {
    // to get the query params, use the queryParamMap
    this.route.queryParamMap.subscribe();
    this.route.snapshot.queryParamMap.get('page');

    combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
      .pipe(switchMap(combined => {
        let id = combined[0].get('id'); // the 0th element is the first observable in the array
        let page = combined[1].get('page');

        // this.service.getFollowers(id, page) // These parame can be used to get the specific results
        return this.service.getFollowers();
      }))
      .subscribe(followers => {
        console.log(followers);
        this.followers = followers;
      });

    
  }

}
