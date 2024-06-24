import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "@/components/shared/navbar/Theme";
import { MobileNav } from "@/components/shared/navbar/MobileNav";
import GlobalSearch from "@/components/shared/search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 px-6 py-2 shadow-light-300 dark:shadow-none">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/assets/images/site-logo.svg"
          alt="QueryStack"
          width={48}
          height={48}
        />
        <p className="h2-bold max-sm:h3-bold font-spaceGrotesk text-dark-100 dark:text-light-900">
          Query <span className="text-primary-500">Stack</span>
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff0000",
              },
            }}
          />
        </SignedIn>
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
