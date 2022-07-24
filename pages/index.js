import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Spotify 2.0</title>
				<meta name="description" content="spotify ui clone" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1>Spotify clone</h1>
		</div>
	);
}
