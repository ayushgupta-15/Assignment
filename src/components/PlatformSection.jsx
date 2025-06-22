export default function PlatformSection() {
  return (
    <section
      className="flex flex-col items-start px-16 py-24 gap-2.5 w-full"
      style={{ backgroundColor: "#FAFAFF" }} // Light background
    >
      <div className="flex flex-col items-start gap-3 max-w-lg">
        <h3 className="text-xl font-semibold leading-tight" style={{ color: "#6852D6" }}>
          Our Program
        </h3>

        <h1 className="text-4xl md:text-5xl font-semibold leading-tight" style={{ color: "#14131D" }}>
          Types of partnerships programs
        </h1>
      </div>
    </section>
  )
}
