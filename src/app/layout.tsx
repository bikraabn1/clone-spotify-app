import type { Metadata } from "next";
import { Geist, Geist_Mono, Gothic_A1 } from "next/font/google";
import "./globals.css";
import MainLayout from "./layout/MainLayout";
import { ConfigProvider } from 'antd';
import localFont from 'next/font/local'

const plusJakarta = localFont({
  src: [
    {
      path: './font/PlusJakarta/PlusJakartaSans-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './font/PlusJakarta/PlusJakartaSans-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/PlusJakarta/PlusJakartaSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/PlusJakarta/PlusJakartaSans-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/PlusJakarta/PlusJakartaSans-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/PlusJakarta/PlusJakartaSans-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/PlusJakarta/PlusJakartaSans-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
  ],
  variable : '--font-plus-jakarta-sans'
})

const gothicA1 = localFont({
  src: [
    {
      path: './font/Gothic_A1/GothicA1-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './font/Gothic_A1/GothicA1-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './font/Gothic_A1/GothicA1-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './font/Gothic_A1/GothicA1-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './font/Gothic_A1/GothicA1-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './font/Gothic_A1/GothicA1-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './font/Gothic_A1/GothicA1-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './font/Gothic_A1/GothicA1-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './font/Gothic_A1/GothicA1-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-gothic',
})

export const metadata: Metadata = {
  title: "Spotify",
  description: "Spotify Clone by Bikra Abna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} antialiased`}
      >
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#',
              borderRadius: 8,
              colorBgContainer: '#121212',
              fontFamily: 'var(--font-plus-jakarta-sans)',
              lineWidth: 0
            },
          }}
        >
          <MainLayout >
            {children}
          </MainLayout>
        </ConfigProvider>
      </body>
    </html>
  );
}
