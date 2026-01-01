import {ContentData} from "../types";
import useModal from "./useModal";

type Props = {
    item: ContentData;
}

export default function WorkCard(props: Props){
    const { Modal, open, close } = useModal();

    return(
        <>
            <button
                type="button"
                onClick={ open }
                class="
                group w-full text-left
                rounded-2xl border border-slate-200 bg-white p-5 shadow-sm
                transition
                hover:-translate-y-0.5 hover:shadow-md
                focus:outline-none focus:ring-2 focus:ring-slate-400/40
            "
            >
                <div class="flex items-start gap-4">
                    <div class="h-16 w-24 overflow-hidden rounded-xl bg-slate-100">
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

                    <div class="min-w-0 flex-1">
                        <div class="flex items-center justify-between gap-3">
                            <h3 class="truncate text-base font-semibold text-slate-900">
                                {props.item.title}
                            </h3>
                            <span class="shrink-0 text-sm text-slate-500">{props.item.date}</span>
                        </div>

                        <p class="mt-2 line-clamp-2 text-sm text-slate-700">
                            {props.item.description}
                        </p>
                    </div>
                </div>
            </button>

            <Modal>
                <div class="w-full max-w-3xl rounded-2xl bg-white p-6 shadow-xl">
                    {/* Header */}
                    <div class="flex items-start justify-between gap-4">
                        <div>
                            <h2 class="text-xl font-semibold text-slate-900">
                                {props.item.title}
                            </h2>
                            <div class="mt-1 text-sm text-slate-500">
                                {props.item.date}
                            </div>
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

                    {/* Media */}
                    <div class="mt-5 overflow-hidden rounded-xl bg-slate-100">
                        <img
                            src={props.item.thumbnail}
                            alt={`${props.item.title} media`}
                            loading="lazy"
                            class="h-64 w-full object-cover"
                        />
                    </div>

                    {/* Description */}
                    <div class="mt-5 whitespace-pre-wrap text-slate-700">
                        {props.item.description}
                    </div>

                    {/* Links */}
                    {props.item.links?.length && (
                        <div class="mt-6 border-t border-slate-200 pt-4">
                            <div class="text-sm font-semibold text-slate-900">
                                Links
                            </div>
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
            </Modal>
        </>
    );
}