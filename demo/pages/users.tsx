type User = {
  id: number;
  name: string;
  email: string;
  phone: number;
};

type UsersProps = {
  users: User[];
};

function Users({ users }: UsersProps) {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
      <h1 style={{ color: "#333" }}>Users</h1>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {users.map((user) => (
          <li key={user.id} style={{ marginBottom: "10px" }}>
            <div
              style={{
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h3>{user.name}</h3>
              <p style={{ color: "#666" }}>{user.email}</p>
              <p style={{ color: "#666" }}>{user.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);

  return {
    props: {
      users,
    },
  };
}
