export default function AdvantageCard({
  icon,
  title,
  subtitle,
}: {
  icon: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="w-[19.25rem] h-16 px-6 bg-tertiary-white flex items-center py-1 gap-5 rounded ">
      <img src={import.meta.env.BASE_URL+icon} alt="" className="w-8 h-8 object-cover mb-1" />
      <div className="flex flex-col">
        <h3 className="text-sm font-bold">{title}</h3>
        <p className="text-xs">{subtitle}</p>
      </div>
    </div>
  );
}
