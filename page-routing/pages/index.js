import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>The Home page</h1>
      <ul>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/clients"}>Clients</Link>
        </li>
      </ul>
    </div>
  );
}
export default Home;
