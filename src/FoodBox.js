import React from "react";
import { Card, Col, Divider, Button } from "antd";

function FoodBox({foodprop, deleter, checker}) {

    return(
        <Col>
            <Card
                title={foodprop.name}
                style={{ width: 230, height: 300, margin: 10 }}
            >
                <img src={foodprop.image} height={60} />
                <p>Calories: {foodprop.calories}</p>
                <p>Servings: {foodprop.servings}</p>
                <p>
                <b>Total Calories: {foodprop.calories * foodprop.servings} </b> kcal
                </p>
                <Button type="primary" onClick={() => deleter(foodprop.name)} > Delete </Button>
            </Card>
        </Col>
    );
}

export default FoodBox;