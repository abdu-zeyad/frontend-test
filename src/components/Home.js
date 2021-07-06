import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount = async () => {
    const server = process.env.REACT_APP_SERVER;
    const allData = await axios.get(`${server}/all`);
    this.setState({
      data: allData.data,
    });

    console.log(this.state.data);
  };
  AddToFav = async (idx) => {
    const server = process.env.REACT_APP_SERVER;
    const obj = {
      strDrink: this.state.data[idx].strDrink,
      strDrinkThumb: this.state.data[idx].strDrinkThumb,
    };
    await axios.post(`${server}/addtofav`, obj);
    console.log(obj);
  };
  render() {
    return (
      <div>
        <Row xs={1} md={3} className="g-4">
          {this.state.data.map((item, idx) => {
            return (
              <Col>
                <Item item={item} idx={idx} AddToFav={this.AddToFav} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Home;
