import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.page.html',
  styleUrls: ['./faculty.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule]
})
export class FacultyPage {

  constructor(private facultyServ: FacultyService) { }

  facultyDetails = this.facultyServ.getFaculty();

}
