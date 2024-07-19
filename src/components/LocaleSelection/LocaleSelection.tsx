'use client';

import { Select } from '@mantine/core';
import { usePathname, useRouter } from '@/src/navigation';

export default function LocaleSelection() {
  const pathname = usePathname();
  const router = useRouter();

  const handleSelection = (value: string | null) => {
    if (!value) return;
    router.replace(pathname, { locale: value });
  };

  const locale = [
    { value: 'en', label: '🇺🇸' },
    { value: 'pt', label: '🇧🇷' },
    { value: 'es', label: '🇪🇸' },
  ];

  return (
    <Select
      maw={70}
      size="sm"
      data={locale}
      onChange={handleSelection}
    />
  );
}
