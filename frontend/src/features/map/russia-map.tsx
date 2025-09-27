import { useState } from 'react'
import type { Region } from '@/shared/api/data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/shared/ui/card'

interface RussiaMapProps {
  regions: Region[]
  onRegionClick?: (region: Region) => void
}

export function RussiaMap({ regions, onRegionClick }: RussiaMapProps) {
  const [selectedRegion, setSelectedRegion] = useState<Region | null>(null)

  const handleRegionClick = (region: Region) => {
    setSelectedRegion(region)
    onRegionClick?.(region)
  }

  // Упрощенная SVG карта России с основными регионами
  return (
    <div className="w-full h-full relative">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Упрощенная карта России */}
        <g>
          {/* Москва */}
          <circle
            cx="400"
            cy="250"
            r="8"
            fill={selectedRegion?.code === "77" ? "#ef4444" : "#3b82f6"}
            stroke="#1e40af"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-500 transition-colors"
            onClick={() => handleRegionClick(regions.find(r => r.code === "77")!)}
          />
          <text x="420" y="255" className="text-xs fill-foreground">Москва</text>

          {/* Санкт-Петербург */}
          <circle
            cx="350"
            cy="200"
            r="6"
            fill={selectedRegion?.code === "78" ? "#ef4444" : "#3b82f6"}
            stroke="#1e40af"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-500 transition-colors"
            onClick={() => handleRegionClick(regions.find(r => r.code === "78")!)}
          />
          <text x="370" y="205" className="text-xs fill-foreground">СПб</text>

          {/* Краснодарский край */}
          <circle
            cx="450"
            cy="400"
            r="7"
            fill={selectedRegion?.code === "23" ? "#ef4444" : "#3b82f6"}
            stroke="#1e40af"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-500 transition-colors"
            onClick={() => handleRegionClick(regions.find(r => r.code === "23")!)}
          />
          <text x="470" y="405" className="text-xs fill-foreground">Краснодар</text>

          {/* Ростовская область */}
          <circle
            cx="500"
            cy="380"
            r="6"
            fill={selectedRegion?.code === "61" ? "#ef4444" : "#3b82f6"}
            stroke="#1e40af"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-500 transition-colors"
            onClick={() => handleRegionClick(regions.find(r => r.code === "61")!)}
          />
          <text x="520" y="385" className="text-xs fill-foreground">Ростов</text>

          {/* Белгородская область */}
          <circle
            cx="420"
            cy="320"
            r="5"
            fill={selectedRegion?.code === "31" ? "#ef4444" : "#3b82f6"}
            stroke="#1e40af"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-500 transition-colors"
            onClick={() => handleRegionClick(regions.find(r => r.code === "31")!)}
          />
          <text x="440" y="325" className="text-xs fill-foreground">Белгород</text>

          {/* Курская область */}
          <circle
            cx="400"
            cy="300"
            r="5"
            fill={selectedRegion?.code === "46" ? "#ef4444" : "#3b82f6"}
            stroke="#1e40af"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-500 transition-colors"
            onClick={() => handleRegionClick(regions.find(r => r.code === "46")!)}
          />
          <text x="420" y="305" className="text-xs fill-foreground">Курск</text>

          {/* Воронежская область */}
          <circle
            cx="450"
            cy="310"
            r="5"
            fill={selectedRegion?.code === "36" ? "#ef4444" : "#3b82f6"}
            stroke="#1e40af"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-500 transition-colors"
            onClick={() => handleRegionClick(regions.find(r => r.code === "36")!)}
          />
          <text x="470" y="315" className="text-xs fill-foreground">Воронеж</text>

          {/* Тульская область */}
          <circle
            cx="380"
            cy="280"
            r="5"
            fill={selectedRegion?.code === "71" ? "#ef4444" : "#3b82f6"}
            stroke="#1e40af"
            strokeWidth="2"
            className="cursor-pointer hover:fill-blue-500 transition-colors"
            onClick={() => handleRegionClick(regions.find(r => r.code === "71")!)}
          />
          <text x="400" y="285" className="text-xs fill-foreground">Тула</text>
        </g>
      </svg>

      {/* Информационная панель */}
      {selectedRegion && (
        <div className="absolute top-4 right-4 w-64">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{selectedRegion.name}</CardTitle>
              <CardDescription>Статистика региона</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">БПЛА:</span>
                <span className="text-sm font-medium">{selectedRegion.uav_count}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Перехваты:</span>
                <span className="text-sm font-medium">{selectedRegion.interceptions}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Активность:</span>
                <span className="text-sm font-medium">{selectedRegion.last_activity}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
