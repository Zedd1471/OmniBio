import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex space-x-4 bg-blue-100 p-4 shadow rounded">
      <Link href="/">Home</Link>
      <Link href="/notes">Notes</Link>
    </nav>
  );
}
