import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AvatarImage, AvatarFallback, Avatar } from '@/components/ui/avatar';
import { CardHeader, CardContent, Card } from '@/components/ui/card';
import Image from 'next/image';


export default function About() {
  return (
    <div className='flex flex-col min-h-[100dvh]'>
      <footer className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-[#FDF6F0]'>
          <div className='container px-4 md:px-6 grid md:grid-cols-2 gap-8 lg:gap-16 items-center'>
            <div className='space-y-4'>
              <div className='inline-flex items-center justify-center rounded-full bg-[#6A4029] px-3 py-1 text-sm font-medium text-white'>
                About Us
              </div>
              <h2 className='text-4xl dark:text-neutral-800 font-bold tracking-tight sm:text-5xl md:text-6xl'>
                Discover the Art of Coffee
              </h2>
              <p className='text-gray-500 dark:text-gray-800 md:text-xl'>
                At Brew Cafe, we are passionate about crafting the perfect cup of
                coffee. Our team of skilled baristas meticulously selects and roasts the
                finest beans from around the world, ensuring each sip is a delightful
                experience.
              </p>
              <div className='flex gap-4'>
                <Button
                  className='inline-flex  dark:text-neutral-800  h-10 items-center justify-center rounded-md px-6 text-sm font-medium'
                  variant='primary'
                >
                  Learn More
                </Button>
                <Button
                  className='inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium'
                  variant='secondary'
                >
                  Our Menu
                </Button>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                alt='Coffee beans'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
              <Image
                alt='Barista pouring coffee'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
              <Image
                alt='Latte art'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
              <Image
                alt='Coffee shop interior'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1507914464562-6ff4ac29692f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6 grid md:grid-cols-2 gap-8 lg:gap-16 items-center'>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                alt='Coffee tasting'
                className='rounded-xl object-cover'
                height={300}
                src='https://plus.unsplash.com/premium_photo-1675435646338-ec55be0d0306?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
              <Image
                alt='Roasting process'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1620807773206-49c1f2957417?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
              <Image
                alt='Brewing equipment'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1607396528006-53f80c5fe616?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
              <Image
                alt='Cafe atmosphere'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1594075731547-8c705bb69e50?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
            </div>
            <div className='space-y-4'>
              <div className='inline-flex items-center justify-center rounded-full bg-[#6A4029] px-3 py-1 text-sm font-medium text-white'>
                Our Process
              </div>
              <h2 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
                Crafting the Perfect Cup
              </h2>
              <p className='text-gray-500 dark:text-gray-400 md:text-xl'>
                From sourcing the finest beans to meticulously roasting and brewing, our
                team of experts ensures every step of the process is carried out with
                the utmost care and attention to detail. Experience the art of coffee at
                its finest.
              </p>
              <div className='flex gap-4'>
                <Button
                  className='inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium'
                  variant='primary'
                >
                  Explore Our Process
                </Button>
                <Button
                  className='inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium'
                  variant='secondary'
                >
                  Book a Tasting
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 lg:py-32 bg-[#FDF6F0]'>
          <div className='container px-4 md:px-6 grid md:grid-cols-2 gap-8 lg:gap-16 items-center'>
            <div className='space-y-4'>
              <div className='inline-flex items-center justify-center rounded-full bg-[#6A4029] px-3 py-1 text-sm font-medium text-white'>
                Our Commitment
              </div>
              <h2 className='text-4xl dark:text-gray-900 font-bold tracking-tight sm:text-5xl md:text-6xl'>
                Sustainable and Ethical
              </h2>
              <p className='text-gray-500 dark:text-gray-800 md:text-xl'>
                At Brew Cafe, we are committed to sustainable and ethical practices. We
                work directly with small-scale farmers to ensure fair trade and support
                local communities. Our eco-friendly packaging and energy-efficient
                operations reflect our dedication to minimizing our environmental
                impact.
              </p>
              <div className='flex gap-4'>
                <Button
                  className='inline-flex text-gray-800 h-10 items-center justify-center rounded-md px-6 text-sm font-medium'
                  variant='primary'
                >
                  Our Sustainability
                </Button>
                <Button
                  className='inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium'
                  variant='secondary'
                >
                  Meet Our Farmers
                </Button>
              </div>
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <Image
                alt='Sustainable farming'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
              <Image
                alt='Eco-friendly packaging'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
              <Image
                alt='Fair trade certification'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
              <Image
                alt='Energy-efficient operations'
                className='rounded-xl object-cover'
                height={300}
                src='https://images.unsplash.com/photo-1518057111178-44a106bad636?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                style={{
                  aspectRatio: '300/300',
                  objectFit: 'cover',
                }}
                width={300}
              />
            </div>
          </div>
        </section>
        <section className='w-full py-12 md:py-24 min-h-[100dvh] lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='space-y-4 text-center'>
              <div className='inline-flex items-center justify-center rounded-full bg-[#6A4029] px-3 py-1 text-sm font-medium text-white'>
                Customer Reviews
              </div>
              <h2 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
                What Our Customers Say
              </h2>
              <p className='text-gray-500 dark:text-gray-400 md:text-xl'>
                Hear from our satisfied customers about their experience with Brew Cafe.
              </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
              <Card>
                <CardHeader>
                  <div className='flex items-center space-x-4'>
                    <Avatar>
                      <AvatarImage alt='User Avatar' src='/placeholder-user.jpg' />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>John Doe</h4>
                      <p className='text-sm text-gray-500'>Customer</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-500 dark:text-gray-400'>
                    The coffee at Brew Cafe is simply divine. The baristas are true
                    artists, and the atmosphere is cozy and inviting. I can&apos;t get enough
                    of their signature blends!
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className='flex items-center space-x-4'>
                    <Avatar>
                      <AvatarImage alt='User Avatar' src='/placeholder-user.jpg' />
                      <AvatarFallback>SA</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>Sarah Adams</h4>
                      <p className='text-sm text-gray-500'>Customer</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-500 dark:text-gray-400'>
                    Image I&apos;ve been a loyal customer of Brew Cafe for years. The quality of
                    their coffee is unparalleled, and the service is always top-notch.
                    It&apos;s my go-to spot for a perfect caffeine fix.Image
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <div className='flex items-center space-x-4'>
                    <Avatar>
                      <AvatarImage alt='User Avatar' src='/placeholder-user.jpg' />
                      <AvatarFallback>MJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='font-medium'>Michael Johnson</h4>
                      <p className='text-sm text-gray-500'>Customer</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-500 dark:text-gray-400'>
                    ImageBrew Cafe has become a daily ritual for me. The coffee is
                    consistently excellent, and the staff is always friendly and
                    knowledgeable. It&apos;s the perfect spot to start my day or catch up
                    with friends.Image
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <div className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
          <p className='text-xs text-gray-500 dark:text-gray-400'>
            © 2024 Brew Cafe. All rights reserved.
          </p>
          <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
            <Link className='text-xs hover:underline underline-offset-4' href='#'>
              Terms of Service
            </Link>
            <Link className='text-xs hover:underline underline-offset-4' href='#'>
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
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
