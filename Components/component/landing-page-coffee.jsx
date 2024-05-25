import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <header className='px-4 lg:px-6 h-14 flex items-center justify-between'>
        <Link className='flex items-center' href='#'>
          <CoffeeIcon className='h-6 w-6' />
          <span className='ml-2 text-lg font-medium'>Brew Cafe</span>
        </Link>
        <Button
          className='hidden md:inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium'
          variant='primary'
        >
          Place Order
        </Button>
      </header>
      <main className='flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-12 md:py-24 lg:py-32'>
        <div className='max-w-md text-center space-y-4'>
          <div className='inline-flex items-center justify-center rounded-full bg-[#FDF6F0] px-3 py-1 text-sm font-medium text-[#6A4029]'>
            Specialty Coffee
          </div>
          <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
            Elevate Your Senses
          </h1>
          <p className='text-gray-500 dark:text-gray-400 md:text-xl'>
            Discover the perfect blend of artistry and craftsmanship at Brew Cafe.
          </p>
          <Button
            className='inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium'
            variant='primary'
          >
            Place Order
          </Button>
        </div>
      </main>
    </div>
  );
}

function CoffeeIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M10 2v2' />
      <path d='M14 2v2' />
      <path d='M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1' />
      <path d='M6 2v2' />
    </svg>
  );
}
