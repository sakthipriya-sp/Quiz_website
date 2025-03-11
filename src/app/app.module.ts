import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { TopicsComponent } from './topics/topics.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ReviewComponent } from './review/review.component';
import { GeneralKnowledgeComponent } from './general-knowledge/general-knowledge.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    LoginComponent,
    TopicsComponent,
    FeedbackComponent,
    ReviewComponent,
    GeneralKnowledgeComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'nav', pathMatch: 'full' }, // Default route
      { path: 'nav', component: NavComponent },
      { path: 'login', component: LoginComponent }, 
      { path: 'about', component: AboutComponent },
      { path: 'topic', component:TopicsComponent },
      { path: 'feedback', component:FeedbackComponent },
      { path: 'reviews', component:ReviewComponent },
      { path: 'general-knowledge', component: GeneralKnowledgeComponent }, // Update here




      { path: '**', redirectTo: 'nav' } // Redirect unknown paths to home
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
