import React  from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter, BrowserRouter as Router} from 'react-router-dom';
import Button from '@material-ui/core/Button';
function Home(props) {
    const MovieList = [{name:"Murder Mystery",url:"https://fr.web.img6.acsta.net/pictures/19/06/13/09/35/4216544.jpg"},{name:"Shaft",url:"https://fr.web.img6.acsta.net/pictures/19/02/06/08/15/4431903.jpg"},{name:"El Camino",url:"https://fr.web.img5.acsta.net/pictures/19/09/24/17/24/4667551.jpg"},{name:"Last Vegas",url:"https://fr.web.img3.acsta.net/pictures/210/395/21039597_20130913113752098.jpg"}]
    return (
    <div className="App">
{ MovieList.map(el=>
<div className="Movies">
<Router>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={el.url} />
<Card.Body>
<Card.Title>{el.name}</Card.Title>
</Card.Body>
<Card.Body>
<Button onClick={()=>props.history.push(`/${el.name.split('').filter(e => e.trim().length).join('')}`)} variant="outlined" color="primary"> See Description </Button> 
</Card.Body>
</Card>
</Router>
</div>
)}
    </div>
    );}
    export default withRouter(Home);