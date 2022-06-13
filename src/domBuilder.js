const domBuilder = (() => {
  const buildSkeleton = () => {
    const body = document.querySelector('body');
    body.textContent = 'Hello';
  }

  return { buildSkeleton }
})();

export { domBuilder };