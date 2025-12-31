declare module "*.mdx" {
    import {JSX} from "solid-js";
    let MDXComponent: (props: Record<string, unknown>) => JSX.Element;
    export default MDXComponent;
}