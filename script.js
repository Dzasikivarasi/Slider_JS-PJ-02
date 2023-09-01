const PROJECT_DATA = [
  {
    name: 'Rostov-on-Don, Admiral',
    city: 'Rostov-on-Don LCD admiral',
    area: '81 m2',
    time: '3.5 months',
    cost: 'Upon request',
    url: "img/project-1.jpg"
  },
  {
    name: 'Sochi Thieves',
    city: 'Sochi Thieves',
    area: '105 m2',
    time: '4 months',
    cost: 'Upon request',
    url: "img/project-2.jpg"
  },
  {
    name: 'Rostov-on-Don Patriotic',
    city: 'Rostov-on-Don Patriotic',
    area: '93 m2',
    time: '3 months',
    cost: 'Upon request',
    url: "img/project-3.jpg"
  }
];

const nameList = document.querySelectorAll('.project_name-item');
const controlDots = document.querySelectorAll('.control-dots svg');
const city = document.getElementById('city');
const area = document.getElementById('area');
const time = document.getElementById('time');
const cost = document.getElementById('cost');
const image = document.querySelector('.project_picture-item');
const previousButton = document.getElementById('previous-project');
const nextButton = document.getElementById('next-project');
const projectsCount = PROJECT_DATA.length;

let currentIndex = 0

// Обработка нажатия на кнопки
function onDocumentKeydown(evt) {
  if (evt.keyCode === 39) {
    OnNextButtonClick();
  } else if (evt.keyCode === 37) {
    OnPreviousButtonClick();
  }
};

// Функция сброса присвоенных классов
function setDefaultClass() {
  nameList.forEach(name => {
    name.classList.remove('active');
  });
  controlDots.forEach(dot => {
    dot.classList.remove('active-dot');
  });
}

// Функция отрисовывает данные по конкретному проекту, присваивает соответствующие классы
function renderProjectData(index) {
  city.innerText = PROJECT_DATA[index].city;
  area.innerText = PROJECT_DATA[index].area;
  time.innerText = PROJECT_DATA[index].time;
  cost.innerText = PROJECT_DATA[index].cost;
  image.src = PROJECT_DATA[index].url;
  setDefaultClass();
  nameList[index].classList.add('active');
  controlDots[index].classList.add('active-dot');
}

// Функции настройки переключения слайдов
function OnNextButtonClick() {
  currentIndex = (currentIndex + 1) % projectsCount;
  renderProjectData(currentIndex);
}

function OnPreviousButtonClick() {
  currentIndex = (currentIndex - 1 + projectsCount) % projectsCount;
  renderProjectData(currentIndex);
}

// Подключение обработчиков
previousButton.addEventListener('click', OnPreviousButtonClick);
nextButton.addEventListener('click', OnNextButtonClick);

nameList.forEach((name, index) => {
  name.addEventListener('click', () => {
    currentIndex = index;
    renderProjectData(currentIndex);
  });
});

controlDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    renderProjectData(currentIndex);
  });
});

document.addEventListener('keydown', onDocumentKeydown);
