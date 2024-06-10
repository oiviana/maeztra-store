export default function Collection() {
  return (
    <div className="flex flex-col lg:flex-row py-2 px-7 gap-8 justify-center items-center my-10">
      <div className="flex flex-col gap-5 w-full lg:max-w-[420px]">
        <h3 className="text-2xl font-bold">Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum.
          Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer.
          Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet
          luctus ut vulputate scelerisque .
        </p>
      </div>

      <div className="overflow-hidden rounded-md h-[184px] md:h-[300px] lg:h-[480px] lg:w-[1114px]">
        <img
          src="/images/collection/banner.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}
