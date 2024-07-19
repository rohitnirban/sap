import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandReddit, IconBrandWhatsapp } from "@tabler/icons-react"
import { Download, Share } from "lucide-react"
import Link from "next/link"

export default function Page() {
    return (
        <ScrollArea className="h-full">
            <div className="w-full max-w-6xl mx-auto p-6 md:p-10">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="/palm-tree.png" />
                            <AvatarFallback>AG</AvatarFallback>
                        </Avatar>
                        <div>
                            <div className="font-medium">Agent Green</div>
                            <div className="text-sm text-muted-foreground">San Francisco, CA - July 19, 2024</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="ghost" size="icon">
                                    <Share className="w-5 h-5" />
                                    <span className="sr-only">Share</span>
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="grid w-[800px] h-64 gap-2 p-4 bg-background rounded-md shadow-lg">
                                <div className="text-sm font-medium">Share on</div>
                                <div className="grid grid-cols-3 gap-2">
                                    <p className="cursor-pointer flex flex-col justify-center items-center p-3 rounded-md hover:bg-muted">
                                        <IconBrandInstagram className="w-10 h-10" />
                                        <span className="">Instagram</span>
                                    </p>
                                    <p className="cursor-pointer flex flex-col justify-center items-center p-3 rounded-md hover:bg-muted">
                                        <IconBrandFacebook className="w-10 h-10" />
                                        <span className="">Facebook</span>
                                    </p>
                                    <p className="cursor-pointer flex flex-col justify-center items-center p-3 rounded-md hover:bg-muted">
                                        <IconBrandWhatsapp className="w-10 h-10" />
                                        <span className="">WhatsApp</span>
                                    </p>
                                    <p className="cursor-pointer flex flex-col justify-center items-center p-3 rounded-md hover:bg-muted">
                                        <IconBrandLinkedin className="w-10 h-10" />
                                        <span className="">LinkedIn</span>
                                    </p>
                                    <p className="cursor-pointer flex flex-col justify-center items-center p-3 rounded-md hover:bg-muted">
                                        <IconBrandReddit className="w-10 h-10" />
                                        <span className="">Reddit</span>
                                    </p>
                                </div>
                            </DialogContent>
                        </Dialog>
                        <Button variant="ghost" size="icon">
                            <Download className="w-5 h-5" />
                            <span className="sr-only">Download</span>
                        </Button>
                    </div>
                </div>
                <div className="grid gap-6">
                    <div className="relative overflow-hidden rounded-lg">
                        <ScrollArea className="h-[500px]">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <div className="relative group">
                                    <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                        <span className="sr-only">View</span>
                                    </Link>
                                    <img
                                        src="https://st.depositphotos.com/2632165/4026/i/450/depositphotos_40264933-stock-photo-young-plant.jpg"
                                        alt="Plant Progress"
                                        width={600}
                                        height={400}
                                        className="object-contain w-full h-60 rounded-lg"
                                    />
                                    <div className="p-4 bg-background">
                                        <h3 className="text-lg font-semibold">Seedling Stage</h3>
                                        <p className="text-sm text-muted-foreground">April 15, 2024</p>
                                        <p className="text-sm">The plant has just sprouted and is in the early seedling stage.</p>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                        <span className="sr-only">View</span>
                                    </Link>
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-V60P4f_c5jNgCpiIRubR2kjveE0rgmJ6A&s"
                                        alt="Plant Progress"
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-60 rounded-lg"
                                    />
                                    <div className="p-4 bg-background">
                                        <h3 className="text-lg font-semibold">Vegetative Stage</h3>
                                        <p className="text-sm text-muted-foreground">May 1, 2024</p>
                                        <p className="text-sm">The plant is now in the vegetative stage, with healthy leaves and stems.</p>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                        <span className="sr-only">View</span>
                                    </Link>
                                    <img
                                        src="https://media.istockphoto.com/id/1372896722/photo/potted-banana-plant-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=bioeNAo7zEqALK6jvyGlxeP_Y7h6j0QjuWbwY4E_eP8="
                                        alt="Plant Progress"
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-60 rounded-lg"
                                    />
                                    <div className="p-4 bg-background">
                                        <h3 className="text-lg font-semibold">Flowering Stage</h3>
                                        <p className="text-sm text-muted-foreground">June 1, 2024</p>
                                        <p className="text-sm">The plant has entered the flowering stage, with beautiful blooms.</p>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                        <span className="sr-only">View</span>
                                    </Link>
                                    <img
                                        src="https://nurserylive.com/cdn/shop/products/nurserylive-g-hibiscus-gudhal-flower-red-plant-213118.jpg?v=1679750250"
                                        alt="Plant Progress"
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-60 rounded-lg"
                                    />
                                    <div className="p-4 bg-background">
                                        <h3 className="text-lg font-semibold">Fruiting Stage</h3>
                                        <p className="text-sm text-muted-foreground">July 1, 2024</p>
                                        <p className="text-sm">The plant is now producing delicious fruits, ready for harvest.</p>
                                    </div>
                                </div>
                            </div>
                        </ScrollArea>
                    </div>
                </div>
            </div>
        </ScrollArea>
    )
}




