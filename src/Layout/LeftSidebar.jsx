import React from 'react'

import { AppstoreAddOutlined, CreditCardOutlined, DatabaseOutlined, UserOutlined } from '@ant-design/icons';

const LeftSidebar= ({ currentPage, setCurrentPage }) => {
  return (
    <div style={{ padding: "10px", position: "sticky", top: "0px"}} >
      <div className="logo">
        Welcome
      </div>
      <div
        style={{
          borderRight: currentPage === "A" ? "1px solid black" : "",
          cursor: "pointer",
          padding: "20px",
          fontSize: "20px",
        }}
        onClick={() => setCurrentPage("A")}
      >
        <CreditCardOutlined />
        DashBoard
      </div>
      <div
        style={{
          borderRight: currentPage === "B" ? "1px solid purple" : "",
          cursor: "pointer",
          padding: "20px",
          fontSize: "20px",
        }}
        onClick={() => setCurrentPage("B")}
      >
        <DatabaseOutlined />
        Products
      </div>
      <div
        style={{
          borderRight: currentPage === "C" ? "1px solid purple" : "",
          cursor: "pointer",
          padding: "20px",
          fontSize: "20px",
        }}
        onClick={() => setCurrentPage("C")}
      >
        <AppstoreAddOutlined /> New Prodduct
      </div>
      <div
        style={{
          borderRight: currentPage === "D" ? "1px solid purple" : "",
          cursor: "pointer",
          padding: "20px",
          fontSize: "20px",
        }}
        onClick={() => setCurrentPage("D")}
      >
        <UserOutlined />
        Profile
      </div>
    </div>
  );
};

export default LeftSidebar;