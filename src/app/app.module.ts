import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InformationComponent } from './information/information.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LightboxModule } from 'ngx-lightbox';
import { ContentInfoComponent } from './content-info/content-info.component';
import { TabsComponent } from './content-info/tabs/tabs.component';
import { DescriptionComponent } from './content-info/pagesContent/description/description.component';
import { AvalilableUnitsComponent } from './content-info/pagesContent/avalilable-units/avalilable-units.component';
import { LocationComponent } from './content-info/pagesContent/location/location.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { SimilarPropertiesComponent } from './similar-properties/similar-properties.component'
import {CarouselModule} from 'primeng/carousel';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InformationComponent,
    GalleryComponent,
    UserprofileComponent,
    ContentInfoComponent,
    TabsComponent,
    DescriptionComponent,
    AvalilableUnitsComponent,
    LocationComponent,
    SimilarPropertiesComponent
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    LightboxModule,
    GoogleMapsModule,
    CarouselModule,
    NgbCollapseModule,
    NgxNavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
