import React, { useState } from "react";
import { Input } from "antd";

function AddFoodForm({adding}) {
    const[name, setName] = useState("");
    const[image, setImage] = useState("");
    const[calories, setCalories] = useState("");
    const[servings, setServings] = useState("");

    const handleNameInput = (e) => setName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);
    const handleServingsInput = (e) => setServings(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newFood ={
            name,
            image,
            calories,
            servings,
        }
        adding(newFood);
        setName("");
        setImage("");
        setCalories("");
        setServings("")
    }

    return(
        <div>
        <form className="add-form-ct" onSubmit ={handleFormSubmit}>
            <h1>Add Food Entry</h1>
            <label>Name</label>
            <Input value={name} type="text" onChange={handleNameInput} />
            <label>Image</label>
            <Input value={image} type="text" onChange={handleImageInput} />
            <label>Calories</label>
            <Input value={calories} type="number" onChange={handleCaloriesInput} />
            <label>Servings</label>
            <Input value={servings} type="number" onChange={handleServingsInput} />

            <button type="submit">Create</button>
        </form>
        </div>
    );
}

export default AddFoodForm;