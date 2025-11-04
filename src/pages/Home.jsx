import React from 'react'
import Homeabout from '../components/Home/Homeabout'
import Ourwork from '../components/Home/Ourwork'
import TabsSection from '../components/Home/TabsSection'
import Banner from '../components/Home/Banner'

const Home = () => {
  return (
    <>
      <Banner />
      <TabsSection />
      <Homeabout />
      <Ourwork />
    </>
  )
}

export default Home