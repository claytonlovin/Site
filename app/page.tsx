'use client'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Problem from '../components/Problem'
import Solution from '../components/Solution'
import Audience from '../components/Audience'
import Demo from '../components/Demo'
import Benefits from '../components/Benefits'
import VideoSection from '../components/VideoSection'
import SocialProof from '../components/SocialProof'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import VideoModal from '../components/VideoModal'
import { useScrollAnimations } from '../hooks/useScrollAnimations'
import { useNavbarScroll } from '../hooks/useNavbarScroll'

export default function Home() {
  useScrollAnimations()
  useNavbarScroll()

  return (
    <main>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Audience />
      <Demo />
      <Benefits />
      <VideoSection />
      <SocialProof />
      <FAQ />
      <CTA />
      <Footer />
      <VideoModal />
    </main>
  )
}