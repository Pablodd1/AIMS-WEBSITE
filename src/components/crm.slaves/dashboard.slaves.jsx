const neonColors = [
    "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4",
    "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800",
    "#ff5722", "#795548", "#9e9e9e", "#607d8b", "#f44336", "#e57373", "#f06292",
    "#ba68c8", "#9575cd", "#4a148c", "#1976d2", "#00838f"
  ];
  
export function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * neonColors.length);
    return neonColors[randomIndex];
}

export function getFirstLetters(str) {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  }
  
