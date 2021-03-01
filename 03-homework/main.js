const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

function getPairs (students) {
  let studentsGirls = [students[2], students[3], students[5]];
  let studentsBoys = [students[0], students[1], students[4]];
  let pairs = [];
 for (var i = 0; i < students.length/2; i++) {
  pairs.push([studentsGirls[i] + " та " + studentsBoys[i]]);
 }
 return pairs;
}

const pairs = getPairs (students);


function getThemes (pairs, themes) {
  let pairsThems = [];
  for (var i = 0; i < pairs.length; i++) {
    pairsThems[i] = [pairs[i] + ", " + themes[i]];
  }
  return pairsThems;
}

const pairsTask = getThemes (pairs, themes);


function getMarks (students, marks) {
  let getMarks = [];
  for (var i = 0; i < students.length; i++) {
    getMarks.push([students[i] + ", " + marks[i]]);
  }
  return getMarks;
}

const studentsMarks =  getMarks (students, marks);


function getMarksPairs (pairsTask, marks) {
  let marksPairs = [];
  for (var i = 0; i < pairsTask.length; i++) {
    marksPairs.push([pairsTask[i], marks[i]]);
  }
  return marksPairs;
}

const marksPairs = getThemes (pairsTask, marks);


console.log (pairs);
console.log (pairsTask);
console.log (studentsMarks);
console.log (marksPairs);
