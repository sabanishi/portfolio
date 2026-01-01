import { type ParentComponent, Show, createSignal } from "solid-js";
import { Portal } from "solid-js/web";

export default function useModal(){
    const [isOpen, setIsOpen] = createSignal(false);
    const open = () => {
        document.body.style.overflow = "hidden";
        setIsOpen(true);
    };
    const close = () => {
        document.body.style.overflow = "auto";
        setIsOpen(false);
    };

    const Modal: ParentComponent = (props) => {
        return (
            <Show when={isOpen()}>
                <Portal mount={document.body}>
                    <div
                        onClick={close}
                        class="fixed inset-0 grid place-items-center bg-black/50 p-2 backdrop-blur md:p-8"
                    >
                        {props.children}
                    </div>
                </Portal>
            </Show>
        );
    };

    return {
        Modal,
        open,
        close,
        isOpen,
    };
};