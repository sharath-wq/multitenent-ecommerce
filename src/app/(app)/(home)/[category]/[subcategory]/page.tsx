interface IProps {
  params: Promise<{
    category: string
    subcategory: string;
  }>;
}

export default async function SubcategoryPage({ params }: IProps) {
  const { category, subcategory } = await params;

  return <div>Category: {category}, Subcategory: {subcategory}</div>;
}
