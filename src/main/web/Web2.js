import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Web2 = () =>{
    return(
        <>
        <Button type="primary" shape="round"   style={{margin:"25px 5%",fontSize:"18px",paddingTop:"10px",borderRadius:"50px",width:"165px"}}>
        <h5 style={{color:"white",letterSpacing:"1px",fontSize:"22px"}}>Front-end</h5>
        </Button>
        
        <CardGroup  style={{padding:"5px 5%"}}>
       
        <Card>
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/1631871.jpg" />
          <Card.Body>
            <Card.Title>HTML</Card.Title>
            <Card.Text>
            HTML is the standard markup language for documents designed to be displayed in a web browser.
            </Card.Text>
            
            <Link to="/html"> <Button variant="primary" >Go to Course</Button></Link>
           
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://wallpapercave.com/wp/wp3181452.jpg" />
          <Card.Body>
            <Card.Title>CSS</Card.Title>
            <Card.Text>
            CSS is a stylesheet language used to describe the presentation of a document written in HTML or XML.
            </Card.Text>
            <Link to="/css"> <Button variant="primary">Go to Course</Button></Link>
            
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

export default Web2;