import HeaderLogo from "../atoms/HeaderLogo";
import Navbar from "../molecules/Navbar";

export default function Header() {
  return (
    <header id="header" className="min-h-20 md:h-28 py-4 relative">
      <div className="container flex items-center justify-between h-full">
        <HeaderLogo />

        <Navbar />
      </div>
    </header>
  );
}
