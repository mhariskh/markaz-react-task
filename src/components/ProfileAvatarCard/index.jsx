import { mediaPaths } from "../../../src/constants";
export const ProfileAvatarCard = () => {
  return (
    <div className="h-full w-full rounded-[20px] bg-white">
      <div className="flex h-full flex-col  justify-between backdrop:">
        <div className="w-full border-b  py-6 px-8 last-of-type:border-b-0 lg:px-14 ">
          <div className="">
            <img
              src={"../../../public/images/ProfilePicturePhoto.jpg"}
              alt=""
              className="rounded-md border border-yellow-500 h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatarCard;
