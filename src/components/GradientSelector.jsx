import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import { Button } from './ui/Button'
import { ArrowUp, ArrowUpRight, ArrowRight, ArrowDownRight, ArrowDown, ArrowDownLeft, ArrowLeft, ArrowUpLeft } from 'lucide-react'

const gradients = [
  '["rgb(236, 72, 153)", "rgb(239, 68, 68)", "rgb(234, 179, 8)"]',
  '["rgb(202, 138, 4)", "rgb(220, 38, 38)"]',
  '["rgb(244, 63, 94)", "rgb(248, 113, 113)", "rgb(239, 68, 68)"]',
  '["rgb(253, 164, 175)", "rgb(244, 63, 94)"]',
  '["rgb(251, 146, 60)", "rgb(251, 113, 133)"]',
  '["rgb(251, 113, 133)", "rgb(253, 186, 116)"]',
  '["rgb(254, 202, 202)", "rgb(252, 165, 165)", "rgb(254, 240, 138)"]',
  '["rgb(199, 210, 254)", "rgb(254, 202, 202)", "rgb(254, 249, 195)"]',
  '["rgb(134, 239, 172)", "rgb(59, 130, 246)", "rgb(147, 51, 234)"]',
  '["rgb(134, 239, 172)", "rgb(192, 132, 252)"]',
  '["rgb(192, 132, 252)", "rgb(250, 204, 21)"]',
  '["rgb(165, 180, 252)", "rgb(192, 132, 252)"]',
  '["rgb(249, 168, 212)", "rgb(216, 180, 254)", "rgb(129, 140, 248)"]',
  '["rgb(233, 213, 255)", "rgb(192, 132, 252)", "rgb(107, 33, 168)"]',
  '["rgb(219, 234, 254)", "rgb(147, 197, 253)", "rgb(59, 130, 246)"]',
  '["rgb(165, 243, 252)", "rgb(34, 211, 238)"]',
  '["rgb(34, 197, 94)", "rgb(21, 128, 61)"]',
  '["rgb(16, 185, 129)", "rgb(101, 163, 13)"]',
  '["rgb(96, 165, 250)", "rgb(52, 211, 153)"]',
  '["rgb(187, 247, 208)", "rgb(74, 222, 128)", "rgb(34, 197, 94)"]',
  '["rgb(187, 247, 208)", "rgb(34, 197, 94)"]',
  '["rgb(187, 247, 208)", "rgb(134, 239, 172)", "rgb(59, 130, 246)"]',
  '["rgb(153, 246, 228)", "rgb(217, 249, 157)"]',
  '["rgb(254, 240, 138)", "rgb(187, 247, 208)", "rgb(134, 239, 172)"]',
  '["#434343 0%", "black 100%"]',
  '["rgb(17, 24, 39)", "rgb(75, 85, 99)"]',
  '["#868f96 0%", "#596164 100%"]',
  '["#d7d2cc 0%", "#304352 100%"]',
  '["#8baaaa 0%", "#ae8b9c 100%"]',
  '["rgb(229, 231, 235)", "rgb(156, 163, 175)", "rgb(75, 85, 99)"]',
  '["#f5f7fa 0%", "#c3cfe2 100%"]',
  '["#d5d4d0 0%", "#d5d4d0 1%", "#eeeeec 31%", "#efeeec 75%", "#e9e9e7 100%"]'
]

const directions = [
  { value: 'to top', icon: ArrowUp },
  { value: 'to top right', icon: ArrowUpRight },
  { value: 'to right', icon: ArrowRight },
  { value: 'to bottom right', icon: ArrowDownRight },
  { value: 'to bottom', icon: ArrowDown },
  { value: 'to bottom left', icon: ArrowDownLeft },
  { value: 'to left', icon: ArrowLeft },
  { value: 'to top left', icon: ArrowUpLeft }
]

const GradientSelector = ({
  backgroundType,
  onBackgroundTypeChange,
  selectedGradient,
  onGradientChange,
  gradientDirection,
  onDirectionChange,
  noiseLevel,
  onNoiseLevelChange
}) => {
  const createGradientStyle = (gradientArray) => {
    const colors = JSON.parse(gradientArray)
    return {
      background: `linear-gradient(${gradientDirection}, ${colors.join(', ')})`
    }
  }

  return (
    <div className="space-y-2">
      <Tabs value={backgroundType} onValueChange={onBackgroundTypeChange} className="w-full">
        <TabsList className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
          <TabsTrigger value="linear-gradient">Gradient</TabsTrigger>
          <TabsTrigger value="color">Solid Color</TabsTrigger>
        </TabsList>
        
        <TabsContent value="linear-gradient" className="space-y-4">
          <div className="card p-2">
            <div className="grid gap-2">
              <div className="flex flex-wrap gap-1">
                {gradients.map((gradient, index) => (
                  <div key={index} className="size-9 min-h-9 min-w-9">
                    <input
                      type="radio"
                      id={gradient}
                      name="gradient"
                      value={gradient}
                      checked={selectedGradient === gradient}
                      onChange={(e) => onGradientChange(e.target.value)}
                      className="sr-only"
                    />
                    <label
                      htmlFor={gradient}
                      className={`gradient-swatch ${selectedGradient === gradient ? 'selected' : ''}`}
                      style={createGradientStyle(gradient)}
                    ></label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-medium">Gradient Direction</div>
            <div className="card p-2">
              <div className="grid grid-cols-8 gap-2">
                {directions.map((direction, index) => {
                  const Icon = direction.icon
                  return (
                    <div key={direction.value}>
                      <input
                        type="radio"
                        id={direction.value}
                        name="direction"
                        value={direction.value}
                        checked={gradientDirection === direction.value}
                        onChange={(e) => onDirectionChange(e.target.value)}
                        className="sr-only"
                      />
                      <label
                        htmlFor={direction.value}
                        className={`direction-control ${gradientDirection === direction.value ? 'selected' : ''}`}
                      >
                        <Icon className="h-4 w-4" />
                      </label>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="grid gap-2 pt-2">
        <div className="flex justify-between">
          <div className="text-sm font-medium">Grid Overlay</div>
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors bg-primary text-primary-foreground">
            New
          </div>
        </div>
        <Button className="btn-outline justify-start h-9 px-4 py-2">
          Grid
        </Button>
      </div>

      <div className="grid gap-2">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Noise
            </label>
            <span className="w-12 rounded-md border border-transparent px-2 py-0.5 text-right text-sm text-muted-foreground hover:border-border">
              {noiseLevel}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={noiseLevel}
            onChange={(e) => onNoiseLevelChange(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  )
}

export default GradientSelector