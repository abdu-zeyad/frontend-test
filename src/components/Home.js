import React, { Component } from "react";

export class Home extends Component {
  componentDidMount = async () => {
    const server = process.env.REACT_APP_SERVER;
    console.log(server);
  };
  render() {
    return <div>home</div>;
  }
}

export default Home;
