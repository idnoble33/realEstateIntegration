
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homes from './containers/GetHomes/Homes';


const Routes = () => {
  return (
    <div className="musicTrack">
      <Router>
       <Route path="/" exact component={Homes} />
    </Router>
    </div>
    
  );
}

export default Routes;
