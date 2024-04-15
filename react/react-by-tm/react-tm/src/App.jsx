import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCard from './components/HomeCard'
import { JobsList } from './components/JobsList'

export const App = () => {
  return (
    <>
      <Navbar />
      <Hero title={"Become a React Dev"} subtitle={"find a react job that fits yor skills and needs "} />
      <HomeCard/>
      <JobsList/>    

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>

    {/* <script src="js/main.js"></script> */}


    </>
  )
}
