import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Main2 = () =>{
    return(
        <>
        <h2 style={{paddingLeft:"5%",marginTop:"15px",fontSize:"26px",letterSpacing:"1px",paddingTop:"10px",color:"rgb(97,97,97)",fontWeight:"700"}}>BEST COURSES</h2>
        <CardGroup  style={{padding:"5px 5%"}}>
       
        <Card>
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/2525117.jpg" />
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
          <Card.Img variant="top" src="https://c0.wallpaperflare.com/preview/519/791/635/concept-development-device-flat.jpg" />
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
          <Card.Img variant="top" src="https://www.analyticsinsight.net/wp-content/uploads/2020/03/Data-science.png" />
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
          <Card.Img variant="top" src="https://wallpaperaccess.com/full/3079638.png" />
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