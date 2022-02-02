import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const And2 = () =>{
    return(
        <>
        <Button type="primary" shape="round"   style={{margin:"25px 5%",fontSize:"18px",paddingTop:"10px",borderRadius:"50px",width:"165px"}}>
        <h5 style={{color:"white",letterSpacing:"1px",fontSize:"22px"}}>Android</h5>
        </Button>
        
        <CardGroup  style={{padding:"5px 5%"}}>
       
        <Card>
          <Card.Img variant="top" src="https://wallpaperbat.com/img/480843-logo-java-1920x1080-download-hd-wallpaper.png" />
          <Card.Body>
            <Card.Title>JAVA</Card.Title>
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
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/4293252.jpg" />
          <Card.Body>
            <Card.Title>Android Studio</Card.Title>
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
          <Card.Img variant="top" src="https://wallpaperbat.com/img/369977-developer-wallpaper-top-free-developer-background.png" />
          <Card.Body>
            <Card.Title>Eclipse</Card.Title>
            <Card.Text>
            JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.
            </Card.Text>
            <Link to="/javascript"><Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        
      </CardGroup>
        </>
    )
}

export default And2;