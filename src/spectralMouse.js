// Mouse-controlled spectral gradient
export function initSpectralMouse() {
  let mouseX = 0;
  
  // Smooth interpolation for gradient position
  function updateGradientPosition() {
    const viewportWidth = window.innerWidth;
    const gradientX = (mouseX / viewportWidth) * 100;
    
    // Update CSS custom property
    document.documentElement.style.setProperty('--spectral-x', `${gradientX}%`);
  }
  
  // Track mouse movement
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    updateGradientPosition();
  });
  
  // Initialize gradient position
  updateGradientPosition();
}