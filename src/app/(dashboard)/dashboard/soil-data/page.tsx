'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { useState, useEffect } from 'react'

interface SoilData {
    condition: 'good' | 'bad' | 'average'
    moisture: number
    nutrient: number
    pH: number
    salinity: number
    temperature: number
}

export default function Apps() {
    const [data, setData] = useState<SoilData[]>([])

    const url =
        'https://indian-oil-68b1d-default-rtdb.asia-southeast1.firebasedatabase.app/.json'

    useEffect(() => {
        const fetchData = () => {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    if (data) {
                        setData(Object.values(data))
                    }
                })
                .catch((error) => console.error('Error fetching data:', error))
        }

        fetchData() // Fetch data initially

        // Set up interval to fetch data periodically
        const interval = setInterval(fetchData, 1000) // Fetch data every 5 seconds

        // Clean up function
        return () => {
            clearInterval(interval) // Clear interval when component unmounts
        }
    }, [])

    return (
        <ScrollArea className='h-full'>
            <div className="flex-1 space-y-4  p-4 pt-6 md:p-8">
                <div>
                    <h1 className='text-2xl font-bold tracking-tight'>Soil Data</h1>
                    <p className='text-muted-foreground'>
                        Discover Your Soil&apos;s Secrets, Explore Detailed Data
                    </p>
                </div>
                <Separator className='my-4 shadow' />
                <ul className='no-scrollbar grid gap-4 overflow-y-scroll pb-16 pt-4 md:grid-cols-1 lg:grid-cols-2'>
                    {data.map((item, index) => (
                        <li
                            key={index}
                            className={`${item.condition === 'good'
                                ? 'bg-green-300'
                                : item.condition === 'bad'
                                    ? 'bg-red-300'
                                    : 'bg-yellow-300'
                                } grid items-center rounded-lg border p-4 hover:shadow-md md:grid-cols-2 lg:grid-cols-3`}
                        >
                            <div className='p-4 text-center'>
                                <h1
                                    className={`text-2xl font-bold ${item.condition === 'good'
                                        ? 'text-green-500'
                                        : item.condition === 'bad'
                                            ? 'text-red-500'
                                            : 'text-yellow-600'
                                        }`}
                                >
                                    {item.condition.charAt(0).toUpperCase() +
                                        item.condition.slice(1)}
                                </h1>
                                <h2>Condition</h2>
                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-2xl font-bold'>
                                    {item.moisture.toFixed(2)}
                                </h1>
                                <h2 className='text-xl font-bold'>%</h2>
                                <h3>Moisture&nbsp;(%)</h3>
                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-2xl font-bold'>{item.pH.toFixed(2)}</h1>
                                <h2 className='text-xl font-bold'>pH</h2>
                                <h3>pH</h3>
                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-2xl font-bold'>
                                    {item.salinity.toFixed(2)}
                                </h1>
                                <h2 className='text-xl font-bold'>ms/cm</h2>
                                <h3>Salinity&nbsp;(mS/cm)</h3>
                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-2xl font-bold'>
                                    {item.temperature.toFixed(2)}
                                </h1>
                                <h2 className='text-xl font-bold'>°C</h2>
                                <h3>Temperature&nbsp;(°C)</h3>
                            </div>
                            <div className='p-4 text-center'>
                                <h1 className='text-2xl font-bold'>
                                    {item.nutrient.toFixed(2)}
                                </h1>
                                <h2 className='text-xl font-bold'>ppm</h2>
                                <h3>Nutrient&nbsp;(ppm)</h3>
                            </div>
                        </li>
                    ))}
                    <li className='grid items-center rounded-lg border bg-red-300 p-4 hover:shadow-md md:grid-cols-2 lg:grid-cols-3'>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold text-red-500'>Bad</h1>
                            <h2>Condition</h2>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>29.00</h1>
                            <h2 className='text-xl font-bold'>%</h2>
                            <h3>Moisture&nbsp;(%)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>8.10</h1>
                            <h2 className='text-xl font-bold'>pH</h2>
                            <h3>pH</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>1.30</h1>
                            <h2 className='text-xl font-bold'>ms/cm</h2>
                            <h3>Salinity&nbsp;(mS/cm)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>36.53</h1>
                            <h2 className='text-xl font-bold'>°C</h2>
                            <h3>Temperature&nbsp;(°C)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>142.52</h1>
                            <h2 className='text-xl font-bold'>ppm</h2>
                            <h3>Nutrient&nbsp;(ppm)</h3>
                        </div>
                    </li>
                    <li className='grid items-center rounded-lg border bg-yellow-300 p-4 hover:shadow-md md:grid-cols-2 lg:grid-cols-3'>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold text-yellow-600'>Average</h1>
                            <h2>Condition</h2>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>38.00</h1>
                            <h2 className='text-xl font-bold'>%</h2>
                            <h3>Moisture&nbsp;(%)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>7.10</h1>
                            <h2 className='text-xl font-bold'>pH</h2>
                            <h3>pH</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>2.10</h1>
                            <h2 className='text-xl font-bold'>ms/cm</h2>
                            <h3>Salinity&nbsp;(mS/cm)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>29.00</h1>
                            <h2 className='text-xl font-bold'>°C</h2>
                            <h3>Temperature&nbsp;(°C)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>245.00</h1>
                            <h2 className='text-xl font-bold'>ppm</h2>
                            <h3>Nutrient&nbsp;(ppm)</h3>
                        </div>
                    </li>
                    <li className='grid items-center rounded-lg border bg-green-300 p-4 hover:shadow-md md:grid-cols-2 lg:grid-cols-3'>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold text-green-500'>Good</h1>
                            <h2>Condition</h2>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>42.00</h1>
                            <h2 className='text-xl font-bold'>%</h2>
                            <h3>Moisture&nbsp;(%)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>7.10</h1>
                            <h2 className='text-xl font-bold'>pH</h2>
                            <h3>pH</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>2.30</h1>
                            <h2 className='text-xl font-bold'>ms/cm</h2>
                            <h3>Salinity&nbsp;(mS/cm)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>26.01</h1>
                            <h2 className='text-xl font-bold'>°C</h2>
                            <h3>Temperature&nbsp;(°C)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>215.00</h1>
                            <h2 className='text-xl font-bold'>ppm</h2>
                            <h3>Nutrient&nbsp;(ppm)</h3>
                        </div>
                    </li>
                    <li className='grid items-center rounded-lg border bg-green-300 p-4 hover:shadow-md md:grid-cols-2 lg:grid-cols-3'>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold text-green-500'>Good</h1>
                            <h2>Condition</h2>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>42.00</h1>
                            <h2 className='text-xl font-bold'>%</h2>
                            <h3>Moisture&nbsp;(%)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>7.10</h1>
                            <h2 className='text-xl font-bold'>pH</h2>
                            <h3>pH</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>2.30</h1>
                            <h2 className='text-xl font-bold'>ms/cm</h2>
                            <h3>Salinity&nbsp;(mS/cm)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>26.01</h1>
                            <h2 className='text-xl font-bold'>°C</h2>
                            <h3>Temperature&nbsp;(°C)</h3>
                        </div>
                        <div className='p-4 text-center'>
                            <h1 className='text-2xl font-bold'>215.00</h1>
                            <h2 className='text-xl font-bold'>ppm</h2>
                            <h3>Nutrient&nbsp;(ppm)</h3>
                        </div>
                    </li>
                </ul>
            </div>
        </ScrollArea>
    )
}
