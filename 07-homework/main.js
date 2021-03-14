class Student {

  constructor(option) {
    this.university = option.university
    this.course = option.course
    this.fullName = option.fullName
    this.marks = option.marks
  }

  get getInfo () {
    return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName}`;
  }

  get getMarks () {
    return this.marks;
  }

  set setMarks (mark) {
    if (mark === 0 || mark > 5) {
      return this.marks
    }
    else {
      this.marks.push(mark)
    }
  }

  
}

const student = new Student ({
  university: `Вищої Школи Психотерапії м. Одеса`,
  course: 1,
  fullName: `Остап Бендер`,
  marks: [5, 4, 4, 5]
});


console.log(student.getInfo);
console.log(student.getMarks);
student.setMarks = 5
console.log(student.marks);
