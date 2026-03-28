import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

export default function PageLayout() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
