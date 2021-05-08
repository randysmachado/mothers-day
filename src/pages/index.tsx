import { NextSeo } from 'next-seo';

import { Hero } from '../components/Hero'
import { Quotes } from '../components/Quotes'
import { Testimonial } from '../components/Testimonial'
import { Team } from '../components/Team'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Feliz Dia das Mães"
        description="Homenagem de um Dev para sua Mãe."
        canonical="https://mae.randysmachado.dev/"

        openGraph={{
          url: 'https://mae.randysmachado.dev/',
          title: 'Feliz Dia das Mães',
          description:
            'Homenagem de um Dev para sua Mãe.',
          images: [
            {
              url: 'https://mae.randysmachado.dev/images/cover.png',
              width: 1200,
              height: 628,
              alt: 'Feliz Dia das Mães'
            }
          ],
          site_name: 'Feliz Dia das Mães'
        }}
      />
      <Hero />
      <Quotes />
      <Testimonial />
      <Team />
      <Footer />
    </> 
  )
}
