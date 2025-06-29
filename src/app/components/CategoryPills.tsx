import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./Button"
import { useEffect, useRef, useState } from "react"

type CategoryPillProps = {
  categories: string[]
  selectedCategory: string
  onSelect: (category: string) => void
}

const TRANSLATE_AMOUNT = 200

export function CategoryPills({
  categories,
  selectedCategory,
  onSelect,
}: CategoryPillProps) {
  const [translate, setTranslate] = useState(0)
  const [isLeftVisible, setIsLeftVisible] = useState(false)
  const [isRightVisible, setIsRightVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current == null) return

    const observer = new ResizeObserver(entries => {
      const container = entries[0]?.target
      if (container == null) return

      setIsLeftVisible(translate > 0)
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      )
    })

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }
  }, [categories, translate])

  return (
    <div ref={containerRef} className="overflow-x-hidden relative">
      <div
        className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {categories.map(category => (
          <Button
            key={category}
            onClick={() => onSelect(category)}
            className={`py-1.5 px-4 text-sm rounded-md whitespace-nowrap transition-colors
              ${selectedCategory === category
                ? "bg-white text-black font-medium"
                : "bg-[#272727] text-white hover:bg-[#3a3a3a]"}`}
          >
            {category}
          </Button>
        ))}
      </div>

      {isLeftVisible && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#181818] from-50% to-transparent w-24 h-full">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate(translate => {
                const newTranslate = translate - TRANSLATE_AMOUNT
                if (newTranslate <= 0) return 0
                return newTranslate
              })
            }}
          >
            <ChevronLeft />
          </Button>
        </div>
      )}

      {isRightVisible && (
        <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-[#181818] from-50% to-transparent w-24 h-full flex justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="h-full aspect-square w-auto p-1.5"
            onClick={() => {
              setTranslate(translate => {
                if (containerRef.current == null) {
                  return translate
                }
                const newTranslate = translate + TRANSLATE_AMOUNT
                const edge = containerRef.current.scrollWidth
                const width = containerRef.current.clientWidth
                if (newTranslate + width >= edge) {
                  return edge - width
                }
                return newTranslate
              })
            }}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  )
}
