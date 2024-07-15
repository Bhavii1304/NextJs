import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "bhavi", name: "Bhavika" },
    { id: "learn", name: "Learning Nextjs" },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}

        {/* <li>
          <Link href={"/clients/bhavi"}>Bhavika</Link>
        </li>
        <li>
          <Link href={"/clients/learn"}>Learning Nextjs</Link>
        </li> */}
      </ul>
    </div>
  );
}
export default ClientsPage;
