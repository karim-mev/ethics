import Products from "@/components/products/Products";
import { dummyData } from "@/config/temp-dummy";
import supabase from "@/lib/supabase";

type category = {
  name: string;
};

// type CategoryData = {
//   name: string;
//   items: { id: number; title: string }[];
// };

// async function getData(category: any) {
//   const categoryData = dummyData.categories.find(
//     (item) => item.name === category
//   );
//   return categoryData;
// }

async function getData(category: string) {
  const { data: products, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category);

  if (error) {
    console.error('Error fetching data:', error);
    return null;
  }

  return products;
}

export default async function page({ params }: { params: { category: any } }) {
  const data = await getData(params.category);
  return (
    <div>
      <Products products={data}/>
    </div>
  );
}
