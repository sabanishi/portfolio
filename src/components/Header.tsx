import {Component} from "solid-js";
import {A} from "@solidjs/router";

const Header: Component = () => {
    return (
        <div>
            <A href="/portfolio">Top</A>
            <A href="/portfolio/about">About</A>
            <A href="/portfolio/works">Works</A>
        </div>
    );
};

export default Header;