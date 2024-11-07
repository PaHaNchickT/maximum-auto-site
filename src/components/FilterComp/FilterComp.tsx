/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */

import { Button } from '@nextui-org/react';
import type { PressEvent } from '@react-types/shared';
import { useRouter } from 'next/navigation';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState, type ReactElement } from 'react';

import { FILTER_DATA } from '@/constants/const-text-content';

const FilterComp = (props: {
  opts: { [key: string]: string[] };
  setLoaded: Dispatch<SetStateAction<boolean>>;
}): ReactElement => {
  const router = useRouter();
  const [opts, setOpts] = useState<{ [key: string]: string[] }>(props.opts);

  const clickHandler = (event: PressEvent): void => {
    const tempState = { ...opts };

    if (!opts[event.target.id].includes(event.target.textContent!)) {
      tempState[event.target.id].push(event.target.textContent!);
    } else {
      const tempArray = tempState[event.target.id];
      tempState[event.target.id] = tempArray.filter((item) => item !== event.target.textContent!);
    }

    setOpts(tempState);
    props.setLoaded(false);
  };

  const filterReseting = (): void => {
    const emptyOpts = { brand: [], volume: [], equipment: [] };

    if (JSON.stringify(opts) === JSON.stringify(emptyOpts)) return;

    setOpts(emptyOpts);
    props.setLoaded(false);
  };

  useEffect(() => {
    const query = new URLSearchParams({ filter: btoa(unescape(encodeURIComponent(JSON.stringify(opts)))) });

    router.push(`?${query}`);
  }, [opts]);

  return (
    <section className="flex flex-col w-full 2xl:w-[497px] self-start">
      <div className="flex flex-col gap-[1px]">
        {FILTER_DATA.map((filterItem, itemIndex) => (
          <div
            key={itemIndex}
            className={`flex flex-col gap-5 pt-[19px] pb-[27px] box-border border-b-0 border-[#9AA7AD] md:pt-[28px] md:border-b-2 ${filterItem.className}`}
          >
            <p className="text-[28px] tracking-[0.01em] hidden mb-5 md:block">{filterItem.label}</p>
            <div className="flex flex-row flex-wrap gap-[4px] md:gap-2.5 2xl:flex-col">
              {filterItem.array.map((itemsArr, brandIndex) => (
                <div key={brandIndex} className="flex flex-wrap gap-[4px] md:gap-2.5">
                  {itemsArr.map((item) => (
                    <Button
                      key={item}
                      id={filterItem.key}
                      className={`text-[8px] min-w-0 px-[8px] h-[19px] border-1 border-[#010C13] rounded-[4px] md:rounded-[8px] md:border-2 md:px-5 md:h-[40px] md:text-base ${opts[filterItem.key].includes(item) ? 'bg-[#A9A9A9]' : 'bg-transparent'}`}
                      radius="none"
                      onPress={(event) => clickHandler(event)}
                    >
                      {item}
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button
        radius="sm"
        className="my-[40px] text-[28px] h-[80px] border-2 border-[#010C13] bg-transparent hidden md:block"
        onPress={filterReseting}
      >
        Сбросить фильтр
      </Button>
    </section>
  );
};

export default FilterComp;
