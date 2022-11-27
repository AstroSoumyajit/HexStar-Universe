import React from "react";

const UserProfile = ({name, image, email}) => {
  return (
    <div className="flex justify-center items-center">
      <section className="mt-8 text-xl font-gilroy space-y-4 flex flex-col justify-center items-center">
        <img
          src={image}
          className="rounded-full w-24 h-24"
        />
        <h1>{name}</h1>
        <h1 className="text-base text-zinc-400">{email}</h1>
      </section>
    </div>
  );
};

export default UserProfile;
