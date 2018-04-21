import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { PlaceholderComponent } from './common/placeholder/placeholder.component';
import { FooterComponent } from './common/footer/footer.component';
import { FormsComponent } from './common/placeholder/forms/forms.component';
import {FormsModule} from '@angular/forms';
import {FormsService} from './common/service/forms.service';
import { AttributesComponent } from './common/placeholder/forms/attributes/attributes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlaceholderComponent,
    FooterComponent,
    FormsComponent,
    AttributesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
