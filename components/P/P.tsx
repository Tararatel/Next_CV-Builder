import { PProps } from '../Title/Title.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size = 'medium', className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.verySmall]: size == 'verySmall',
				[styles.small]: size == 'small',
				[styles.medium]: size == 'medium',
				[styles.large]: size == 'large',
			})}
			{...props}
		></p>
	);
};
