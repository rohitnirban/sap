'use client'

import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
import { UserNav } from './user-nav';
import Link from 'next/link';
import { IconCurrencyDollar } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';


export default function Header() {

  const { data: session } = useSession();

  const [userBalance, setUserBalance] = useState([]);

  const fetchUserBalance = async () => {
    try {
      const response = await axios.get(`http://localhost:1000/api/v1/auth/balance/testing`)
      setUserBalance(response.data.message)
      console.log(response.data.message);

    } catch (error: any) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchUserBalance()
  }, [])

  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link
            href={'https://github.com/Kiranism/next-shadcn-dashboard-starter'}
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2">
            <IconCurrencyDollar className="h-6 w-6 text-green-500" />
            <span className="text-lg font-medium text-gray-700">{userBalance} Credits</span>
          </div>
          <UserNav />
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
