import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
	return (
		<div>
			<Head>
				<title>WebDev Newz</title>
				<meta name='keywords' content='web development, progrmming' />
			</Head>
			<Header />
			<h1>Welcome to Next</h1>
		</div>
	)
}
