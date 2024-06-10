export default function BrandCard({
    image,
  }: {
    image: string;

  }) {
    return (
      <div className="w-[19.25rem] h-16  bg-tertiary-white flex items-center rounded overflow-hidden shadow-sm">
        <img src={import.meta.env.BASE_URL+image} alt="" className="w-full object-cover" />
      </div>
    );
  }
  