import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export class Item extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={this.props.item.strDrinkThumb} />
          <Card.Body>
            <Card.Title>{this.props.item.strDrink}</Card.Title>
            <Card.Text></Card.Text>
            <Button
              variant="primary"
              onClick={() => {
                this.props.AddToFav(this.props.idx);
              }}
            >
              add to fav
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Item;
