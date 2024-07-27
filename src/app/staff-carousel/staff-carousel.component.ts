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
      details: `<strong>Founder</strong> of the KatIQ Platform, Instructional Designer, Teacher`
    },
    {
      img: 'assets/Knowledge for All.jpg',
      name: 'Knowledge for All',
      details: `<strong>Partner</strong> of the KatIQ Platform`
    },
    {
      img: 'assets/Nursultan Bekbossyn.jpg',
      name: 'Nursultan Bekbossyn',
      details: `<strong>Data Analyst</strong>, Educational Content Editor, Instructional Designer`
    }, 
    {
      img: 'assets/Karina Pigaleva.jpg',
      name: 'Karina Pigaleva',
      details: `<strong>Head of Social Media</strong>, Copywriter of the KatIQ Platform`
    },
    {
      img: 'assets/Sofya Evdokimova.jpg',
      name: 'Sofya Evdokimova',
      details: `<strong>Head of Social Media</strong>, Copywriter of the KatIQ Platform`
    },
    {
      img: 'assets/Alikhan Aimakov.jpg',
      name: 'Alikhan Aimakov',
      details: `<strong>Head of Social Media</strong>, Copywriter of the KatIQ Platform`
    },
    {
      img: 'assets/Karshyga Dayrabay.jpg',
      name: 'Karshyga Dayrabay',
      details: `<strong>Head of Social Media</strong>, Copywriter of the KatIQ Platform`
    },
    {
      img: 'assets/Khanaiym Sarkulova.jpg',
      name: 'Khanaiym Sarkulova',
      details: `Volunteer <strong>Physics Teacher</strong>`
    },
    {
      img: 'assets/Seymonkhon Tukhtasinov.jpg',
      name: 'Seymonkhon Tukhtasinov',
      details: `Volunteer <strong>Mathematics Teacher</strong>`
    }, 
    {
        img: 'assets/Assem Sissenbay.jpeg',
        name: 'Assem Sissenbay',
        details: `Volunteer <strong>Mathematics Teacher</strong>`
    },
    {
      img: 'assets/Sofia Velimamedova.jpg',
      name: 'Sofia Velimamedova',
      details: `Volunteer <strong>English Teacher</strong>`
    },
    {
      img: 'assets/Almira Batyrbekova.jpg',
      name: 'Almira Batyrbekova',
      details: `Volunteer <strong>Biology Teacher</strong>`
    },
    {
      img: 'assets/Samira Muhutdinova.jpg',
      name: 'Samira Muhutdinova',
      details: `Volunteer <strong>Mathematics Teacher</strong>`
    },
    {
      img: 'assets/Aydan Magerramova.jpg',
      name: 'Aydan Magerramova',
      details: `Volunteer <strong>English Teacher</strong>`
    },
    {
      img: 'assets/Sofia Pilishenko.jpg',
      name: 'Sofia Pilishenko',
      details: `Volunteer <strong>Mathematics, Economics teacher</strong>`
    },
    {
      img: 'assets/Zafira Sydykova.jpeg',
      name: 'Zafira Sydykova',
      details: `Volunteer <strong>Mathematics Teacher</strong>`
    }
    // {
    //   img: 'assets/teacher4.jpg',
    //   name: 'Ольга Сухаревская',
    //   details: `Преподаватель`
    // }
  ];

  moveSlide(direction: number) {
    const slides = this.teachers.length;
    this.currentIndex = (this.currentIndex + direction + slides) % slides;
  }
}
