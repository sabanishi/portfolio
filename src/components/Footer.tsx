import type { Component } from "solid-js";

const IconLink = (props: {
    href: string;
    label: string;
    iconClass: string;
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
        <i class={props.iconClass}></i>
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
                    iconClass="ri-github-fill"
                />
                <IconLink
                    href="https://x.com/Saba_Nishi"
                    label="Twitter"
                    iconClass="ri-twitter-x-fill"
                />
                <IconLink
                    href="https://discordapp.com/users/818842465905147955"
                    label="Discord"
                    iconClass="ri-discord-fill"
                />
            </div>
        </footer>
    );
}

export default Footer;