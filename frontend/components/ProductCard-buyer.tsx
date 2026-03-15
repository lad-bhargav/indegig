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
import { PcCase } from 'lucide-react'

const ProductCard = ({id,title,description,price,deliveringTime,img,sellerId,revisions,sellerEmail,sellerProfileImg,sellerUsername}:Product) => {
  return (
    <Card className="relative overflow-hidden  mx-auto w-90 max-w-sm pt-0">
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
      </CardHeader>
      <CardFooter className='flex flex-col w-full items-start'>
        <div className='flex gap-8'>
            <Link href={`/buyer/projects/${id}`}>
              <Button className="w-full cursor-pointer"><PcCase/> view project</Button>
            </Link>
            <div className='flex gap-2 ml-5 items-center'>
            <div className='h-8 w-8 rounded-full overflow-hidden'>
                <img 
                    src={sellerProfileImg} 
                    alt={sellerUsername} 
                    className="w-full h-full object-cover" 
                />
            </div>
        <p className='font-medium'>{sellerUsername}</p>
      </div>
        </div>
        {/* <div className='mt-5 flex gap-3'>
          <Badge className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300">
            {deliveringTime} days delivery
        </Badge>
        <Badge className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            {revisions} revisions per product
        </Badge>
        </div> */}
      </CardFooter>
    </Card>
  )
}

export default ProductCard