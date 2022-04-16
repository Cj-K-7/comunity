import Link from "next/link";

function Router() {
  return (
    <div>
        <ul>
    <li>
      <Link href="/">
        <a>Home</a>
      </Link>
    </li>
    <li>
      <Link href="/dashboard">
        <a>Dashboard</a>
      </Link>
    </li>
    <li>
      <Link href="/community">
        <a>Community</a>
      </Link>
    </li>
        </ul>
    </div>
  );
}

export default Router;
