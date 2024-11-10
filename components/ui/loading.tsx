// components/Loading.tsx
"use client";

import React from "react";

import { Oval } from "react-loader-spinner";

interface LoadingProps {
  size?: string;
}

const Loading: React.FC<LoadingProps> = ({ size }) => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{ height: size }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <Oval
          visible={true}
          height="40"
          width="40"
          color="White"
          secondaryColor="#787878"
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Loading;
