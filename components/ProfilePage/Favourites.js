import React from "react";
import { webinarData } from "../../dummydb";
import WebinarsCard from "../WebinarsCard";

const Favourites = ({ likedVideo }) => {
  let LikedVideosAllData = [];

  likedVideo.map((id) => {
    let videoData = webinarData.filter((data) => data.videoID === id);
    LikedVideosAllData.push(videoData[0]);
  });

  console.log(LikedVideosAllData);
  return (
    <div className="">
      <div className="grid-cols-4 grid justify-center items-center mt-8 ml-8">
        {LikedVideosAllData.map((data) => {
          return (
            <WebinarsCard
              key={data.key}
              image={data.thumbnail}
              title={data.title}
              speaker={data.speaker}
              speakerImage={data.speakerImage}
              videoId={data.videoID}
              route={data.language}
              likedAlready={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
