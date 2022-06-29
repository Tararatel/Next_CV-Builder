/* eslint-disable react/display-name */
import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { ForwardedRef } from 'react';
import Link from 'next/link';
import { P } from '../P/P';
import PrintIcon from './print.svg';

export const Header = ({ className, ...props }: HeaderProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	return (
		<header className={styles.header} {...props}>
			<nav className={styles.wrapper}>
				<P size="medium">CV Builder</P>
				<button className={styles.btn}>
					<PrintIcon />
					<P size="small">Print</P>
				</button>
			</nav>
		</header>
	);
};
