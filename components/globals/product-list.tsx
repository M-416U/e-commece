import NoResult from "@/components/ui/no-results";
import ProductCard from "@/components/globals/product-card";

type ProductListProps = {
  title: string;
  data: ProductTypes[];
};
const ProductsList = ({ data, title }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {data.length === 0 && <NoResult />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
