"use client"
import { ArrowLeft, Bell, CirclePlus, Menu, Mic, Search, Settings, User } from "lucide-react"
import logo from "../../../public/logo.png"
import { Button } from "../components/Button"
import { useState } from "react"
import { useSidebarContext } from "../contexts/SidebarContext"
import Image from "next/image"
import Link from "next/link"

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex items-center bg-[#121212] rounded-full px-4 py-4 w-full max-w-[700px]">
  <Search className="text-gray-400 mr-2" />
  <input
    type="search"
    placeholder="Search"
    className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
  />
  <button>
    <Mic className="text-gray-400" />
  </button>
</div>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <CirclePlus />
        </Button>
        <Button size="icon" variant="ghost">
          <Bell />
        </Button>
        <Button size="icon" variant="ghost">
          <Settings />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  )
}

type PageHeaderFirstSectionProps = {
  hidden?: boolean
}

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext()

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <Link href="/">
      <Image src={logo} alt="Logo" width={100} height={24} />
      </Link>
    </div>
  )
}
