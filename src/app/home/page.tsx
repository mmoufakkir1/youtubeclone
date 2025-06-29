"use client"
import React, { useState, useEffect } from 'react'
import { CategoryPills } from '../components/CategoryPills'
import { categories, videos } from '../data/home'
import { VideoGridItem } from '../components/VideoGridItem'
import { VideoGridSkeleton } from '../components/Skeleton'
import { ChevronRight, ChevronLeft } from "lucide-react"

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [isLoading, setIsLoading] = useState(true)
  const [filteredVideos, setFilteredVideos] = useState(videos)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('video-scroll-container')
    if (container) {
      const scrollAmount = 300
      container.scrollBy({ 
        left: direction === 'right' ? scrollAmount : -scrollAmount, 
        behavior: 'smooth' 
      })
    }
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6">
        <div className="sticky bg-white top-0 z-10 pb-4 border-b border-gray-200">
          <CategoryPills
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />
        </div>
        <VideoGridSkeleton count={12} />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 bg-white text-black">
      {/* Category Pills */}
      <div className="sticky bg-white top-0 z-10 pb-4 border-b border-gray-200">
        <CategoryPills
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
      </div>

      {/* Horizontal Video Scroll */}
      <div className="relative bg-gray-50 p-4 rounded-xl border border-gray-200">
        <h2 className="text-black text-lg font-semibold mb-4">In Case You Missed</h2>
        <div className="relative overflow-x-auto scrollbar-hide" id="video-scroll-container">
          <div className="flex gap-4 w-max px-1">
            {filteredVideos.map(video => (
              <div key={video.id} className="min-w-[300px] max-w-[300px] flex-shrink-0">
                <VideoGridItem {...video} />
              </div>
            ))}
          </div>
        </div>

        {/* Left Arrow Button */}
        <button
          onClick={() => handleScroll('left')}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 hover:bg-gray-100 transition z-20 border border-gray-300 shadow-sm"
        >
          <ChevronLeft />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={() => handleScroll('right')}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white text-gray-700 rounded-full p-2 hover:bg-gray-100 transition z-20 border border-gray-300 shadow-sm"
        >
          <ChevronRight />
        </button>

        {/* Right Gradient Shade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent rounded-xl" />
        
        {/* Left Gradient Shade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent rounded-xl" />
      </div>

      {/* Video Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredVideos.slice(0, 8).map(video => (
          <VideoGridItem key={video.id} {...video} />
        ))}
      </div>

      {/* Suggestions Section */}
      <div className="bg-white text-black p-4 rounded-xl border border-gray-300 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
          <h2 className="text-lg font-semibold">Suggestions based on recent watches</h2>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors text-gray-700">
              Not interested
            </button>
            <button className="bg-gray-100 text-sm px-3 py-1 rounded-full hover:bg-gray-200 transition-colors text-gray-700">
              Show me more
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.slice(0, 4).map(video => (
            <VideoGridItem key={video.id} {...video} />
          ))}
        </div>
      </div>

      {/* Shorts Section */}
      <div className="bg-white text-black p-4 rounded-xl border border-gray-300 shadow-sm">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 2v20l10-10L10 2z" />
            </svg>
            <h2 className="text-lg font-semibold">Shorts</h2>
          </div>
          <div className="flex gap-2">
            <button className="bg-gray-100 text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-700">
              Not interested
            </button>
            <button className="bg-gray-100 text-sm px-4 py-1.5 rounded-full hover:bg-gray-200 transition-colors text-gray-700">
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
              <div className="aspect-[9/16] bg-gray-200 rounded-xl overflow-hidden">
                <img
                  src="https://images.stockcake.com/public/2/7/5/27529431-5e6e-43cc-88bd-f5142267d93f_large/majestic-snow-leopard-stockcake.jpg"
                  alt="Snow Leopard"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium truncate text-black">
                  {index % 2 === 0 ? 'Put this cat in jail' : 'Pizza Crust Really wants Meow'}
                </p>
                <p className="text-xs text-gray-600 truncate">DailyDoseOfInternetCats</p>
                <p className="text-xs text-gray-600">10M views • 3 weeks ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
