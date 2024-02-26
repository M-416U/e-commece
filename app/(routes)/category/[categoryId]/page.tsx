import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/ui/billboard";
import Filter from "./components/filter";
import NoResult from "@/components/ui/no-results";
import ProductCard from "@/components/globals/product-card";

interface CategoryProps {
  params: { categoryId: string };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export const revalidate = 0;
const Category: React.FC<CategoryProps> = async ({ params, searchParams }) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });
  const colors = await getColors();
  const sizes = await getSizes();
  const category = await getCategory(params.categoryId);
  return (
    <div className="px-8">
      <Billboard data={category.data.billboard} />
      <div className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="lg:grid grid-cols-5 lg:gap-x-8">
          {/* MOBILE FILTERS */}
          <div className="hidden lg:block">
            <Filter valueKey="sizeId" label="Sizes" data={sizes.data} />
            <Filter valueKey="colorId" label="Colors" data={colors.data} />
          </div>
          <div className="mt-6 lg:mt-0 lg:col-span-4">
            {products.data.length === 0 && <NoResult />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {products.data.map((product) => (
                <ProductCard key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
