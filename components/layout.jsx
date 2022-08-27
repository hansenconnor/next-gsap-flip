import Link from "next/link";

export default function Layout({ children, ...pageProps }) {
  return (
    <div>
      <main>
        <h1>{pageProps.pageTitle}</h1>

        <Link href="/">Home</Link>
        <Link href="/potions">Potions</Link>
        <Link href="/spells">Spells</Link>
      </main>
      <footer className="contain">{children}</footer>
    </div>
  );
}
