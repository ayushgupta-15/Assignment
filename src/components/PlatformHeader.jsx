export default function PlatformHeader() {
  return (
    <section
      className="w-full px-4 py-6 md:px-16 md:py-[100px] bg-[#0A0914] relative"
    >
      <div className="flex flex-col items-start gap-2 md:gap-3 max-w-[528px]">
        {/* Orange label - different text for mobile */}
        <span className="text-[#FF7F3E] text-lg md:text-[22px] font-semibold leading-[106%]">
          <span className="block md:hidden">The benefits</span>
          <span className="hidden md:block">Be a partner</span>
        </span>

        {/* White heading - different text for mobile */}
        <h1 className="text-[#FAFAFF] text-2xl md:text-[48px] font-semibold leading-[106%]">
          <span className="block md:hidden">Moderation to help your community thrive</span>
          <span className="hidden md:block">CometChat partner advantages</span>
        </h1>
      </div>
    </section>
  );
}