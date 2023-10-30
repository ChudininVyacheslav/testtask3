import React from "react";
import Category from "./Category/Category";

const ProfileMenu = ({categories = [], isActive, onClick}) => {
  return (
    <div>
      {categories.map((categ) => (
        <Category
          isActive={isActive === categ.id}
          key={categ.id}
          id={categ.id}
          onClick={onClick}
        >
          {categ.label}
        </Category>
      ))}
    </div>
  );
};

export default ProfileMenu;
