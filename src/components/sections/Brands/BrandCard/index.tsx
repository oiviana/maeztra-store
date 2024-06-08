export default function BrandCard({
    image,
  }: {
    image: string;

  }) {
    return (
      <div className="w-[308px] h-[64px]  bg-tertiary-white flex items-center rounded overflow-hidden shadow-sm">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
    );
  }
  