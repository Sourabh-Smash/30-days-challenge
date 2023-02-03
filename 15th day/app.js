const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const prevNextIcon = document.querySelectorAll('.icons span');
console.log(prevNextIcon);

//getting new date ,year,month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();
const month = [
  'January',
  'Feburary',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const renderCalendar = () => {
  let getLastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let getFirstDateOfMonth = new Date(currYear, currMonth, 1).getDate();
  let getlastDateOfPreviousMonth = new Date(currYear, currMonth, 0).getDate();
  let getlastDayOfMonth = new Date(
    currYear,
    currMonth,
    getLastDateOfMonth
  ).getDay();
  let liTag = '';

  for (let i = getFirstDateOfMonth; i > 0; i--) {
    liTag += `<li class="inactive" >${getlastDateOfPreviousMonth - i + 1}</li>`;
  }

  for (let i = 1; i <= getLastDateOfMonth; i++) {
    let isToday =
      i === date.getDay() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? 'active'
        : '';
    liTag += `<li class="${isToday}">${i}</li>`;
  }
  for (let i = getlastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive" >${i - getLastDateOfMonth + 1}</li>`;
  }
  currentDate.innerText = `${month[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};
renderCalendar();
prevNextIcon.forEach(icon => {
  icon.addEventListener('click', () => {
    currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
