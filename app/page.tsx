import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Artikel from '@/components/Artikel'
import Fitur from '@/components/Fitur'
import Teknologi from '@/components/Teknologi'
import Joined from '@/components/Joined'
import Team from '@/components/Team'
import Footer from '@/components/Footer'

export default function Home() {

  return (
    <div className='font-inter'>
      <Navbar/>
      <Header/>
      <Artikel/>
      <Fitur/>
      <Teknologi/>
      <Joined/>
      <Team/>
      <Footer/>
    </div>
  )
}
   