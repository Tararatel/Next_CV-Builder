import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface TitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	isShowButton: boolean;
	className?: string;
	children: ReactNode;
	onClick: () => void;
}
