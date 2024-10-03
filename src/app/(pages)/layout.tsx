import Page from "@/components/template/Page";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Layout(props: any) {
	return <Page>{props.children}</Page>;
}
