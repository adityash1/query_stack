"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SignedOut, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const LeftSidebar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-3 pt-16 max-sm:hidden lg:w-[206px]">
      <div className="flex flex-1 flex-col gap-1">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          if (item.route === "/profile") {
            if (userId) {
              item.route = `${item.route}/${userId}`;
            } else {
              return null;
            }
          }

          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${isActive ? "background-light800_dark400" : ""} 
              text-dark400_light700 flex h-[34px] items-center justify-start gap-x-2 rounded-md bg-transparent px-4 hover:bg-light-800 dark:hover:bg-dark-400`}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={18}
                height={18}
                className="invert-colors"
              />
              <p className="body-medium max-lg:hidden">{item.label}</p>
            </Link>
          );
        })}
      </div>

      <SignedOut>
        <div className="flex flex-col gap-2">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-2 shadow-none">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={18}
                height={18}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient max-lg:hidden">Login</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="text-dark400_light900 small-medium btn-tertiary light-border-2 min-h-[41px] w-full rounded-lg px-4 py-2 shadow-none">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="signup"
                width={18}
                height={18}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Signup</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};
