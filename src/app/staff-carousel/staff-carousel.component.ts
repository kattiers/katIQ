import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-staff-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-carousel.component.html',
  styleUrl: './staff-carousel.component.css'
})
export class StaffCarouselComponent {
  currentIndex = 0;
  teachers = [
    {
      img: 'assets/Katsiaryna Shupikava.png',
      name: 'Katsiaryna Shupikava',
      details: `<strong>Founder</strong> of the KatIQ Platform, Teacher`
    },
    {
      img: 'assets/Adilkhan Nursha.jpeg',
      name: 'Adilkhan Nursha',
      details: `<strong>Founder</strong> of the Knowledge for All — <strong>Partner</strong> of the KatIQ`
    },
    {
       img: 'assets/Sofya Evdokimova.jpeg',
       name: 'Sofya Evdokimova',
       details: `<strong>Head of Social Media<strong>, Copywriter of the KatIQ Platform`
    },
    // {
    //   img: 'assets/teacher4.jpg',
    //   name: 'Ольга Сухаревская',
    //   details: `Преподаватель<br>Опыт работы в International House более 10 лет<br>Имеет сертификат CELTA<br>Проводит занятия в детских группах.`
    // }
  ];

  moveSlide(direction: number) {
    const slides = this.teachers.length;
    this.currentIndex = (this.currentIndex + direction + slides) % slides;
  }
}
