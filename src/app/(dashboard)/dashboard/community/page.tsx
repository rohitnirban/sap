'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, Image, Heart, MessageCircle, Search, Share } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState, useRef } from "react";

export default function Page() {
  const { data: session } = useSession();
  const [content, setContent] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleFileInputClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content || !hashtags || !image) {
      alert("All fields are required!");
      return;
    }

    const formData = new FormData();
    formData.append("content", content);
    formData.append("hashtags", hashtags);
    if(session){
      formData.append("username", session.user?.name || '');
      formData.append("name", session.user?.name || '');
    }
    formData.append("image", image);

    try {
      const response = await fetch("/api/community/create", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("Post Created Successfully");
        setContent('');
        setHashtags('');
        setImage(null);
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error:any) {
      alert(`Error: ${error.message}`);
    }
  };

  if (session) {
    return (
      <ScrollArea className="h-full">
        <div className="flex min-h-screen flex-col bg-background">
          <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-background px-4 sm:px-6 shadow-md">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search Community"
                className="w-full rounded-full bg-muted pl-8 pr-4 focus:bg-background focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
              </Button>
            </div>
          </header>
          <div className="flex flex-1">
            <main className="flex-1 border-r border-l">
              <div className="grid gap-4 p-4 sm:p-6">
                <form onSubmit={handleSubmit} className="grid gap-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage
                        src={session.user?.image ?? ''}
                        alt={session.user?.name ?? ''}
                      />
                      <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
                    </Avatar>
                    <Input
                      type="text"
                      placeholder="What's happening?"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      className="flex-1 rounded-full bg-muted px-4 py-2 focus:bg-background focus:outline-none"
                    />
                  </div>
                  <Input
                    type="text"
                    placeholder="Hashtags"
                    value={hashtags}
                    onChange={(e) => setHashtags(e.target.value)}
                    className="flex-1 rounded-full bg-muted px-4 py-2 focus:bg-background focus:outline-none"
                  />
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="rounded-full" onClick={handleFileInputClick}>
                        <Image className="h-5 w-5" />
                        <span className="sr-only">Add image</span>
                      </Button>
                      <Input
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>
                    <Button type="submit" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
                      Post
                    </Button>
                  </div>
                </form>
                <div className="grid gap-4 max-w-3xl mx-auto">
                  {posts.map((post, index) => (
                    <Card key={index} className="border-0">
                      <div className="flex items-start gap-4 p-4">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={post.avatar} />
                          <AvatarFallback>{post.initials}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium">{post.name}</div>
                            <div className="text-xs text-muted-foreground">{post.handle} · {post.time}</div>
                          </div>
                          <CardContent className="p-0">
                            <p>{post.content}</p>
                            <p className="text-blue-700 mt-4">{post.hashtags}</p>
                            {post.image && (
                              <img
                                src={post.image}
                                alt="Post Image"
                                width={800}
                                height={450}
                                className="rounded-lg mt-4 object-cover w-full aspect-[16/9]"
                              />
                            )}
                          </CardContent>
                          <CardFooter className="flex items-center justify-between p-0 mt-2">
                            <Button variant="ghost" size="icon" className="rounded-full">
                              <Heart className="h-5 w-5" />
                              <span className="sr-only">Like</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full">
                              <MessageCircle className="h-5 w-5" />
                              <span className="sr-only">Comment</span>
                            </Button>
                            <Button variant="ghost" size="icon" className="rounded-full">
                              <Share className="h-5 w-5" />
                              <span className="sr-only">Share</span>
                            </Button>
                          </CardFooter>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </ScrollArea>
    );
  }
}

const posts = [
  {
    avatar: "/placeholder-user.jpg",
    initials: "AC",
    name: "Acme Inc",
    handle: "@acme",
    time: "1h",
    content: "Hey everyone! I’m thrilled to share my latest green adventure. Today, I planted a beautiful oak tree in our community park. 🌲 Not only does it provide shade and beauty, but it also plays a vital role in reducing carbon emissions. Did you know that one mature tree can absorb about 48 pounds of CO2 annually? By planting trees, we’re giving back to the planet and fighting climate change. Let’s make our world a greener place, one tree at a time! 🌍💚",
    hashtags: "#TreePlanting #GoGreen #CarbonReduction #EcoFriendly #ClimateAction",
    image: "https://lh3.googleusercontent.com/gyqTXLtQHzAzLCZW8La89mCCGQ6ELZbZtjFKORJMiYfe84nEyJanDKYG06-EZFjXRexufZaSsCVeh5iEiR6vg4sIEhNADM-CgHmAulhC=s750"
  },
  {
    avatar: "/placeholder-user.jpg",
    initials: "AC",
    name: "Acme Inc",
    handle: "@acme",
    time: "2h",
    content: "Check out my latest contribution to a healthier planet! Here’s a snapshot of me planting a young sapling in my backyard. 🌳 This little guy will grow to be a powerhouse in reducing carbon dioxide in our atmosphere. Trees act as natural air purifiers, and planting them is one of the simplest yet most impactful actions we can take to combat climate change. Together, we can make a big difference. Let’s keep planting and nurturing our green friends! 🍃",
    hashtags: "#PlantTrees #ReduceCarbonFootprint #EcoWarrior #SustainableLiving #ClimateChange",
    image: "https://www.rba.go.ke/wp-content/uploads/2023/05/Dr-Shem-Ouma-Director-Research-Strategy-and-Planning-1024x681.jpg"
  },
  {
    avatar: "/placeholder-user.jpg",
    initials: "AC",
    name: "Acme Inc",
    handle: "@acme",
    time: "3h",
    content: "Just planted a row of trees along the local riverbank! 🌲 These trees will not only beautify the area but will also significantly contribute to carbon sequestration. Each tree we plant helps absorb CO2, providing cleaner air and a healthier environment for future generations. Let’s all be allies of nature and do our part in the fight against climate change. Every tree counts! 🌳🌎",
    hashtags: "#EcoHero #TreePlanting #CarbonSequestration #GreenPlanet #NatureLovers #ClimateAction",
    image: "https://lh3.googleusercontent.com/gyqTXLtQHzAzLCZW8La89mCCGQ6ELZbZtjFKORJMiYfe84nEyJanDKYG06-EZFjXRexufZaSsCVeh5iEiR6vg4sIEhNADM-CgHmAulhC=s750"
  }
];