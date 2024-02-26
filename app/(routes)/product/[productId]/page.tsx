import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/globals/gallery";
import Info from "@/components/globals/info";
import ProductsList from "@/components/globals/product-list";

type ProductPageProps = {
  params: {
    productId: string;
  };
};

export const revalidate = 0;
const ProductPage = async ({ params }: ProductPageProps) => {
  const product = await getProduct(params.productId);
  const SuggestedProducts = await getProducts({
    categoryId: product.data.category.id,
  });
  return (
    <div className="bg-white container">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={product.data.images} />
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <Info data={product.data} />
          </div>
        </div>
        <hr className="my-10" />
        <ProductsList
          title="Suggested Products"
          data={SuggestedProducts.data}
        />
      </div>
    </div>
  );
};

export default ProductPage;
