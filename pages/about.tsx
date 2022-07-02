import type { NextPage } from 'next';
import Head from 'next/head';
import Link from "next/link";
import Paragraph from '../components/paragraph';
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

          <main className="m-6 space-y-5">
              <Paragraph>iPadで書類を撮影したとき、真上から取らなければならないのを煩わしく感じたことはありませんか?</Paragraph>
              <Paragraph>しかし、「学校のiPadだから勝手にアプリを入れられない...」という方も中にはいるでしょう。</Paragraph>
              <Paragraph>この「DocsCap」では、ブラウザ上で斜めに撮影された書類を水平に直すことができます。</Paragraph>
          </main>

          <div className="m-6">
              <Link href="/">
                  <a className="text-xl text-teal-600 underline decoration-sky-500">←Back to home</a>
              </Link>
          </div>
	  </div>
	</>
  )
}

export default About;

