import React from 'react';
import Link from 'next/link';

interface SmartLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export default function SmartLink({ href, children, ...rest }: SmartLinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('//');

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
