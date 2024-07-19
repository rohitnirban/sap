import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const plants = [
  {
    type: 'plant',
    credits: 20,
    image: "https://indian-oil-admin.pages.dev/assets/redwood-DWkzg1OA.png",
    name: "Fiddle-Leaf Fig",
    details: "A popular houseplant with large, leathery leaves.",
    left: 10
  },
  {
    type: 'plant',
    credits: 40,
    image: "https://indian-oil-admin.pages.dev/assets/eucalyptus-f7xDpF3W.png",
    name: "Snake Plant",
    details: "A resilient plant with upright, sword-shaped leaves.",
    left: 8
  },
  {
    type: 'plant',
    credits: 10,
    image: "https://indian-oil-admin.pages.dev/assets/palm_tree-DBSb2Bct.png",
    name: "Pothos",
    details: "A trailing vine with heart-shaped, variegated leaves.",
    left: 2
  },
  {
    type: 'plant',
    credits: 35,
    image: "https://indian-oil-admin.pages.dev/assets/bamboo-DlBsA3cp.png",
    name: "ZZ Plant",
    details: "A low-maintenance plant with thick, waxy leaves.",
    left: 4
  },
  {
    type: 'plant',
    credits: 25,
    image: "https://indian-oil-admin.pages.dev/assets/oak-3F-t3icQ.png",
    name: "Peace Lily",
    details: "A low-maintenance plant with thick, waxy leaves.",
    left: 3
  },
  {
    type: 'caring',
    credits: 35,
    image: "https://www.treehugger.com/thmb/pQl1YDKynjU8GFrCAMyVYL5GRWA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wheelbarrow-full-of-manure-545582750-25e7483e24c342cf9a1fe9e9d0a6731c.jpg",
    name: "Manure",
    details: "Give protein to your plant",
    left: 2
  },
]

export default function Page() {
  return (
    <>
      <ScrollArea className='h-full'>
        <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>Purchased Items</h1>
            <p className='text-muted-foreground'>
              Explore your purchased items including plants and caring.
            </p>
          </div>
          <Separator />
          <section className="w-full max-w-6xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
                {plants.map((plant, index) => {
                  return <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all" key={index}>
                    <Link href="#" className="block" prefetch={false}>
                      <img src={plant.image} alt={`plant ${index}`} width={300} height={300} className="w-full h-60 object-cover object-top rounded-lg" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{plant.name}</h3>
                        {plant.type === 'plant' ?
                          <p className="text-muted-foreground text-base mt-1">{plant.left} Plants Unplanted</p>
                          :
                          <p className="text-muted-foreground text-base mt-1">{plant.left} Left</p>
                        }
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
