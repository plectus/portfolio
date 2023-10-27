import Link from "next/link";
const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#203c5c] sm:text-xl rounded md:p-0 hover:text-[#c6c3cc]"
    >
      {title}
    </Link>
  );
};

export default NavLink;
