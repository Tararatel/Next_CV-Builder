/* eslint-disable react/display-name */
import { AvatarProps } from './Avatar.props';
import styles from './Avatar.module.css';
import { ForwardedRef, useEffect, useState } from 'react';
import CameraIcon from './camera.svg';

export const Avatar = ({ className, ...props }: AvatarProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [selectedFile, setSelectedFile] = useState<MediaSource>();
	const [preview, setPreview] = useState<HTMLDivElement>();

	useEffect((): any => {
		const objectUrl: string | any = selectedFile && URL.createObjectURL(selectedFile);
		setPreview(objectUrl);

		return () => URL.revokeObjectURL(objectUrl);
	}, [selectedFile]);

	return (
		<div className={styles.wrapper} {...props}>
			<input
				className={styles.input}
				id="Avatar"
				type="file"
				value=""
				onChange={(e) => setSelectedFile(e.target.files[0])}
			/>
			<label className={styles.label} htmlFor="Avatar">
				{preview ? (
					<div style={{ backgroundImage: `url(${preview})`, width: '100%', height: '100%', backgroundSize: 'cover' }} />
				) : (
					<CameraIcon />
				)}
			</label>
		</div>
	);
};
