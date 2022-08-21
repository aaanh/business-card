import Head from "next/head";
import Card from "../components/Card";
import Info from "../data/info";

export default function Index() {
  
  const { name, avatar } = Info()
  
  return <>
    <Head>
      <title>
        {name}
      </title>
      <meta property="og:image" content="/favicon.ico" />
      <link rel="icon" type="image/x-icon" href={avatar}></link>
    </Head>
    <div className="font-['Noto_Sans_JP'] flex justify-center items-center h-screen w-screen dark:bg-neutral-900 dark:text-white transition-all ease-in-out">
      <Card></Card>
    </div>
  </>
}