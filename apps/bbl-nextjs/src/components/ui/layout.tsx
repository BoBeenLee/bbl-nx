import React from 'react';
import Nav from './nav';
import NavFooter from './nav-footer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <div className="flex flex-col flex-1 bg-white dark:bg-gray-900">
        <Nav />
        <main className="flex flex-col justify-center flex-1 px-8 bg-white dark:bg-gray-900">
          {children}
        </main>
        <NavFooter />
      </div>
    </>
  );
}
