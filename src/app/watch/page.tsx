"use client"
import { useSearchParams } from 'next/navigation'
import { videos } from '../data/home'
import { formatTimeAgo } from '../utils/formatTimeAgo'
import { formatDuration } from '../utils/formatDuration'
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal } from 'lucide-react'
import { Button } from '../components/Button'

export default function WatchPage() {
  const searchParams = useSearchParams()
  const videoId = searchParams.get('v')
  
  // Find the video by ID
  const video = videos.find(v => v.id === videoId) || videos[0]
  
  // Mock related videos
  const relatedVideos = videos.filter(v => v.id !== videoId).slice(0, 8)

  const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" })

  return (
    <div className="flex gap-6 p-6 bg-white text-black">
      {/* Main Video Section */}
      <div className="flex-1">
        {/* Video Player */}
        <div className="aspect-video bg-black rounded-xl overflow-hidden mb-4">
          <video
            src={video.videoUrl}
            controls
            className="w-full h-full"
            poster={video.thumbnailUrl}
          />
        </div>

        {/* Video Info */}
        <div className="mb-4">
          <h1 className="text-xl font-bold text-black mb-2">{video.title}</h1>
          <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-4">
              <span>{VIEW_FORMATTER.format(video.views)} views</span>
              <span>•</span>
              <span>{formatTimeAgo(video.postedAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ThumbsUp className="w-4 h-4" />
                <span>Like</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <ThumbsDown className="w-4 h-4" />
                <span>Dislike</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                <span>Download</span>
              </Button>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Channel Info */}
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl mb-4 border border-gray-200">
          <div className="flex items-center gap-3">
            <img 
              src={video.channel.profileUrl} 
              alt={video.channel.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold text-black">{video.channel.name}</h3>
              <p className="text-sm text-gray-600">1.2M subscribers</p>
            </div>
          </div>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Subscribe
          </Button>
        </div>

        {/* Comments Section */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <h3 className="font-semibold text-black mb-4">Comments (1.2K)</h3>
          <div className="flex gap-3 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt="User"
              className="w-8 h-8 rounded-full"
            />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 bg-transparent border-b border-gray-300 text-black placeholder-gray-400 outline-none pb-2"
            />
          </div>
          
          {/* Sample Comments */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face"
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-black text-sm">John Doe</span>
                  <span className="text-gray-500 text-xs">2 days ago</span>
                </div>
                <p className="text-black text-sm mb-2">Great video! Really helped me understand the concept better.</p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <button className="flex items-center gap-1 hover:text-black">
                    <ThumbsUp className="w-3 h-3" />
                    <span>24</span>
                  </button>
                  <button className="hover:text-black">Reply</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Videos Sidebar */}
      <div className="w-80 flex-shrink-0">
        <h3 className="text-black font-semibold mb-4">Related videos</h3>
        <div className="space-y-4">
          {relatedVideos.map(video => (
            <div key={video.id} className="flex gap-3">
              <div className="relative w-40 h-24 flex-shrink-0">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-1 right-1 bg-white/80 text-black text-xs px-1 rounded border border-gray-200">
                  {formatDuration(video.duration)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-black text-sm font-medium line-clamp-2 mb-1">
                  {video.title}
                </h4>
                <p className="text-gray-600 text-xs mb-1">{video.channel.name}</p>
                <p className="text-gray-600 text-xs">
                  {VIEW_FORMATTER.format(video.views)} views • {formatTimeAgo(video.postedAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 