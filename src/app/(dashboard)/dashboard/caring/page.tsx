import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const plants = [
  {
    credits: 20,
    image: "https://www.saferbrand.com/media/Articles/Safer-Brand/How-to-Water-Plants.jpg",
    name: "Watering",
    details: "Give water to your plants"
  },
  {
    credits: 40,
    image: "https://d2tez01fe91909.cloudfront.net/wp-content/uploads/2022/05/AdobeStock_411971550-scaled.jpeg.webp",
    name: "Pest Control",
    details: "A doctor for your plant"
  },
  {
    credits: 10,
    image: "https://cdn.shopify.com/s/files/1/0583/9251/0604/files/Blogpost_26_2048x2048.png?v=1684767700",
    name: "Humus",
    details: "A high quality soil for your plant"
  },
  {
    credits: 35,
    image: "https://www.treehugger.com/thmb/pQl1YDKynjU8GFrCAMyVYL5GRWA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wheelbarrow-full-of-manure-545582750-25e7483e24c342cf9a1fe9e9d0a6731c.jpg",
    name: "Manure",
    details: "Give protein to your plant"
  },
  {
    credits: 35,
    image: "https://www.treehugger.com/thmb/pQl1YDKynjU8GFrCAMyVYL5GRWA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wheelbarrow-full-of-manure-545582750-25e7483e24c342cf9a1fe9e9d0a6731c.jpg",
    name: "Manure",
    details: "Give protein to your plant"
  },
]

export default function Page() {
  return (
    <>
      <ScrollArea className='h-full'>
        <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>Caring for the Plants</h1>
            <p className='text-muted-foreground'>
              Explore your carings for the plants.
            </p>
          </div>
          <Separator />
          <section className="w-full max-w-6xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
                {plants.map((plant, index) => {
                  return <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all" key={index}>
                    <Link href="#" className="block" prefetch={false}>
                      <img src={plant.image} alt={`plant ${index}`} width={300} height={300} className="w-full h-60 object-cover rounded-lg" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{plant.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{plant.credits} Credits</p>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Button className='mt-2 w-full'>Get Caring</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                              <AlertDialogDescription>
                                This action cannot be undone. This action use your credits to purchase this plant.
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </div>
                    </Link>
                  </div>
                })
                }
              </div>
            </div>
          </section>
        </div>
      </ScrollArea>
    </>
  );
}
