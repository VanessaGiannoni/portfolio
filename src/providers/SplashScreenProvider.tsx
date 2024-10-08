'use client';

import { useEffect, useState } from 'react';
import SplashScreen from '../components/SplashScreen/SplashScreen';

export default function SplashScreenProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <SplashScreen finishLoading={setIsLoading} /> : children;
}
