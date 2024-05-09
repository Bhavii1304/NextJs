import { cookies } from "next/headers";

export default function About() {
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");
  console.log(theme);
  console.log("theme");

  return <div>About me</div>;
}
