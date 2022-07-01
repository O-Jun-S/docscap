import type { NextPage } from 'next'
import Head from 'next/head'
import Paragraph from '../components/Paragraph'

const Home: NextPage = () => {
  return (
    <>
	  <Head>
		<title>DocsCap</title>
		<link rel="icon" href="/favicon.ico" />
	  </Head>

	  <div className="container mx-auto mt-24 max-w-xl">
		  <header className="flex flex-col items-center gap-3">
			  <h1 className="text-5xl text-teal-700">DocsCap</h1>
              <h1 className="text-3xl">斜めに撮影した書類を簡単補正</h1>
		  </header>

          <main className="mt-6 space-y-5">
              <Paragraph>iPadで書類を撮影したとき、真上から取らなければならないのを煩わしく感じたことはありませんか?</Paragraph>
              <Paragraph>しかし、「学校のiPadだから勝手にアプリを入れられない...」という方も中にはいるでしょう。</Paragraph>
              <Paragraph>この「DocsCap」では、ブラウザ上で斜めに撮影された書類を水平に直すことができます。</Paragraph>
          </main>
	  </div>
	</>
  )
}

export default Home;

