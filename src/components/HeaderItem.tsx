import React from "react";

interface HeaderItemProps {
  name: string;
  Icon: React.ComponentType;
}

function HeaderItem({ name, Icon }: HeaderItemProps) {
  return (
    <div className="text-white flex items-center gap-4 cursor-pointer text-nowrap hover:underline underline-offset-8 py-2">
      <div className="text-xl">
        <Icon />
      </div>
      <h2 className="2xl:block font-semibold tracking-wider ">{name}</h2>
    </div>
  );
}

export default HeaderItem;
