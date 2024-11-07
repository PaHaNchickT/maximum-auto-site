import type { ReactNode } from 'react';
import React from 'react';

export const Percent = ({
  fill = 'currentColor',
  filled,
  size,
  height,
  width,
  className,
}: {
  fill?: string;
  filled?: boolean;
  size?: string;
  height?: string;
  width?: string;
  className?: string;
}): ReactNode => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 431 354"
      fill={filled ? fill : 'black'}
      width={size || width || 431}
      height={size || height || 354}
      className={className}
    >
      <g filter="url(#filter0_d_242_349)">
        <path
          d="M72.9446 194.229C38.1364 197.888 18.903 182.313 15.2445 147.505L9.59994 93.8004C5.94145 58.9921 21.5163 39.7587 56.3246 36.1002L118.98 29.5149C153.788 25.8564 173.021 41.4313 176.68 76.2396L182.324 129.944C185.983 164.752 170.408 183.985 135.6 187.644L72.9446 194.229ZM80.7723 345.238L300.977 10.3862L353.687 4.84622L133.482 339.698L80.7723 345.238ZM85.2792 144.166L113.126 141.239C119.093 140.612 123.115 139.016 125.191 136.451C127.233 133.555 127.958 129.29 127.366 123.654L124.23 93.8184C123.603 87.8513 122.007 83.8294 119.442 81.7527C116.878 79.6761 112.612 78.9513 106.645 79.5785L78.7984 82.5053C72.8313 83.1325 68.8094 84.7283 66.7327 87.2927C64.6561 89.8572 63.9313 94.123 64.5585 100.09L67.6943 129.926C68.2867 135.561 69.8825 139.583 72.4818 141.991C75.0462 144.068 79.312 144.793 85.2792 144.166ZM315.48 320.57C280.671 324.228 261.438 308.653 257.779 273.845L252.135 220.141C248.476 185.332 264.051 166.099 298.859 162.441L361.514 155.855C396.323 152.197 415.556 167.772 419.215 202.58L424.859 256.284C428.518 291.092 412.943 310.326 378.134 313.984L315.48 320.57ZM327.814 270.506L355.661 267.579C361.628 266.952 365.65 265.356 367.726 262.792C369.768 259.896 370.493 255.63 369.901 249.994L366.765 220.159C366.138 214.192 364.542 210.17 361.977 208.093C359.413 206.016 355.147 205.292 349.18 205.919L321.333 208.846C315.366 209.473 311.344 211.069 309.268 213.633C307.191 216.198 306.466 220.463 307.093 226.43L310.229 256.266C310.822 261.902 312.417 265.924 315.017 268.332C317.581 270.408 321.847 271.133 327.814 270.506Z"
          fill="#BF1722"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_242_349"
          x="0.112305"
          y="0.194824"
          width="430.234"
          height="353.695"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="-2" dy="2" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_242_349" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_242_349" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
