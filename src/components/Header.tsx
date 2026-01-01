import { Component } from "solid-js";
import { A } from "@solidjs/router";
import Icon from "/icon.jpg";

const Header: Component = () => {
    return (
        <header class="mb-10 border-b border-slate-200 pb-6">
            <div class="flex items-center gap-3">
                <img
                    src={Icon}
                    alt="sabanishi icon"
                    class="h-8 w-8 rounded-full"
                    loading="lazy"
                />
                <h1 class="text-3xl font-semibold tracking-tight text-slate-900">
                    さばにしのポートフォリオ
                </h1>
            </div>

            {/* ナビゲーション */}
            <nav class="mt-4 flex gap-6 text-lg">
                <A
                    href="/"
                    class="text-slate-600 transition hover:text-slate-900"
                    activeClass="font-semibold text-slate-900"
                >
                    About
                </A>
                <A
                    href="/works"
                    class="text-slate-600 transition hover:text-slate-900"
                    activeClass="font-semibold text-slate-900"
                >
                    Works
                </A>
            </nav>
        </header>
    );
};

export default Header;