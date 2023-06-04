import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-vision-mission',
  templateUrl: './vision-mission.page.html',
  styleUrls: ['./vision-mission.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})

export class VisionMissionPage {

  constructor() { }

  visionTxt = `Keeping in view the
  growing and changing needs of Industry
  and society, we at S.P.I.T. are
  committed to creating an environment
  which will raise the intellectual and
  moral standards of our students. Our
  endeavor is to strive for the overall
  development of students, thereby
  enabling them to accept challenges. In
  tune with this our vision is`

  visionMain = `"To build a renowned
  institute which will produce graduate
  engineers with global competency and
  social sensitivity."`

  missionList = [
    `"Provide high
    quality education in engineering and
    technology promoting the Indian Values
    and Ethos that will prepare the
    participants to lead lives of personal
    integrity and civic responsibility in
    a global society."`,

    `Promote an
    Educational Environment that combines
    academic study with the excitement of
    intellectual curiosity for engineers
    of tomorrow.`,

    `Enhance career
    opportunities for students through
    Industry-Institute interaction, valueadded
    courses and projects in cutting
    edge technology.`,

    ` Focus on applied
    research to create next generation
    technologies.`

  ];

}
