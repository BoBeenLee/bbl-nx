import Script from 'next/script';

import React from 'react';

export default function HandlingScriptPage() {
  return (
    <>
      <Script
        strategy={'lazyOnload'}
        src="https://javascript.info/article/script-async-defer/long.js?speed=1"
      />
      <input className="text-gray-900" placeholder="input" />
    </>
  );
}
