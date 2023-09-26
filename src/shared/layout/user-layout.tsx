import Link from 'next/link';

export const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='relative'>
      <header className='flex p-4'>
        <Link href='/'>
          <p className='text-3xl font-extrabold text-white'>Final Project</p>
        </Link>
      </header>
      <section className='p-12'>{children}</section>
    </main>
  );
};
