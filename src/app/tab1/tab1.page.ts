import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonInput,IonItem} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonInput,IonItem],
})
export class Tab1Page {



  constructor() {}

 
}
