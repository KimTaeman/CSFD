import React from "react";
import { NavLink } from "react-router";
import { cn } from "@/lib/utils.ts";

function Page() {
  return (
    <div
      data-status="404"
      className="fade-in fade-out flex flex-1 flex-col items-center justify-center gap-8 text-center min-h-screen"
    >
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">Page Not Found</h1>
      </div>
      <NavLink
        to="/"
        className={cn("font-mono text-xl")}
      >
        Go Back to Home Page
      </NavLink>
    </div>
  );
}

export default Page;