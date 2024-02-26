"use client";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { LucideShoppingCart } from "lucide-react";

const Info = ({ data }: { data: ProductTypes }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="text-semibold text-black">Size:</h3>
          <div>{data.size.name}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="text-semibold text-black">Color:</h3>
          <div
            className="w-6 h-6 rounded-full border border-gray-300"
            style={{ backgroundColor: data.color.value }}
          />
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3">
        <Button className="flex items-center gap-x-2">
          Add To Cart
          <LucideShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default Info;
