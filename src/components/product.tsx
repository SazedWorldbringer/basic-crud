import { Product } from "../types"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="relative p-0 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover h-full w-full aspect-[4/3]"
        />

        <CardDescription className="absolute top-4 left-4 bg-opacity-75 bg-white p-2 rounded-md">
          <CardTitle className="font-semibold tracking-tight">{product.name}</CardTitle>
          <div className="text-4xl font-bold">{product.price}</div>
        </CardDescription>

        <Button variant="destructive" className="absolute bottom-2 right-2">
          Delete
        </Button>
      </CardContent>
    </Card>
  )
}
