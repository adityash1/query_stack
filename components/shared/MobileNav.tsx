"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathname = usePathname();

  return (
    <section className="flex h-full flex-col gap-6 pt-16">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

export const MobileNav = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/assets/icons/hamburger.svg"
            alt="Hamburger"
            width={23}
            height={23}
            className="invert-colors sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="background-light900_dark200 border-none"
        >
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/images/site-logo.svg"
              alt="DevOverflow"
              width={23}
              height={23}
            />
            <p className="h2-bold max-sm:h3-bold font-spaceGrotesk text-dark-100 dark:text-light-900">
              Dev <span className="text-primary-500">Overflow</span>
            </p>
          </Link>
          <div>
            <SheetClose asChild>
              <NavContent />
            </SheetClose>
            <SignedOut>
              <div className="flex flex-col gap-3">
                <SheetClose asChild>
                  <Link href="/sign-in">
                    <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                      <span className="primary-text-gradient">Login</span>
                    </Button>
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link href="/sign-up">
                    <Button className="text-dark400_light900 small-medium btn-tertiary light-border-2 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                      Signup
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </SignedOut>
            {/* <SignedIn>
              <div className="flex flex-col gap-3">
                <SheetClose asChild>
                  <Link
                    href=""
                    className="text-dark300_light900 flex items-center justify-start gap-4 bg-transparent p-4"
                  >
                    <Image
                      src="/assets/icons/arrow-left.svg"
                      alt="logout"
                      width={20}
                      height={20}
                      className="invert-colors"
                    />
                    <p className="base-medium">Logout</p>
                  </Link>
                </SheetClose>
              </div>
            </SignedIn> */}
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
