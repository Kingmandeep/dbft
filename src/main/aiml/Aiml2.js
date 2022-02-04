import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Aiml2 = () =>{
    return(
        <>
        <Button type="primary" shape="round"   style={{margin:"25px 5%",fontSize:"18px",paddingTop:"10px",borderRadius:"50px",width:"185px"}}>
        <h5 style={{color:"white",letterSpacing:"1px",fontSize:"22px"}}>Artificial Intelligence</h5>
        </Button>
        
        <CardGroup  style={{padding:"5px 5%"}}>
       
        <Card>
          <Card.Img variant="top" src="https://wallpaper.dog/large/5560239.jpg" />
          <Card.Body>
            <Card.Title>Intoduction to AI</Card.Title>
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
          <Card.Img variant="top" src="https://d33wubrfki0l68.cloudfront.net/980b5143471e16cf6afee4ae5d4b467bd79aacf0/784ef/1_mwfqygyvyqbzkkbphs5j_g.jpeg" />
          <Card.Body>
            <Card.Title>Python</Card.Title>
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
          <Card.Img variant="top" src="https://www.thoughtmedia.com/wp-content/uploads/2017/04/shutterstock_175625024.jpg" />
          <Card.Body>
            <Card.Title>Deep Learning</Card.Title>
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
          <Card.Img variant="top" src="https://miro.medium.com/max/1200/0*s6JTB-lNULLGP3iH" />
          <Card.Body>
            <Card.Title>Advance Deep Learning</Card.Title>
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

export default Aiml2;