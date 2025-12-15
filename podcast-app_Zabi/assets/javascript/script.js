const getViewportWidth = () => window.innerWidth ||
 document.documentElement.clientWidth;

 console.log(`Die Viewport-Breite beträgt: ${getViewportWidth()} Pixel.`);
const screenWidth = screen.width;
if (getViewportWidth() < 0.3 * screenWidth) {
    alert(`Warnung: Die Viewport-Breite (${getViewportWidth()} Pixel) ist weniger als 30% der Bildschirmbreite (${screenWidth} Pixel).`);
}