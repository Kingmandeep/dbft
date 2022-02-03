import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const And2 = () =>{
    return(
        <>
        <Button type="primary" shape="round"  style={{margin:"25px 5%",fontSize:"18px",paddingTop:"10px",borderRadius:"50px"}}>
        <h5 style={{color:"white",letterSpacing:"1px",fontSize:"22px"}}>App Developer</h5>
        </Button>
        
        <CardGroup  style={{padding:"5px 5%"}}>
       
        <Card>
          <Card.Img variant="top" src="https://wallpaperbat.com/img/480843-logo-java-1920x1080-download-hd-wallpaper.png" />
          <Card.Body>
            <Card.Title>JAVA</Card.Title>
            <Card.Text>
            HTML is the standard markup language for documents designed to be displayed in a web browser.
            </Card.Text>
            
            <Link to="/appdevelopment/java"> <Button variant="primary" >Go to Course</Button></Link>
           
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
            <Link to="/appdevelopment/androidstudio"> <Button variant="primary">Go to Course</Button></Link>
            
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
            <Link to="/appdevelopment/eclipse"><Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        
      </CardGroup>
        <CardGroup  style={{padding:"20px 5%"}}>
       
        <Card>
          <Card.Img variant="top" src="https://miro.medium.com/max/3840/1*ilkHJoiLurxjY5VRqkiqJA.jpeg" />
          <Card.Body>
            <Card.Title>SWIFT</Card.Title>
            <Card.Text>
            Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.
            </Card.Text>
            
            <Link to="/appdevelopment/swift"> <Button variant="primary" >Go to Course</Button></Link>
           
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.wallpaperbetter.com/wallpaper/804/246/411/apple-blue-background-1080P-wallpaper.jpg" />
          <Card.Body>
            <Card.Title>IOS</Card.Title>
            <Card.Text>
            An iOS developer is responsible for developing applications for mobile devices powered by Apple's iOS operating system.
            </Card.Text>
            <Link to="/appdevelopment/ios"> <Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://miro.medium.com/max/2000/1*tCSazrurX5b22yOG5XQnRA.png" />
          <Card.Body>
            <Card.Title>HYBRID</Card.Title>
            <Card.Text>
            Hybrid app development is the creation of a single app that can run on multiple operating systems including Windows, Android and iOS.
            </Card.Text>
            <Link to="/appdevelopment/hybrid"><Button variant="primary">Go to Course</Button></Link>
            
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