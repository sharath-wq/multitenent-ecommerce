import { Category } from "@/payload-types";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const categoriesRouter = createTRPCRouter({
  getMany: baseProcedure.query(async ({ ctx }) => {
    const { docs: parentCategories } = await ctx.db.find({
      collection: 'categories',
      pagination: false,
      where: {
        parent: {
          exists: false,
        },
      },
      sort: 'name',
    })

    const { docs: subCategories } = await ctx.db.find({
      collection: 'categories',
      pagination: false,
      where: {
        parent: {
          exists: true,
        },
      },
    })

    const formattedData = (parentCategories as Category[]).map((parent) => ({
      ...parent,
      subcategories: (subCategories as Category[]).filter((sub) => {
        if (!sub.parent) return false
        const parentId =
          typeof sub.parent === 'string' ? sub.parent : sub.parent.id
        return parentId === parent.id
      }),
    }))

    return formattedData
  }),
})
