import Link from 'next/link';
import { ReactNode } from 'react';

interface BaseNavButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  children?: ReactNode;
}

interface ButtonNavButtonProps extends BaseNavButtonProps {
  variant: 'button';
  onClick: () => void;
  isActive?: boolean;
}

interface LinkNavButtonProps extends BaseNavButtonProps {
  variant: 'link';
  href: string;
  onClick?: () => void;
}

interface CartNavButtonProps extends BaseNavButtonProps {
  variant: 'cart';
  href: string;
  badgeCount?: number;
}

type NavButtonProps =
  | ButtonNavButtonProps
  | LinkNavButtonProps
  | CartNavButtonProps;

export const NavButton = (props: NavButtonProps) => {
  const { icon: Icon, className = '', children } = props;
  const baseClasses =
    'flex items-center p-2 hover:bg-gray-100 rounded-md relative';

  switch (props.variant) {
    case 'button':
      return (
        <button
          onClick={props.onClick}
          className={`${baseClasses} ${
            props.isActive ? 'bg-gray-100' : ''
          } ${className}`}
        >
          <Icon className="h-5 w-5 mr-2" />
          {children && <span className="hidden sm:inline">{children}</span>}
        </button>
      );

    case 'link':
      return (
        <Link
          href={props.href}
          onClick={props.onClick}
          className={`${baseClasses} ${className}`}
        >
          <Icon className="h-5 w-5 mr-2" />
          {children && <span className="hidden sm:inline">{children}</span>}
        </Link>
      );

    case 'cart':
      return (
        <Link href={props.href} className={`${baseClasses} ${className}`}>
          <Icon className="h-5 w-5" />
          {props.badgeCount && props.badgeCount > 0 && (
            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-orange-500 text-white text-xs flex items-center justify-center">
              {props.badgeCount}
            </span>
          )}
          {children && <span className="hidden sm:inline">{children}</span>}
        </Link>
      );

    default:
      return null;
  }
};
