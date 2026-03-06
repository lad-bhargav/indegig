import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const PocketCard = ({title,description,earnings}: {title: string, description: string, earnings?: string}) => {
  return (
     <Card className="mx-auto h-40 w-70 max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
          <p className="text-3xl font-bold">{earnings}</p>
      </CardContent>
    </Card>
  )
}

export default PocketCard