import { Row, Col, Grid } from "antd";
import React, { useState } from "react";
import { styles } from "./Styles";
import CenteralCol from "./CenteralCol";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";



const ProfileLayout = () => {
  const [currentPage, setCurrentPage] = useState("A");
  // const [visible, setVisible] = useState(false);
  const points = Grid.useBreakpoint();

  return (
    <>
    
      <Row style={{ minHeight: "100vh" }}>
        {points.md && (
          <Col style={styles.leftCol} md={4}>
            <LeftSidebar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </Col>
        )}
     
        <Col
          style={{ backgroundColor: "grey", color: "white" }}
          md={16}
          xs={24}
        >
          <CenteralCol currentPage={currentPage} />
        </Col>
        
        {points.md && (
          <Col style={styles.rightCol} md={4} className="sidebar">
            <RightSidebar
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            
          </Col>
        )}
        
      </Row>
    </>
  );
};

export default ProfileLayout;
