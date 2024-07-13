import { EventEmitter, Injectable } from '@angular/core';
import { Lesson } from './lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  protected lessons: Lesson[] = [
    // {
    //   title: "Magnetic flux. Lenz's rule",
    //   section: "Electromagnetic induction",
    //   subject: "Physics",
    //   language: "rus",
    //   link: "https://www.youtube.com/embed/OW9NaY6Dy7w",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    {
      title: "Колыбель Ньютона",
      section: "Mechanics",
      subject: "Physics",
      language: "rus",
      link: "https://www.youtube.com/embed/X_RkXo-2J9U",
      description: "!Колыбель Ньютона! — устройство, демонстрирующее законы сохранения энергии и импульса через систему шариков, подвешенных на нитях. При отклонении и отпускании одного или нескольких шариков начинается их колебание, постепенно затухающее. Цель исследования — изучить, как существенные параметры (число, материал и расположение шариков) влияют на скорость затухания колебаний. @@ @@ Важнейшими теоретическими аспектами являются: @@- Закон сохранения энергии: в замкнутой системе полная энергия остается постоянной, переходя из одной формы в другую (например, из потенциальной в кинетическую и обратно).@@ - Закон сохранения импульса: суммарный импульс сохраняется при любых взаимодействиях. @@- Удар - кратковременное взаимодействие тел, возникающее при их соприкосновении. @@- Волна в твердом теле - передача энергии деформации без переноса вещества. @@ @@Колыбель Ньютона демонстрирует эти законы через колебания шариков: при отклонении и отпускании одного или нескольких шариков их энергия и импульс передаются через систему, вызывая колебания других шариков. @@ @@!Зависимость скорости затухания от угла наклона:!@@В рамках исследования скорости затухания были проведены эксперименты, касающиеся влияния угла отклонения шариков. При условии, что масса шариков составляет 11 г, диаметр — 14 мм, а материал — сталь, наблюдения показали, что:@@ - Чем больше угол отклонения одного шарика, тем больше время затухания системы. @@- Время затухания при столкновении двух шариков одинаковой массы больше, чем при столкновении одного шарика с 2, 3 или 4 шариками *https://drive.google.com/file/d/1abfUkFDrQdNWzsqJ8-BSaTos4GEbRI2X/view?usp=sharing* @@ @@!Зависимость скорости затухания от материала шаров:!@@Также было изучено влияние материала шариков. В экспериментах использовались: @@- Стальные шарики (11 г, 14 мм) @@- Деревянные шарики (2 г, 20 мм) @@Результаты показали, что: @@- С увеличением угла отклонения скорость затухания увеличивается.@@ - Для системы из дерева скорость затухания меньше, чем для системы из стали. @@ *https://drive.google.com/file/d/1jOrzYt2oH7DyhtUMt4BRVGVXXM0cOa0V/view?usp=sharing* @@ @@ !Зависимость скорости затухания от количества покоящихся шаров:!@@Влияние количества покоящихся шариков также было проанализировано. При массе 33 г и угле отклонения 45° для стальных шариков выяснили, что чем больше количество покоящихся шариков, тем меньше время затухания. *https://drive.google.com/file/d/1xrHlwqbhStCRpLfYgfNWp-TTYpGgfcXc/view?usp=sharing* @@ @@! Зависимость скорости затухания от количества отклонённых шаров:!@@Что касается количества отклоненных шариков, то при тех же условиях (масса 33 г, угол отклонения 45°, материал — сталь) скорость затухания увеличивается с увеличением массы шариков. *https://drive.google.com/file/d/1WN_Nhq3ONXc_kFQSSg9tAlA2ki1sSiz-/view?usp=sharing*@@ @@ !Зависимость скорости затухания от массы шаров:!@@В рамках эксперимента было проведено исследование, направленное на изучение влияния массы шариков на скорость затухания системы. Были использованы шарики из стали с различными массами и диаметрами: масса шариков — 7 г, 11 г, 33 г, диаметр шариков — 6 мм, 8 мм, 10 мм, материал — сталь. Эксперименты показали, что скорость затухания системы зависит от массы шариков: с увеличением массы шариков наблюдается увеличение скорости затухания. *https://drive.google.com/file/d/1iTiLTFjODg_bDnkpLsXCY-8DjmhQ4Hx4/view?usp=sharing*@@@@ !Зависимость скорости затухания от окружающей среды:!@@Исследование также охватывало влияние сил сопротивления среды: при массе 33 г и угле отклонения 45° в среде воды скорость затухания оказалась больше, чем в воздухе. @@ @@ !Зависимость скорости затухания от угла между нитями:!@@Кроме того, было изучено влияние угла между нитями. При массе 33 г и угле отклонения 45° наблюдалось, что: @@- Чем меньше угол между нитями (от 0 до 30°), тем меньше время затухания колебаний. @@- Увеличение угла между нитями сделало систему более устойчивой, увеличивая время затухания колебаний. @@ @@Таким образом, !скорость затухания колебаний! в колыбели Ньютона !зависит от таких факторов!, как:@@- Масса и размер шариков. @@- Материал шариков. @@- Угол отклонения. @@- Угол между нитями, на которых подвешены шарики. @@- Количество отклоненных и покоящихся шариков. @@- Свойства среды (например, воздух или вода). @@ @@Эти наблюдения подтверждают, что различные физические параметры и условия окружающей среды влияют на поведение механических систем, что соответствует законам сохранения энергии и импульса."
    },
    // {
    //   title: "Faraday's law",
    //   section: "Electromagnetic induction",
    //   subject: "Physics",
    //   language: "rus",
    //   link: "https://www.youtube.com/embed/N6t0CLFCugo",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },

    // {
    //   title: "Magnetic field and its characteristics",
    //   section: "Magnetic field",
    //   link: "https://www.youtube.com/embed/-ngxcW7VMLY",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Magnetic induction vector module. Ampere's law",
    //   section: "Magnetic field",
    //   link: "https://www.youtube.com/embed/mgipYDDZeLg",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // }, 
    // {
    //   title: "Conditions for the existence of direct current. Electromotive force",
    //   section: "DC laws",
    //   link: "https://www.youtube.com/embed/68Nktnw2Egg",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Ohm's law. Conductor Resistance Calculation",
    //   section: "DC laws",
    //   link: "https://www.youtube.com/embed/PBI9RxyDpi8",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "The subject of thermodynamics. Internal body energy",
    //   section: "Basics of thermodynamics",
    //   link: "https://www.youtube.com/embed/9mmb6gjVwE",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Laws of geometric optics",
    //   section: "Geometric optics",
    //   link: "https://www.youtube.com/embed/LVziS9Fkrb4",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
    // {
    //   title: "Oscillatory motion and its characteristics",
    //   section: "Mechanical vibrations",
    //   link: "https://www.youtube.com/embed/Kc2-znE9-wY",
    //   description: "Physics lesson at the Richelieu Lyceum. Author: Pavel Andreevich Victor"
    // },
  ];

  constructor() { }

  getLessons(): Lesson[] {
    console.log(this.lessons);
    return this.lessons;
  }

  addLesson(lesson: Lesson) {
    this.lessons = [...this.lessons, lesson];
    console.log('Lesson added!');
    console.log(this.lessons);
    this.dataChanged.emit(this.lessons);
  }

  editLesson(index: number, lesson: Lesson) {
    this.lessons[index] = lesson;
    console.log('Lesson edited!');
    console.log(this.lessons);
    this.dataChanged.emit(this.lessons);
  }

  deleteLesson(index: number) {
    this.lessons.splice(index, 1);
    console.log('Lesson deleted!');
    console.log(this.lessons);
    this.dataChanged.emit(this.lessons);
  }

  getLessonByTitle(title: string): Lesson | undefined {
    return this.lessons.find(lessons => lessons.title === title);
  }

  searchLessons(query: string): Lesson[] {
    return this.lessons.filter(lesson => lesson.title.toLowerCase().includes(query.toLowerCase()));
  }

  dataChanged = new EventEmitter<Lesson[]>();
}