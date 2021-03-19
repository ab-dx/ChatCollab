import Head from 'next/head';
import Nav from '../components/Nav';
import Sidebar from '../components/Sidebar';

export default function Home() {
  return (
    <> 
    <Head>
      <title>Chat Collab</title>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
		  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"/>
    </Head>
    <Nav text="Chat App"/>
    <Sidebar />
    </> 
  )
}
