import { createTRPCRouter } from "../init";

import { authRouter } from "@/modules/auth/server/procedures";
import { tagsRouter } from "@/modules/tags/server/procedures";
import { productRouter } from "@/modules/products/server/procedures";
import { categoriesRouter } from "@/modules/categories/server/procedures";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  products: productRouter,
  categories: categoriesRouter,
  tags: tagsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
