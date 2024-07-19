'use client';

import { Center, Flex } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import anime from 'animejs';
import Image from 'next/image';
import { useEffect } from 'react';

export default function SplashScreen({ finishLoading }: { finishLoading: Function }) {
  const colorScheme = useColorScheme();
  const imageUrl = colorScheme === 'light' ? '/vans-logo.png' : '/logo-inverted.png';

  useEffect(() => {
    const timeout = setTimeout(() => {
      finishLoading(false);
    }, 2000);

    anime({
      targets: '.splash-screen',
      translateY: [-100, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeInOutQuad',
    });

    return () => clearTimeout(timeout);
  }, [finishLoading]);

  return (
    <Center maw="100%" h="100vh">
      <Flex className="splash-screen" justify="center" align="center">
        <Image src={imageUrl} alt="Logo" width={100} height={100} />
      </Flex>
    </Center>
  );
}
