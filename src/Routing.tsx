import { Router, Route } from "@solidjs/router";
import About from "./routes/about";
import Works from "./routes/works";
import NotFound from "./routes/not-found";

function Routing() {
    return (
        <Router>
            <Route path="/" component={About} />
            <Route path="/works" component={Works} />
            <Route path="/*" component={NotFound} />
        </Router>
    );
}

export default Routing;
