import { Carousel} from "antd";
import png from "./m4.png";
const Main4 = ()  =>{
    return(
        <>
        <Carousel style={{ width: "100%", margin: "5px 15%" }}>
        <div>
          <img
            style={{ width: "40%", margin: "5px 10%" }}
            src={png}
            alt=""
          />
        </div>
        
      </Carousel>
     
        </>
    )
}

export default Main4;