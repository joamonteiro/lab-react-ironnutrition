import logo from './logo.svg';
import './App.css';
//
import foodsJSON from "./foods.json";
import React, {useState} from "react";
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
// import Search from './Search';
//

function App() {

  const [foods, setFoods] = useState(foodsJSON)
  const [passView, setPassView] = useState(false);

  const addFood = (newFood) => {
    setFoods([newFood, ...foods])
  }

  const deleteFood = (name) => {
    setFoods(foods.filter((food) => food.name !== name));
    console.log(`deleting`);
};

  const toggleCreateView = () => {
    setPassView(!passView);
  };

  return (
    <div className="App">
      {passView ? <AddFoodForm adding={addFood}/> : null}
      <div className="add-form">
        <button className="add-form-bt" onClick={toggleCreateView}>{passView ? "Hide Form" : "Add New Food"}</button>
      </div>
      {/* <Search foodsArray={foods}/> */}
      <h1>Food List</h1>
      <div className="foods">
        {foods.map((food)=> {
          return(
            <FoodBox foodprop={food} deleter={deleteFood}/>
          )
        })}
      </div>
      {foods.length === 0 && <h1 className="err-msg">Oooooooops! Something went wrong...<br/><strong>Try to reload the page</strong></h1>}
    </div>
  );
}

          {/* <div>
            <p> {food.name} </p>
            <img src={food.image} width="400rem" alt={food.name}/>
          </div> */}

export default App;

