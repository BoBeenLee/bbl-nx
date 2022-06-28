import { useCallback } from 'react';

export interface NavFooterItemProps {
  href: string;
  text: string;
}

export interface NavFooterProps {
  data: NavFooterItemProps[];
  onNavigate: ({ href }: { href: string }) => void;
}

function NavFooterItem({
  href,
  text,
  onNavigate,
}: NavFooterItemProps & { onNavigate: NavFooterProps['onNavigate'] }) {
  const onNavigateItem = useCallback(() => {
    onNavigate({ href });
  }, [href, onNavigate]);

  return (
    <button
      className="text-gray-500 transition hover:text-gray-600"
      onClick={onNavigateItem}
    >
      {text}
    </button>
  );
}

export function NavFooter(props: NavFooterProps) {
  const { data, onNavigate } = props;
  return (
    <footer className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
      <div className="grid w-full max-w-2xl grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col items-start space-y-4">
          {data.map((item) => {
            const { href, text } = item;
            return (
              <NavFooterItem
                key={href}
                href={href}
                text={text}
                onNavigate={onNavigate}
              />
            );
          })}
        </div>
        <div className="flex flex-col space-y-4">
          <a
            rel="noreferrer"
            href="https://github.com/BoBeenLee"
            target="_blank"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Github
          </a>
          <a
            rel="noreferrer"
            href="mailto:globaldev@naver.com"
            target="_blank"
            className="text-gray-500 transition hover:text-gray-600"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default NavFooter;
