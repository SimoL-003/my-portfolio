import HeaderLogo from "../atoms/HeaderLogo";
import Navbar from "../molecules/Navbar";

export default function Header() {
  return (
    <header className="h-28">
      <div className="container flex items-center justify-between h-full">
        <HeaderLogo />

        <Navbar />
      </div>
    </header>
  );
}
