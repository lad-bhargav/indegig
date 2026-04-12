"use client"
import { Product } from '@/types/product'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { Edit, EllipsisVertical, Trash } from 'lucide-react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const ProductCardSeller = ({ id, title, description, price, deliveringTime, img, sellerId, revisions }: Product) => {

  const router = useRouter();

  const handleDelete = async() => {
     try {
       const res = await axios.post(`http://localhost:8080/products/delete/${id}`);

       if(!res)throw new Error("failed to delete product at frontend side");
     } catch (error) {
      
     }
  }

  return (
    <Card className="relative overflow-hidden  w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

      {/* 3-dot menu on image */}
      <div className="absolute top-2 right-2 z-40">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full bg-black/40 text-white cursor-pointer"
            >
              <EllipsisVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/seller/myprojects/${id}`} className="flex items-center gap-2 cursor-pointer">
                <Edit className="h-4 w-4" />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDelete} className="flex items-center gap-2 text-red-600 focus:text-red-600 cursor-pointer">
              <Trash className="h-4 w-4 text-red-600" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <img
        src={img}
        alt={title}
        className="relative z-20 aspect-video w-full object-cover hover:brightness-60 hover:dark:brightness-40"
      />
      <CardHeader>
        <CardAction>
          <Badge variant="secondary">₹{price}</Badge>
        </CardAction>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className='gap-2'>
         <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            {deliveringTime} days delivery
        </Badge>
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {revisions} revisions per product
        </Badge>
      </CardFooter>
    </Card>
  )
}

export default ProductCardSeller