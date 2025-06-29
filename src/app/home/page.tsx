"use client"
import React, { useState } from 'react'
import { CategoryPills } from '../components/CategoryPills'
import { categories, videos } from '../data/home'
import { VideoGridItem } from '../components/VideoGridItem'
import { ChevronRight } from "lucide-react"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className="flex flex-col gap-6">
      {/* Category Pills */}
      <div className="sticky bg-[#181818] top-0 z-10 bg-[#1c1c1c] pb-4">
        <CategoryPills
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Horizontal Video Scroll */}
      <div className="relative bg-[#272727] p-4 rounded-xl">
        <h2 className="text-white text-lg font-semibold mb-4">In Case You Missed</h2>
        <div className="relative overflow-x-auto scrollbar-hide" id="video-scroll-container">
          <div className="flex gap-4 w-max px-1">
            {videos.map(video => (
              <div key={video.id} className="min-w-[300px] max-w-[300px] flex-shrink-0">
                <VideoGridItem {...video} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Gradient Shade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#272727] to-transparent rounded-xl" />

        {/* Right Arrow Button */}
        <button
          onClick={() => {
            const container = document.getElementById('video-scroll-container')
            container?.scrollBy({ left: 300, behavior: 'smooth' })
          }}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#3F3F3F] text-white rounded-full p-2 hover:bg-black/70 transition z-20"
        >
          <ChevronRight />
        </button>
      </div>

      {/* Video Grid */}
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
  {videos.slice(0, 6).map(video => (
    <VideoGridItem key={video.id} {...video} />
  ))}
</div>

{/* Third Row */}
<div className="bg-[#121212] text-white p-4 rounded-xl border border-purple-600">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold">Suggestions based on recent watches</h2>
    <div className="flex gap-2">
      <button className="bg-[#272727] text-sm px-3 py-1 rounded-full hover:bg-[#3d3d3d]">
        Not interested
      </button>
      <button className="bg-[#272727] text-sm px-3 py-1 rounded-full hover:bg-[#3d3d3d]">
        Show me more
      </button>
    </div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {videos.slice(0, 4).map(video => (
      <VideoGridItem key={video.id} {...video} />
    ))}
  </div>
</div>

{/* STories */}
<div className="bg-[#121212] text-white p-4 rounded-xl border border-purple-600">
  {/* Header */}
  <div className="flex justify-between items-center mb-4">
    <div className="flex items-center gap-2">
      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M10 2v20l10-10L10 2z" />
      </svg>
      <h2 className="text-lg font-semibold">Shorts</h2>
    </div>
    <div className="flex gap-2">
      <button className="bg-[#272727] text-sm px-4 py-1.5 rounded-full hover:bg-[#3d3d3d]">
        Not interested
      </button>
      <button className="bg-[#272727] text-sm px-4 py-1.5 rounded-full hover:bg-[#3d3d3d]">
        Show me more
      </button>
    </div>
  </div>

  {/* Scrollable row */}
  <div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide pr-1">
    {Array.from({ length: 10 }).map((_, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-[140px] sm:w-[160px] md:w-[180px]"
      >
        <div className="aspect-[9/16] bg-gray-800 rounded-xl overflow-hidden">
          <img
            src="https://images.stockcake.com/public/2/7/5/27529431-5e6e-43cc-88bd-f5142267d93f_large/majestic-snow-leopard-stockcake.jpg"
            alt="Snow Leopard"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-2">
          <p className="text-sm font-medium truncate">
            {index % 2 === 0 ? 'Put this cat in jail' : 'Pizza Crust Really wants Meow'}
          </p>
          <p className="text-xs text-gray-400 truncate">DailyDoseOfInternetCats</p>
          <p className="text-xs text-gray-400">10M views • 3 weeks ago</p>
        </div>
      </div>
    ))}
  </div>
</div>




    </div>
  )
}

export default Home
