import React from "react";

type Props = {
  onClick: (e: any) => void;
};

const AddMoreButton = (props: Props) => {
  return (
    <button
      className="bal-btn px-3 h-9 text-base bg-transparent text-leofi dark:text-blue-400 border border-leofi dark:border-blue-700 dark:hover:border-blue-600 dark:focus:border-blue-600 hover:text-rose-500 dark:hover:text-gray-200 dark:focus:text-gray-200 inline-block rounded-lg shadow hover:shadow-none cursor-pointer"
      type="button"
      {...props}
    >
      Add a token
    </button>
  );
};

export default AddMoreButton;
