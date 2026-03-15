import PocketCard from '@/components/pocketCard-seller'
import { Clock, DollarSign, ShoppingCart } from "lucide-react"

const SellerDashboard = () => {
  return (
    <div className='min-h-screen max-w-screen flex flex-row flex-wrap'>
      <div className='w-1/3 p-2'>
        <PocketCard title="Total Earnings" description="lifetime revenue you earned" earnings="₹200" icon={<DollarSign className="w-5 h-5 text-green-700 dark:bg-green-950 dark:text-green-300" />} />
      </div>
      <div className='w-1/3 p-2'>
        <PocketCard title="Active orders" description='pending orders to be delivered' data="2" icon={<ShoppingCart className="w-5 h-5 text-sky-700 dark:bg-sky-950 dark:text-sky-300" />} />
      </div>
      <div className='w-1/3 p-2'>
        <PocketCard title="Response Time" description="average time to respond to inquiries" data="2 hrs" icon={<Clock className="w-5 h-5 text-blue-700 dark:bg-blue-950 dark:text-blue-300" />} />
      </div>
    </div>
  )
}

export default SellerDashboard