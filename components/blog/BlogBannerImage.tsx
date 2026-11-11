import Image from "next/image";

interface BlogBannerImageProps {
  image: string;
  alt: string;
}

export const BlogBannerImage = ({ image, alt }: BlogBannerImageProps) => {
  return (
    <section className="wrap max-w-[1040px] -mt-10 sm:-mt-14 mb-12 sm:mb-16">
      <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-[10px] overflow-hidden bg-sand-2">
        <Image
          src={image}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1040px) 100vw, 1040px"
          className="object-cover"
        />
      </div>
    </section>
  );
};

