export type StarLevel = 1 | 2 | 3;

function Star(props: { filled: boolean }) {
    return (
        <svg
            viewBox="0 0 24 24"
            class={
                "h-6 w-6 " + (props.filled ? "text-amber-400" : "text-slate-200")
            }
            fill="currentColor"
            aria-hidden="true"
        >
            <path d="M12 17.27l5.18 3.05-1.39-5.97L20.5 9.24l-6.12-.52L12 3 9.62 8.72 3.5 9.24l4.71 5.11-1.39 5.97L12 17.27z" />
        </svg>
    );
}

export default function SkillStars(props: { level: StarLevel }) {
    return (
        <div class="flex items-center">
            {[0, 1, 2].map((i) => (
                <Star filled={i < props.level} />
            ))}
        </div>
    );
}
