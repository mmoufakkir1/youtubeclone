"use client"
import {
  ChevronDown,
  ChevronUp,
  Clock,
  Home,
  History,
  ListVideo,
  Compass,
  Video,
  Tv,
  ThumbsUp,
} from "lucide-react"
import { Children, ElementType, ReactNode, useState } from "react"
import { Button, buttonStyles } from "../components/Button"
import { twMerge } from "tailwind-merge"
import { playlists } from "../data/sidebar"
import { useSidebarContext } from "../contexts/SidebarContext"
import { PageHeaderFirstSection } from "./PageHeader"

export function Sidebar() {
  const { isLargeOpen, isSmallOpen } = useSidebarContext()

  return (
    <>
      <aside
        className={`w-64 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } ${isSmallOpen ? "flex bg-[#181818] z-[999] max-h-screen" : "hidden"}`}
      >
        <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0">
          <PageHeaderFirstSection />
        </div>
        <LargeSidebarSection>
          <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" url="/" />
          <LargeSidebarItem
            IconOrImgUrl={Compass}
            title="Explore"
            url="/explore"
          />
          <LargeSidebarItem IconOrImgUrl={Video} title="Shorts" url="/shorts" />
          <LargeSidebarItem IconOrImgUrl={Tv} title="TV Mode" url="/tv" />
        </LargeSidebarSection>
        <hr className="border-t border-gray-700 opacity-50" />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrImgUrl={History}
            title="History"
            url="/history"
          />
          <LargeSidebarItem
            IconOrImgUrl={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          <LargeSidebarItem
            IconOrImgUrl={ThumbsUp}
            title="Liked Videos"
            url="/your-videos"
          />
          {playlists.map(playlist => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr className="border-t border-gray-700 opacity-50" />

      </aside>
    </>
  )
}

type LargeSidebarSectionProps = {
  children: ReactNode
  title?: string
  visibleItemCount?: number
}

function LargeSidebarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}: LargeSidebarSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const childrenArray = Children.toArray(children).flat()
  const showExpandButton = childrenArray.length > visibleItemCount
  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount)
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded(e => !e)}
          variant="ghost"
          className="w-full flex items-center rounded-lg gap-4 p-3 hover:bg-[#4a2f39]"
        >
          <ButtonIcon className="w-6 h-6" />
          <div>{isExpanded ? "Show less" : "Show more"}</div>
        </Button>
      )}
    </div>
  )
}

type LargeSidebarItemProps = {
  IconOrImgUrl: ElementType | string
  title: string
  url: string
  isActive?: boolean
}

function LargeSidebarItem({
  IconOrImgUrl,
  title,
  url,
  isActive = false,
}: LargeSidebarItemProps) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `w-full flex items-center rounded-lg gap-4 p-3 hover:bg-[#4a2f39] ${
          isActive && "font-bold text-white bg-[#38242c] hover:bg-[#4a2f39]"
        }`
      )}
    >
      {typeof IconOrImgUrl === "string" ? (
        <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
      ) : (
        <IconOrImgUrl className={twMerge("w-6 h-6", isActive && "text-red-500")} />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  )
}  
