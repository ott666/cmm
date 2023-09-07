import Image from 'next/image';
import { Container } from '../Container';
import { CardHero } from '../CardHero';

export default function Hero() {
  return (
    <section id="hero" className={`relative h-fit w-full`}>
      <div className="relative h-screen w-full" id="hero-row-1">
        <Image
          className="-z-10"
          src={'/herobg5.png'}
          fill
          alt="bg"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <Container className="flex items-center">
          <CardHero />
        </Container>
      </div>
      <div id="hero-row-2" className="relative flex h-64 bg-stone-800">
        <Container className="absolute -top-20 flex flex-wrap justify-between gap-10">
          <div className="h-52 w-80 rounded-2xl bg-yellow-600 shadow-2xl shadow-black"></div>
          <div className="h-52 w-80 rounded-2xl bg-yellow-600 shadow-2xl shadow-black"></div>
          <div className="h-52 w-80 rounded-2xl bg-yellow-600 shadow-2xl shadow-black"></div>
          <div className="h-52 w-80 rounded-2xl bg-yellow-600 shadow-2xl shadow-black"></div>
          <div className="h-52 w-80 rounded-2xl bg-yellow-600 shadow-2xl shadow-black"></div>
          <div className="h-52 w-80 rounded-2xl bg-yellow-600 shadow-2xl shadow-black"></div>
        </Container>
      </div>
      <div className="relative h-screen w-full" id="hero-row-3">
        <Image
          className="-z-10"
          src={'/herobg5.png'}
          fill
          alt="bg"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <Container className="flex items-center">
          <CardHero />
        </Container>
      </div>
    </section>
  );
}
