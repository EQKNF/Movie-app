import React from "react";

interface HeaderItemProps {
  name: string;
  Icon: React.ComponentType;
}

function HeaderItem({ name, Icon }: HeaderItemProps) {
  return (
    <div className="text-white flex items-center gap-4 text-sm font-semibold cursor-pointer text-nowrap hover:underline underline-offset-8">
      <Icon />
      <h2 className="2xl:block">{name}</h2>
    </div>
  );
}

export default HeaderItem;
