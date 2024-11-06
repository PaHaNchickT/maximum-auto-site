import { type ReactElement } from 'react';

const Banner = (props: { brandName: string }): ReactElement => {
  return (
    <div className="h-[836px] bg-gradient-to-r from-[#00A8CD] to-[#047DBF]">
      <p>{props.brandName}</p>
    </div>
  );
};

export default Banner;
