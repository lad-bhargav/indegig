'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCurrentUser } from "@/hooks/useCurrUser"
import { Product } from "@/types/product"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useForm } from 'react-hook-form'

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Product>();

  const router = useRouter();
  const {clerkId} = useCurrentUser();

  const addProduct = async(data:Product) => {
    try {
      
      const res = await axios.post("http://localhost:8080/products/create",{
          ...data,
          sellerId: clerkId
      })
      console.log(data);
      
      if(!res){
        throw new Error("failed to add product")
      }
      router.push("/seller/myprojects")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex">
      <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Add your product/service</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(addProduct)}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                type="text"
                placeholder="Product Title"
                {...register("title", {
                  required: "Title is required",
                })}
              />
              {errors.title && <span>This field is required</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                type="text"
                placeholder="Product Description"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && <span>This field is required</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                id="price"
                type="number"
                placeholder="Product Price"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                  min: {
                    value: 0,
                    message: "Price must be a positive number",
                  },
                })}
              />
              {errors.price && <span>This field is required</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="deliveringTime">Delivering Time</Label>
              <Input
                id="deliveringTime"
                type="number"
                placeholder="Delivering Time"
                {...register("deliveringTime", {
                  required: "Delivering Time is required",
                  valueAsNumber: true,
                  min: {
                    value: 0,
                    message: "Delivering Time must be a positive number",
                  },
                })}
              />
              {errors.deliveringTime && <span>This field is required</span>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="img">Image</Label>
              <Input
                id="img"
                type="text"
                placeholder="Image URL"
                {...register("img", {
                  required: "Image is required",
                })}
              />
              {errors.img && <span>This field is required</span>}
            </div>
          </div>
          <CardFooter className="flex-col gap-2 mt-6">
            <Button type="submit" className="w-full cursor-pointer">
              Add Product
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
    <div className="flex flex-col justify-center items-center ml-20">
        <h2 className="text-2xl font-bold mb-4">♛ Tips for creating a great product listing</h2>
        <ul>
          <li>
            ✪ Use clear and concise language to describe your product or service.
          </li>
          <li>
            ✪ Highlight the unique features and benefits of your product or service.
          </li>
          <li>
            ✪ Include high-quality images that showcase your product or service.
          </li>
          <li>
            ✪ Set a competitive price that reflects the value of your product or service.
          </li>
          <li>
            ✪ Provide accurate delivery time estimates to manage customer expectations.
          </li>
        </ul>
    </div>
    </div>
  )
}


export default CreateProduct