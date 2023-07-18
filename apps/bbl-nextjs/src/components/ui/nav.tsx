'use client';

import React from 'react';
import UINav from '@bbl-nx/ui-components/organisms/nav/nav';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const asPath = usePathname();
  return <UINav asPath={asPath} />;
}
