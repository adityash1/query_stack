import { cn } from "@/lib/utils";
import React from "react";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-muted background-light700_dark400 ",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
