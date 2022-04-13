import { Carousel, Card } from "antd";
import { Avatar, Row, Col } from "antd";
import logo from "./Mandeep.jpeg";
import { UserOutlined, GoldOutlined, BookOutlined } from "@ant-design/icons";
const { Meta } = Card;
const Abouts = () => {
  return (
    <>
      <Carousel>
        <div>
          <img
            style={{ width: "30%", margin: "5px 35%" }}
            src="https://cdn.dribbble.com/users/1350622/screenshots/4413501/9.gif"
            alt=""
          />
        </div>
      </Carousel>
      <div
        className="site-card-border-less-wrapper"
        style={{ margin: "20px 10%" }}
      >
        <Card bordered={false} style={{ width: "100%" }}>
          <h1
            style={{
              fontWeight: "bolder",
              color: "gray",
              letterSpacing: "2px",
            }}
          >
            About
          </h1>
          <p style={{ fontSize: "18px" }}>
            Our aim is to be become one of the most admired brands in the
            education sector and help young aspirants make their dreams come
            true through quality teaching, technology-enabled systems, and
            commitment. We believe that the hard labor and efforts of children
            require the right channel to blossom into success stories. We aim to
            train more such hardworking and bright young minds towards their
            goals by producing double-digit all India top 100 rank holders. With
            our clear-cut, straightforward result-oriented strategy, we are
            nearing towards that dream every day.
          </p>
        </Card>

        <Row
          style={{
            padding: "25px 15%",
            textAlign: "center",
            letterSpacing: "1.5px",
    
          }}
        >
          <Col style={{ padding: "10px 5%", fontWeight: "bold" }}>
            <h2 style={{ fontWeight: 700, color: "rgb(107,103,103)" }}>
              COURSES
            </h2>
            <h1 style={{ fontWeight: 700, color: "rgb(63,62,62)" }}>
              <BookOutlined style={{ color: "rgb(107,103,103)" }} /> 100+
            </h1>
          </Col>
          <Col style={{ padding: "10px 5%", fontWeight: "bolder" }}>
            <h2 style={{ fontWeight: 700, color: "rgb(107,103,103)" }}>
              INSTRUCTORS
            </h2>
            <h1 style={{ fontWeight: 700, color: "rgb(63,62,62)" }}>
              <GoldOutlined style={{ color: "rgb(107,103,103)" }} /> 30+
            </h1>
          </Col>
          <Col style={{ padding: "10px 5%" }}>
            <h2 style={{ fontWeight: 700, color: "rgb(107,103,103)" }}>
              STUDENTS
            </h2>
            <h1 style={{ fontWeight: 700, color: "rgb(63,62,62)" }}>
              <UserOutlined style={{ color: "rgb(107,103,103)" }} /> 1000+
            </h1>
          </Col>
        </Row>

        <Card bordered={false} style={{ width: "100%" }}>
          <h1
            style={{
              fontWeight: "bolder",
              color: "gray",
              letterSpacing: "2px",
            }}
          >
            OUR MISSION
          </h1>
          <p style={{ fontSize: "18px" }}>
            Our mission is to empower the students and make their study easy and
            DoubtFree. We provide world class teaching faculty and a state of
            art learning platform for coding Education. with a large pool of
            dedicated , highly qualified and experienced Faculty members, we
            maintain an optimal Student-faculty ratio to attend every student
            with extra care.
          </p>
        </Card>
        <Card bordered={false} style={{ width: "100%" }}>
          <h1
            style={{
              fontWeight: "bolder",
              color: "gray",
              letterSpacing: "2px",
            }}
          >
           MEET OUR TEAM
          </h1>
          
        </Card>

    
        <Card
          hoverable
          
          style={{ textAlign:"center"}}
          cover={
            <Avatar size={204} src={logo} style={{ margin:"0 auto"}}/>
          }
        >
          <Meta title="MANDEEP GUPTA" description=" FUTURE CEO & BUSINESS TYCOON " />
        </Card>
        
        
     
      </div>
    </>
  );
};
export default Abouts;
