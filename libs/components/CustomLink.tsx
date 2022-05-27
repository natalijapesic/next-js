import Link from 'next/link';
import { LinkStyle } from './types';

type CustomLinkProps = {
  linkStyle: LinkStyle | undefined;
  href: string;
  onClick?: () => void;
  message: string;
};
const cyanClassName = 'py-1 px-3 hover:text-cyan-500 hover:text-opacity-100';
const boldClassName =
  'font-bold text-2xl py-1 px-3 hover:text-cyan-500 hover:text-opacity-100';

const linkStyles: Record<LinkStyle, string> = {
  cyan: cyanClassName,
  bold: boldClassName,
};
const CustomLink: React.FC<CustomLinkProps> = (props: CustomLinkProps) => {
  return (
    <Link href={props.href}>
      <a className={linkStyles[props.linkStyle]} onClick={props.onClick}>
        {props.message}
      </a>
    </Link>
  );
};

export default CustomLink;
