import Link from "next/link";

export default function LinkAbout() {
  return (
    <div>
      <Link className="link_about" href="/about">
        About
      </Link>
    </div>
  );
}
