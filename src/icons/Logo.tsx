import type { ReactNode } from 'react';
import React from 'react';

export const Logo = ({
  fill = 'currentColor',
  filled,
  height,
  width,
  className,
}: {
  fill?: string;
  filled?: boolean;
  height?: number;
  width?: number;
  className?: string;
}): ReactNode => {
  return (
    <svg
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 154 42"
      fill={filled ? fill : 'none'}
      width={width}
      height={height}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.9246 2.93214L45.9056 3.00968C42.834 3.09381 39.8031 4.53533 37.5768 6.96418C36.8251 7.8086 36.1133 8.75855 35.3844 9.94544C34.8542 10.8087 32.9824 14.3311 32.9824 14.3311C32.9824 14.3311 54.6007 14.3795 64.9246 14.3618V14.3657H83.3155V2.93066H65.2868H64.9246V2.93214ZM102.697 14.2867L83.3155 14.3657L83.3157 2.9352C93.4864 2.91573 115.62 2.96526 115.62 2.96526C115.62 2.96526 113.748 6.48771 113.218 7.35094C112.49 8.53783 111.777 9.48778 111.026 10.3322C108.8 12.7611 105.768 14.2026 102.697 14.2867Z"
        fill="#B71C1C"
      />
      <path
        d="M53.1909 1.02441C42.7458 1.02441 33.8975 7.3526 29.2824 16.5099C29.0507 16.9938 28.9129 17.3101 28.938 17.2668L28.9568 17.3101C29.9775 15.846 34.3484 9.13939 45.4635 9.13939C45.6138 9.13939 46.6972 9.13318 47.4611 9.12698L47.5801 9.06493H48.2251C55.5454 9.07114 57.9062 1.07405 57.9062 1.07405C57.9062 1.07405 54.1802 1.02441 53.1846 1.02441H53.1909Z"
        fill="#FBC02D"
      />
      <path
        d="M47.5798 9.071C46.2146 9.071 45.601 9.071 45.482 9.071C34.1665 9.071 29.9396 15.8025 28.9189 17.2666C28.8813 17.3597 28.7812 17.5396 28.6621 17.7567L27.5349 20.0089C27.3158 20.4493 27.0779 21.0388 27.1217 20.9457C27.4473 20.4928 28.1925 19.6366 28.7373 19.1589C30.0523 17.9119 32.5571 16.4229 36.5148 16.4229C36.7088 16.4229 38.2932 16.4042 38.5061 16.4042H38.8191L38.8693 16.3298C44.7494 16.1871 47.3418 9.70382 47.586 9.05859L47.5798 9.071Z"
        fill="#F57F17"
      />
      <path
        d="M38.6691 16.3424C38.4624 16.3424 36.6902 16.3486 36.4961 16.3486C30.735 16.3486 28.1926 19.3451 27.2158 20.7287C25.8318 23.291 24.379 25.9959 24.379 25.9959L18.8998 15.7095C17.9855 14.1027 16.2133 12.9611 14.0341 12.5702C13.2827 12.4462 12.4749 12.3779 11.5106 12.3779C10.8092 12.3779 8.02881 12.5331 8.02881 12.5331C8.02881 12.5331 17.8477 31.3067 18.4552 32.3366C19.1127 33.4471 19.6763 34.2661 19.8515 34.4831C20.7846 35.7177 22.0245 36.5057 23.4272 36.7538C23.7528 36.8159 24.0785 36.8407 24.4041 36.8407C25.6189 36.8407 26.7962 36.4188 27.7919 35.6247L28.2428 35.2338C28.6247 34.8616 29.3573 34.0675 29.9585 32.9011C29.9773 32.8701 35.6069 22.4162 38.8882 16.33C38.8193 16.33 38.7442 16.3362 38.6753 16.3362L38.6691 16.3424Z"
        fill="#B71C1C"
      />
      <path
        d="M12.6253 26.5053C11.8049 29.7562 10.1205 36.1341 10.1017 36.1837C9.24381 39.7324 4.53475 40.2163 2.68118 39.5587C3.37627 37.2198 6.80161 23.5025 8.05401 18.0056L7.1335 16.2686L1.04053 40.5142C1.12193 40.5328 1.23465 40.5699 1.65421 40.6754C2.59352 40.9423 5.04823 41.4758 7.82859 40.4211C9.65084 39.6145 10.9471 38.5164 11.4042 36.711L13.527 28.2362L12.6191 26.5115L12.6253 26.5053Z"
        fill="white"
      />
      <path
        d="M36.233 26.5047C37.047 29.7557 38.7377 36.1335 38.7565 36.1832C39.6144 39.7318 44.3235 40.2158 46.1771 39.5582C45.482 37.2192 42.2445 24.3271 40.9921 18.8241L41.9064 17.0869L47.8177 40.5136C47.7363 40.5322 47.6236 40.5695 47.2041 40.675C46.2648 40.9417 43.8101 41.4752 41.0296 40.4205C39.2074 39.614 37.9174 38.5159 37.454 36.7105L35.325 28.2357L36.2392 26.5109L36.233 26.5047Z"
        fill="white"
      />
      <path
        d="M63.1233 9.81718H61.7033V11.5067H60.5708V7.21856H61.7033V8.83091H63.1233V7.21856H64.2558V11.5067H63.1233V9.81718ZM65.2237 7.46728C65.456 7.36436 65.7319 7.28432 66.0513 7.22714C66.3707 7.16425 66.7047 7.1328 67.0531 7.1328C67.3551 7.1328 67.6078 7.16997 67.811 7.24429C68.0143 7.3129 68.174 7.41296 68.2902 7.54446C68.4121 7.67597 68.4963 7.8332 68.5428 8.01616C68.5951 8.19912 68.6212 8.40495 68.6212 8.63365C68.6212 8.88522 68.6125 9.13965 68.5951 9.39694C68.5776 9.64851 68.566 9.89723 68.5602 10.1431C68.5602 10.3889 68.5689 10.6291 68.5863 10.8635C68.6038 11.0922 68.6473 11.3095 68.717 11.5153H67.7936L67.6107 10.9235H67.5671C67.4509 11.1008 67.2883 11.2551 67.0793 11.3866C66.876 11.5124 66.6117 11.5753 66.2865 11.5753C66.0832 11.5753 65.9003 11.5467 65.7377 11.4896C65.5751 11.4267 65.4357 11.3409 65.3195 11.2323C65.2034 11.1179 65.1134 10.9864 65.0495 10.8378C64.9856 10.6834 64.9537 10.5119 64.9537 10.3232C64.9537 10.0602 65.0117 9.84005 65.1279 9.66281C65.2498 9.47985 65.4212 9.33405 65.6419 9.22542C65.8684 9.11107 66.1355 9.03388 66.4433 8.99386C66.7569 8.94812 67.1054 8.93382 67.4887 8.95097C67.5294 8.63079 67.5061 8.40209 67.419 8.26487C67.3319 8.12193 67.1373 8.05046 66.8353 8.05046C66.6088 8.05046 66.3678 8.07333 66.1123 8.11907C65.8626 8.16481 65.6564 8.22485 65.4938 8.29918L65.2237 7.46728ZM66.6611 10.6577C66.8876 10.6577 67.0676 10.6091 67.2012 10.5119C67.3348 10.4089 67.4335 10.3003 67.4974 10.186V9.6285C67.3174 9.61135 67.1431 9.60849 66.9747 9.61993C66.8121 9.63136 66.6669 9.65709 66.5391 9.69711C66.4114 9.73713 66.3097 9.79431 66.2342 9.86864C66.1587 9.94297 66.121 10.0373 66.121 10.1517C66.121 10.3117 66.1675 10.4375 66.2604 10.529C66.3591 10.6148 66.4927 10.6577 66.6611 10.6577ZM73.3001 9.54274L73.3697 8.6508H73.3262L72.9777 9.38837L72.1588 10.7177H71.7494L70.8521 9.38837L70.5211 8.6508H70.4688L70.5821 9.53416V11.5067H69.5715V7.21856H70.7476L71.7494 8.83091L71.9933 9.37121H72.0282L72.2808 8.81375L73.2042 7.21856H74.389V11.5067H73.3001V9.54274ZM77.9602 10.5633H79.1711V7.17568L79.3018 6.59249L78.8836 7.0985L78.1083 7.62165L77.6292 6.97843L79.6154 5.40039H80.2513V10.5633H81.4361V11.5067H77.9602V10.5633ZM83.9397 10.6405C84.323 10.6405 84.6163 10.549 84.8196 10.3661C85.0228 10.1831 85.1245 9.93153 85.1245 9.61135C85.1245 9.2683 85.0054 9.01673 84.7673 8.85664C84.5292 8.69654 84.1894 8.6165 83.748 8.6165L83.0598 8.64223V5.50331H86.0566V6.54961H84.0355V7.70741L84.3927 7.67311C84.6773 7.68454 84.9328 7.736 85.1593 7.82748C85.3916 7.91896 85.5891 8.04761 85.7517 8.21341C85.9143 8.3735 86.0392 8.57076 86.1263 8.80518C86.2134 9.03388 86.257 9.29117 86.257 9.57704C86.257 9.91438 86.1989 10.2117 86.0827 10.469C85.9666 10.7263 85.804 10.9407 85.5949 11.1122C85.3916 11.2837 85.1506 11.4124 84.8718 11.4981C84.5931 11.5839 84.2882 11.6268 83.9571 11.6268C83.6958 11.6268 83.446 11.6039 83.2079 11.5582C82.9756 11.5181 82.7782 11.461 82.6156 11.3866L82.9205 10.4604C83.054 10.5176 83.1992 10.5633 83.356 10.5976C83.5186 10.6262 83.7132 10.6405 83.9397 10.6405ZM92.0354 8.20484H91.173C91.1381 8.61078 91.0975 9.01387 91.051 9.41409C91.0045 9.81432 90.929 10.1745 90.8245 10.4947C90.7258 10.8092 90.5893 11.0665 90.4151 11.2666C90.2408 11.461 90.0143 11.5582 89.7356 11.5582C89.3987 11.5582 89.1606 11.5153 89.0212 11.4295L89.1606 10.5033C89.2535 10.5376 89.3406 10.5547 89.4219 10.5547C89.5381 10.5547 89.6397 10.5061 89.7268 10.4089C89.814 10.3117 89.8866 10.1374 89.9446 9.88579C90.0085 9.63422 90.0579 9.29403 90.0927 8.86521C90.1334 8.43068 90.1624 7.8818 90.1798 7.21856H93.1679V11.5067H92.0354V8.20484ZM97.6338 11.1379C97.4596 11.2751 97.2214 11.3924 96.9194 11.4896C96.6233 11.581 96.3067 11.6268 95.9699 11.6268C95.2672 11.6268 94.7532 11.4267 94.428 11.0264C94.1027 10.6205 93.9401 10.0659 93.9401 9.36264C93.9401 8.60792 94.1231 8.04189 94.4889 7.66453C94.8548 7.28717 95.3688 7.0985 96.0309 7.0985C96.2516 7.0985 96.4665 7.12708 96.6755 7.18426C96.8846 7.24143 97.0704 7.33577 97.2331 7.46728C97.3957 7.59878 97.5264 7.77602 97.6251 7.99901C97.7238 8.22199 97.7732 8.49929 97.7732 8.83091C97.7732 8.95098 97.7645 9.07962 97.747 9.21684C97.7354 9.35406 97.7151 9.497 97.6861 9.64565H95.0726C95.09 10.0059 95.183 10.2774 95.3514 10.4604C95.5256 10.6434 95.8044 10.7348 96.1877 10.7348C96.4258 10.7348 96.6378 10.7005 96.8236 10.6319C97.0153 10.5576 97.1605 10.4833 97.2592 10.4089L97.6338 11.1379ZM96.0135 7.99043C95.7173 7.99043 95.4966 8.07905 95.3514 8.2563C95.212 8.42782 95.1278 8.65938 95.0987 8.95097H96.7191C96.7423 8.64223 96.693 8.40495 96.571 8.23914C96.4548 8.07333 96.269 7.99043 96.0135 7.99043ZM101.71 8.20484H100.481V11.5067H99.314V8.20484H98.0856V7.21856H101.71V8.20484Z"
        fill="white"
      />
      <path
        d="M151.338 22.2793C150.317 22.2793 149.948 23.1728 149.935 23.1913L146.171 29.9972C146.171 29.9972 142.734 23.8242 142.395 23.179C141.963 22.36 141.331 22.2793 141.025 22.2793H139.509V33.7817H141.55V26.1879L145.32 32.9318H146.873L150.661 26.1693V33.7817H152.759V22.2793H151.331H151.338Z"
        fill="white"
      />
      <path
        d="M125.049 22.2793C124.034 22.2793 123.659 23.1728 123.646 23.1913L119.888 29.9972C119.888 29.9972 116.451 23.8242 116.112 23.179C115.687 22.36 115.048 22.2793 114.748 22.2793H113.226V33.7817H115.273V26.1879L119.037 32.9318H120.59L124.379 26.1693V33.7817H126.476V22.2793H125.049Z"
        fill="white"
      />
      <path
        d="M62.8165 22.2793C61.802 22.2793 61.4263 23.1728 61.42 23.1913L57.6566 29.9972C57.6566 29.9972 54.2249 23.8242 53.8868 23.179C53.4547 22.36 52.8284 22.2793 52.5216 22.2793H51V33.7817H53.0414V26.1879L56.8112 32.9318H58.3641L62.1527 26.1693V33.7817H64.2505V22.2793H62.8165Z"
        fill="white"
      />
      <path
        d="M88.7601 33.3843C88.7476 33.341 88.5659 32.2614 87.7143 31.8954C87.0568 31.6162 86.6622 31.1571 86.3931 30.7849C85.8983 30.1024 84.5207 28.2225 84.1449 27.7138C84.4517 27.2919 85.46 25.8774 86.0361 25.1391C86.4682 24.5746 86.6498 24.345 87.3887 24.1527C88.3029 23.9169 88.5346 23.0235 88.5283 22.5831V22.2977C88.5283 22.2977 88.1527 22.2728 87.9961 22.2728C87.3261 22.2728 85.6854 22.3845 84.8275 23.4578C84.2952 24.1093 82.5544 26.3117 82.1348 26.839L80.8762 27.0438V22.2666H78.7471L78.7596 33.7752H80.8762V29.0664L82.4104 28.874C82.8111 29.42 84.3954 31.5665 85.2659 32.5965C86.1487 33.6388 87.1382 33.7939 87.6454 33.7939C87.852 33.7939 88.8102 33.7008 88.8102 33.7008L88.7601 33.3781V33.3843Z"
        fill="white"
      />
      <path
        d="M110.351 22.1738C108.949 22.1738 107.978 23.3588 107.716 23.7248L102.524 30.233V22.273H100.395V33.8809H101.103C102.092 33.8809 102.581 33.4777 103.207 32.6898C103.595 32.1996 108.674 25.8467 109.005 25.4309V33.7878H111.084V22.1738H110.358H110.351Z"
        fill="white"
      />
      <path
        d="M138.524 22.2732C138.374 22.2422 138.011 22.1678 137.867 22.1678C137.454 22.1678 136.439 22.2919 136.013 23.4521C135.6 24.5315 133.928 28.7814 133.32 30.3572C133.089 29.7678 130.265 23.2783 130.265 23.2783C129.965 22.5276 129.319 22.1182 128.443 22.1182C128.361 22.1182 128.124 22.1552 127.947 22.1863L127.472 22.2545C127.472 22.2545 127.96 23.0426 128.449 24.2276C128.712 24.8914 131.035 30.2641 131.88 32.4231L132.375 32.6093L131.931 33.8005C131.667 34.514 131.323 34.9234 130.91 35.004C130.791 35.0289 130.678 35.035 130.578 35.0474H130.484C130.178 35.0785 129.851 35.1095 129.539 35.3639C128.9 35.8912 129.012 37.1133 129.012 37.1133C129.012 37.1133 129.801 37.1382 129.952 37.1382C131.974 37.1382 133.346 36.1208 134.154 34.0176C134.154 34.0176 137.654 25.1458 138.011 24.2523C138.612 22.8006 138.876 22.3477 138.876 22.3477L138.524 22.2732Z"
        fill="white"
      />
      <path
        d="M97.3518 31.5543C97.0698 31.5543 96.7693 31.6163 96.475 31.7404C96.0429 31.8831 95.1725 32.0506 94.8844 32.0506C92.3859 32.0506 91.4027 30.9338 91.4027 28.049C91.4027 25.1641 92.248 23.917 94.9783 23.917C95.5294 23.917 95.974 24.1032 96.3685 24.252L96.5063 24.3079C96.7255 24.3885 96.9446 24.4258 97.1763 24.4258C97.9528 24.4258 98.6226 23.9481 98.673 23.824L98.8985 23.4951L98.7039 23.3152C98.61 23.2221 98.4978 23.1415 98.4416 23.0919L98.4097 23.0671C97.4583 22.3473 96.2997 22 94.8781 22C92.1855 22 89.1421 22.6142 89.1421 27.3975V28.5639C89.1421 32.1498 91.3526 33.9738 94.8406 33.9738C96.3372 33.9738 97.7835 33.5334 98.7107 32.7951L98.8917 32.6462L98.792 32.4352C98.7727 32.3981 98.3787 31.5419 97.345 31.5419L97.3518 31.5543Z"
        fill="white"
      />
      <path
        d="M76.3611 31.6721V26.7088C76.3611 23.2532 75.0399 22.0186 71.3203 22.0186C69.8486 22.0186 67.8635 22.5273 66.9055 23.0112L66.6111 23.1291L66.7427 23.4145C66.9932 23.9604 67.5192 24.5436 68.2456 24.5436C68.4397 24.5436 68.6463 24.5002 68.8467 24.4195C69.3915 24.2024 70.3183 24.0535 71.1449 24.0535C73.8939 24.0535 74.2446 24.6367 74.2697 26.2684H74.0818C67.9512 26.3801 66.0288 28.3219 66.0288 30.6733C66.0288 32.3918 66.655 33.9863 70.0866 33.9863C72.6164 33.9863 73.9252 33.3844 74.5953 32.7827C74.9209 33.4279 75.5534 33.7629 76.5428 33.8064C76.5428 33.8064 76.3674 32.1002 76.3674 31.6721H76.3611ZM70.2995 32.0258C68.5963 32.0258 68.1078 31.455 68.1078 30.605C68.1078 29.2339 69.498 28.1606 73.9753 28.1606H74.2571V28.6941C74.2571 31.0269 73.0298 32.0258 70.2933 32.0258H70.2995Z"
        fill="white"
      />
    </svg>
  );
};
