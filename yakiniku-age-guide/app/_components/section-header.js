export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.34em] text-[#c9a45c]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold leading-tight text-[#f7efe3] md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#d6c7ad] md:text-base">
        {description}
      </p>
    </div>
  );
}
