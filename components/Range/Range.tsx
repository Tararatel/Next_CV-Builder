import { RangeProps } from './Range.props';
import styles from './Range.module.css';
import { P } from '../P/P';
import { SetStateAction, useState } from 'react';

export const Range = ({ ...props }: RangeProps): JSX.Element => {
	const [value, setValue] = useState<number>(90);
	return (
		<div className={styles.wrapper} {...props}>
			<P className={styles.p} contentEditable suppressContentEditableWarning spellCheck={false} size="small">
				Name - {value}
			</P>

			<input
				className={styles.input}
				type="range"
				min="0"
				max="100"
				step="10"
				value={value}
				onChange={(e): void => setValue(parseInt(e.target.value))}
			/>
		</div>
	);
};
