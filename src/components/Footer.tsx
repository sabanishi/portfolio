import type { Component, JSX } from "solid-js";
import { Icon } from "@iconify-icon/solid";

const IconLink = (props: {
    href: string;
    label: string;
    children: JSX.Element;
}) => (
    <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={props.label}
        class="
      inline-flex h-10 w-10 items-center justify-center
      rounded-xl text-xl
      transition
      hover:bg-white/10 hover:text-amber-400
      focus:outline-none focus:ring-2 focus:ring-white/40
    "
    >
        {props.children}
    </a>
);

const Footer : Component = () => {
    return (
        <footer>
            <div class="text-sm opacity-80">© 2026 sabanishi</div>

            <div class="flex justify-end">
                <IconLink
                    href="https://github.com/sabanishi"
                    label="GitHub"
                >
                    <i class="ri-github-fill"></i>
                </IconLink>

                <IconLink
                    href="https://x.com/Saba_Nishi"
                    label="Twitter"
                    >
                    <i class="ri-twitter-x-fill"></i>
                </IconLink>

                <IconLink
                    href="https://discordapp.com/users/818842465905147955"
                    label="Discord"
                >
                    <i class="ri-discord-fill"></i>
                </IconLink>

                <IconLink
                    href="https://scrapbox.io/sabanishi/"
                    label="Scrapbox"
                >
                    <Icon icon="simple-icons:scrapbox" />
                </IconLink>
            </div>
        </footer>
    );
}

export default Footer;