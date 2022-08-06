import { ALink, Seperator } from '../../atoms';

export interface NavFooterItemProps {
  href: string;
  text: string;
}

export interface NavFooterProps {
  data: NavFooterItemProps[];
}

function NavFooterItem({ href, text }: NavFooterItemProps) {
  return (
    <ALink className="text-gray-500 transition hover:text-gray-600" href={href}>
      {text}
    </ALink>
  );
}

export function NavFooter(props: NavFooterProps) {
  const { data } = props;
  return (
    <footer className="flex flex-col px-8">
      <div className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-8">
        <Seperator className="mb-8" />
        <div className="grid w-full max-w-2xl grid-cols-2 gap-4 pb-16">
          <div className="flex flex-col items-start space-y-4">
            {data.map((item) => {
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
