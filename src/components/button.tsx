import React from 'react';

interface IButton {
  onClick?: () => void;
  icon: React.ReactChild;
  className?: string;
}

export default function Button({ onClick, icon, className = '' }: IButton) {
  return (
    <button className={` ${className}`} onClick={() => onClick && onClick()}>
      {icon}
    </button>
  );
}
