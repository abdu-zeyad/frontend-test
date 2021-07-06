import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Card, Button } from "react-bootstrap";
import Favoriteform from "./Favoriteform";
export class Favorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Favdata: [],
    };
  }
  componentDidMount = async () => {
    const server = process.env.REACT_APP_SERVER;
    const allData = await axios.get(`${server}/getfavdata`);
    this.setState({
      Favdata: allData.data,
    });

    console.log(this.state.Favdata);
  };
  delete = async (id) => {
    const server = process.env.REACT_APP_SERVER;
    console.log(id);
    const newData = await axios.delete(`${server}/delete?id=${id}`);
    this.setState({
      Favdata: newData.data,
    });
  };
  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          {this.state.Favdata.map((item, idx) => {
            return (
              <Col>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={item.strDrinkThumb} />
                  <Card.Body>
                    <Card.Title>{item.strDrink}</Card.Title>
                    <Card.Text></Card.Text>
                    {/* <Button
                      variant="primary"
                      onClick={() => {
                        this.props.AddToFav(this.props.idx);
                      }}
                    >
                      update
                    </Button> */}
                    <Button
                      variant="primary"
                      onClick={() => {
                        this.delete(item._id);
                      }}
                    >
                      delete
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Favoriteform />
      </div>
    );
  }
}

export default Favorite;
