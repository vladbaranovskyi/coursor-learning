const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// Сколько налогов нужно заплатить в определенной стране

function getMyTaxes(salary) {
  return salary * this.tax;
}

console.log ('Налог в Латвии при ЗП 2000: ', getMyTaxes.call(latvia, 2000));
