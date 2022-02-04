import { CardGroup, Card,Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Data2 = () =>{
    return(
        <>
        <Button type="primary" shape="round"   style={{margin:"25px 5%",fontSize:"18px",paddingTop:"10px",borderRadius:"50px",width:"205px"}}>
        <h5 style={{color:"white",letterSpacing:"1px",fontSize:"22px"}}>Data Science</h5>
        </Button>
        
        <CardGroup  style={{padding:"5px 5%"}}>
       
        <Card>
          <Card.Img variant="top" src="https://www.gamengadgets.com/wp-content/uploads/2019/01/data-science-with-python-training-course-15.jpg" />
          <Card.Body>
            <Card.Title>Python For Data Science</Card.Title>
            <Card.Text>
            The Data Science with Python course teaches you to master the concepts of Python programming. 
            </Card.Text>
            
            <Link to="/datascience/pythonfordatascience"> <Button variant="primary" >Go to Course</Button></Link>
           
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://geo-python-site.readthedocs.io/en/latest/_images/pandas_logo.png" />
          <Card.Body>
            <Card.Title>Numpy & Pandas</Card.Title>
            <Card.Text>
            NumPy, Pandas is one of the most widely used python libraries in data science. 
            </Card.Text>
            <Link to="/datascience/numpypandas"> <Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://www.datasciencetraining.in/media/tableau-training-in-bangalore.jpg" />
          <Card.Body>
            <Card.Title>Tableau Training</Card.Title>
            <Card.Text>
            Tableau Software is a tool that helps make Big Data small, and small data insightful and actionable.
            </Card.Text>
            <Link to="/datascience/matplotlib"><Button variant="primary">Go to Course</Button></Link>
            
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://wallpaperbat.com/img/670539-machine-learning-with-data-skeptic-and-second-spectrum-at-telesign-software-engineering-daily.jpg" />
          <Card.Body>
            <Card.Title>Machine Learning</Card.Title>
            <Card.Text>
            Machine learning is a method of data analysis that automates analytical model building.  
            </Card.Text>
            <Link to="/datascience/machinelearning"><Button variant="primary" > Go to Course </Button></Link>
             
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 1 day ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
        </>
    )
}

export default Data2;