import type { JSX } from "solid-js";

type Props = {
    title: string;
    children: JSX.Element;
};

export default function ProfileCard(props: Props) {
    return (
        <section class="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm bg-white">
            <h3 class="text-lg font-bold text-slate-900">{props.title}</h3>
            <div class="mt-2 text-slate-700">
                {props.children}
            </div>
        </section>
    );
}