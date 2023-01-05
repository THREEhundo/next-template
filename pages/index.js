import { server } from '../config/index'
import Meta from '../components/Meta'
import Header from '../components/Header'
import ArticleList from '../components/ArticleList'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home({ articles }) {
	return (
		<div>
			<Meta />
			<Header />
			<ArticleList articles={articles} />
		</div>
	)
}

export const getStaticProps = async () => {
	const res = await fetch(`${server}/api/articles`)
	const articles = await res.json()

	return {
		props: {
			articles
		}
	}
}
