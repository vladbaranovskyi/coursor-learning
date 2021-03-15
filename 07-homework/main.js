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

  get getAveregeMarks () {
    return this.marks.reduce((sum, element) => (sum + element)) / this.marks.length;
  }

  dismis () {
     this.marks = null;
  }

  recover () {
     this.marks = [];
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
console.log(student.getMarks);
console.log(student.getAveregeMarks);
student.dismis()
console.log(student.marks);
student.recover()
student.setMarks = 5
student.setMarks = 4
student.setMarks = 4
student.setMarks = 5
console.log(student.marks);


//Advanced

class BudgetStudent extends Student {
  constructor (option) {
    super (option)
    this.scholarship = function getScholarship() {
      if (budgetStudent.getAveregeMarks > 4) {
        return `${this.fullName} отрмав 1400$ стипендії`
      }
      else if( this.marks === null){
          console.log(`${this.fullName} покинув навчання, запустив Facebook та бiльше не отримує стипендію`);
        }
      else {
        return `${this.fullName} не отрмав стипендію`
        }
      }
    }
  }

  const budgetStudent = new BudgetStudent (
    {
      university: `Гарвардський унiверситет`,
      course: 4,
      fullName: `Марк Цукерберг`,
      marks: [5, 3, 4, 5]
    }
  )

setInterval(() => console.log(budgetStudent.scholarship()), 30000);
