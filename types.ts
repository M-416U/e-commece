type BillboardTypes = {
  id: string;
  label: string;
  imageUrl: string;
};
type CategoryTypes = {
  id: string;
  name: string;
  billboard: BillboardTypes;
};

type ProductTypes = {
  id: string;
  name: string;
  category: CategoryTypes;
  size: SizeTypes;
  color: ColorTypes;
  isFeatured: boolean;
  price: string;
  images: ImageTypes[];
};

type SizeTypes = {
  id: string;
  value: string;
  name: string;
};
type ColorTypes = {
  id: string;
  value: string;
  name: string;
};

type ImageTypes ={
  id: string;
  url: string;
}
