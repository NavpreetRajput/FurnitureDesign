import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatMenuModule, MatCardModule, MatButtonToggleModule, MatFormFieldModule, MatTabsModule, MatListModule, MatExpansionModule, } from '@angular/material';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemComponent } from './item/item.component';
import { Item2Component } from './item2/item2.component';
import { Item3Component } from './item3/item3.component';
import { New1Component } from './new1/new1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Hand1Component } from './hand1/hand1.component';
import { Hand2Component } from './hand2/hand2.component';
import { Home1Component } from './home1/home1.component';
import { Home2Component } from './home2/home2.component';
import { Hand3Component } from './hand3/hand3.component';
import { Home3Component } from './home3/home3.component';


const approutes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'beds',
    component: ItemComponent,
  },
  {
    path: 'dress',
    component: ItemComponent,
  },
  {
    path: 'war',
    component: Item2Component,
  },
  {
    path: 'sofa',
    component: Item2Component,
  },
  {
    path: 'tv',
    component: Item3Component,
  },
  {
    path: 'shoe',
    component: Item3Component,
  },
  {
    path: 'curve',
    component: New1Component,
  },
  {
    path: 'dist',
    component: New1Component,
  },
  {
    path: 'hand',
    component: New1Component,
  },
  {
    path: 'home1',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'staff',
    component: Hand1Component,
  },
  {
    path: 'segur',
    component: Hand2Component,
  }, {
    path: 'air',
    component: Hand3Component,
  }
  , {
    path: 'pots',
    component: Home1Component,
  }
  , {
    path: 'wall',
    component: Home2Component,
  }
  , {
    path: 'showp',
    component: Home3Component,
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    AboutComponent,
    ItemComponent,
    Item2Component,
    Item3Component,
    New1Component,
    LoginComponent,
    SignupComponent,
    Hand1Component,
    Hand2Component,
    Home1Component,
    Home2Component,
    Hand3Component,
    Home3Component,

  ],
  imports: [
    BrowserModule,
    Ng2CarouselamosModule,
    RouterModule.forRoot(approutes),
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,

    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    MatListModule,
    MatExpansionModule,
    MatTabsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
