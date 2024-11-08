import { type ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/const-text-content';

const Footer = (): ReactElement => {
  return (
    <footer className="h-[54px] bg-[#010C13] flex justify-center items-center text-white px-5 md:h-[108px] 2xl:px-[219px] tracking-[0.055em]">
      <p className="text-center text-[10px] w-[200px] md:text-base md:w-full">{TEXT_CONTENT.footer.madeby}</p>
    </footer>
  );
};

export default Footer;
