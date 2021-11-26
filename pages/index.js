import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Modal from "../components/Modal";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addDefaultLocale(en);
export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Fake Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Feed />
      <Modal />
    </div>
  );
}
