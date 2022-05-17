import Image from "next/image";
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
      <a href="/"> <Image
          alt="Monosolution is logo"
          src="/Component1.png"
          width={240}
          height={28}
        /></a>
      </div>
    </nav>
  );
};
export default Navbar;
