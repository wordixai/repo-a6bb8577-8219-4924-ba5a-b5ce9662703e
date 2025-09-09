import React from 'react'
import { Globe, Twitter, ChevronLeft, ChevronRight } from 'lucide-react'

const templates = [
  { id: 'og:image-right', name: 'Image Right' },
  { id: 'og:hero', name: 'Hero' },
  { id: 'og:logos', name: 'Logos' },
  { id: 'og:basic', name: 'Basic' },
  { id: 'og:notice', name: 'Notice' }
]

const TemplateSelector = ({ selectedTemplate, onTemplateChange }) => {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <h2 className="sr-only text-sm font-medium">Choose a template</h2>
        <div className="flex gap-2">
          <button className="bg-muted text-muted-foreground shadow-sm hover:bg-muted/80 h-9 px-4 py-2 btn-outline">
            <Globe className="mr-1 size-4" />
            Open Graph
          </button>
          <button className="btn-outline h-9 px-4 py-2">
            <Twitter className="mr-1 size-4" />
            Twitter/X
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div className="flex -ml-4" style={{ transform: 'translate3d(0px, 0px, 0px)' }}>
            {templates.map((template) => (
              <div key={template.id} className="min-w-0 shrink-0 grow-0 pl-4 basis-40 md:basis-64 lg:basis-1/5">
                <input
                  type="radio"
                  id={template.id}
                  name="template"
                  value={template.id}
                  checked={selectedTemplate === template.id}
                  onChange={(e) => onTemplateChange(e.target.value)}
                  className="sr-only"
                />
                <label 
                  htmlFor={template.id}
                  className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
                >
                  <TemplatePreview templateId={template.id} />
                </label>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-outline absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-2 lg:hidden" disabled>
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Previous slide</span>
        </button>
        <button className="btn-outline absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-2 lg:hidden" disabled>
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Next slide</span>
        </button>
      </div>
    </div>
  )
}

const TemplatePreview = ({ templateId }) => {
  const renderPreview = () => {
    switch (templateId) {
      case 'og:image-right':
        return (
          <div className="h-full w-full">
            <div className="bg-primary/10 mt-2 h-3 w-3 rounded-full"></div>
            <div className="flex aspect-video h-full w-full justify-center space-x-2 md:space-x-4">
              <div className="flex h-full w-1/2 flex-col space-y-2 pt-2 md:pt-4">
                <div className="rounded-md bg-primary/10 h-1 w-1/3 md:h-2"></div>
                <div className="rounded-md bg-primary/10 h-2 w-full md:h-4"></div>
              </div>
              <div className="rounded-md bg-primary/10 flex h-2/3 w-1/2"></div>
            </div>
          </div>
        )
      case 'og:hero':
        return (
          <div className="flex aspect-video h-full w-full flex-col items-center justify-center space-y-1">
            <div className="rounded-md bg-primary/10 min-h-1 w-1/6 md:min-h-2"></div>
            <div className="rounded-md bg-primary/10 min-h-2 w-1/2 md:min-h-3"></div>
            <div className="rounded-md bg-primary/10 min-h-8 w-3/4 md:h-16"></div>
          </div>
        )
      case 'og:logos':
        return (
          <div className="flex aspect-video h-full w-full flex-col items-center justify-center space-y-1 md:space-y-2">
            <div className="rounded-md bg-primary/10 h-1 w-1/6 md:h-2"></div>
            <div className="rounded-md bg-primary/10 h-2 w-1/2 md:h-4"></div>
            <div className="flex space-x-2">
              <div className="rounded-md bg-primary/10 flex h-5 w-5 items-center justify-center md:h-8 md:w-8"></div>
              <div className="rounded-md bg-primary/10 flex h-5 w-5 items-center justify-center md:h-8 md:w-8"></div>
              <div className="rounded-md bg-primary/10 flex h-5 w-5 items-center justify-center md:h-8 md:w-8"></div>
            </div>
          </div>
        )
      case 'og:basic':
        return (
          <div className="flex aspect-video h-full w-full flex-col items-center justify-center">
            <div className="bg-primary/10 h-4 w-4 rounded-full md:h-8 md:w-8"></div>
            <div className="rounded-md bg-primary/10 mt-2 h-3 w-1/2 md:mt-3 md:h-4"></div>
            <div className="rounded-md bg-primary/10 mt-1 h-2 w-3/4 md:mt-2 md:h-3"></div>
          </div>
        )
      case 'og:notice':
        return (
          <div className="flex aspect-video h-full w-full items-center justify-center space-x-2 md:space-x-4">
            <div className="bg-primary/10 h-6 w-6 shrink-0 rounded-md md:h-10 md:w-10"></div>
            <div className="w-1/4">
              <div className="rounded-md bg-primary/10 h-2 w-full md:h-3"></div>
              <div className="rounded-md bg-primary/10 mt-1 h-1 w-full md:mt-2 md:h-2"></div>
            </div>
          </div>
        )
      default:
        return <div className="h-full w-full bg-gray-100"></div>
    }
  }

  return renderPreview()
}

export default TemplateSelector