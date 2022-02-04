import { Carousel } from "antd";
const Main1 = () => {
  return (
    <>
      <Carousel autoplay style={{ padding: "5px 5%", border:"none" }}>
      <div>
          <img
            style={{  width: "65%",
            margin:"0 20%",
            borderRadius: "10px",
            border: "none", }}
            src="https://www.hardsoftcomputers.co.uk/wp-content/uploads/2021/03/header.png"
            alt=""
          />
        </div>
        <div style={{ border: "none" }}>
          <img
            style={{
              width: "40%",
              margin:"0 30%",
              borderRadius: "10px",
              border: "none",
            }}
            src="https://agreemtech.com/wp-content/uploads/2021/05/web-development.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{  
              width: "50%",
              margin:"0 25%",
            borderRadius: "10px",
            border: "none", }}
            src="https://t3.ftcdn.net/jpg/02/24/86/92/360_F_224869243_WZHOVD3GqYq6ZUzRkZbQNTXzg1FzHwhd.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            style={{  
              width: "58%",
              margin:"0 20%",
            borderRadius: "10px",
            border: "none", }}
            src="https://t4.ftcdn.net/jpg/04/08/34/71/360_F_408347174_dAhyjnOPyVZpoQFpAnMSgFHHbbHo1dNU.jpg"
            alt=""
          />
        </div>
        
      </Carousel>
      
    </>
  );
};

export default Main1;
