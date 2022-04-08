import React, { useState, useEffect } from 'react';
import Head from 'next/head'
export default function Layout({title, children}) {
  return (
    <div className={'bg-gray-200'}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`container mx-auto max-w-xxl p-8 pt-8 min-h-screen`}>
        {children}
      </main>
    </div>
  );
}

