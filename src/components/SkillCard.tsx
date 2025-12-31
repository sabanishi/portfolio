import type { JSX } from "solid-js";

export default function SkillCard(props: { title: string; children: JSX.Element }) {
    return (
        <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 class="text-lg font-semibold text-slate-900">{props.title}</h3>
            <ul class="mt-4 space-y-2 text-sm">{props.children}</ul>
        </section>
    );
}
