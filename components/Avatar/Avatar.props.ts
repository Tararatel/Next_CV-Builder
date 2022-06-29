import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface AvatarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children?: ReactNode;
}
