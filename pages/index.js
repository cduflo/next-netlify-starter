import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import SurfchexVideo from "@components/SurfchexVideo";
import Pinpoint from "@components/Pinpoint";
import SurflineCurrent from "@components/SurflineCurrent";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header title="Welcome to my app!" />
        <p className="description">
          Got started by editing <code>pages/index.js</code>
        </p> */}
        <SurflineCurrent id="crystal-pier/5842041f4e65fad6a7708a73" />
        <Pinpoint />
        <SurfchexVideo id="wrightsville-beach" />
        <SurfchexVideo id="johnnie-mercers-pier" />
      </main>

      <Footer />
    </div>
  );
}
