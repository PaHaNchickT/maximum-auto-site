'use client';

import { Link } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { useResize } from '@/hooks/useResize';
import { Logo } from '@/icons/Logo';

const Header = (): ReactElement => {
  const windowWidth = useResize();

  return (
    <header className="h-[50px] bg-[#010C13] flex items-center text-white px-[7px] md:h-[108px] md:px-[116px] 2xl:px-[216px]">
      <div className="flex items-center gap-4 md:gap-5">
        <Link href="/">
          <Logo width={windowWidth >= 768 ? 154 : 111} height={windowWidth >= 768 ? 42 : 28} />
        </Link>
        <div className="w-[3px] h-[25px] md:w-[2px] md:h-[68px] bg-white"></div>
        <h2 className="leading-4 font-normal tracking-[0.03em] text-[10px] md:leading-6 md:tracking-[0.055em] md:text-base">
          Официальный дилер Максимум{' '}
        </h2>
      </div>
    </header>
  );
};

export default Header;
