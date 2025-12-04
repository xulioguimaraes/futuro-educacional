import Image from "next/image";

type HeroShowcaseProps = {
  backgroundImage: string;
  eyebrow: string;
  title: string;
};

export default function HeroShowcase({
  backgroundImage,
  eyebrow,
  title,
}: HeroShowcaseProps) {
  return (
    <section className="relative overflow-hidden text-white py-24 min-h-[464px]">
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-[#1C437F]/80" />
      <div className="container relative mx-auto pt-[114px]">
        <div className="flex flex-col items-center justify-center text-center gap-2">
          <span className="tracking-[4px] text-[36px] text-white font-medium">
            {eyebrow}
          </span>
          <h1 className="text-6xl font-extrabold text-white">{title}</h1>
        </div>
      </div>
    </section>
  );
}


