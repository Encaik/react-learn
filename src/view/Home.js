import React, { Component } from "react";
import {
  Row,
  Col,
  Table,
  Button,
  Icon,
  DatePicker,
  Input,
  Select,
  Breadcrumb
} from "antd";
import { BrowserRouter as Router } from "react-router-dom";
const { Option } = Select;


class Home extends Component {
  render() {
    return (
      <Row>
        <Col>
          <Row>
            <Col span={4}>
              <Button>1</Button>
            </Col>
            <Col span={4}>
              <Icon type="edit" />
            </Col>
            <Col span={4}>
              <DatePicker />
            </Col>
            <Col span={4}>
              <Input placeholder="Basic usage" />
            </Col>
            <Col span={4}>
              <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>Disabled</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
            <Col span={4}>
              <Breadcrumb>
                <Breadcrumb.Item>{console.log(Router)}</Breadcrumb.Item>
              </Breadcrumb>,
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <Table
                dataSource={this.state.data}
                columns={this.state.columns}
              />
            </Col>
          </Row >
        </Col>
      </Row>
    );
  }
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      columns: [
        {
          title: "姓名",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "性别",
          dataIndex: "sex",
        }
      ]
    };
  }
  componentDidMount() {
    this.axios.get("http://192.168.1.121:8002/hello")
      .then((res) => {
        console.log("axios 获取数据成功" + JSON.stringify(res.data));
        this.setState(
          {
            data: res.data,
          }
        );
      })
      .catch((error) => {
        console.log("axios 获取数据失败:" + error);
      });
  }
}

export default Home;
