interface IProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: IProps) {
  const { category } = await params;
  return <div>Category: {category}</div>;
}
