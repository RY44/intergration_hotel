import Link from "next/link";

const path = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Facilities", path: "/facilities" },
  { id: 3, name: "Bookings", path: "/bookings" },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          {path.map((val) => (
            <li key={val.id}>
              <Link href={val.path}>
                <a>{val.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
