export const parseGradient = (gradientString) => {
  try {
    return JSON.parse(gradientString)
  } catch (error) {
    return ['rgb(17, 24, 39)', 'rgb(75, 85, 99)']
  }
}

export const generateGradientCSS = (gradient, direction) => {
  const colors = parseGradient(gradient)
  return `linear-gradient(${direction}, ${colors.join(', ')})`
}

export const generateSVGGradient = (gradient, direction, width = 1200, height = 630) => {
  const colors = parseGradient(gradient)
  
  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="grad" gradientTransform="rotate(45)">
          ${colors.map((color, index) => 
            `<stop offset="${(index / (colors.length - 1)) * 100}%" stop-color="${color}"/>`
          ).join('')}
        </linearGradient>
      </defs>
      <rect width="${width}" height="${height}" fill="url(#grad)"/>
    </svg>
  `
  
  return `data:image/svg+xml;base64,${btoa(svg)}`
}