"use client";

import { Expand, ShoppingBasket } from "lucide-react";

import Image from "next/image";
import React from "react";
import { MouseEventHandler } from "react";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";
import usePreviewModal from "@/hooks/use-preview-modal";
import useCart from "@/hooks/use-cart";

const ProductCard = ({ data }: { data: ProductTypes }) => {
  const previewModal = usePreviewModal();
  const cart = useCart();
  const router = useRouter();
  const handelNavigate = () => {
    router.push(`/product/${data.id}`);
  };
  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(data);
  };
  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    cart.addItem(data);
  };
  return (
    <div
      onClick={handelNavigate}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image With actions */}
      <div className="relative bg-gray-100 aspect-square rounded-xl">
        <Image
          alt="Product Image"
          src={data.images[0].url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 absolute bottom-2 w-full">
          <div className="flex gap-x-3 justify-center px-8">
            <IconButton onClick={onPreview} icon={<Expand size={20} />} />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingBasket size={20} />}
            />
          </div>
        </div>
      </div>
      {/* description */}
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500">{data.category.name}</p>
      </div>
      <div className="flex items-center justify-between">
        <Currency value={data.price} />
      </div>
    </div>
  );
};

export default ProductCard;
