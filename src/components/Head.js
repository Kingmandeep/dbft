import { useState } from "react";
import {  Menu, Avatar } from "antd";
import {
  UserAddOutlined,

  MenuOutlined,
  MailOutlined,

  IdcardOutlined,
  UserOutlined,
  AppstoreOutlined,
 
} from "@ant-design/icons";

import logos from "./dbft.jpg";
import { Link } from "react-router-dom";

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
        <Link to="/">Home</Link>
        </Item>
        <SubMenu
        key="course"
       
        icon={<MenuOutlined style={{ fontSize: "110%" }} />}
        style={{ fontSize: 18, paddingTop: 15 }}
        title="Courses"
      >
        <Item key="c1"> <Link to="/webdevelopment">Web Development</Link></Item>
        <Item key="c2"><Link to="/appdevelopment">App Development</Link></Item>
        <Item key="c3"><Link to="/datascience">Data Science</Link></Item>
        <Item key="c4"><Link to="/ai&ml">A I & M L</Link></Item>
        <Item key="c5"><Link to="/blockchain">Block Chain</Link></Item>
      </SubMenu>
      
        <Item
          key="about"
          icon={<IdcardOutlined style={{ fontSize: "110%" }} />}
        >
        <Link to="/about">About</Link>
        </Item>
        <Item key="help" icon={<MailOutlined style={{ fontSize: "110%" }} />}>
        <Link to="/contact">Contact</Link>
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
