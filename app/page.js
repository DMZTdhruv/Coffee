import LandingPage from '@/Components/component/landing-page-coffee';
import About from '@/Components/component/about';

export const metadata = {
  title: 'Best Coffee in Town - Brew Cafe',
  description:
    'Discover the best coffee in town at Your Coffee Shop. We offer a variety of coffee blends, brewed to perfection. Visit us for an unforgettable coffee experience.',
  keywords:
    'coffee, coffee shop, best coffee, coffee blends, brewed coffee, coffee near me',
  author: 'Your Coffee Shop',
  openGraph: {
    title: 'Best Coffee in Town - Brew Cafe',
    description:
      'Discover the best coffee in town at Your Coffee Shop. We offer a variety of coffee blends, brewed to perfection. Visit us for an unforgettable coffee experience.',
    url: 'https://www.yourcoffeeshop.com',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'Best Coffee in Town',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Coffee in Town - Brew Cafe',
    description:
      'Discover the best coffee in town at Your Coffee Shop. We offer a variety of coffee blends, brewed to perfection. Visit us for an unforgettable coffee experience.',
    image:
      'https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
};

export default function Home() {
  return (
    <>
      <LandingPage />
      <About />
    </>
  );
}
