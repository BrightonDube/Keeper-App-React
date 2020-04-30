//jshint esversion: 8
import React from 'react';
import Header from "./components/Header";
import './App.css';
import Footer from './components/Footer';
import Card from './components/Card';
//import Gate from './components/Gate';



function App() {
  let uniqueId = ()=>{
    const names = ["Food", "Car", "Work", "Gym", "Movies" ];
    let randomizer = Math.floor(Math.random() * 4);
    return names[randomizer];
  };

  return (
    <div className="App">
      <div id="content-wrap">
        <Header />
        
        <div className="innerContent">
        
          <Card title={<em>{uniqueId()}</em>} 
                body="Lorem ipsum dolor sit amet, elit. Exercitationem, aperiam. Tempore magnam delectus odit perferendis ullam molestias, in voluptatibus 
                      porro ipsam eveniet iusto ex assumenda quis officiis inventore asperiores sed!"
                imgUrl={"http://placekitten.com/g/250/150"}
          />
          <Card title={<em>{uniqueId()}</em>} 
                body="Lorem ipsum dolor sit amet, elit. Exercitationem, aperiam. Tempore magnam delectus odit perferendis ullam molestias, in voluptatibus 
                      porro ipsam eveniet iusto ex assumenda quis officiis inventore asperiores sed!"
                imgUrl={"https://unsplash.it/250/150"}
          />
          <Card title={<em>{uniqueId()}</em>} 
                body="Lorem ipsum dolor sit amet, elit. Exercitationem, aperiam. Tempore magnam delectus odit perferendis ullam molestias, in voluptatibus 
                      porro ipsam eveniet iusto ex assumenda quis officiis inventore asperiores sed!"
                imgUrl={"https://picsum.photos/250/150"}
          />
          <Card title={<em>{uniqueId()}</em>} 
                body="Lorem ipsum dolor sit amet, elit. Exercitationem, aperiam. Tempore magnam delectus odit perferendis ullam molestias, in voluptatibus 
                      porro ipsam eveniet iusto ex assumenda quis officiis inventore asperiores sed!"
                imgUrl={"https://unsplash.it/250/150"}
          />
         <Card title={<em>{uniqueId()}</em>} 
                body="Lorem ipsum dolor sit amet, elit. Exercitationem, aperiam. Tempore magnam delectus odit perferendis ullam molestias, in voluptatibus 
                      porro ipsam eveniet iusto ex assumenda quis officiis inventore asperiores sed!"
                imgUrl={"https://baconmockup.com/250/150"}
          />
         
          
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
