import Link from "next/link";

function Home() {
  return (
    <div>
      <h1>Fritzzin's Homepage</h1>
      <Link href="/about">About</Link>
    </div>
  );
}

export default Home;
