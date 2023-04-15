import { NavKey, nav } from '@bbl-nx/constants';
import { ALink } from '../../atoms/alink/alink';
import { Seperator } from '../../atoms/seperator/seperator';

export interface NavFooterItemProps {
  href: NavKey;
  text: string;
}

function NavFooterItem({ href, text }: NavFooterItemProps) {
  return (
    <ALink
      activeClassName="text-gray-500"
      className="text-gray-500 transition hover:text-gray-600"
      urlPath={href}
    >
      {text}
    </ALink>
  );
}

export function NavFooter() {
  return (
    <footer className="flex flex-col px-8">
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
        <Seperator className="mb-8" />
        <div className="grid w-full max-w-2xl grid-cols-2 gap-4 pb-16">
          <div className="flex flex-col items-start space-y-4">
            {nav.map((item) => {
              const { href, text } = item;
              return <NavFooterItem key={href} href={href} text={text} />;
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
      </div>
    </footer>
  );
}

export default NavFooter;
