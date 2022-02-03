import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Main2 = () =>{
    return(
        <>
        <h2 style={{paddingLeft:"8%",fontSize:"26px",letterSpacing:"1px",paddingTop:"10px",color:"rgb(97,97,97)",fontWeight:"700"}}>BEST COURSES</h2>
        <CardGroup  style={{padding:"5px 8%"}}>
       
        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1519222970733-f546218fa6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdlYnNpdGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <Card.Body>
            <Card.Title>Web Development</Card.Title>
            <Card.Text>
            Web development is the work involved in developing a website for the Internet or an intranet.
            </Card.Text>
            
            <Link to="/webdevelopment"> <Button variant="primary" >Go to Course</Button></Link>
           
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <Card.Body>
            <Card.Title>App Development</Card.Title>
            <Card.Text>
            App development is the act or process by which a mobile app is developed for mobile devices.
            </Card.Text>
            <Link to="/appdevelopment"> <Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
          <Card.Body>
            <Card.Title>Data Science</Card.Title>
            <Card.Text>
            Data science is an interdisciplinary field that uses scientific methods, processes, algorithms and systems to extract knowledge
            </Card.Text>
            <Link to="/datascience"><Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://media.istockphoto.com/photos/artificial-intelligence-and-technology-picture-id1296904409?b=1&k=20&m=1296904409&s=170667a&w=0&h=vU8YWiMsexO9WPCghhL7Sq5KTTfzv99QyqSeEZun6Kk=" />
          <Card.Body>
            <Card.Title>AI & ML</Card.Title>
            <Card.Text>
            artificial intelligence (AI) and machine learning (ML)—represents an important evolution in computer science and data processing. 
            </Card.Text>
            <Link to="/ai&ml"><Button variant="primary" > Go to Course </Button></Link>
             
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
        </>
    )
}

export default Main2;