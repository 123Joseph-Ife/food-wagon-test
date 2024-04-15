import React from "react";

const MiniFooter = () => {
  const today = new Date();
  const arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const now = `${
    arr[today.getMonth()]
  } ${today.getDate()} ${today.getFullYear()}`;
  return <footer>&copy; Akinmoyero Yusuf {now}</footer>;
};

export default MiniFooter;
