import React, { useContext } from "react";
import {
  HeaderCard,
  ProfileInfoCard,
  ProfileAvatarCard,
} from "../../components";
import { LoginContext } from "../../contexts/LoginContext";

export const Profile = () => {
  const { user } = useContext(LoginContext);
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12">
          <HeaderCard
            title="Profile Page"
            description="This page contains details regarding your profile"
          />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-8 mb-3">
        <div className="col-span-6">
          <ProfileInfoCard email={user.email} password={user.password} />
        </div>
        <div className="col-span-6">
          <ProfileAvatarCard />
        </div>
      </div>
    </div>
  );
};

export default Profile;
