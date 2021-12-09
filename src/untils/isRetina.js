export default function isRetina(first, second) {
    if (window.devicePixelRatio >= 2) {
      return second
    }
    return first;
  };