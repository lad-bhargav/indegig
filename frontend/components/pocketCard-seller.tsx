import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ReactNode } from "react"

interface PocketCardProps {
  title: string
  description: string
  earnings?: string
  data?: string
  icon?: ReactNode  
}

const PocketCard = ({title,description,earnings,data,icon}: PocketCardProps) => {
  return (
     <Card className="mx-auto h-40 w-70 max-w-sm bg-purple-950 text-white">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <p className="text-gray-300">{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2 items-center">
          {icon && <div className="mb-2">{icon}</div>}
          <p className="text-3xl font-bold mb-2">{earnings}</p>
          <p className="text-3xl font-bold mb-2">{data}</p>
      </CardContent>
    </Card>
  )
}

export default PocketCard