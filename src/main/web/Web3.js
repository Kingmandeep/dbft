import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Web3 = () =>{
    return(
        <>
        <Button type="primary" shape="round"   style={{margin:"25px 5%",fontSize:"18px",paddingTop:"10px",borderRadius:"50px",width:"165px",backgroundColor:"#003333"}}>
        <h5 style={{color:"white",letterSpacing:"1px",fontSize:"22px"}}>Back-end</h5>
        </Button>
        
        <CardGroup  style={{padding:"5px 5%"}}>
       
        <Card >
          <Card.Img variant="top" src="https://wallpapercave.com/wp/wp1958117.jpg" />
          <Card.Body>
            <Card.Title>PHP</Card.Title>
            <Card.Text>
            PHP is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.
            </Card.Text>
            
            <Link to="/php"> <Button variant="primary" >Go to Course</Button></Link>
           
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/2138094.jpg" />
          <Card.Body>
            <Card.Title>SQL</Card.Title>
            <Card.Text>
            SQL is a standard language for storing, manipulating and retrieving data in databases. 
            </Card.Text>
            <Link to="/sql"> <Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
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
      </CardGroup>
        </>
    )
}

export default Web3;