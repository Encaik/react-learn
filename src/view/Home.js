import React, { Component } from "react";
import { Row, Col } from "antd";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row>
        <Col span={12}>1</Col>
        <Col span={12}>2</Col>
      </Row>
    );
  }
}

export default Home;
