import Section from '@/components/Section'
import SomeComponent from '@/components/SomeComponent'
import Carousel from '@/components/Carousel'
import AppStore from '@/components/AppStore'
import Community from '@/components/Community'
import ZliPromo from '@/components/ZliPromo'
import SkopeoPromo from '@/components/Skopeo'
import CriOPromo from '@/components/CriOPromo'
import WhyZot from '@/components/WhyZot'
import Image from 'next/image'

import styles from '@/styles/Layout.module.scss'
import MissionStatement from '@/components/MissionStatement'
import Ecosystem from '@/components/Ecosystem'
import ExportedImage from 'next-image-export-optimizer'

const CAROUSEL_ITEMS = [
  {
    caption: 'On-premise Deployment',
    image: <ExportedImage src={'/images/c1.png'} width={600} height={338} alt="On-premise Deployment"/>
  },
  {
    caption: 'Built-in advanced features',
    image: <ExportedImage src={'/images/c2.png'} width={600} height={338} alt="Built-in advanced features"/>
  },
  {
    caption: 'Minimal build',
    image: <ExportedImage src={'/images/c3.png'} width={600} height={338} alt="Minimal build"/>
  },
]

enum COLORS {
  LIGHTBLUE = 'linear-gradient(90deg, rgba(62,179,231,1) 39%, rgba(44,178,255,1) 85%, rgba(18,133,252,1) 100%)',
  GREEN = 'linear-gradient(90deg, rgba(28,94,29,1) 39%, rgba(42,125,60,1) 85%, rgba(16,115,42,1) 100%)',
  PURPLE = 'linear-gradient(90deg, rgba(179,62,231,1) 39%, rgba(178,44,255,1) 85%, rgba(133,18,252,1) 100%)',
  GREY = 'linear-gradient(90deg, rgba(223,223,223,1) 39%, rgba(211,214,212,1) 85%, rgba(193,195,193,1) 100%)',
  GREENCYAN = 'linear-gradient(90deg, rgba(62,231,179,1) 39%, rgba(44,255,178,1) 85%, rgba(18,252,133,1) 100%)',
  DARKBLUE = 'linear-gradient(90deg, rgba(28,29,94,1) 39%, rgba(42,60,125,1) 85%, rgba(16,42,115,1) 100%)',
  WHITE = 'linear-gradient(90deg, rgba(246,246,246,1) 100%, rgba(223,223,223,1) 100%, rgba(255,255,255,1) 100%)'
}

export default function App() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Section key={0} index={0} color={'white'}>
            <Carousel items={CAROUSEL_ITEMS} showDots={true} automatic={true}/>
          </Section>
          <Section key={1} index={1} color={'white'} doubleColumn={true}>
            <AppStore background={COLORS.LIGHTBLUE} color={'white'} showPicture={true} title='Our Mission'>
              <MissionStatement/>
            </AppStore>
            <Community background={COLORS.WHITE} color={'black'} showPicture={true}/>
          </Section>
          <Section key={2} index={2} color={'white'}>
            <ZliPromo />
          </Section>
          <Section key={3} index={3} color={'white'} doubleColumn={true}>
            <AppStore background={COLORS.PURPLE} color={'white'} title='Why Zot?'>             
             <WhyZot/>
            </AppStore>
            <AppStore background={COLORS.LIGHTBLUE} color={'white'} title='Well Maintained Ecosystem'>
              <Ecosystem/>
            </AppStore>             
          </Section>
          <Section key={4} index={4} color={'white'} doubleColumn={true}>
            <SkopeoPromo />
            <CriOPromo />
          </Section>
        </main>
      </div>
    </>
  )
}
