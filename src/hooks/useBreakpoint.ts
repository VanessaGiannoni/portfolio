import { useMediaQuery } from '@mantine/hooks';
import { MantineTheme, useMantineTheme } from '@mantine/core';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const breakpointToMediaQuery = (theme: MantineTheme, breakpoint: Breakpoint): string => `(min-width: ${theme.breakpoints[breakpoint]})`;

const useBreakpoint = (breakpoint: Breakpoint): boolean => {
  const theme = useMantineTheme();
  const mediaQuery = breakpointToMediaQuery(theme, breakpoint);
  return useMediaQuery(mediaQuery) || false;
};

export default useBreakpoint;
