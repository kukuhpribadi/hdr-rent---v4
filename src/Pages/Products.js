import React from "react";
import ProdukList2 from "../Parts/Produk-List/ProdukList2";

function Products() {
  return (
    <div>
      <div className="bg-white py-6 lg:py-8">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-gray-800 dark:text-gray-100">
              Produk
            </h4>
          </div>
          <div className="mt-6 md:mt-0">
            <button className="mr-3 bg-gray-200 dark:bg-gray-700 focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-300 text-indigo-700 dark:hover:bg-gray-600 dark:text-indigo-600 px-5 py-2 text-sm">
              Reserved
            </button>
            <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Tambah Produk
            </button>
          </div>
        </div>
      </div>
      <div className="py-6 lg:py-8">
        <ProdukList2 />
      </div>
    </div>
  );
}

export default Products;
