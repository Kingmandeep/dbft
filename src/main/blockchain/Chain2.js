import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Chain2 = () =>{
    return(
        <>
        <Button type="primary" shape="round"   style={{margin:"25px 5%",fontSize:"18px",paddingTop:"10px",borderRadius:"50px",width:"165px"}}>
        <h5 style={{color:"white",letterSpacing:"1px",fontSize:"22px"}}>Block Chain</h5>
        </Button>
        
        <CardGroup  style={{padding:"5px 5%"}}>
       
        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1526378800651-c32d170fe6f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmxvY2tjaGFpbnxlbnwwfHwwfHw%3D&w=1000&q=80" />
          <Card.Body>
            <Card.Title>Introduction to Block Chain </Card.Title>
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
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/395434.jpg" />
          <Card.Body>
            <Card.Title>Introduction to Bitcoins</Card.Title>
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
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/4785530.png" />
          <Card.Body>
            <Card.Title>Introduction to Ethereum</Card.Title>
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
          <Card.Img variant="top" src="https://media.istockphoto.com/photos/blockchain-technology-with-abstract-background-picture-id871491470?k=20&m=871491470&s=170667a&w=0&h=L-YAhsq3BB3hZ3M2PbYueABYpLV0mQ3WJnU1S7Veb9A=" />
          <Card.Body>
            <Card.Title>Introduction to CryptoCurrency</Card.Title>
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

export default Chain2;