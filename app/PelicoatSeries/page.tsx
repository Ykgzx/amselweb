import Image from "next/image";

export default function PelicoatSeries() {
  return (
    <>
      <div className="min-h-screen gap-20 flex flex-col justify-center items-center bg-linear-to-b from-orange-200 to-white">
        <div className="flex flex-col justify-center items-center gap-2 bg-red-300 rounded-[10px] p-4">
          <h1 className="text-3xl font-bold">Pelicoat Series</h1>
          <h1 className=" font-bold">Release agents for thermoplastic resin</h1>
        </div>
        <div className="flex justify-center items-center gap-20">
          <img src="/images/categories/Pelicoat.jpg" className="w-64 h-64 rounded-full" alt="" />
          <div className="flex flex-col gap-8 bg-linear-to-bl from-orange-100/20 to-amber-300 rounded-[10px] p-6">
            <h1 className="font-bold text-lg">Suitability For An Item That Needs Secondary Processing</h1>
            <div className="flex gap-20">
              <h1 className="font-bold">Suitable</h1>
              <div className="flex flex-col gap-10">
                <h1>Vegetable oil-based release agents</h1>
                <ul>
                  <li>Pelicoat S (Good release performance)</li>
                  <li>Pelicoat S3-5</li>
                  <li>Pelicoat S6</li>
                  <li>Pelicoat F (For film or thin-walling molding processing)</li>
                </ul>
                <h1>
                  Features: This paintable release agent has vegetable <br/> 
                  oil as the main ingredient. It has superb release <br/> 
                  performance and... It is appropriate for secondary <br/> 
                  processing. Any residual agent on... product can be <br/> 
                  easily washed off with petroleum or alcohol-based <br/> 
                  general-purpose cleaners.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-20">
          <img src="/images/pelicoat/image 14.png" className="w-64 h-64 rounded-full" alt="" />
          <div className="flex flex-col gap-8 bg-linear-to-bl from-orange-100/20 to-amber-300 rounded-[10px] p-6">
            <h1 className="font-bold text-lg">Partly suitable  Fluorine-based release agents</h1>
            <div className="flex gap-20">
              <h1 className="font-bold">Suitable</h1>
              <div className="flex flex-col gap-10">
                <h1>Vegetable oil-based release agents</h1>
                <ul>
                  <li>Pelicoat RF-1</li>
                  <li>Pelicoat FF</li>
                  <li>Pelicoat PV</li>
                </ul>
                <h1 className="text-sm">
                  Features: This release agent contains a fluorine <br/> 
                  compound as the main ingredient. It forms a uniform... <br/> 
                  film on the mold surface... provides superb release  <br/> 
                  performance and prevents the mold from becoming dirty. <br/> 
                  The agent can also be applied as a mold protecting <br/> 
                  agent. (The agent can be used for secondary processing <br/>
                  (painting) only after it is applied and heated (at least 150°C).)
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
