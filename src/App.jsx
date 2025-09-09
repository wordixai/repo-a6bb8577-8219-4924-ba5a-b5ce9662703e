import React, { useState } from 'react'
import Header from './components/Header'
import TemplateSelector from './components/TemplateSelector'
import PropertiesPanel from './components/PropertiesPanel'
import PreviewPanel from './components/PreviewPanel'
import Footer from './components/Footer'

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState('og:image-right')
  const [templateProperties, setTemplateProperties] = useState({
    tag: 'mkdirs.com',
    title: 'Launch profitable directory websites in minutes',
    logoFile: 'mkdirs-logo.png',
    imageFile: 'mkdirs1.png'
  })
  const [backgroundType, setBackgroundType] = useState('linear-gradient')
  const [selectedGradient, setSelectedGradient] = useState('[\"rgb(17, 24, 39)\", \"rgb(75, 85, 99)\"]')
  const [gradientDirection, setGradientDirection] = useState('to top right')
  const [noiseLevel, setNoiseLevel] = useState(0.15)

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header />
      
      <main className="mx-auto min-h-[calc(100vh-84px)] max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
        <div className="space-y-4">
          <TemplateSelector 
            selectedTemplate={selectedTemplate}
            onTemplateChange={setSelectedTemplate}
          />
          
          <div className="w-full h-[1px] bg-border"></div>
          
          <div className="grid gap-x-4 gap-y-4 lg:grid-cols-3">
            <PropertiesPanel
              templateProperties={templateProperties}
              onPropertiesChange={setTemplateProperties}
              backgroundType={backgroundType}
              onBackgroundTypeChange={setBackgroundType}
              selectedGradient={selectedGradient}
              onGradientChange={setSelectedGradient}
              gradientDirection={gradientDirection}
              onDirectionChange={setGradientDirection}
              noiseLevel={noiseLevel}
              onNoiseLevelChange={setNoiseLevel}
            />
            
            <PreviewPanel
              selectedTemplate={selectedTemplate}
              templateProperties={templateProperties}
              selectedGradient={selectedGradient}
              gradientDirection={gradientDirection}
              noiseLevel={noiseLevel}
            />
          </div>
        </div>
      </main>
      
      <div className="w-full h-[1px] bg-border"></div>
      
      <Footer />
    </div>
  )
}

export default App