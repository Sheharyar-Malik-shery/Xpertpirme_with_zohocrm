'use client';

import Link from 'next/link';
import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'submit' | 'link';

type BaseProps = {
  text: string;
  icon?: React.ReactNode;
  variant?: ButtonVariant;
  href?: string; // if passed, render as <Link>
  className?: string;
};

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
type LinkProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button(props: ButtonProps | LinkProps) {
  const {
    text,
    icon,
    variant = 'primary',
    href,
    className,
    ...rest
  } = props;

  const baseStyles = clsx(
    'inline-flex items-center justify-center gap-2 py-2 transition-all duration-300 cursor-pointer',
    {
      // Variant styles
      'bg-[var(--color-primary)] text-white overflow-hidden px-4 rounded-lg relative group btn-tilt-hover':
        variant === 'primary',
      'bg-[var(--color-secondry)] text-black mw-[50%] px-6 w-fit mr-auto font-semibold shadow hover:opacity-90':
        variant === 'secondary',
      'bg-[var(--color-warning)] text-white px-12 rounded-lg hover:bg-gray-900 ml-auto':
        variant === 'submit',
      'bg-transparent text-blue-500 underline':
        variant === 'link',
    },
    className
  );

  // Custom layered backgrounds for primary variant
  const renderPrimaryBackground = variant === 'primary' && (
    <>
      <span className="absolute w-[130px] h-[130px] bg-[#2e2a24]/90 rounded-full top-[-90px] right-[-75px] scale-0 group-hover:scale-100 transition-transform duration-300 z-0" />
      <span className="absolute w-[140px] h-[140px] bg-[#443e36]/70 rounded-full top-[-92px] right-[-75px] scale-0 group-hover:scale-100 transition-transform duration-300 delay-75 z-0" />
    </>
  );

  const content = (
    <>
      {renderPrimaryBackground}
      {variant === 'secondary' && icon && <span>{icon}</span>}
      <span className={variant === 'primary' ? 'relative z-10 tilt-inner' : ''}>
        {text}
      </span>
       {variant !== 'secondary' && icon && <span>{icon}</span>}
    </>
  );

  // Render as <Link> if href is passed
  if (href) {
    if (href.startsWith('#')) {
      return (
        <a href={href} className={baseStyles} {...(rest as LinkProps)}>
          {content}
        </a>
      );
    }

    // Otherwise, use Next.js <Link> for internal routing
    return (
      <Link href={href} className={baseStyles} {...(rest as LinkProps)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseStyles} {...(rest as ButtonProps)}>
      {content}
    </button>
  );
}
