"use client"

import React, { useState } from 'react';
import { videos } from '../data/home';
import { VideoGridItem } from '../components/VideoGridItem';

const tabs = ['Now', 'Music', 'Gaming', 'Movies', 'Shorts'];

const Explore = () => {
  const [activeTab, setActiveTab] = useState('Now');

  const filteredVideos = videos;

  return (
    <div className="flex flex-col gap-6">
    <div className="relative bg-[#0F0F0F] p-6 rounded-xl border border-[#3F3F3F]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-white text-2xl font-semibold">Trending</h2>
        <button className="text-sm text-gray-400 hover:text-white">View all</button>
      </div>

      <div className="flex gap-6 mb-6">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-medium pb-1 border-b-2 transition-colors ${
              activeTab === tab ? 'text-white border-white' : 'text-gray-400 border-transparent'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-4 gap-6">
        {filteredVideos.slice(0, 8).map(video => (
          <div key={video.id}>
            <VideoGridItem {...video} />
          </div>
        ))}
      </div>
    </div>



    <div className="relative bg-[#0F0F0F] p-6 rounded-xl">
      <h2 className="text-white text-xl font-semibold mb-4">Gaming</h2>

      <div className="relative overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max px-1">
          {videos
            .map(video => (
              <div key={video.id} className="min-w-[320px] max-w-[320px] flex-shrink-0">
                <VideoGridItem {...video} />
              </div>
            ))}
        </div>
      </div>
    </div>


    <div className="relative bg-[#0F0F0F] p-6 rounded-xl">
      <h2 className="text-white text-xl font-semibold mb-4">Music</h2>

      <div className="relative overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max px-1">
          {videos
            .map(video => (
              <div key={video.id} className="min-w-[320px] max-w-[320px] flex-shrink-0">
                <VideoGridItem {...video} />
              </div>
            ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Explore;
