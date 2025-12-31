import { Router, Route } from "@solidjs/router";
import Top from "./routes/top";
import About from "./routes/about";
import Works from "./routes/works";

function Routing() {
    return (
        <Router>
            <Route path="/" component={Top} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
        </Router>
    );
}

export default Routing;
