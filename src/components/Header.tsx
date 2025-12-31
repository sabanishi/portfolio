import {Component} from "solid-js";
import {A} from "@solidjs/router";

const Header: Component = () => {
    return (
        <div>
            <A href="/">Top</A>
            <A href="/about">About</A>
            <A href="/works">Works</A>
        </div>
    );
};

export default Header;