"use client"
import { ArrowLeft, Bell, CirclePlus, Menu, Mic, Search, Settings, User } from "lucide-react"
import logo from "../../../public/logo.png"
import { Button } from "../components/Button"
import { SearchBar } from "../components/SearchBar"
import { useState } from "react"
import { useSidebarContext } from "../contexts/SidebarContext"
import Image from "next/image"
import Link from "next/link"

export function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)

  const handleSearch = (query: string) => {
    console.log('Searching for:', query)
    // TODO: Implement search functionality
    setShowFullWidthSearch(false)
  }

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4 bg-white">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <div
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
        <SearchBar onSearch={handleSearch} />
      </div>
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
