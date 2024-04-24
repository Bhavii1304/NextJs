import Link from "next/link";

type Post = {
  id: number;
  title: string;
  body: string;
};

type PostsProps = {
  posts: Post[];
};

function PostList({ posts }: PostsProps) {
  return (
    <div style={{ backgroundColor: "#f0f0f0", padding: "30px" }}>
      <h1 style={{ color: "#333", marginBottom: "10px" }}>Post List</h1>
      {posts.map((post) => {
        return (
          <div
            key={post.id}
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "6px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              marginBottom: "10px",
            }}
          >
            <Link href={`posts/${post.id}`}>
              <h2>
                {post.id} {post.title}
              </h2>
            </Link>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}
export default PostList;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
  return {
    props: {
      posts: data.slice(0, 98),
    },
  };
}
