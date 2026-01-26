
import BrowseByRegion from '@/components/Home/BrowseByRegion'
import DiveShops from '@/components/Home/DiveShops'
import DivingDoctors from '@/components/Home/DivingDoctors'
import DivingProfile from '@/components/Home/DivingProfile'
import EquipmentShops from '@/components/Home/EquipmentShops'
import FeaturedDiveShops from '@/components/Home/FeaturedDiveShops'
import FeaturedIn from '@/components/Home/FeaturedIn'
import Footer from '@/components/Home/Footer'
import HelpSupportSection from '@/components/Home/HelpSupportSection'
import HeroSection from '@/components/Home/HeroSection'
import Liveaboard from '@/components/Home/Liveaboard'
import MarineAnimals from '@/components/Home/MarineAnimals'
import Navbar from '@/components/Home/Navbar'
import PopularDestinations from '@/components/Home/PopularDestinations'
import ServiceRepair from '@/components/Home/ServiceRepair'
import StatsSection from '@/components/Home/StatsSection'
import TestimonialsSection from '@/components/Home/TestimonialsSection'
import WhatWeDo from '@/components/Home/WhatWeDo'
import React from 'react'


const page = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <PopularDestinations/>
    <Liveaboard/>
    <DivingProfile/>
    <DiveShops/>
    <StatsSection/>
    <MarineAnimals/>
    <BrowseByRegion/>
    <HelpSupportSection/>
    <EquipmentShops/>
    <ServiceRepair/>
    <WhatWeDo/>
    <DivingDoctors/>
    <FeaturedDiveShops/>
    <TestimonialsSection/>
    <FeaturedIn/>
    <Footer/>
    </>
  )
}

export default page