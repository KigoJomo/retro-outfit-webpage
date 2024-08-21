import ArrowDoodle from './components/ArrowDoodle'
import CircleDoodle from './components/CircleDoodle'
import DarkArrow from './components/DarkArrow'
import LightArrow from './components/LightArrow'
import LongArrow from './components/LongArrow'
import MailIcon from './components/MailIcon'

export default function Home() {
  return (
    <section className="aspect-[5/3] flex flex-col justify-center flex-wrap gap-4">
      <div
        id="hero"
        className="left w-[49%] h-full rounded-3xl relative flex flex-col justify-between p-6"
      >
        <div className="flex items-center gap-4">
          <p className="text-white font-medium capitalize tracking-wider w-fit px-4 py-2 rounded-full outline outline-1 outline-white">new collection was unveiled:</p>
          <p className="text-white font-medium capitalize tracking-wider w-fit px-4 py-2 rounded-full outline outline-1 outline-white">2023 spring</p>
        </div>

        <button className='absolute top-[45%] right-1/4 w-24 aspect-square rounded-full border border-white backdrop-blur-3xl flex items-center justify-center text-white uppercase font-medium text-lg -rotate-12'>shop now</button>

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

      <div className="right-top w-1/2 h-[48%] bg-light-green rounded-3xl flex flex-col justify-between p-6 relative">
        <span className="absolute left-[18.5rem] top-[1.25rem] scale-125">
          <CircleDoodle />
        </span>

        <span className="absolute left-[15rem] top-[10rem]">
          <ArrowDoodle />
        </span>

        <h2 className="uppercase text-5xl font-bold text-black leading-[3.5rem]">
          unleash your street style <br /> with our new retro <br /> collection
        </h2>

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
        <div className="first bg-black rounded-[2.25rem] w-1/2 h-full relative flex flex-col justify-end gap-[25%] p-6">
          <button className="absolute h-10 right-4 top-4 rotate-45 hover:rotate-[60deg]">
            <LightArrow />
          </button>

          <div className="w-full flex flex-col gap-2">
            <h3 className="capitalize text-white text-3xl tracking-widest">
              new surprise!
            </h3>
            <span className="w-1/2 h-[1px] bg-white opacity-30"></span>
          </div>

          <div className="w-full flex flex-col gap-1">
            <h3 className="w-full capitalize text-white font-bold text-5xl tracking-widest">
              retro
            </h3>
            <h3 className="w-full capitalize text-white font-bold text-5xl tracking-widest pl-14">
              outfit
            </h3>
          </div>
        </div>

        <div className="second bg-[url('/images/hat.webp')] bg-contain bg-center bg-no-repeat bg-blend-normal bg-light-brown rounded-[2.25rem] w-1/2 h-full relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-gray-700 before:z-[4] before:opacity-30 p-6 flex flex-col justify-end gap-8 ">
          <button className="absolute z-[5] h-10 right-4 top-4 rotate-45 hover:rotate-[60deg]">
            <DarkArrow />
          </button>

          <p className="text-white text-xl tracking-widest font-medium z-[5]">
            We are challenging conventional retail, putting an end to dead
            stock, unconventional waste and more fantastic.
          </p>

          <h3 className="uppercase text-white text-4xl font-semibold z-[5]">
            #TRENDING 2024
          </h3>
        </div>
      </div>
    </section>
  )
}
