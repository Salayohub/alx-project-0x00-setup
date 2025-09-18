import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC =  () => {
  return (
    <div className="display-grid">
      <h1 className=" text-xl font-extralight">Landing Page</h1>
     <Card />
     <Card />
     <Card />
     <div className="flex flex-col gap-4 p-6">
      {/* Sizes */}
      <Button title="Small" style="text-sm px-2 py-1" />
      <Button title="Medium" style="text-base px-4 py-2" />
      <Button title="Large" style="text-lg px-6 py-3" />

      {/* Shapes */}
      <Button title="rounded Small" style="rounded-sm" />
      <Button title="rounded Medium" style="rounded-md" />
      <Button title="rounded Full" style="rounded-lg" />
    </div>


    </div>
  )
}
export default Landing;