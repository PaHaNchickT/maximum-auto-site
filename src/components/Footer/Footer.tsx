import { type ReactElement } from 'react';

const Footer = (): ReactElement => {
  return (
    <footer className="h-[54px] bg-[#010C13] flex justify-center items-center text-white px-5 md:h-[108px] md:px-[219px] tracking-[0.055em]">
      <p className="text-center w-[200px] md:w-full">Работу выполнил Павел Терно</p>
    </footer>
  );
};

export default Footer;
