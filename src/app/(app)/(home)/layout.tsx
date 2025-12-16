import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Category } from "@/payload-types";

import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { SearchFilters } from "./_components/search-filters";

import { CustomCategory } from "./types";

interface IProps {
  children: React.ReactNode;
}

export default async function layout({ children }: IProps) {
  const payload = await getPayload({
    config: configPromise,
  });

  const data = await payload.find({
    collection: "categories",
    depth: 1,
    pagination: false,
    where: {
      parent: {
        exists: false,
      },
    },
    sort: "name"
  });

  const formattedData: CustomCategory[] = data.docs.map((doc) => ({
    ...doc,
    subcategories: (doc.subcategories?.docs ?? []).map((doc) => ({
      // Because of "depth: 1" we are confident "doc" will be a type of "Category"
      ...(doc as Category),
      subcategories: undefined,
    })),
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <SearchFilters data={formattedData} />
      <div className="flex-1 bg-[#F4F4F0]">{children}</div>
      <Footer />
    </div>
  );
}
