'use client';

import { createTheme } from '@mantine/core';
import { inter, notoSans } from './fonts/fonts';

export const theme = createTheme({
fontFamily: `${notoSans.style.fontFamily}, Verdana, sans-serif`,
fontFamilyMonospace: `${inter.style.fontFamily}, Monaco, Courier, monospace`,
headings: { fontFamily: `${notoSans.style.fontFamily}, Greycliff CF, sans-serif` },
white: '#fffbeb',
black: '#232323',
colors: {
  cosmicLatte: [
    '#fffbeb', //base color
    '#fef6d6',
    '#feeba5',
    '#fee06f',
    '#fed747',
    '#fed131',
    '#fece28',
    '#e2b61e',
    '#c8a114',
    '#ad8b00',
  ],
  eerieBlack: [
    '#232323', // base color
    '#f5f5f5',
    '#e7e7e7',
    '#cdcdcd',
    '#b2b2b2',
    '#9a9a9a',
    '#8b8b8b',
    '#848484',
    '#717171',
    '#656565',
    '#575757',
  ],
  grape: [
    '#652ec7', // base color
    '#f5edff',
    '#e3d8f8',
    '#c5aeec',
    '#a481e1',
    '#895cd7',
    '#7744d2',
    '#6f37d0',
    '#5e2bb8',
    '#5325a6',
    '#461e92',
  ],
  steelPink: [
    '#de38c8', // base color
    '#ffebff',
    '#fbd4f7',
    '#f3a9e8',
    '#ea79db',
    '#e252cf',
    '#de39c8',
    '#dd2ac6',
    '#c41cae',
    '#b0149c',
    '#9a0488',
  ],
  gold: [
    '#ffd300', // base color
    '#fffbe1',
    '#fff7cc',
    '#ffee9b',
    '#ffe464',
    '#ffdc38',
    '#ffd71c',
    '#ffd509',
    '#e3bc00',
    '#c9a700',
    '#ae8f00',
  ],
},
});
