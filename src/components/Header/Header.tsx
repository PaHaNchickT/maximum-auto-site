import { type ReactElement } from 'react';

import { Logo } from '@/icons/Logo';

const Header = (): ReactElement => {
  return (
    <header className="h-[108px] bg-black flex items-center text-white px-[219px]">
      <div className="flex items-center gap-5">
        <Logo />
        <div className="w-[2px] h-[68px] bg-white"></div>
        <h2 className="leading-6 tracking-[5%] font-normal">Официальный дилер Максимум </h2>
      </div>
    </header>
  );
};

export default Header;
