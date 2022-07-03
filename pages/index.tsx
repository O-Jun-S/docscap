import type { NextPage } from 'next';
import Head from 'next/head';
import Header from "../components/header";
import ImageForm from "../components/image_form";
import Paragraph from "../components/paragraph";
import Link from "next/link";

const About: NextPage = () => {
  return (
    <>
	  <Head>
		<title>DocsCap</title>
		<link rel="icon" href="/favicon.ico" />
	  </Head>

	  <div className="container mx-auto mt-24 max-w-xl">
          <Header />
          <div className="flex flex-row-reverse m-6">
            <div className="mr-6">
                <Link href="/about">
                  <a className="text-xl text-teal-700 underline decoration-sky-500">About→</a>
                </Link>
            </div>
          </div>
          <Paragraph>処理したい書類をアップロードしてください↓</Paragraph>
          <Paragraph>4つの点を動かし、書類の四隅にそろえてください。</Paragraph>
          <ImageForm />
	  </div>
	</>
  )
}

export default About;

