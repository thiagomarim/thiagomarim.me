import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/" className="flex items-center gap-4">
          <Image width={44} height={44} src="/images/logo.svg" alt="" />
          <span className="">Thiago Soares Marim</span>
        </Link>
      </div>
    </header>
  );
}
