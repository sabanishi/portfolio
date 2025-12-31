import { Router, Route } from "@solidjs/router";
import About from "./routes/about";
import Background from "./routes/background";
import Works from "./routes/works";

function Routing() {
    return (
        <Router>
            <Route path="/" component={About} />
            <Route path="/background" component={Background} />
            <Route path="/works" component={Works} />
        </Router>
    );
}

export default Routing;
