"use client";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

interface IProps {
  category?: string;
}

export const ProductList = ({ category }: IProps) => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.products.getMany.queryOptions({ category })
  );

  return <pre>{JSON.stringify(data, null, 2)}</pre>;
};

export const ProductListSkelton = () => {
  return <div>Loading...</div>;
};
