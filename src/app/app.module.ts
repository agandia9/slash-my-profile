import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { InitPageComponent } from './pages/init-page/init-page.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { ProfileMapComponent } from './components/profile-map/profile-map.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon'
import { AgmCoreModule } from '@agm/core'; 
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { FileUploadModule } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';
import { ProfileImgComponent } from './components/profile-img/profile-img.component';
// import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InitPageComponent,
    ProfileCardComponent,
    ProfileMapComponent,
    ProfileImgComponent,
    
  ],
  imports: [
    HttpClientModule,
    FileUploadModule,
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: environment.CLOUD_API_USER, upload_preset: environment.CLOUD_PRESET}),
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_API_KEY
    }),
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule
    // FormBuilder,
    // FormGroup, Validators
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
