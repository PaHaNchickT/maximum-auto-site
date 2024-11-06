import { type ReactElement } from 'react';

const Banner = (props: { brandName: string }): ReactElement => {
  return <p>{props.brandName}</p>;
};

export default Banner;
