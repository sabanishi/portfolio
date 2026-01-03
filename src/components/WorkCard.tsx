import { ContentData } from "../types";
import useModal from "./useModal";
import { createSignal, For} from "solid-js";
import { isYouTube, getYouTubeId } from "../Utils";

type Props = {
    item: ContentData;
};

export default function WorkCard(props: Props) {
    const { Modal, open, close } = useModal();
    const [active, setActive] = createSignal(0);

    return (
        <>
            <button
                type="button"
                onClick={open}
                class="
          group w-[250px] overflow-hidden text-left
          rounded-2xl border border-slate-200 bg-white shadow-sm
          transition hover:-translate-y-0.5 hover:shadow-md
          focus:outline-none focus:ring-2 focus:ring-slate-400/40
        "
            >
                <div class="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <img
                        src={props.item.thumbnail}
                        alt={`${props.item.title} thumbnail`}
                        loading="lazy"
                        class="
              h-full w-full object-cover
              transition-transform duration-200
              group-hover:scale-105
            "
                    />
                </div>

                <div class="p-4">
                    <h3 class="line-clamp-2 text-base font-semibold text-slate-900">
                        {props.item.title}
                    </h3>
                </div>
            </button>

            <Modal>
                <div class="
                      w-full max-w-3xl rounded-2xl bg-white shadow-xl
                      overflow-hidden
                    "
                    onClick={(e)=>e.stopPropagation()}
                >
                    <div class="
                        max-h-[calc(100vh-5rem)] md:max-h-[calc(100vh-4rem)]
                        overflow-y-auto
                        p-6 md:p-8
                        ">
                        <div class="flex items-start justify-between gap-4">
                            <div>
                                <h2 class="text-xl font-semibold text-slate-900">{props.item.title}</h2>
                                <div class="mt-1 text-sm text-slate-500">{props.item.date}</div>
                            </div>

                            <button
                                type="button"
                                onClick={close}
                                class="
                              rounded-lg px-3 py-1.5 text-sm
                              text-slate-600 transition
                              hover:bg-slate-100 hover:text-slate-900
                              focus:outline-none focus:ring-2 focus:ring-slate-400/40
                            "
                            >
                                Close
                            </button>
                        </div>

                        {/* Media (swipe carousel) */}
                        <div class="mt-5">
                            {/* frame */}
                            <div class="mx-auto w-[90%] overflow-hidden rounded-xl bg-slate-100">
                                {/* track */}
                                <div
                                    class="flex w-full transition-transform duration-300 ease-out"
                                    style={{ transform: `translateX(-${active() * 100}%)` }}
                                >
                                    <For each={props.item.media}>
                                        {(src:string, i) => (
                                            <div class="w-full shrink-0 ">
                                                <div class="aspect-square w-full bg-slate-100">
                                                    { isYouTube(src)? (
                                                        <div class="h-full w-full grid place-items-center bg-black">
                                                            <div class="w-full aspect-video">
                                                                <iframe
                                                                    class="h-full w-full"
                                                                    src={`https://www.youtube.com/embed/${getYouTubeId(src)}`}
                                                                    title="YouTube video player"
                                                                    allow="
                                                                accelerometer;
                                                                autoplay;
                                                                clipboard-write;
                                                                encrypted-media;
                                                                gyroscope;
                                                                picture-in-picture;
                                                              "
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <img
                                                            src={src}
                                                            alt={`${props.item.title} media ${i() + 1}`}
                                                            loading="lazy"
                                                            class="h-full w-full object-contain"
                                                            draggable={false}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </For>
                                </div>
                            </div>

                            {/* dots */}
                            <div class="mt-3 flex items-center justify-center gap-2">
                                <For each={props.item.media}>
                                    {(_, i) => (
                                        <button
                                            type="button"
                                            aria-label={`image ${i() + 1}`}
                                            onClick={() => setActive(i())}
                                            class={
                                                "h-2 w-2 rounded-full transition " +
                                                (i() === active()
                                                    ? "bg-slate-800"
                                                    : "bg-slate-300 hover:bg-slate-400")
                                            }
                                        />
                                    )}
                                </For>
                            </div>
                        </div>


                        {/* Description */}
                        <div class="mt-5 whitespace-pre-wrap text-slate-700">
                            {props.item.description}
                        </div>

                        {/* Links */}
                        {props.item.links?.length && (
                            <div class="mt-6 border-t border-slate-200 pt-4">
                                <div class="text-sm font-semibold text-slate-900">Links</div>
                                <ul class="mt-2 space-y-2">
                                    {props.item.links.map((link) => (
                                        <li>
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="text-sm text-blue-600 underline-offset-2 hover:underline"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </Modal>

        </>
    );
}
