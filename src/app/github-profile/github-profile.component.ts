import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  // to get access to the route parameter, 
  constructor(
    private route : ActivatedRoute,
    private router : Router
    ) { }

  ngOnInit() {
    console.log("GithubProfile ngOnInit.")
    // If there is no option of a user navigating within the component , we dont need the observable, we can simply use the snapshot.
    // A snapshot works only if the component is reinitialized.
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.route.paramMap // the paramMap is an observable !!
      .subscribe(params => {
        console.log(params);
        // params.keys // keys contains all the route parameters
        let id : number = +params.get('id'); // Adding a '+' ahead of the string converts it to a number
        console.log(id);  
      });
      // why are route parameters observable?
      // when a user navigates to another component, the existing component is destroyed (onDestroy) and the new component is initialized (onInit)
      // but when the user navigates to a different view of the same component, it does not destroy and reinitialize
  }

  submit(){
    // this is for programmatic navigation
    this.router.navigate(['/followers'],{
      queryParams : {page:1, order:'newest'}
    })
  }

}
