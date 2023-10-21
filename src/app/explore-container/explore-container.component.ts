import { Component, Input } from '@angular/core';
import { IonInput ,IonButton,IonSearchbar} from '@ionic/angular/standalone';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http'


const API_URL = environment.API_URL
const API_KEY = environment.API_KEY


@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonInput,IonButton,IonSearchbar],
})




export class ExploreContainerComponent {
  @Input() name?: string;

  cityName:string =''

  
  constructor(public http:HttpClient){

  }

  loadData(){
    this.http.get(`${API_URL}/weather?q=${"tirur"}&appid=${API_KEY}`).subscribe(results=>{
      console.log(results)
    })
    
  }
}
