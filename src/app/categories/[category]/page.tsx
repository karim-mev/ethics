import Products from "@/components/products/Products";
import { dummyData } from "@/config/temp-dummy";

type category = {
  name: string;
};

type CategoryData = {
  name: string;
  items: { id: number; title: string }[];
};

async function getData(category: any) {
  const categoryData = dummyData.categories.find(
    (item) => item.name === category
  );
  return categoryData;
}

export default async function page({ params }: { params: { category: any } }) {
  const data = await getData(params.category);
  return (
    <div>
      <Products title={data?.name}/>
    </div>
  );
}
