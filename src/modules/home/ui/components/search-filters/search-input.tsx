"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { BookmarkCheckIcon, ListFilterIcon, SearchIcon } from "lucide-react";

import { useTRPC } from "@/trpc/client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CategoriesSidebar } from "./categories-sidebar";
import Link from "next/link";

interface IProps {
  disabled?: boolean;
}

export const SearchInput = ({ disabled }: IProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const trpc = useTRPC();
  const session = useQuery(trpc.auth.session.queryOptions());

  return (
    <div className="flex items-center gap-2 w-full">
      <CategoriesSidebar onOpenChange={setIsSidebarOpen} open={isSidebarOpen} />
      <div className="relative w-full">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-neutral-500" />
        <Input
          className="pl-8"
          placeholder="Search Products"
          disabled={disabled}
        />
      </div>

      {/* TODO: Add categories view all button */}
      <Button
        variant={"elevated"}
        className="size-12 shrink-0 flex lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <ListFilterIcon />
      </Button>
      {session.data?.user && (
        <Button variant={"elevated"} asChild>
          <Link href={"/library"}>
            <BookmarkCheckIcon />
            Library
          </Link>
        </Button>
      )}
    </div>
  );
};
