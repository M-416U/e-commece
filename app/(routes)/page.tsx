import getBillBoard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductsList from "@/components/globals/product-list";

import Billboard from "@/components/ui/billboard";

export const revalidate = 0;

export default async function Home() {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillBoard("6ba0caba-f3b6-46a3-8b09-2f49b76a787d");
  return (
    <div className="container">
      <div className="space-y-10 pb-10">
        <Billboard data={billboard.data} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList title="Featured Products" data={products.data} />
        </div>
      </div>
    </div>
  );
}
