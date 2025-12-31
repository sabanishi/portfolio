import type { JSX } from "solid-js";
import SkillStars, { type StarLevel } from "./SkillStars";

export default function Skill(props: { name: string; level: StarLevel; right?: JSX.Element }) {
    return (
        <li class="flex items-center justify-between gap-4">
            <span class="min-w-0 truncate font-medium text-slate-800">{props.name}</span>
            {props.right ?? <SkillStars level={props.level} />}
        </li>
    );
}
