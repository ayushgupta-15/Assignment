export default function PlatformHeader() {
  return (
    <section
      className="w-full px-16 py-[100px] bg-[#0A0914] relative"
      style={{ minHeight: "301px" }}
    >
      <div className="flex flex-col items-start gap-3 max-w-[528px]">
        {/* Orange label */}
        <span className="text-[#FF7F3E] text-[22px] font-semibold leading-[106%]">
          Be a partner
        </span>

        {/* White heading */}
        <h1 className="text-[#FAFAFF] text-[48px] font-semibold leading-[106%]">
          CometChat partner advantages
        </h1>
      </div>
    </section>
  );
}
