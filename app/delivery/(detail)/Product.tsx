import ProductType from "@/types/product";

export default function Product({
  product,
  price,
}: {
  product: ProductType;
  price: number | undefined;
}) {
  return (
    <div className="w-full flex flex-row p-5 gap-3 bg-background rounded-lg items-center">
      {/* Product detail */}
      <div className="flex flex-col flex-1 gap-7">
        <span className="w-full text-foreground-2">Produit</span>
        <div className="flex flex-col flex-1 gap-2">
          <span className="w-full font-bold text-base">{product.name}</span>
          <span className="w-full text-foreground-2 text-sm">
            {product.description}
          </span>
          <span className="w-full text-sm font-bold">{price}</span>
        </div>
      </div>

      {/* Image */}
      <div className="w-24 h-24 bg-slate-100 rounded-lg"></div>
    </div>
  );
}
