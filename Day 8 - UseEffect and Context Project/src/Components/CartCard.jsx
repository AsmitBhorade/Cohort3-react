import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const CartCard = ({ product }) => {
  const { incrementqty, decrementqty,removeFromCart } = useContext(MyStore);

  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow">
      <img
        src={product.image}
        alt={product.title}
        className="h-24 w-24 rounded-lg object-contain"
      />

      <div className="min-w-0 flex-1">
        <h2 className="line-clamp-2 font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="mt-2 text-lg font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </p>

        <div className="flex items-center gap-4">
          <button
            onClick={() => decrementqty(product.id)}
            className="rounded bg-gray-200 px-3 py-1 text-xl"
          >
            -
          </button>

          <span>{product.qty || 1}</span>

          <button
            onClick={() => incrementqty(product.id)}
            className="rounded bg-gray-200 px-3 py-1 text-xl"
          >
            +
          </button>
        </div>
      </div>

      <button 
      onClick={()=>removeFromCart(product.id)}
      className="rounded-lg bg-red-100 px-3 py-2 text-sm text-red-600">
        Remove
      </button>
    </div>
  );
};

export default CartCard;