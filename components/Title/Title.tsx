import { TitleProps } from '../Title/Title.props';
import styles from './Title.module.css';
import { P } from '../P/P';

export const Title = ({
	isUppercase,
	isShowButton,
	className,
	onClick,
	children,
	...attrs
}: TitleProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<P className={styles.p} {...attrs}>
				{children}
			</P>
			{isShowButton && (
				<button id={styles.btn} className="ui-button isLink" onClick={onClick}>
					+
				</button>
			)}
		</div>
	);
};
