const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Сколько налогов нужно заплатить в определенной стране

function getMyTaxes(salary) {
  return salary * this.tax;
}

console.log ('Налог в Латвии при ЗП 2000: ', getMyTaxes.call(latvia, 2000));

// Среднее количество налогов в каждой стране

function getMiddleTaxes() {
  return this.tax * this.middleSalary;
}

console.log ('Среднее количество налогов в Латвии: ', getMiddleTaxes.call(latvia));
console.log ('Среднее количество налогов в Украине: ', getMiddleTaxes.call(ukraine));
console.log ('Среднее количество налогов в Литве: ', getMiddleTaxes.call(litva));

// Сколько всего налогов платят в каждой стране

function getTotalTaxes() {
  return this.tax * this.middleSalary * this.vacancies;
}

console.log ('Общее количество налогов в Латвии: ', getTotalTaxes.call(latvia));
console.log ('Общее количество налогов в Украине: ', getTotalTaxes.call(ukraine));
console.log ('Общее количество налогов в Литве: ', getTotalTaxes.call(litva));

// Пересчет ЗП с интервалом в 10 секунд

function getMySalary(country) {
  setInterval(() => {
    const mySalary = {};
    mySalary.salary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
    mySalary.taxes = Math.floor(mySalary.salary * country.tax);
    mySalary.profit = Math.floor(mySalary.salary - mySalary.taxes);
    return (mySalary);
  }, 10000);
}

console.log ('ЗП в Литве: ', getMySalary(litva));
