import { filterData, orderAz, sortMovies, computeStatsGender, avarageScore } from "./data.js";
import data from "./data/ghibli/ghibli.js";

const movies = data.films;
let orderMovies = movies
let orderCharacters = getPeople()

const selectMovies = document.querySelector(".select-films");
const selectCharacter = document.querySelector(".select-character");
const selectSpecie = document.querySelector(".select-specie");
const selectProducer = document.querySelector(".select-producer");
const selectDirector = document.querySelector(".select-director");
const computeStats = document.querySelector(".compute-stats");
const buttonAz = document.querySelector(".buttonAz")

function resetCardsFilms(){
  selectMovies.value = ""
  selectProducer.value = ""
  selectDirector.value = ""  
}

function resetCardsPeople() {
  selectCharacter.value = ""
  selectSpecie.value = ""
}

function displayCards(movies) {
  resetCardsPeople()
  document.querySelector(".container").innerHTML = movies.map((film) => `     
  <div class="card">
    <div class="img" style="background-image: url(${film.poster})">
    </div>             
    <h3 class="card-title">${film.title}</h3>                
      <div class="info_list">
        <ul style="list-style: none;">
          <li>Diretor: ${film.director}</li>
          <li>Produtor: ${film.producer}</li>
          <li>Lançamento: ${film.release_date}</li>
          <li>Nota: ${film.rt_score}</li>
        </ul>
      </div>
  </div>  
`).join("");
}

function getMovieScores() {
  let scores = []
  for (let film of movies) {
    scores.push(film.rt_score)
  }
  return scores
}

function getPeople() {
  let people = [];
  for (let film of movies) {
    for (let char of film.people) {
      char["title"] = film["title"]
      people.push(char)
    }
  }
  return people;
}

function displayCardsChar(character) {
  resetCardsFilms()
  document.querySelector(".container").innerHTML = character.map((char) => `
  <div class="card">
    <div class="img" style="background-image: url(${char.img})">               
    </div>            
    <div class="info">
      <h3 class="card-title">${char.name}</h3>
      <div class="info_list">
        <ul style="list-style: none;">
          <li>Filme: ${char.title}</li>
          <li>Genero: ${char.gender}</li>
          <li>Idade: ${char.age}</li> 
          <li>Espécie: ${char.specie}</li> 
        </ul>
      </div>       
    </div>
  </div>      
`).join("");
}

const sortAz = () => {
  if (selectDirector.value != "" || selectMovies.value != "" || selectProducer.value != "") {
    return displayCards(orderAz(orderMovies, "title"))
  } else if (selectSpecie.value != "" || selectCharacter.value != "") {
    return displayCardsChar(orderAz(orderCharacters, "name"))
  }
}

function displayPercentage(data, dataValue) {
  computeStats.innerHTML = `A porcentagem de personagens desta seleção é ${computeStatsGender(data, dataValue)}%`
}

function displayMovieScores() {
  computeStats.innerHTML = `A média das notas é ${avarageScore(getMovieScores())}.`
}

function printMovies() {
  if (selectMovies.value === "rt_score") {
    displayMovieScores()
  } else {
    computeStats.innerHTML = ""
  }
  return displayCards(sortMovies(movies, selectMovies.value));
}

function printCharacter() {
  const filterResult = (filterData(getPeople(), "gender", selectCharacter.value));
  displayPercentage(getPeople(), filterResult)
  orderCharacters = filterResult
  return displayCardsChar(filterResult)
}

function printSpecie() {
  const filterResult = (filterData(getPeople(), "specie", selectSpecie.value))
  displayPercentage(getPeople(), filterResult)
  orderCharacters = filterResult
  return displayCardsChar(filterResult)
}

function printDirector() {
  computeStats.innerHTML = ""
  const filterResult = filterData(movies, "director", selectDirector.value)
  orderMovies = filterResult
  return displayCards(filterResult);
}

function printProducer() {
  computeStats.innerHTML = ""
  const filterResult = filterData(movies, "producer", selectProducer.value)
  orderMovies = filterResult
  return displayCards(filterResult);
}

selectMovies.addEventListener("change", printMovies);
selectCharacter.addEventListener("change", printCharacter);
selectDirector.addEventListener("change", printDirector);
selectProducer.addEventListener("change", printProducer);
selectSpecie.addEventListener("change", printSpecie);
buttonAz.addEventListener("click", sortAz)
