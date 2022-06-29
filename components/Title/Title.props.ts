import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isUppercase: boolean;
	isShowButton: boolean;
	className?: string;
	children: ReactNode;
}
