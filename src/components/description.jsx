import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter, BrowserRouter as Router} from 'react-router-dom';
function Desc( props ) {
    const MovieDesc=[{name:"Murder Mystery",desc:"Un policier new-yorkais honore une ancienne promesse et emmène sa femme en voyage en Europe. Au hasard d'une rencontre pendant le vol, le couple se fait convier à une réunion de famille privée sur le yacht luxueux d'un vieux milliardaire du nom de Malcolm Quince. Cependant, lorsque celui-ci est assassiné, les deux invités deviennent les principaux suspects.",vurl:"https://www.youtube-nocookie.com/embed/yIVd0dqjTSE" },{name:"Shaft",desc:"Le légendaire détective privé, John Shaft, fait équipe avec son fils, l'expert en cybersécurité JJ Shaft Jr., pour tenter d'en savoir plus sur un décès suspect en parcourant les rues de Harlem.",vurl:"https://www.youtube-nocookie.com/embed/lD41XdWcmbY"},{name:"El Camino",desc:"À la suite de sa tragique évasion, Jesse doit accepter son passé s'il veut se construire un avenir... ou quelque chose qui y ressemble plus ou moins. Un film qui fait suite au final de la série Breaking Bad, suivant les aventures de Jesse Pinkman.",vurl:"https://www.youtube-nocookie.com/embed/pbhCzMrc_8k" },{name:"Last Vegas",desc:"Un groupe de quatre vieux amis, Billy, Paddy, Archie et Sam décident de faire un enterrement de vie de garçon à Las Vegas.",vurl:"https://www.youtube-nocookie.com/embed/TvK3m0wJutI" }];
    const ActualMovie = MovieDesc.find(x=>x.name.split('').filter(e => e.trim().length).join('') === props.match.params.id);
    return(
    <>
    <Router>
    <h1>{props.match.params.id}</h1>
    <p>{ActualMovie.desc}</p>
    <h2>Trailer:</h2>
    <iframe width="560" height="315" src={ActualMovie.vurl} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <Button onClick={()=>props.history.push("/")} variant="outlined" color="primary"> Return to Home Page </Button>

    </Router>
    </>
)
}
export default withRouter(Desc);