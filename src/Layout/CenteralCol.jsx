import React from "react";
import A from "../screens/A";
import B from "../screens/B";
import C from "../screens/C";
import D from "../screens/D";
import Header from "./Header";
import { FloatButton } from 'antd';
import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons';


const CenteralCol = ({ currentPage }) => {
  return (
    <>
  
  <FloatButton.Group
    trigger="hover"
    type="primary"
    style={{ right: 94 }}
    icon={<CustomerServiceOutlined />}
  >
    <FloatButton />
    <FloatButton icon={<CommentOutlined />} />
  </FloatButton.Group>
      <Header />
      
      {currentPage === "A" && <A />}
      {currentPage === "B" && <B />}
      {currentPage === "C" && <C />}
      {currentPage === "D" && <D />}
    
    </>
  );
};

export default CenteralCol;
