import Link from "next/link";

export default function Page() {
	return (
		<div>
			<h1>Home</h1>
			<h2>real home</h2>
			<Link href="/about">다시 한 번 가자!!</Link>
		</div>
	);
}
