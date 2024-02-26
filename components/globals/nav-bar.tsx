import Link from "next/link";

import MainNav from "@/components/globals/main-nav";
import getCategories from "@/actions/get-categories";
import Cart from "@/components/globals/cart";

export const revalidate = 0;
const NavBar = async () => {
  const categories = await getCategories();

  return (
    <nav className="border-b ">
      <div className="flex px-6 items-center h-16">
        <Link href="/">
          <p className="font-bold text-xl ml-4">STORE</p>
        </Link>
        <MainNav data={categories.data} />
        <Cart />
      </div>
    </nav>
  );
};

export default NavBar;
