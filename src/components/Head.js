import { useState } from "react";
import {  Menu, Avatar } from "antd";
import {
  

  MenuOutlined,
  MailOutlined,

  IdcardOutlined,
  
  AppstoreOutlined,
 
} from "@ant-design/icons";

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
        style={{ width: "100%", height: 85, fontSize: 18, padding:"5 50px" }}
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
      
        <Item key="icon">
        <h4 style={{float:"left",marginTop:"25px",color:"rgb(34,196,236)"}}>EduIndia</h4><Avatar  shape="square" size={75} src="https://i.pinimg.com/originals/c0/df/aa/c0dfaa1d8492c00de9d711b6c44e1c29.gif" />
        </Item>
        <Item
          key="home"
          icon={<AppstoreOutlined style={{ fontSize: "110%" }} />}
          style={{ fontSize: 18, paddingTop: 10, color: "orangered",marginLeft:"10%",marginRight:"2%" }}
        >
        <Link to="/">Home</Link>
        </Item>
        <SubMenu
        key="course"
       
        icon={<MenuOutlined style={{ fontSize: "110%" }} />}
        style={{ fontSize: 18, paddingTop: 15,marginRight:"2%" }}
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
          style={{ fontSize: 18, paddingTop: 14,marginRight:"2%"}}
        >
        <Link to="/about">About</Link>
        </Item>
        <Item key="help" icon={<MailOutlined style={{ fontSize: "110%" }} />}
        style={{ fontSize: 18, paddingTop: 14 }}
        >
        
        <Link to="/contact">Contact</Link>
        </Item>

        
      </Menu>
    </>
  );
};

export default Head;
