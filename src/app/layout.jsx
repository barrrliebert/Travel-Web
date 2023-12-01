import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
title: 'OPENTRIP',
description: 'Around the world with Opentrip',
};

export default function RootLayout({ children }) {
return (
<html lang="en">

<body className={[inter.className]}>

  {children}

  
</body>

</html>
);
}
