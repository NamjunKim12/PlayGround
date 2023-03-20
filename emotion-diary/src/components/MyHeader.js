import React from "react";

export default function MyHeader({ head_text, leftchild, rightchild }) {
  return (
    <header>
      <div className="head_btn_left">{leftchild}</div>
      <div className="head_text">{head_text}</div>
      <div className="head_btn_right">{rightchild}</div>
    </header>
  );
}
