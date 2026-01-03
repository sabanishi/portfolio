import Header from "../components/Header";
import Footer from "../components/Footer";
import { For } from "solid-js";
import WorkCard from "../components/WorkCard";
import { CONTENTS } from "../work_consts";

export default function Works() {
    return (
        <main class="min-h-screen px-6 py-12 sm:px-10">
            <Header />

            <div class="mx-auto w-full">
                <h2 class="text-4xl font-bold tracking-tight text-slate-900">Works</h2>

                <div class="mt-4 mx-auto justify-center grid gap-6 [grid-template-columns:repeat(auto-fit,250px)]">
                    <For each={CONTENTS}>
                        {(work) => <WorkCard item={work} />}
                    </For>
                </div>
            </div>

            <Footer />
        </main>
    );
}
