export function scrollToPosition(position: number) {
  const nextPageStart = Math.ceil(position / window.innerHeight) * window.innerHeight;
  window.scrollTo({
    top: nextPageStart - 50,
    behavior: "smooth"
  });
  setTimeout(() => {
    window.scrollTo({
      top: nextPageStart,
      behavior: "smooth"
    });
  }, 350);
  
}