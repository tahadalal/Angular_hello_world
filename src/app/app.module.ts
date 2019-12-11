import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesService } from './courses/courses.service';
import { from } from 'rxjs';
import { SummaryPipe } from './summary.pipe';
import { AssignmentTwoComponent } from './assignment-two/assignment-two.component';
import { AssignmentThreeComponent } from './assignment-three/assignment-three.component';

import { TitlecasePipe } from './titlecase.pipe';
import { SectionFiveComponent } from './section-five/section-five.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { LikeTwoComponent } from './like-two/like-two.component';
import { SectionSixComponent } from './section-six/section-six.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { SectionSevenComponent } from './section-seven/section-seven.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SectionEightComponent } from './section-eight/section-eight.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { SectionNineComponent } from './section-nine/section-nine.component';
import { PostsComponent } from './posts/posts.component';
import { HttpClient } from 'selenium-webdriver/http';
import { PostService } from './services/post.service';
import { AppErrorHanlder } from './app-error-handler';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubService } from './github-followers/github.service';
import { SectionTenComponent } from './section-ten/section-ten.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundError } from './not-found-error';
import { HomeComponent } from './home/home.component';
import { AssignmentNineComponent } from './assignment-nine/assignment-nine.component';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe, // This has to be added for the pipe to be used.
    AssignmentTwoComponent, 
    AssignmentThreeComponent, 
    TitlecasePipe, 
    SectionFiveComponent, 
    PanelComponent, 
    LikeComponent, 
    LikeTwoComponent, 
    SectionSixComponent, 
    InputFormatDirective, 
    ZippyComponent, 
    SectionSevenComponent, 
    ContactFormComponent, 
    CourseFormComponent, 
    SectionEightComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    ChangePasswordFormComponent,
    SectionNineComponent,
    PostsComponent, // Introduced for section Nine (to consume http service)
    GithubFollowersComponent,
    SectionTenComponent,
    NavbarComponent,
    GithubProfileComponent,
    NotFoundComponent,
    HomeComponent,
    AssignmentNineComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      // the order of the route declaration matters. It tries to match sequentially
      // This is why the more specific routes should be on the top of the list
      { 
        path : '', 
        component : HomeComponent
      },
      { 
        path : 'archive/:year/:month', 
        component : ArchiveComponent
      },
      { 
        path : 'followers/:id/:username', // ":id" is used to declare a variable
        component : GithubProfileComponent
      },
      { 
        path : 'followers', 
        component : GithubFollowersComponent
      },
      { 
        path : 'posts', 
        component : PostsComponent
      },
      { 
        path : '**', // this is a wildcard . it catches any urls in the address bar.
        component : NotFoundComponent
      },
    ])
  ],
  providers: [ // This is where the dependencies have to be added
    CoursesService, // If this is missing, the console has the error "NullInjectorError: No provider for CoursesService" 
    // Angular creates a singleton for each of these dependencies and injects the same singleton into all places where it is required.
    PostService,
    {provide : ErrorHandler, useClass : AppErrorHanlder},
    // with the above syntax, we are telling angular to use the AppErrorHanlder class instead of the default ErrorHandler.
    GithubService
    

  ],
  bootstrap: [AssignmentNineComponent]
})
export class AppModule { }
