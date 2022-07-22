import { AnchorHTMLAttributes } from 'react';

export interface ALinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  isExternal: boolean;
  children: React.ReactNode;
}

export function ALink(props: ALinkProps) {
  const { isExternal, children, ...rest } = props;
  return (
    <a
      {...rest}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  );
}

export default ALink;
