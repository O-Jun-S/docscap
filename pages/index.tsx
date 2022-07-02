import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/header";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
	  <Head>
		<title>DocsCap</title>
		<link rel="icon" href="/favicon.ico" />
	  </Head>

	  <div className="container mx-auto mt-24 max-w-xl">
          <Header></Header>
          <div className="flex flex-row-reverse m-6">
            <div className="mr-6">
                <Link href="/about">
                  <a className="text-xl text-teal-700 underline decoration-sky-500">About→</a>
                </Link>
            </div>
          </div>
	  </div>
	</>
  )
}

export default About;

