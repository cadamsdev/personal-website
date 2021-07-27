import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <div className="flex-grow" style={{ paddingTop: '64px' }}>{children}</div>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
