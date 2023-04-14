import './style.css';
import { apiGet, apiPush } from './modules/api.js';

const submit = document.getElementById('form');
const refreshBtn = document.getElementById('refresh');
const userName = document.getElementById('name');
const userScore = document.getElementById('score');

const generateScores = (data) => (
  `<tr><td>${data.user}: ${data.score}</td></tr>`
);

const apiLoader = async () => {
  const table = document.getElementById('table');
  table.innerHTML = '';
  if (table.innerHTML === '') {
    refreshBtn.disabled = true;
  }
  try {
    const fetchData = await apiGet();
    fetchData.sort((a, b) => b.score - a.score);
    fetchData.forEach((data) => {
      document.getElementById('table').innerHTML += generateScores(data);
    });
  } catch (error) {
    alert('please check your internet connection');
  }
  refreshBtn.disabled = false;
};

window.addEventListener('load', apiLoader);
refreshBtn.addEventListener('click', apiLoader);

const clearFields = () => {
  userName.value = '';
  userScore.value = '';
};

submit.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = userName.value;
  const score = userScore.value;
  await apiPush(user, score);
  clearFields();
});