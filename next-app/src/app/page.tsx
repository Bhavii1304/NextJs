import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen p-24">
      <div>Welcome To Home</div>
      <Link href="/blog">Blog</Link>
      <Link href={"/about"}>About</Link>
      <Link href="/products">Products</Link>
    </main>
  );
}
