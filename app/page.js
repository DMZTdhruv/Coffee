import Image from 'next/image';
import LandingPage from '@/Components/component/landing-page-coffee';
import About from '@/Components/component/about';

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
    </>
  );
}
