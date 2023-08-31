import Products from "@/components/products/Products";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

interface ProductsPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export const revalidate = 0

export default async function page({ searchParams }: ProductsPageProps) {
  const { page, per_page, sort, categories, subcategories, price_range } =
    searchParams ?? {};
  const supabase = createServerComponentClient<Database>({ cookies });

  const limit = typeof per_page === "string" ? parseInt(per_page) : 8;
  const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0;

  const { data: products } = await supabase
    .from("products")
    .select()
    .range(offset, offset + 7);

  return (
    <div>
      <div className="flex flex-col gap-2 pt-10 px-10 mt- ">
        <h1 className="text-3xl font-bold">{"lol"}</h1>
        <h3 className="text-muted-foreground">{`Best ${"lol"} for you`}</h3>
      </div>
      <Products products={products} />
    </div>
  );
}
