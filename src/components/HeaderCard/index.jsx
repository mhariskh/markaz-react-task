export const HeaderCard = ({ title, description }) => {
  return (
    <div className="h-full w-full rounded-[20px] bg-white">
      <div className="flex h-full flex-col  justify-between backdrop:">
        <div className="w-full border-b  py-6 px-8 last-of-type:border-b-0 lg:px-14">
          <h4 className="text-xl"> {title}</h4>
          <p className="font-light">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
