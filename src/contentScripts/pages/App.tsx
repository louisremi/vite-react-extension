import { useState } from 'react';
import IconPower from '~icons/pixelarticons/power';

import 'uno.css'

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="fixed right-0 bottom-0 m-5 z-100 flex font-sans select-none leading-1em">
      <div
        className={`bg-white text-gray-800 rounded-full shadow w-max h-min ${
          show ? "opacity-100" : "opacity-0"
        }`}
        w-p="x-4 y-2"
        w-m="y-auto r-2"
        w-transition="opacity duration-300">
        Vitesse WebExt
      </div>
      <div
        className="flex w-10 h-10 rounded-full shadow cursor-pointer"
        w-bg="teal-600 hover:teal-700"
        onClick={() => setShow(!show)}>
        <IconPower className="block m-auto text-white text-lg" />
      </div>
    </div>
  );
}