
import { Col, Grid, Row } from "antd";
import { Avatar } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined, SearchOutlined, UserOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { Drawer } from "antd";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
const Header = () => {
      const [currentPage, setCurrentPage] = useState("A");
      const [open, setOpen] = useState(false);
  const points = Grid.useBreakpoint();
  return (
    <>
      {points.md && (
        <div style={{ position: "sticky", top: "0px" }}>
          <Row
            style={{
              backgroundColor: "#1B4242",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Col>
              <div style={{ fontSize: "22px", padding: "12px" }}>
                <SearchOutlined />
              </div>
            </Col>
            <Col>
              <div>
                <button
                  style={{
                    padding: "0px",
                    backgroundColor: "#1B4242",
                    border: "none",
                  }}
                >
                  <Avatar size={45} icon={<UserOutlined />} />
                  <span
                    style={{
                      padding: "6px",
                      color: "#ffff",
                      backgroundColor: "#1B4242",
                    }}
                  >
                    Login
                  </span>
                </button>
              </div>
            </Col>
          </Row>
        </div>
      )}
      {!points.md && (
        <div style={{ position: "sticky", top: "0px" }}>
          <Row
            style={{
              backgroundColor: "#1B4242",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* Left Drawer */}
            <Col>
              <div style={{ fontSize: "22px", padding: "12px" }}>
                <MenuUnfoldOutlined onClick={() => setOpen(true)} />

                <Drawer
                  placement={"left"}
                  closable={false}
                  onClose={() => setOpen(false)}
                  open={open}
                  // key={placement}
                >
                  <LeftSidebar
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </Drawer>
              </div>
            </Col>
            <Col>
              <div style={{ fontSize: "22px", padding: "12px" }}>
                <SearchOutlined />
              </div>
            </Col>
            {/* Right Drawer */}
            <Col>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                }}
              >
               
                  <Avatar size={45} icon={<UserOutlined />} />
                  <span
                    style={{
                      padding: "6px",
                      color: "#ffff",
                      backgroundColor: "#1B4242",
                    }}
                  >
                    Login{" "}
                    <MenuFoldOutlined
                      style={{ fontSize: "22px", textAlign: "center" }}
                      onClick={() => setOpen(false)}
                    />
                    <Drawer
                      placement={"right"}
                      closable={false}
                      onClose={() => setOpen(false)}
                      // open={open}

                      // key={placement}
                    >
                      <RightSidebar />
                    </Drawer>
                  </span>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </>
  );
};

export default Header;
