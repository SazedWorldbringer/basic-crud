import { useLoaderData, useNavigate } from "react-router-dom"
import ProductCard from "../components/product"
import { Button } from "../components/ui/button"
import actions from "../lib/actions"
import { Product } from "../types"

const product = {
  id: 1,
  name: 'laptop',
  price: 1000,
  image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

}

const HomePage = () => {
  const data = useLoaderData() as Product[]
  const navigate = useNavigate()

  return (
    <div>
      <div className="p-6 w-screen h-full flex items-center justify-center gap-2">
        {data.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Button onClick={() => navigate('/create')} >Create Product</Button>
    </div>
  )
}

export const homeLoader = async () => {
  try {
    const data = await actions.getAll()
    console.log(data)
    return data
  } catch (error) {
    console.log("Failed to load products", error)
    return []
  }
}

export default HomePage
