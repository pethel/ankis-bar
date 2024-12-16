import React, { useState } from 'react';
import { Tab as TabComp } from './component/tabs/Tab';
import { TabList } from './component/tabs/TabList';
import { type Tab } from './types';
import { meny } from './meny';
import classNames from 'classnames';

const App: React.FC = () => {
  const [tab, setTab] = useState<Tab>('pizza');

  return (
    <div className="app grid grid-rows-[auto_1fr]">
      <header className="py-4 px-4 max-w-[1280px] mx-auto w-full grid grid-cols-[1fr_auto] items-center">
        <h1 className="text-4xl font-lato font-bold text-fieryRed pl-4">
          Ankis Bar
        </h1>
      </header>
      <div className="bg-softWhite py-4">
        <div className="px-4 mx-auto max-w-[1280px] w-full">
          <h2 className="text-3xl text-charcoalBlue font-bold mt-6 mb-2 font-inter text-center">
            Meny
          </h2>
          <p className="text-pretty font-inter text-charcoalBlue">
            Vi erbjuder ett brett och varierat utbud av mat som passar alla
            smaker. Hos oss hittar du allt från klassisk svensk husmanskost till
            utsökt pizza och à la carte-rätter. Vardagar mellan kl. 10:30 och
            14:00 serverar vi dagens rätt och pizza till förmånliga priser.
            Välkommen in för en god och prisvärd måltid – eller{' '}
            <a className="font-bold underline" href="tel:+4694210068">
              ring
            </a>{' '}
            och beställ!
          </p>
        </div>

        <div className="py-4 px-4 mx-auto max-w-[1280px] w-full">
          <TabList>
            {Object.entries(meny).map(([key, value]) => (
              <TabComp
                key={key}
                isActive={tab === key}
                onClick={() => setTab(key as Tab)}
                aria-controls={`tabpanel-${key}`}
                id={`tab-${key}`}
              >
                {value.name}
              </TabComp>
            ))}
          </TabList>
        </div>
        {Object.entries(meny).map(([key, value]) => {
          return (
            <div
              id={`tabpanel-${key}`}
              role="tabpanel"
              aria-labelledby={`tab-${key}`}
              className={classNames(
                'mx-auto max-w-[1280px] w-full p-4 bg-white border-solid border border-lightMintGray rounded-md font-inter',
                key !== tab && 'hidden',
              )}
            >
              {tab === key && (
                <>
                  <h3 className="text-2xl text-charcoalBlue font-bold font-inter underline text-center mb-3">
                    {value.name}
                  </h3>
                  <div className="md:columns-2 gap-7">
                    {value.dishes.map((dish) => (
                      <div className="break-inside-avoid-column grid grid-cols-[1fr_auto] border-b border-lightMintGray py-2">
                        <h4 className="text-lg font-medium text-charcoalBlue row-start-1 row-span-1">
                          {dish.name}
                        </h4>
                        <p className="row-start-1 row-span-1 font-light">
                          {dish.price}:-
                        </p>
                        <ul className="row-start-2 row-span-1 col-span-2 font-light flex flex-wrap gap-x-1">
                          {dish.ingredients.map((it) => (
                            <li
                              key={it}
                              className="[&:not(:last-child)]:after:content-[','] lowercase [&:first-child]:capitalize"
                            >
                              {it}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
      <footer className="sticky bottom-0 z-10 bg-charcoalBlue">
        <dl className="max-w-[1280px] grid grid-cols-3 gap-2 md:gap-7 mx-auto justify-center items-center w-full px-2 pb-4 pt-3">
          <dt className="sr-only">Öppettider</dt>
          <dd>
            <div className="flex gap-1 font-inter text-sm lg:text-md text-white items-center justify-center">
              <svg
                aria-hidden={true}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="fill-alabasterPink shrink-0"
              >
                <path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z" />
              </svg>
              Mån-Sön: <br className="md:hidden" />
              10:30 - 22:00
            </div>
          </dd>
          <dt className="sr-only">Adress</dt>
          <dd>
            <a
              className="flex gap-1 font-inter hover:underline text-sm lg:text-md text-white items-center justify-center"
              href="https://goo.gl/maps/eCcnyQVjPtAxhits6"
            >
              <svg
                aria-hidden={true}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="fill-alabasterPink shrink-0"
              >
                <path d="M480-301q99-80 149.5-154T680-594q0-90-56-148t-144-58q-88 0-144 58t-56 148q0 65 50.5 139T480-301Zm0 101Q339-304 269.5-402T200-594q0-125 78-205.5T480-880q124 0 202 80.5T760-594q0 94-69.5 192T480-200Zm0-320q33 0 56.5-23.5T560-600q0-33-23.5-56.5T480-680q-33 0-56.5 23.5T400-600q0 33 23.5 56.5T480-520ZM200-80v-80h560v80H200Zm280-520Z" />
              </svg>
              <address className="not-italic">
                Storgatan 37
                <br className="md:hidden" />
                Dorotea
              </address>
            </a>
          </dd>

          <dt className="sr-only">Telefon</dt>
          <dd>
            <a
              className="flex gap-1 font-inter hover:underline text-sm lg:text-md text-white items-center justify-center"
              href="tel:+4694210068"
            >
              <svg
                aria-hidden={true}
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                className="fill-alabasterPink shrink-0"
              >
                <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
              </svg>
              0942 10068
            </a>
          </dd>
        </dl>
      </footer>
    </div>
  );
};

export default App;
