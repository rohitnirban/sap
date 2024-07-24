import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const data = [
    {
        title: "Plant a Tree for Every Purchase",
        description: "We will plant a tree for every purchase made.",
        image: "https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8=",
        code: "PLANTATREE"
    },
    {
        title: "10% Off on Eco-Friendly Products",
        description: "Get 10% off on all eco-friendly products.",
        image: "https://media.istockphoto.com/id/1380361370/photo/decorative-banana-plant-in-concrete-vase-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=eYADMQ9dXTz1mggdfn_exN2gY61aH4fJz1lfMomv6o4=",
        code: "ECO10"
    },
    {
        title: "Buy One Get One Free on Seedlings",
        description: "Buy one seedling and get another one for free.",
        image: "https://media.istockphoto.com/id/1540197191/photo/small-tree-growing-with-sunshine-in-garden-eco-concept.webp?b=1&s=170667a&w=0&k=20&c=Z_q6YZRvBSlpoOHnh6y7v4c5zdq7qKyKdH7O9TF343E=",
        code: "BOGOSEED"
    },
    {
        title: "Free Tree Care Guide with Purchase",
        description: "Receive a free tree care guide with any purchase.",
        image: "tree-care-guide.svg",
        code: "FREEGUIDE"
    },
    {
        title: "20% Off on All Gardening Tools",
        description: "Enjoy 20% off on all gardening tools.",
        image: "gardening-tools.svg",
        code: "GARDEN20"
    },
    {
        title: "Free Tree Sapling with Orders Over ₹100",
        description: "Get a free tree sapling with orders over ₹100.",
        image: "tree-sapling.svg",
        code: "FREETREE"
    },
    {
        title: "Join Our Tree Planting Event",
        description: "Join us for a tree planting event and make a difference.",
        image: "tree-planting-event.svg",
        code: "JOINTREE"
    },
    {
        title: "15% Off on Tree Fertilizers",
        description: "Save 15% on all tree fertilizers.",
        image: "tree-fertilizer.svg",
        code: "TREEFERT15"
    },
    {
        title: "Free Tree Health Check-Up",
        description: "Get a free health check-up for your trees.",
        image: "tree-health-check.svg",
        code: "TREECHECK"
    },
    {
        title: "Discount on Tree Pruning Services",
        description: "Enjoy a discount on our tree pruning services.",
        image: "tree-pruning.svg",
        code: "PRUNE20"
    },
]

const Page = () => {
    return (
        <ScrollArea className='h-full'>
            <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
                <div>
                    <h1 className='text-2xl font-bold tracking-tight'>Your Rewards</h1>
                    <p className='text-muted-foreground'>
                        Explore your rewards you got from planting trees
                    </p>
                </div>
                <Separator className='shadow my-4' />
                <section className="w-full py-8 md:py-12 lg:py-16 px-4 md:px-6">
                    <div className="container grid grid-cols-1 gap-8 px-4 md:grid-cols-2 lg:grid-cols-3 md:px-6">
                        {data.map((reward, index) => {
                            return <div className="group relative overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md" key={index}>
                                <img
                                    src={reward.image}
                                    alt="Reward Image"
                                    width={400}
                                    height={300}
                                    className="h-56 w-full object-contain transition-all group-hover:scale-105"
                                />
                                <div className="p-6">
                                    <h3 className="mb-2 text-xl font-semibold">{reward.title}</h3>
                                    <div className="mb-4 text-muted-foreground">{reward.description}</div>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button className="w-full">Claim Coupon</Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="space-y-2 rounded-md bg-background p-4 shadow-lg">
                                            <div className="text-center font-semibold">Your coupon code is:</div>
                                            <div className="rounded-md bg-muted px-4 py-2 text-center font-mono text-lg font-bold">{reward.code}</div>
                                            <div className="text-center text-sm text-muted-foreground">Copy and use this code at checkout.</div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                        })}
                    </div>
                </section>
            </div>
        </ScrollArea>
    )
}

export default Page