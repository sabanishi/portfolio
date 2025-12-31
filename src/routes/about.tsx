import AboutMD from "../md/about.mdx";

export default function About() {
    return (
        <main class="min-h-screen px-6 py-12 sm:px-10">
            <div class="mx-auto w-full max-w-3xl">
                <section class="rounded-2xl border border-slate-200 bg-white/70 p-6 shadow-sm backdrop-blur sm:p-10">
                    <article
                        class="
              text-slate-800
              [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight
              [&_p]:mt-3 [&_p]:leading-7
              [&_ul]:mt-4 [&_ul]:space-y-2
              [&_li]:relative [&_li]:pl-5
              [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-2
              [&_li]:before:h-2 [&_li]:before:w-2 [&_li]:before:rounded-full
              [&_li]:before:bg-slate-400
            "
                    >
                        <AboutMD/>
                    </article>
                </section>
            </div>
        </main>
    );
}
