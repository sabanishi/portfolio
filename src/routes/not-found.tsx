import { A } from "@solidjs/router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
    return (
        <main class="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
            <Header></Header>
            <h1 class="text-6xl font-extrabold text-slate-800">404</h1>
            <p class="mt-4 text-lg text-slate-600">
                ページが見つかりません
            </p>

            <A
                href="/"
                class="mt-8 inline-flex items-center rounded-xl bg-slate-900 px-6 py-3
               text-white transition hover:bg-slate-700"
            >
                トップに戻る
            </A>
            <Footer></Footer>
        </main>
    );
}