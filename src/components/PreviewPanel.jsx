import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs'
import { Button } from './ui/Button'
import { Download } from 'lucide-react'

const PreviewPanel = ({
  selectedTemplate,
  templateProperties,
  selectedGradient,
  gradientDirection,
  noiseLevel
}) => {
  const handleSaveImage = () => {
    // Create a download link for the generated image
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    
    canvas.width = 1200
    canvas.height = 630
    
    // Parse gradient
    const gradient = JSON.parse(selectedGradient)
    const gradientObj = ctx.createLinearGradient(0, 0, 1200, 630)
    
    gradient.forEach((color, index) => {
      gradientObj.addColorStop(index / (gradient.length - 1), color)
    })
    
    ctx.fillStyle = gradientObj
    ctx.fillRect(0, 0, 1200, 630)
    
    // Add text content
    ctx.fillStyle = '#FFFFFF'
    ctx.font = 'bold 48px Inter'
    
    if (selectedTemplate === 'og:image-right') {
      // Add tag
      ctx.font = '24px Inter'
      ctx.fillText(templateProperties.tag, 64, 180)
      
      // Add title
      ctx.font = 'bold 64px Inter'
      ctx.fillText(templateProperties.title, 64, 280)
    }
    
    // Convert to blob and download
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'og.png'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    })
  }

  return (
    <div className="order-first lg:order-last lg:col-span-2">
      <div className="sticky top-0 grow-0 space-y-4">
        <div className="card col-span-2 px-2 md:px-4">
          <div className="overflow-hidden">
            <div className="relative w-full aspect-[1200/630]">
              <div className="absolute inset-0">
                <img
                  alt="Preview"
                  className="og-preview"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2MzAiIHZpZXdCb3g9IjAgMCAxMjAwIDYzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgZ3JhZGllbnRUcmFuc2Zvcm09InJvdGF0ZSg0NSkiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSJyZ2IoMTcsIDI0LCAzOSkiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSJyZ2IoNzUsIDg1LCA5OSkiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjYzMCIgZmlsbD0idXJsKCNncmFkKSIvPgogIDx0ZXh0IHg9IjY0IiB5PSIxODAiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iSW50ZXIsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjRweCIgZm9udC13ZWlnaHQ9Im5vcm1hbCI+bWtkaXJzLmNvbTwvdGV4dD4KICA8dGV4dCB4PSI2NCIgeT0iMjgwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkludGVyLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjY0cHgiIGZvbnQtd2VpZ2h0PSJib2xkIj5MYXVuY2ggcHJvZml0YWJsZSBkaXJlY3Rvcnkgd2Vic2l0ZXMgaW4gbWludXRlczwvdGV4dD4KPC9zdmc+"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultValue="save" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="save">Save Image</TabsTrigger>
              <TabsTrigger value="api">API Request</TabsTrigger>
            </TabsList>
            
            <TabsContent value="save" className="space-y-4">
              <div className="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="font-semibold leading-none tracking-tight">Save Image</h3>
                  <p className="text-sm text-muted-foreground">Export the image as a PNG.</p>
                </div>
                <div className="p-6 pt-0 flex items-center justify-between space-x-2">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-gray-300 mr-2"></div>
                      <p className="text-sm">
                        <a className="btn-link h-auto p-0 underline" href="https://indiehub.best/blog/the-free-open-gragh-image-generator">
                          Learn more
                        </a> about Open Graph meta tags.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-orange-500 mr-2"></div>
                      <p className="text-sm">
                        <a className="btn-link h-auto p-0 underline" href="https://mkdirs.com/">
                          Mkdirs
                        </a> - The best directory boilerplate.
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 bg-green-500 mr-2"></div>
                      <p className="text-sm">
                        <a className="btn-link h-auto p-0 underline" href="https://indiehub.best/">
                          IndieHub
                        </a> - The best directory for indie makers.
                      </p>
                    </div>
                  </div>
                  <Button onClick={handleSaveImage} className="btn-primary">
                    <Download className="mr-2 h-4 w-4" />
                    <span>Save Image</span>
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="api" className="space-y-4">
              <div className="card">
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="font-semibold leading-none tracking-tight">API Request</h3>
                  <p className="text-sm text-muted-foreground">Use our API to generate images programmatically.</p>
                </div>
                <div className="p-6 pt-0">
                  <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
{`curl -X POST "https://og.indiehub.best/api/generate" \\
  -H "Content-Type: application/json" \\
  -d '{
    "template": "${selectedTemplate}",
    "tag": "${templateProperties.tag}",
    "title": "${templateProperties.title}"
  }'`}
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default PropertiesPanel