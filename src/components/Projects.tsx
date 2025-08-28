
export default function Project() {
  return <> <div className="text-white font-semibold text-xl italic my-2">Projects section</div>
    {/* section -1  */}
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 lg:flex-row my-6">

      {/* first Project Card */}
      <div className="flex flex-col gap-1 justify-center bg-[#171717] text-white shadow-lg shadow-[#2e5145] rounded-2xl transition delay-50 duration-300 hover:scale-[102%]">

        <div className="py-1">
          <img className="w-[100%] object-cover rounded-2xl transition delay-50 duration-300 hover:scale-[103%]" src="/refraxai.png" alt="" />
        </div>

        <div className="px-2 flex flex-col justify-center gap-1 md:gap-2 mx-1 mt-1 mb-0 pb-0">
          <div className="text-[1.1rem] tracking-tight font-semibold text-slate-200">ReFrax AI</div>
          <div className="text-sm md:text-md italic">Tech Stack : Next.js, TypeScript, Tailwind CSS, MongoDB</div>
          <div className="text-wrap text-sm md:text-md tracking-tight font-light">Refrax AI is an intelligent code formatting tool that reshapes your code to match your unique coding style while preserving the underlying logic.</div>
          <div className="flex flex-row justify-around items-around gap-2 my-3 hover:cursor-pointer">
            <a className="w-full" href="https://github.com/VipulDub-Cdr/refrax-ai" target="_blank" rel="noopener noreferrer">

              <button className="w-full flex flex-row justify-center items-center gap-2 border-2 border-white py-1 rounded-xl bg-white text-black hover:cursor-pointer">
                <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="" />
                <div>Github</div>
              </button>

            </a>
            <a className="w-full" href="https://refrax-ai.vercel.app/" target="_blank" rel="noopener noreferrer">

              <button className="w-full flex flex-row justify-center items-center gap-2 border-2 border-white py-1 rounded-xl bg-white text-black hover:cursor-pointer">
                <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=1349&format=png&color=000000" alt="" />
                <div>Website</div>
              </button>

            </a>

            {/* <a href="https://s3-ui-taupe.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="flex flex-row justify-center items-center gap-2 border-2 border-white px-2 py-1 rounded-xl bg-white text-black hover:cursor-pointer">
                <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=1349&format=png&color=000000" alt="" />
                <div>Website</div>
              </button>
            </a> */}
          </div>
        </div>
      </div>


      {/* Second Project Card */}



      <div className="flex flex-col gap-1 justify-center bg-[#171717] text-white shadow-lg shadow-[#2e5145] rounded-2xl transition delay-50 duration-300 hover:scale-[102%]">

        <div>
          <img className="w-[100%] object-cover rounded-2xl transition delay-50 duration-300 hover:scale-[103%]" src="/s3ui.png" alt="" />
        </div>

        <div className="px-2 flex flex-col justify-center gap-1 md:gap-2 mx-1 mt-1 mb-0 pb-0">
          <div className="text-[1.1rem] tracking-tight font-semibold text-slate-200">S3 UI (In Progress)</div>
          <div className="text-sm md:text-md italic">Tech Stack : Next.js, Typescript, Tailwind CSS, MongoDB, AWS S3</div>
          <div className="pb-4 text-wrap text-sm md:text-md tracking-tight font-light">A simple UI built with Next.js to browse, download, and manage files and folders stored in an Amazon S3 bucket.</div>
          <div className="flex flex-row justify-center items-center gap-3 my-3 hover:cursor-pointer">
            <a className="w-full" href="https://github.com/VipulDub-Cdr/S3UI" target="_blank" rel="noopener noreferrer">

              <button className="w-full flex flex-row justify-center items-center gap-2 border-2 border-white py-1 rounded-xl bg-white text-black hover:cursor-pointer">
                <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="" />
                <div>Github</div>
              </button>

            </a>

            {/* <a href="https://s3-ui-taupe.vercel.app/" target="_blank" rel="noopener noreferrer">
              <button className="flex flex-row justify-center items-center gap-2 border-2 border-white px-2 py-1 rounded-xl bg-white text-black hover:cursor-pointer">
                <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=1349&format=png&color=000000" alt="" />
                <div>Website</div>
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </div>



    {/* section-2 */}
    <div className="w-ful h-full flex flex-col gap-6 lg:flex-row my-6">


      {/* third-project */}


      <div className="flex flex-col gap-1 justify-center bg-[#171717] text-white rounded-2xl shadow-lg shadow-[#2e5145] transition delay-50 duration-300 hover:scale-[102%]">

        <div>
          <img className="w-full object-cover rounded-2xl transition delay-50 duration-300 hover:scale-[103%]" src="/portfoliodark.png" alt="" />
        </div>

        <div className="px-2 flex flex-col justify-center gap-2 m-1">
          <div className="text-[1.1rem] tracking-tight font-semibold text-slate-200">Portfolio</div>
          <div className="text-sm md:text italic ">Tech Stack : Next.js, TypeScript, Tailwind CSS, Motion</div>
          <div className="text-wrap text-sm md:text-md tracking-tight font-light">Minimal and Responsive developer portfolio with a clean UI and smooth animations.</div>
          <div className="flex flex-row justify-center items-center gap-4 my-2 hover:cursor-pointer">
            <a className="w-full" href="https://github.com/VipulDub-Cdr/portfolio" target="_blank" rel="noopener noreferrer">

              <button className="w-full flex flex-row justify-center items-center gap-2 border-2 border-white py-1 rounded-xl bg-white text-black hover:cursor-pointer">
                <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="" />
                <div>Github</div>
              </button>

            </a>
            <a className="w-full" href="https://portfolio-five-hazel-yffdcxm3wy.vercel.app/" target="_blank" rel="noopener noreferrer">

              <button className="w-full flex flex-row justify-center items-center gap-2 border-2 border-white py-1 rounded-xl bg-white text-black hover:cursor-pointer">
                <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=1349&format=png&color=000000" alt="" />
                <div>Website</div>
              </button>

            </a>
            {/* <button className="flex flex-row justfiy-cetner items-center gap-2 border-2 border-white px-2 py-1 rounded-xl bg-white text-black hover:cursor-pointer">
              <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=1349&format=png&color=000000" alt="" />
              <div>Website</div>
            </button> */}
          </div>
        </div>
      </div>


      {/*Fourth Project Card */}



<div className="flex flex-col gap-1 justify-center bg-[#171717] text-white rounded-2xl shadow-lg shadow-[#2e5145] transition delay-50 duration-300 hover:scale-[102%]">

        <div>
          <img className="w-full object-cover rounded-2xl transition delay-50 duration-300 hover:scale-[103%]" src="/microservice.png" alt="" />
        </div>

        <div className="px-2 flex flex-col justify-center gap-2 m-1">
          <div className="text-[1.1rem] tracking-tight font-semibold text-slate-200">Microservices Based Architecture</div>
          <div className="text-sm md:text italic ">Tech Stack : Python, Docker-compose, Postgres, Redis, Flask</div>
          <div className="text-wrap text-sm md:text-md tracking-tight font-light">A containerized microservices setup with APIs for user write/read, using PostgreSQL for storage and Redis for caching.</div>
          <div className="flex flex-row justify-center items-center gap-8 my-2 hover:cursor-pointer">
            <a className="w-full" href="https://github.com/VipulDub-Cdr/Microservices-Arch" target="_blank" rel="noopener noreferrer">

              <button className="w-full flex flex-row justify-center items-center gap-2 border-2 border-white py-1 rounded-xl bg-white text-black hover:cursor-pointer">
                <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="" />
                <div>Github</div>
              </button>

            </a>
            {/* <button className="flex flex-row justfiy-cetner items-center gap-2 border-2 border-white px-2 py-1 rounded-xl bg-white text-black hover:cursor-pointer">
              <img className="h-7 w-7" src="https://img.icons8.com/?size=100&id=1349&format=png&color=000000" alt="" />
              <div>Website</div>
            </button> */}
          </div>
        </div>
      </div>
      




    </div>
  </>
}


