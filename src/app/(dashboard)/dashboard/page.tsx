import { CalendarDateRangePicker } from '@/components/date-range-picker';
import { Overview } from '@/components/overview';
import { RecentSales } from '@/components/recent-sales';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { IconCoin, IconDroplet, IconPlant, IconUsers, IconWind } from '@tabler/icons-react';
import Rankings from './components/rankings';

export default function page() {
  return (
    <ScrollArea className="h-full">
      <div className='m-10'>
        <div className='flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Global Dashboard
          </h1>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Total Emission(O2)
                  </CardTitle>
                  <IconWind className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>14523 PPM</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Total Plants
                  </CardTitle>
                  <IconPlant className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>722</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Total Carings
                  </CardTitle>
                  <IconDroplet className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>585</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Total Users
                  </CardTitle>
                  <IconUsers className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>230</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Carbon Sequestration
                  </CardTitle>
                  <IconWind className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>1500 tCO₂/yr</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Biodiversity Index
                  </CardTitle>
                  <IconPlant className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>85/100</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Water Usage
                  </CardTitle>
                  <IconDroplet className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>71230 Liters</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Funding and Expenditure
                  </CardTitle>
                  <IconUsers className='h-4 w-4 text-muted-foreground' />
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>₹ 140000</div>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className='pl-2'>
                  <Overview />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Recent Plants</CardTitle>
                  <CardDescription>
                    Recently planted plants are visible here
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentSales />
                </CardContent>
              </Card>
            </div>
            <div>
              <h1 className='text-3xl font-bold text-center mt-10'>Top Ranker&apos;s</h1>
              {/* <div className="flex flex-col items-center justify-center gap-8 p-8">
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center justify-center rounded-full bg-yellow-500 p-4 shadow-lg">
                      <IconMedal className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold">Rohit Yadav</h3>
                      <p className="text-gray-500">Score: 1950</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center justify-center rounded-full bg-gray-400 p-4 shadow-lg">
                      <IconMedal className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold">Prashant</h3>
                      <p className="text-gray-500">Score: 1300</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="flex items-center justify-center rounded-full bg-yellow-800 p-4 shadow-lg">
                      <IconMedal className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-lg font-bold">Riddhi Dhingra</h3>
                      <p className="text-gray-500">Score: 1200</p>
                    </div>
                  </div>
                </div>
              </div> */}
              <Rankings />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ScrollArea>
  );
}
