type SkeletonProps = {
  className?: string
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div 
      className={`animate-pulse bg-gray-300 rounded ${className}`}
    />
  )
}

export function VideoSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="aspect-video w-full" />
      <div className="flex gap-2">
        <Skeleton className="w-12 h-12 rounded-full" />
        <div className="flex flex-col gap-2 flex-1">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
    </div>
  )
}

export function VideoGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
      {Array.from({ length: count }).map((_, index) => (
        <VideoSkeleton key={index} />
      ))}
    </div>
  )
}

export function SidebarSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex items-center gap-3 p-3">
          <Skeleton className="w-6 h-6 rounded" />
          <Skeleton className="h-4 w-24" />
        </div>
      ))}
    </div>
  )
} 