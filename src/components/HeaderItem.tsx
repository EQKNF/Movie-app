import React from "react";

interface HeaderItemProps {
  name: string;
  Icon: React.ComponentType;
}

function HeaderItem({ name, Icon }: HeaderItemProps) {
  return (
    <div className="text-white flex items-center gap-3 text-lg font-semibold cursor-pointer text-nowrap hover:underline underline-offset-8 mb-2">
      <Icon />
      <h2 className="hidden 2xl:block">{name}</h2>
    </div>
  );
}

export default HeaderItem;
