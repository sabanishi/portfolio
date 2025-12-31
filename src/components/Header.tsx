import {Component} from "solid-js";
import {A} from "@solidjs/router";

const Header: Component = () => {
    return (
        <div>
            <A href="/">About</A>
            <A href="/background">Background</A>
            <A href="/works">Works</A>
        </div>
    );
};

export default Header;