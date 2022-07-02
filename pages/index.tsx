import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/header";

const About: NextPage = () => {
  return (
    <>
	  <Head>
		<title>DocsCap</title>
		<link rel="icon" href="/favicon.ico" />
	  </Head>

	  <div className="container mx-auto mt-24 max-w-xl">
          <Header></Header>
	  </div>
	</>
  )
}

export default About;

