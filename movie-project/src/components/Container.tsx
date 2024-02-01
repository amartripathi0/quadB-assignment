import React from "react";

const Container = ({
  children,
  extrastyles,
}: {
  children: React.ReactNode;
  extrastyles?: string;
}) => {
  return (
    <div
      className={`${extrastyles} bg-white rounded-lg border-2 hover:shadow-lg shadow-grey-300
    flex justify-center items-center
    `}
    >
      {children}
    </div>
  );
};

export default Container;
