/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */

import { Button } from '@nextui-org/react';
import type { PressEvent } from '@react-types/shared';
import { useRouter } from 'next/navigation';
import { useEffect, useState, type ReactElement } from 'react';

import { FILTER_DATA } from '@/constants/const-text-content';

const FilterComp = (props: { opts: { [key: string]: string[] } }): ReactElement => {
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
  };

  const filterReseting = (): void => {
    setOpts({ brand: [], volume: [], equipment: [] });
  };

  useEffect(() => {
    const query = new URLSearchParams({ filter: btoa(unescape(encodeURIComponent(JSON.stringify(opts)))) });

    router.push(`?${query}`);
  }, [opts]);

  return (
    <section className="flex flex-col max-w-[500px]">
      <div className="flex flex-col">
        {FILTER_DATA.map((filterItem, itemIndex) => (
          <div key={itemIndex} className="flex flex-col gap-5 py-[30px] box-border border-b-2 border-[#9AA7AD]">
            <p className="text-[28px]">{filterItem.label}</p>
            <div className="flex flex-col gap-2.5">
              {filterItem.array.map((itemsArr, brandIndex) => (
                <div key={brandIndex} className="flex gap-2.5">
                  {itemsArr.map((item) => (
                    <Button
                      key={item}
                      id={filterItem.key}
                      className={`text-base min-w-0 px-5 py-2 border-2 border-[#010C13] ${opts[filterItem.key].includes(item) ? 'bg-[#A9A9A9]' : 'bg-transparent'}`}
                      radius="sm"
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
        className="my-[40px] text-[28px] h-[80px] border-2 border-[#010C13] bg-transparent"
        onPress={filterReseting}
      >
        Сбросить фильтр
      </Button>
    </section>
  );
};

export default FilterComp;
