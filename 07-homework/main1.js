class Student {
    constructor(university, course, fullName, studentMarks = [5, 4, 4, 5]) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.studentMarks = studentMarks;

    }
    getInfo() {
        return `Студент ${this.course}го курсу університету ${this.university}, ${this.fullName}`;
    }
    get marks() {
        return this.studentMarks
    }
    set setMarks(mark) {
        if(this.studentMarks != null || mark > 5) {
            return this.studentMarks.push(mark);
        }
    }
    getAverageMark() {
        if(this.studentMarks != null) {
            return this.studentMarks.reduce(getAverage, 0) / this.studentMarks.length;
        }
    }
    dismiss() {
        this.studentMarks = null;
    }
    recover() {
        this.studentMarks = [];
    }
}

function getAverage(sum, current) {
    return sum + current;
}

const student = new Student(
    `Вищої Школи Психотерапії м. Одеса`,
    1,
    'Остап Бендер',
);

console.log(student.getInfo());
console.log(student.marks);
student.setMarks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
student.dismiss();
student.setMarks = 5;
console.log(student.marks);
student.recover();
student.setMarks = 5
student.setMarks = 4
student.setMarks = 4
student.setMarks = 5
console.log("Оцінки студента після відновлення:", student.marks);

//Advanced

class BudgetStudent extends Student {
    constructor(university, course, fullName, studentMarks) {
        super(university, course, fullName, studentMarks);
        this.getScholarship = function getScholarship() {
            if(this.getAverageMark() >= 4) {
                console.log(`${this.fullName} отрмав 1400$ стипендії`)
            } else if(this.studentMarks === null) {
                console.log(`${this.fullName} покинув навчання, запустив Facebook та бiльше не отримує стипендію`);
            } else {
                console.log(`${this.fullName} не отрмав стипендію`);
            }
        }
        setInterval(() => this.getScholarship(), 30000);
    }
}

const budgetStudent = new BudgetStudent(
    `Гарвардський унiверситет`,
    4,
    'Марк Цукерберг'
);

budgetStudent.getScholarship();
budgetStudent.dismiss();
budgetStudent.getScholarship();
budgetStudent.recover();
student.setMarks = 5
student.setMarks = 4
student.setMarks = 4
student.setMarks = 5
budgetStudent.getScholarship();