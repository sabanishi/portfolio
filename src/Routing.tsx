import {Router, Route} from "@solidjs/router";
import Top from "./routes/top";
import About from "./routes/about";
import Works from "./routes/works";

function Routing() {
    return (
        <Router>
            <Route path="portfolio/" component={Top}/>
            <Route path="portfolio/about" component={About}/>
            <Route path="portfolio/works" component={Works}/>
        </Router>
    );
}

export default Routing;