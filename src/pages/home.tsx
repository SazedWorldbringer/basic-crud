import ProductCard from "../components/product"
import { Product } from "../types"

const HomePage = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <div className="p-6 w-screen h-full flex items-center justify-center gap-2">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
