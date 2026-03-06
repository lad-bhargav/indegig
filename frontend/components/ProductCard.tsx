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
import Link from 'next/link'

const ProductCard = ({id,title,description,price,deliveringTime,img,sellerId}:Product) => {
  return (
    <Card className="relative overflow-hidden  mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
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
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Link href={`/buyer/projects/${id}`}>
          <Button className="w-full cursor-pointer">view project</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default ProductCard