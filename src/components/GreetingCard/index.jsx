export const GreetingCard = ({ userName }) => {
  const userNameValue = userName;
  return (
    <div className="h-full w-full rounded-[20px] bg-white lg:max-w-[600px]">
      <div className="flex h-full flex-col  justify-between backdrop:">
        <div
          key={1}
          className="w-full border-b  py-6 px-8 last-of-type:border-b-0 lg:px-14"
        >
          <p className="font-light">
            Hello <span className="font-medium">{userNameValue}</span>, Welcome
            to the home page. Any kind of statistics, including charts can be
            added here in the long run
          </p>
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;
