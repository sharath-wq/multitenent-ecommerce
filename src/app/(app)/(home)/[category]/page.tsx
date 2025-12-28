import { Suspense } from "react";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import {
  ProductList,
  ProductListSkelton,
} from "@/modules/products/ui/components/product-list";

interface IProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({}: IProps) {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.products.getMany.queryOptions());

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<ProductListSkelton />}>
        <ProductList />
      </Suspense>
    </HydrationBoundary>
  );
}
