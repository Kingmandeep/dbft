import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Main3 = () =>{
    return(
        <>
        <h2 style={{paddingLeft:"8%",fontSize:"26px",letterSpacing:"1px",paddingTop:"10px",color:"rgb(97,97,97)",fontWeight:"700",marginTop:"20px"}}>FAMOUS COURSES</h2>
        <CardGroup  style={{padding:"5px 8%",marginBottom:"20px"}}>
       
        <Card>
          <Card.Img variant="top" src="https://wallpapercave.com/wp/wp5191404.png" />
          <Card.Body>
            <Card.Title>Node.js</Card.Title>
            <Card.Text>
            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser. 
            </Card.Text>
            <Link to="/nodejs"><Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.educative.io/v2api/collection/10370001/5227455105204224/image/6349680696885248" />
          <Card.Body>
            <Card.Title>Mongodb</Card.Title>
            <Card.Text>
            MongoDB is a document database used to build highly available and scalable internet applications.  
            </Card.Text>
            <Link to="/mongodb"><Button variant="primary" > Go to Course </Button></Link>
             
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/1555163.jpg" />
          <Card.Body>
            <Card.Title>JavaScript</Card.Title>
            <Card.Text>
            JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.
            </Card.Text>
            <Link to="/javascript"><Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://wallpapercave.com/wp/wp4923992.png" />
          <Card.Body>
            <Card.Title>React.js</Card.Title>
            <Card.Text>
            React.js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications.  
            </Card.Text>
            <Link to="/reactjs"><Button variant="primary" > Go to Course </Button></Link>
             
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
        </>
    )
}

export default Main3;