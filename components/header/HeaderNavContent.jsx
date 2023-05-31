import Link from "next/link";

import { useRouter } from "next/router";

const HeaderNavContent = () => {
  const router = useRouter();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li>
            <Link href="/">
            <span>Home</span>
            </Link>
          </li>
          {/* End homepage menu items */}

          <li>
            <Link href="/login">
            <span>Dashboard</span>
            </Link>

          </li>
          {/* menu items */}



          {/* menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
