import React from "react";
import { Card, Col, Row } from "antd";
const A = () => {
  return (
    <div>
   

      <Row
        gutter={12}
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "12px",
        }}
      >
        <Col span={6}>
          <Card
            title="Total Users"
            style={{ textAlign: "center", backgroundColor: "#9EC8B9" }}
            bordered={false}
          >
            450
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Notifications"
            style={{ textAlign: "center", backgroundColor: "#9EC8B9" }}
            bordered={false}
          >
            12
          </Card>
        </Col>
        <Col span={6}>
          <Card
            title="Applications"
            style={{ textAlign: "center", backgroundColor: "#9EC8B9" }}
            bordered={false}
          >
            20
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default A;
