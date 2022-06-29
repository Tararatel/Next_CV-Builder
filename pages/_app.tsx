import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<>
			<Head>
				<title>CV Builder</title>
				<meta name="description" content="Build your CV here" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<meta property="og:locale" content="en_EN" />
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
