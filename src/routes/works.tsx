import Header from "../components/Header";
import Footer from "../components/Footer";
import {createSignal, For, Suspense} from "solid-js";
import WorkCard from "../components/WorkCard";
import {CONTENTS} from "../work_consts";
import {ContentData} from "../types";

export default function Works() {
    return (
        <main class="min-h-screen px-6 py-12 sm:px-10">
            <Header></Header>
            <div class="w-full">
                <For each={CONTENTS}>
                    {(work) => (
                        <WorkCard
                            item={work}
                        >
                        </WorkCard>
                    )}
                </For>
                <Footer></Footer>
            </div>
        </main>
    );
}