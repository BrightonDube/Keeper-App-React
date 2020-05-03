//jshint esversion: 8
import React from 'react';
import Header from "./components/Header";
import './App.css';
import Footer from './components/Footer';
import Card from './components/Card';
import Composer from './components/Composer';

function App() { 

  return (
    <div className="App">
      <div id="content-wrap">
        <Header />  
        <div className="note-input">
        <Composer placeholderText="Enter Note Title" /> 
        <Composer placeholderText="Enter Note Text"/> 
        <button style={{fontSize : ".7rem"}}>Add</button> 
        </div>        
             
        <div className="innerContent">
          <Card title={<em></em>} 
                body="Lorem ipsum dolor sit amet, elit. Exercitationem, aperiam. Tempore magnam delectus odit perferendis ullam molestias, in voluptatibus 
                      porro ipsam eveniet iusto ex assumenda quis officiis inventore asperiores sed!"
                imgUrl={"http://placekitten.com/g/250/150"}
                maxText = {200}
          />      
         
         
        </div>
        
      </div>

      <Footer />
    </div>
  );
}

export default App;
