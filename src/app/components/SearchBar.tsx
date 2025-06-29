"use client"
import { Search, Mic, X } from 'lucide-react'
import { Button } from './Button'

type SearchBarProps = {
  onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
  const handleSearch = (e: any) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const query = formData.get('search') as string
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  const clearSearch = (e: any) => {
    e.preventDefault()
    const input = e.target.parentElement?.querySelector('input')
    if (input) {
      input.value = ''
      input.focus()
    }
  }

  return (
    <div className="relative flex-1 max-w-2xl">
      <div className="relative flex items-center">
        <form onSubmit={handleSearch} className="flex items-center flex-1">
          <div className="flex items-center bg-[#121212] border border-[#303030] rounded-full hover:border-[#606060] focus-within:border-blue-500 transition-colors flex-1">
            <div className="flex items-center px-4 py-2 flex-1">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                name="search"
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none text-sm"
              />
              <button
                type="button"
                onClick={clearSearch}
                className="ml-2 p-1 hover:bg-gray-700 rounded-full"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <Button
              type="submit"
              className="bg-[#222222] hover:bg-[#303030] rounded-r-full px-6 py-2 border-l border-[#303030]"
            >
              <Search className="w-5 h-5" />
            </Button>
          </div>
        </form>
        <Button
          className="ml-2 bg-[#222222] hover:bg-[#303030] rounded-full p-2"
          title="Search with your voice"
        >
          <Mic className="w-5 h-5" />
        </Button>
      </div>
    </div>
  )
} 