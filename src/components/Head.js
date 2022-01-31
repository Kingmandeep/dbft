import { useState } from "react";
import { AutoComplete, Menu, Avatar, Button } from "antd";
import {
  UserAddOutlined,
  LogoutOutlined,
  MenuOutlined,
  MailOutlined,
  ShoppingCartOutlined,
  IdcardOutlined,
  UserOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import logos from "./dbft.jpg";

const { SubMenu, Item } = Menu;

const Head = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e) => {
    setCurrent(e.key)
  };

  return (
    <>
      <Menu
        style={{ width: "100%", height: 75, fontSize: 18, padding:"5 50px" }}
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Item key="icon">
          <Avatar shape="square" size={68} src={logos} />
        </Item>
        <Item
          key="home"
          icon={<AppstoreOutlined style={{ fontSize: "110%" }} />}
          style={{ fontSize: 18, paddingTop: 10, color: "orangered" }}
        >
          Home
        </Item>
        <SubMenu
        key="course"
       
        icon={<MenuOutlined style={{ fontSize: "110%" }} />}
        style={{ fontSize: 18, paddingTop: 15 }}
        title="Courses"
      >
        <Item key="c1">Web Development</Item>
        <Item key="c2">Android Development</Item>
        <Item key="c3">Data Science</Item>
        <Item key="c4">A I & M L</Item>
        <Item key="c5">Block Chain</Item>
      </SubMenu>
        <Item
          key="about"
          icon={<IdcardOutlined style={{ fontSize: "110%" }} />}
        >
          About
        </Item>
        <Item key="help" icon={<MailOutlined style={{ fontSize: "110%" }} />}>
          Contact
        </Item>

        
        <Item
          key="signup"
          className="float-end"
          style={{paddingTop:10}}
          icon={
            <UserAddOutlined
              style={{ fontSize: "120%", color: "orangered" }}
            />
          }
        >
          SignUp
        </Item>
        <Item
          key="login"
          className="float-end"
          style={{paddingTop:10}}
          icon={
            <UserOutlined
              style={{ fontSize: "120%", color: "orangered" }}
            />
          }
        >
          LogIn
        </Item>

        
      </Menu>
    </>
  );
};

export default Head;
