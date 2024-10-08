import Header from '@/components/layout/header';
import Sidebar from '@/components/layout/sidebar';
import { Toaster } from '@/components/ui/toaster';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Our Dashboard',
  icons: {
    icon: '/logo.png', // Adjust path if necessary
  },
};

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden pt-16">{children}</main>
        <Toaster />
      </div>
    </>
  );
}
