import { Component } from '@angular/core';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
    selector: 'app-tab1',
    templateUrl: 'Home.page.html',
    styleUrls: ['Home.page.scss'],
    standalone: true,
    imports: [IonicModule, ExploreContainerComponent, CommonModule, RouterModule]
})

export class HomePage {
  constructor() {}

  public appPages = [
    { title: 'Message From HOD', url: '/message-hod', icon: 'receipt-outline'},
    { title: 'Vision-Mission', url: '/vision', icon: 'globe-outline'},
    { title: 'Faculty', url: '/faculty', icon: 'people-circle-outline'},
    { title: 'Department', url: '/department', icon: 'school-outline'},
    { title: 'TimeTable', url: '/timetable', icon: 'reader-outline'},
    { title: 'Placement', url: '/placement', icon: 'walk-outline'}
  ];

  mainTitle : string = "Sardar Patel Institute of Technology";
  
  aboutUs : string = `The Department of Computer Science and Engineering was established in the year 2021 
  with the aim of providing students with the necessary skills to excel in the rapidly evolving tech industry. 
  The department consists of 14+ faculty members, 3 technical assistants and more than 220 students working towards their 
  Bachelors’, Masters’ and Doctoral degrees. The department attracts high quality students from all over Maharashtra 
  and also from the country.In the recent past, we have benchmarked our curriculum with select institutions of higher 
  learning around the world and currently we are carefully reviewing the impact of these consequent changes with a view 
  to make our programs even more strong and competitive. 
  
  The department also attracts the interaction with the IT industries to provide training to the students.Graduates from this department will have a deep understanding of both the theoretical
  and practical aspects of computer science and engineering. They will be well equipped with a broad range of skills that can 
  be applied in many industries, including tech, finance, healthcare, transportation, entertainment, etc. The department 
  offers a comprehensive curriculum that includes both theoretical and practical courses, making it a highly sought-after 
  field of study. The department's graduates have a wide range of career opportunities in various industries, and their skills 
  are essential to the development of new technologies that drive innovation.`


}
