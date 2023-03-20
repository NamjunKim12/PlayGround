import React, { useEffect } from "react";
import DiaryEditor from "../components/DiaryEditor";

export default function New() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = "감정 일기장 - 새 일기 작성";
  }, []);

  return (
    <div>
      <DiaryEditor />
    </div>
  );
}
