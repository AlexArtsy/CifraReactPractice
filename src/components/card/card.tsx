import React from 'react';
import type { JSX } from 'react';

type CardProps = {
  title: string;
  content: string | React.ReactNode;
  Button?: React.ReactNode;
};

export const Card = ({ title, content, Button }: CardProps): JSX.Element => {
  return (
    <div className="w-[30%] min-w-[250px] mx-auto p-6 bg-white rounded-lg shadow-md flex flex-col items-center text-center gap-4 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

      <div className="text-gray-600 flex flex-col items-center">{content}</div>
      <div className="mt-4 w-full">{Button}</div>
    </div>
  );
};
