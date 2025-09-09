import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import { FileText, Upload } from 'lucide-react'
import GradientSelector from './GradientSelector'

const PropertiesPanel = ({
  templateProperties,
  onPropertiesChange,
  backgroundType,
  onBackgroundTypeChange,
  selectedGradient,
  onGradientChange,
  gradientDirection,
  onDirectionChange,
  noiseLevel,
  onNoiseLevelChange
}) => {
  const handlePropertyChange = (key, value) => {
    onPropertiesChange(prev => ({
      ...prev,
      [key]: value
    }))
  }

  return (
    <div className="order-last col-span-1 space-y-4 lg:order-first">
      <div className="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">Template Properties</h3>
          <p className="text-sm text-muted-foreground">Customize your image by changing the properties.</p>
        </div>
        <div className="p-6 pt-0">
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="tag">
                  Tag
                </label>
                <div className="flex space-x-2">
                  <Input
                    id="tag"
                    value={templateProperties.tag}
                    onChange={(e) => handlePropertyChange('tag', e.target.value)}
                  />
                  <Button className="btn-outline w-9 h-9 p-0">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col space-y-1.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="title">
                  Title
                </label>
                <div className="flex space-x-2">
                  <Input
                    id="title"
                    value={templateProperties.title}
                    onChange={(e) => handlePropertyChange('title', e.target.value)}
                  />
                  <Button className="btn-outline w-9 h-9 p-0">
                    <FileText className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="logo">
                  Logo
                </label>
                <input id="logo" className="hidden" type="file" accept=".png, .jpg, .jpeg, .svg" />
                <Button className="btn-outline justify-start space-x-1 overflow-hidden h-9 px-4 py-2">
                  <span>File:</span>
                  <span className="overflow-hidden overflow-ellipsis font-mono font-normal">
                    {templateProperties.logoFile}
                  </span>
                </Button>
              </div>
              
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="image">
                  Image
                </label>
                <input id="image" className="hidden" type="file" accept=".png, .jpg, .jpeg, .svg" />
                <Button className="btn-outline justify-start space-x-1 overflow-hidden h-9 px-4 py-2">
                  <span>File:</span>
                  <span className="overflow-hidden overflow-ellipsis font-mono font-normal">
                    {templateProperties.imageFile}
                  </span>
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="card">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="font-semibold leading-none tracking-tight">Background</h3>
          <p className="text-sm text-muted-foreground">Set a custom background for your image.</p>
        </div>
        <div className="p-6 pt-0">
          <GradientSelector
            backgroundType={backgroundType}
            onBackgroundTypeChange={onBackgroundTypeChange}
            selectedGradient={selectedGradient}
            onGradientChange={onGradientChange}
            gradientDirection={gradientDirection}
            onDirectionChange={onDirectionChange}
            noiseLevel={noiseLevel}
            onNoiseLevelChange={onNoiseLevelChange}
          />
        </div>
      </div>
    </div>
  )
}

export default PropertiesPanel