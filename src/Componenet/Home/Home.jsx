import React from "react";
import StoryCard from "./StoryCards/StoryCard";
import TechnologyNews from "./TechnologyNews/TechnologyNews";
import TendyNews from "./TendyNews/TendyNews";
import FamousNews from "./FamousNews/FamousNews";
import ReletedPost from "./ReletedPost/ReletedPost";

const Home = () => {
  return (
    <div className="mx-6 mt-16">
      <StoryCard />
      <p>Cover Size Ads......</p>
      <TechnologyNews />
      <p>Cover Size Ads......</p>
      <TendyNews />
      <p>Cover Size Ads......</p>
      <FamousNews />
      <p>Cover Size Ads......</p>
      <ReletedPost />
    </div>
  );
};

export default Home;
