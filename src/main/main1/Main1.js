import { Carousel } from "antd";
const Main1 = () => {
  return (
    <>
      <Carousel autoplay style={{ padding: "5px 5%", border:"none" }}>
      <div>
          <img
            style={{  width: "50%",
            margin:"0 25%",
            borderRadius: "10px",
            border: "none", }}
            src="https://www.godfrey.com/-/media/godfrey/insights/thought-leadership/build-your-most-effective-marketing-team/sg-blog-trdshw-pr-p1.gif?la=en&&hasA84C768B1C61DF90913E5CE4811BBB9DA"
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
            src="https://cdn.dribbble.com/users/2918596/screenshots/10001475/teamwork.gif"
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
            src="https://www.spaceitbd.com/wp-content/uploads/2018/09/homepage-hero-team.gif"
            alt=""
          />
        </div>
        <div>
          <img
            style={{  
              width: "40%",
              margin:"0 30%",
            borderRadius: "10px",
            border: "none", }}
            src="https://cdn.dribbble.com/users/2086530/screenshots/4830501/_metric_ai_2.gif"
            alt=""
          />
        </div>
        
      </Carousel>
      
    </>
  );
};

export default Main1;
