import { useContext, useState } from "react";
import { MyStore } from "../Context/MyContext";

function Navbar() {

  let data=useContext(MyStore)
  let toggle=data.setisCartOpen

  return (
    <header className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="text-2xl font-bold text-blue-600">
          ShopEase
        </a>

        <button
          onClick={() => toggle(false)}
          className="text-gray-700 hover:text-blue-600">
          Shop
        </button>

        <div className="flex items-center gap-4">
          <button className="text-xl" aria-label="Search">
            🔍
          </button>

          <button
            onClick={() => toggle(true)}
            className="text-xl"
            aria-label="Shopping cart"
          >
            🛒
          </button>

          <button className="text-xl" aria-label="Account">
            👤
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
