import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import DiaryEditor from "../components/DiaryEditor";
import { getStringDate } from "../util/date";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { emotionList } from "../util/emotion";

export default function Diary() {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => it.id === parseInt(id));

      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("일기가 없습니다. 일기 목록으로 이동합니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div className="DiaryPage">loading...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );
    return (
      <div className="DiaryPage">
        <MyHeader
          head_text={getStringDate(new Date(data.date))}
          leftchild={
            <MyButton text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightchild={
            <MyButton
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />
        <article>
          <section>
            <h4>오늘의 감정</h4>
            <div
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ].join(" ")}
            >
              <img
                src={curEmotionData.emotion_img}
                alt={curEmotionData.emotion_descript}
              />
              <div className="emotion_descript">
                {curEmotionData.emotion_descript}
              </div>
            </div>
          </section>
          <section>
            <h4>오늘의 일기</h4>
            <div className="diary_content_wrapper">
              <p>{data.content}</p>
            </div>
          </section>
        </article>
      </div>
    );
  }
}
