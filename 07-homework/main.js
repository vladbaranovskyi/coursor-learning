class Student {
    constructor(university, course, fullName, studentMarks = [5, 4, 4, 5], isStudent = false) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.studentMarks = studentMarks;
        this.isStudent = isStudent;
    }

    getInfo() {
        return `Студент ${this.course}го курсу університету ${this.university}, ${this.fullName}`;
    }

    get marks() {
        if (!this.isStudent) {
            return this.studentMarks
        }

    }

    set setMarks(mark) {
        if (!this.isStudent) {
            return this.studentMarks.push(mark);
        }
    }

    getAverageMark() {
        if(!this.isStudent) {
            return this.studentMarks.reduce(getAverage, 0) / this.studentMarks.length;
        }
    }

    dismiss() {
        this.isStudent = true;
        console.log(`${this.fullName} був відрахований`)
    }
    recover() {
            this.isStudent = false;
    }
}

function getAverage(sum, current) {
    return sum + current;
}

const student = new Student(
    `Вищої Школи Психотерапії м. Одеса`,
    1,
    'Остап Бендер'
);

console.log(student.getInfo());
console.log(student.marks);
student.setMarks = 5;
console.log(student.marks);
console.log(student.getAverageMark());
student.dismiss();
student.recover();
console.log("Оцінки студента після відновлення:", student.marks);

//Advanced

class BudgetStudent extends Student {
    constructor(university, course, fullName, studentMarks, isStudent) {
        super(university, course, fullName, studentMarks, isStudent);
        this.getScholarship = function getScholarship() {
            if(this.getAverageMark() >= 4 && !this.isStudent) {
                console.log(`${this.fullName} отрмав 1400$ стипендії`)
            } else {
                console.log(`${this.fullName} не отримав стипендію`);
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
budgetStudent.getScholarship();
