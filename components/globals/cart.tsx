"use client";
import Button from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const Cart = () => {
  const cart = useCart();
  return (
    <div className="ml-auto flex items-center">
      <Link href={"/cart"}>
        <Button className="flex items-center px-4 py-3 rounded-xlg">
          <ShoppingBag size={20} color="white" />
          <span className="ml-2 text-sm font-medium ">{cart.items.length}</span>
        </Button>
      </Link>
    </div>
  );
};

export default Cart;
