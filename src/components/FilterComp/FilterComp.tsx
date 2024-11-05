import { Button } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { FILTER_DATA } from '@/constants/const-text-content';

const FilterComp = (): ReactElement => {
  return (
    <section className="flex flex-col max-w-[500px]">
      <div className="flex flex-col">
        {FILTER_DATA.map((filterItem, itemIndex) => (
          <div key={itemIndex} className="flex flex-col gap-5 py-[30px] box-border border-b-2 border-[#9AA7AD]">
            <p className="text-[28px]">{filterItem.label}</p>
            <div className="flex flex-col gap-2.5">
              {filterItem.array.map((brandArr, brandIndex) => (
                <div key={brandIndex} className="flex gap-2.5">
                  {brandArr.map((brand) => (
                    <Button
                      key={brand}
                      className="text-base min-w-0 px-5 py-2 border-2 border-[#010C13] bg-transparent"
                      radius="sm"
                    >
                      {brand}
                    </Button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Button radius="sm" className="my-[40px] text-[28px] h-[80px]">
        Сбросить фильтр
      </Button>
    </section>
  );
};

export default FilterComp;
