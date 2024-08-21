import DarkArrow from "./components/DarkArrow";
import LongArrow from "./components/LongArrow";
import MailIcon from "./components/MailIcon";

export default function Home() {
  return (
    <section className="aspect-[5/3] flex flex-col justify-center flex-wrap gap-4">
      <div
        id="hero"
        className="left w-[49%] h-full rounded-3xl relative flex flex-col justify-between p-6"
      >
        <p className="text-white">New collection was unveiled: 2023 Spring</p>

        <div className="bottom w-full flex items-end gap-8">
          <h2 className="text-white text-7xl capitalize flex-shrink-0">
            your <br />
            style <br />
            speaks.
          </h2>
          <button className="bg-light-green rounded-full w-full flex items-center justify-between px-4 py-4">
            <p className="uppercase text-sm">next up</p>
            <div className="h-3">
              <LongArrow />
            </div>
          </button>
        </div>
      </div>

      <div className="right-top w-1/2 h-[48%] bg-light-green rounded-3xl flex flex-col justify-between p-6">
        <h2 className="uppercase text-4xl font-bold">unleash your street style with our new retro collection</h2>

        <div className="buttons w-full flex items-center gap-6">
          <button className="pl-4 pr-2 py-2 h-fit flex items-center justify-between w-1/2 rounded-full bg-white">
            <p className="uppercase text-sm">learn more</p>
            <span className="h-10 rotate-180">
              <DarkArrow />
            </span>
          </button>

          <button className="pl-4 pr-2 py-2 h-fit flex items-center justify-between w-1/2 rounded-full border border-black">
            <p className="uppercase text-sm">contact us</p>
            <span className="h-10">
              <MailIcon />
            </span>
          </button>
        </div>
      </div>

      <div className="right-bottom w-1/2 h-[48%] flex gap-4">
        <div className="first bg-black rounded-3xl w-1/2 h-full relative"></div>

        <div className="second bg-light-brown rounded-3xl w-1/2 h-full relative"></div>
      </div>
    </section>
  )
}
