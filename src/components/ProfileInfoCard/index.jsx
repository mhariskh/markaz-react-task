export const ProfileInfoCard = ({ email, password }) => {
  return (
    <div className="h-full w-full rounded-[20px] bg-white">
      <div className="flex h-full flex-col  justify-between backdrop:">
        <div className="w-full border-b  py-6 px-8 last-of-type:border-b-0 lg:px-14 ">
          <div className="font-medium">
            Email: <p className="font-light"> {email}</p>
          </div>
          <div className="font-medium">
            Password: <p className="font-light"> {password}</p>
          </div>
          <div className="font-medium">
            Bio: <p className="font-light">This section is reserved for Bio.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
