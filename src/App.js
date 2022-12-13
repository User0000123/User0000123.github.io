import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import React, { useState } from 'react';
import { ToggleButtonGroup,ToggleButton, Button} from 'react-bootstrap';

const names = [{name: "Бореци Теафил Эугениуш",
                dates: "1860 г. - 1910 г.",
                img_src: './images/Mikhail_Borozna.jpg'}, 

                {name: "Булгак Ян",
                dates:"1876 г. - 1950 г.",
                img_src:"./images/Mikhail_Borozna.jpg"},

                {name: "Лихтарович Георгий Леонардович",
                dates: "1947 г. - наст. время",
                img_src: "./images/Mikhail_Borozna.jpg"}];
let filtered_items;

function App() {
  return (
    <> 
      <InitHeader></InitHeader>
      <DataContainer></DataContainer>
    </>
  );
}

function InitHeader(){
  return(
    <header>
      <div class="head-menu">
        <div class="menu-languages">
          <LangButtons default={0}></LangButtons>
        </div>
        <div class="menu-navigation-buttons">
          <Button href="#" className="list-figures" variant="outline-success"><p>Список деятелей</p></Button>        
          <Button href="#" className="main-page" variant="outline-primary"><p>Главная страница</p></Button>        
        </div>
      </div>
    </header>
  )
}

function LangButtons(props){  
  return (
  <ToggleButtonGroup type="radio" name="options" defaultValue={props.default} class="menu-languages">
    <ToggleButton 
      id="lang-ru"
      variant="outline-secondary"
      value={0}
      href="#"
      size='sm'>
      Русский
    </ToggleButton>
    <ToggleButton id="lang-en" variant="outline-secondary" value={1} href="#" size='sm'>
      Английский
    </ToggleButton>
  </ToggleButtonGroup>
  )
}

function DrawCard(props){
  return (
    <a href='#' className='button-link'>
    <div class="card">
        <div class="img-container">
          <img src={props.card.img_src} alt=""></img>
        </div>
        <h1>{props.card.name}</h1>
        <div class="date-container">                                
          <h3>Годы жизни:</h3><h2>{props.card.dates}</h2>
        </div>
    </div>
    </a>
  )
}

function DrawList(){
  return (
    filtered_items.map(item => {
      return (
        <li><DrawCard card={item}></DrawCard></li>
      )
    })
  )
}

function DataContainer(){
  const [search, setSearch] = useState("")
  const proc = (event) =>{
    const item = event.target.value;
    setSearch(item);
  }
  filtered_items = names.filter(person => {
    return person.name.toLowerCase().includes(search.toLowerCase());
  })
  return(
    <section class="data-container">
      <div class="search-container">
          <h1 class="search-header">Фотографы Беларуси</h1>
          <input type = "search"class="input-search" placeholder=' Начните вводить данные для поиска' 
            onChange={proc}></input>            
      </div>
      <div class="figures-container">
        <ul class="figures-list">
          <DrawList></DrawList>  
        </ul>
      </div>
    </section>
  )
}

export default App;
