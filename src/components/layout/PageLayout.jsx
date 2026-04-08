import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

export default function PageLayout() {
  const { pathname, hash } = useLocation();

  // Scroll to top or specific element on route/hash change
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // slight delay to ensure the page has rendered the element
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <div className="bg-background text-on-background font-body selection:bg-primary/30 min-h-screen flex flex-col">
      <Navbar servicesLabel="OUR MENU" />
      <main className="flex-grow pt-24 md:pt-32 pb-16">
        <Outlet />
      </main>
      <Footer servicesLabel="OUR MENU" />
    </div>
  );
}
