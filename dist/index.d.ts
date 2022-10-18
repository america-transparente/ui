import { ReactNode, DetailedHTMLProps } from 'react';

interface ButtonProps {
    primary: boolean;
    className?: string;
    children: ReactNode;
    href?: string;
    onClick?: () => void | string;
    color?: string;
    icon?: boolean;
}
declare type ButtonType = DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
declare function Button({ primary, className, children, href, onClick, color, icon, }: ButtonProps & ButtonType): JSX.Element;

interface HeaderProps {
    title: string;
    color: string;
}
declare function Header({ title, color }: HeaderProps): JSX.Element;

export { Button, Header };
