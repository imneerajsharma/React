import Image from 'next/image'
import Banner from './components/Banner'
import CardVideoSection from './components/CardVideoSection'
import HomeNavbar from './components/HomeNavbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="" >
     
     <HomeNavbar/>
     <Banner/>
     <CardVideoSection/>
     
     <Footer/>
    </main>
  )
}
