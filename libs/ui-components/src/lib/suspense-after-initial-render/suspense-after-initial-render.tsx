import { useEffect } from '@storybook/addons';
import { Suspense, useState } from 'react';

export interface SuspenseAfterInitialRenderProps {
  children: React.ReactNode;
  fallback: NonNullable<React.ReactNode> | null;
}

export function SuspenseAfterInitialRender(
  props: SuspenseAfterInitialRenderProps
) {
  const { children, fallback } = props;
  const [isInitialRender, setIsInitialRender] = useState(true);

  return isInitialRender ? (
    <>
      <LifeCycle afterRender={() => setIsInitialRender(false)} />
      {children}
    </>
  ) : (
    <Suspense fallback={fallback}>{children}</Suspense>
  );
}

function LifeCycle({ afterRender }: { afterRender: () => void }) {
  useEffect(() => {
    afterRender();
  }, [afterRender]);
  return null;
}

export default SuspenseAfterInitialRender;
