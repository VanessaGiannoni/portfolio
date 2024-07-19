'use client';

import { Select } from '@mantine/core';
import { useCookies } from 'next-client-cookies';
import { usePathname, useRouter } from '@/src/navigation';

export default function LocaleSelection() {
  const pathname = usePathname();
  const router = useRouter();
  const cookies = useCookies();
  const currentLocale = cookies.get('NEXT_LOCALE');

  const handleSelection = (value: string | null) => {
    if (!value) return;
    router.replace(pathname, { locale: value });
  };

  const locale = [
    { value: 'en', label: '🇺🇸' },
    { value: 'pt', label: '🇧🇷' },
    { value: 'es', label: '🇪🇸' },
  ];

  const currentLocaleFlag = locale.find((option) => option.value === currentLocale)?.label || '🌐';

  return (
    <Select
      maw={70}
      size="sm"
      data={locale}
      onChange={handleSelection}
      placeholder={currentLocaleFlag}
    />
  );
}
