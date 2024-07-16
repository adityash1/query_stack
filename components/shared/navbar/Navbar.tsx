import Link from "next/link";
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Theme from "@/components/shared/navbar/Theme";
import { MobileNav } from "@/components/shared/navbar/MobileNav";
import GlobalSearch from "@/components/shared/search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 light-border fixed z-50 w-full gap-4 border-b py-[6px] pl-6 pr-9">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          alt="QueryStack"
          width={28}
          height={28}
        />
        <p className="h3-semibold max-sm:h3-semibold font-spaceGrotesk text-dark-100 dark:text-light-900">
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
                avatarBox: "h-7 w-7",
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
