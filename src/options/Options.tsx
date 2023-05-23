import IconSliders from '~icons/pixelarticons/sliders'
import IconZap from '~icons/pixelarticons/zap'
import { useStorageDemo } from '~/logic'

export default function Options() {
  const [storageDemo, setStorageDemo] = useStorageDemo()
  return (
    <main className="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
      <IconSliders className="icon-btn mx-2 text-2xl" />
      <div>Options</div>
      <p className="mt-2 opacity-50">This is the options page</p>

      <input
        value={storageDemo}
        onChange={ev => setStorageDemo(ev.target.value)}
        className="border border-gray-400 rounded px-2 py-1 mt-2"
      />

      <div className="mt-4">
        Powered by Vite <IconZap className="align-middle" />
      </div>
    </main>
  )
}
