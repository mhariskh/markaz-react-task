import { useNavigate } from "react-router-dom";
export const HeaderCard = ({
  title,
  description,
  goToButtonText,
  goToButtonLink,
}) => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-full rounded-[20px] bg-white">
      <div className="flex h-full flex-col  justify-between backdrop:">
        <div className="w-full border-b  py-6 px-8 last-of-type:border-b-0 lg:px-14 grid grid-cols-12  gap-8">
          <div className="col-span-6">
            <h4 className="text-xl"> {title}</h4>
            <p className="font-light">{description}</p>
          </div>
          <div className="col-span-6 ">
            <button
              className="w-full border border-transparent text-sm font-medium  py-3 text-grey-700 bg-green-400 transition ease-in hover:bg-green-500 rounded-md "
              onClick={(e) => {
                navigate(`${goToButtonLink}`);
              }}
            >
              {goToButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
