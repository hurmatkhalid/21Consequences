import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import About from '../components/About';
import Banner from '../components/Banner';
import Discord from '../components/Discord';
import Header from '../components/Header';
import { useRouter } from 'next/router';

const desc =
	'21Consequences is a non profit organisation, founded by a bunch of young people from Kashmir, to guide students, especially high school kids academically. As an organisation, we help students in narrowing down streams for career preference, provide prep materials, books, tips and strategies regarding multiple competitive examinations held worldwide and spread awareness about different opportunities.';

const Home: NextPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.prefetch('/team');
	}, []);

	return (
		<div className="min-h-screen w-full bg-black text-white">
			<Head>
				<title>21Consequences</title>
				<link rel="icon" href="/Logo.png" />
			</Head>
			<meta name="description" content={desc} />

			<Header />

			<div className="max-w-[90rem] h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent snap-y snap-mandatory mx-auto">
				<Banner />
				<About />
				<Discord />
			</div>
		</div>
	);
};

export default Home;
