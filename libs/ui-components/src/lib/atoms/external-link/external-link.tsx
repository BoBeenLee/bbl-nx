export interface ExternalLinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

export function ExternalLink(props: ExternalLinkProps) {
  const { className, href, children } = props;
  return (
    <a className={className} href={href} target={'_blank'} rel="noreferrer">
      {children}
    </a>
  );
}

export default ExternalLink;
