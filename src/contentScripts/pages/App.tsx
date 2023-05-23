import { useState } from "react";
import IconPower from "~icons/pixelarticons/power";

import "uno.css";

export default function App({ frameUrl }: { frameUrl: string }) {
  const [open, setOpen] = useState(false);
  const [openedOnce, setOpenedOnce] = useState(false);

  return (
    <div>
      <div className="fixed left-0 bottom-0 m-5 z-100 flex font-sans select-none leading-1em">
        <div
          className="flex w-10 h-10 rounded-full shadow cursor-pointer"
          w-bg="teal-600 hover:teal-700"
          onClick={() => {
            setOpen((open) => !open);
            setOpenedOnce(true);
          }}
        >
          <IconPower />
        </div>
      </div>
      {openedOnce && (
        <div
          className={`fixed top-0 right-0 h-full w-1/4 z-50 bg-white drop-shadow-xl transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <iframe src={frameUrl} className="w-full h-full border-0" />
        </div>
      )}
    </div>
  );
}
