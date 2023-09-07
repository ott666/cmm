export function CardHero() {
  return (
    <div className="flex w-fit flex-col gap-[30px]  text-[#D9D9D9]">
      <h1 className="text-[42px] leading-[3.188rem] ">
        <span className=" text-yellow-400">Lorem, sit amet consectetur,</span>
        <br />
        elit. Voluptatem atque fuga aa
        <br /> nemo Voluptatem dolor
      </h1>

      <div className="flex flex-col ">
        <p className="text-[32px] ">Fale agora com um especialista</p>
        <div className="flex">
          <button className="text-[28px] font-medium">oi</button>
          <button>tchau</button>
        </div>
      </div>
    </div>
  );
}
