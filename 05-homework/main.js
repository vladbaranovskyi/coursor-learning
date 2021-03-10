const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];


// Cписок предметов для конкретного студента

function getSubjects(student = students[0]){
  let studentSubjects = [];
  studentSubjects = Object.keys(student.subjects);
  for (let i = 0; i < studentSubjects.length; i++) {
    studentSubjects[i] = studentSubjects[i][0].toUpperCase() + studentSubjects[i].slice(1).toLowerCase().replace("_", " ")
  }

  return studentSubjects
}

console.log (getSubjects());

// Cредняя оценка студента

function  getAverageMark(student = students[1]) {
  const marks = Object.values(student.subjects).flat();
  averageMark = (marks.reduce((a, b) => a + b)/marks.length).toFixed(2)
  return averageMark;
}

console.log(getAverageMark());


// Ифонрмация про студента

function getStudentInfo(student = students[1]) {
  student.averageMark = getAverageMark()
  return {
    name: student.name,
    course: student.course,
    averageMark: student.averageMark
  }
}

console.log(getStudentInfo());

// Имена студентов

function getStudentsNames(students) {
  const names = [students[0].name, students[1].name, students[2].name]
  return names.sort()
}

console.log(getStudentsNames(students));

// Лучший сутдент

function getBestStudent(students) {
  
}
console.log(getBestStudent());
