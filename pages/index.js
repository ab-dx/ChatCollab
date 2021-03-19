import Head from 'next/head';
import Nav from '../components/Nav';
import Channelbar from '../components/Channelbar';
import React, { useState, useEffect } from 'react';

export default function Home() {
 
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  return (
    <> 
    <Head>
      <title>Chat Collab</title>
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
		  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"/>
    </Head>
    <Nav cont="Chat App"/>
    <Channelbar />
     
    </> 
  )
}
