import { Button } from './ui/button';
import { Link, redirect } from 'react-router-dom';
import { Input } from './ui/input';
import { Label } from './ui/label';

import { Form } from 'react-router-dom';
import actions from '../lib/actions';

export default function CreateForm() {
  return (
    <Form method="post" action="/create" className="w-full max-w-lg">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">

        <div className="mb-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Name" name="name" />
          </div>
        </div>

        <div className="mb-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="price">Price</Label>
            <Input type="number" id="price" placeholder="price" name="price" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          to="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Product</Button>
      </div>
    </Form>
  );
}

export const createAction = async ({ request }: any) => {
  console.log(request)
  const data = await request.formData()
  const product = {
    name: data.get("name"),
    price: data.get("price"),
  }

  if (product.name === "" || product.price === "") {
    alert("Product name and price are required")
    return
  }

  try {
    await actions
      .create(product)
      .then(res => console.log(res))
  } catch (error) {
    console.log("Failed to create product", error)
  }

  return redirect('/')
}
