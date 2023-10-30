import React, {useState} from "react";
import Image from "./Image/Image";
import ProfileMenu from "./ProfileMenu/ProfileMenu";

const ProfileLeft = () => {
  const [activeCategory, setActiveCategory] = useState("0");

  return (
    <div>
      <Image alt="img_profile" />
      <ProfileMenu
        categories={[
          {id: "0", label: "Данные профиля"},
          {id: "1", label: "Рабочее пространство"},
          {id: "2", label: "Приватность"},
          {id: "3", label: "Безопасность"},
        ]}
        isActive={activeCategory}
        onClick={setActiveCategory}
      />
    </div>
  );
};

export default ProfileLeft;
