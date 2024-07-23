'use client'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// const plants = [
//   {
//     credits: 20,
//     image: "https://indian-oil-admin.pages.dev/assets/redwood-DWkzg1OA.png",
//     name: "Fiddle-Leaf Fig",
//     details: "A popular houseplant with large, leathery leaves."
//   },
//   {
//     credits: 40,
//     image: "https://indian-oil-admin.pages.dev/assets/eucalyptus-f7xDpF3W.png",
//     name: "Snake Plant",
//     details: "A resilient plant with upright, sword-shaped leaves."
//   },
//   {
//     credits: 10,
//     image: "https://indian-oil-admin.pages.dev/assets/palm_tree-DBSb2Bct.png",
//     name: "Pothos",
//     details: "A trailing vine with heart-shaped, variegated leaves."
//   },
//   {
//     credits: 35,
//     image: "https://indian-oil-admin.pages.dev/assets/bamboo-DlBsA3cp.png",
//     name: "ZZ Plant",
//     details: "A low-maintenance plant with thick, waxy leaves."
//   },
//   {
//     credits: 25,
//     image: "https://indian-oil-admin.pages.dev/assets/oak-3F-t3icQ.png",
//     name: "Peace Lily",
//     details: "A low-maintenance plant with thick, waxy leaves."
//   }
// ]

interface Plant {
  credits: number;
  image: string;
  name: string;
  content: string;
}

export default function Page() {

  const [plants, setPlants] = useState<Plant[]>([]);

  const fetchPlants = async () => {
    try {
      const response = await axios.get(`http://localhost:1000/api/v1/plant/all`);
      setPlants(response.data.message);
    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchPlants();
  }, [])

  return (
    <>
      <ScrollArea className='h-full'>
        <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
          <div>
            <h1 className='text-2xl font-bold tracking-tight'> Discover Our Plant Collection</h1>
            <p className='text-muted-foreground'>
              Explore our diverse range of plants, each with its own unique charm and character.
            </p>
          </div>
          <Separator />
          <section className="w-full max-w-6xl mx-auto py-8 md:py-12 lg:py-16 px-4 md:px-6">
            <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-7">
                {plants.map((plant, index) => {
                  return <div className="bg-background rounded-lg overflow-hidden shadow-sm transition-all" key={index}>
                    <Link href="#" className="block" prefetch={false}>
                      <img src={plant.image} alt={`plant ${index}`} width={300} height={300} className="w-full h-60 object-cover" />
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{plant.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{plant.content}</p>
                        <p className="font-bold text-lg mt-1">{plant.credits} Credits</p>
                        <AlertDialog>
                          <AlertDialogTrigger>
                            <Button className='mt-2'>Purchase Now</Button>
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
