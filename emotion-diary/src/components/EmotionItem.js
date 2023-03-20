import React from "react";

export default function EmotionItem({
  emotion_id,
  emotion_descript,
  emotion_img,
  onClick,
  isSelected,
}) {
  return (
    <div
      onClick={() => onClick(emotion_id)}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img src={emotion_img} alt="emotion" />
      <span>{emotion_descript}</span>
    </div>
  );
}
