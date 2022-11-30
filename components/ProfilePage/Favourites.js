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
    <div className="mx-8 pt-8">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto gap-4">
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
