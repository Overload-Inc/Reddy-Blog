import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PostComponent } from './components/post/post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from './components/user/user.component';
import { EnclosePipe } from "./pipes/enclose.pipe";
import { AppendPipe } from './pipes/append.pipe';
import { PostService } from "./services/post.service";

@NgModule({
  declarations: [ // Specifies all the components that will be used in the application
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    UserComponent,
    EnclosePipe,
    AppendPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule // Specifies the kind of form that we can use
  ],
  providers: [PostService], // Specifies the service that provides its functionality to other components
  bootstrap: [AppComponent]
})
export class AppModule { }
