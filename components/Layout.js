import Head from 'next/head';
import Link from 'next/link';
import React, { Children } from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Online Buddha' : 'Online Buddha'}</title>
        <meta name="description" content="Online Buddha Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 px-4 items-center justify-between shadow-md">
            <Link href="/" className="text-lg font-bold">
              Online Buddha
            </Link>
            <div>
              <Link href="/cart" className="p-2">
                Cart
              </Link>
              <Link href="/login" className="p-2">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex shadow-inner h-10 justify-center items-center">
          Copywrite &copy; 2021-{new Date().getFullYear()} Online Buddha
        </footer>
      </div>
    </>
  );
}
