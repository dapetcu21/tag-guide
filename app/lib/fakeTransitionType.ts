export function setTransitionClasses(classes: Record<string, boolean>) {
  for (const className of Object.keys(classes)) {
    const classList = document.documentElement.classList;
    const has = classList.contains(className);
    const shouldHave = classes[className];
    if (has !== shouldHave) {
      if (shouldHave)
        classList.add(className);
      else
        classList.remove(className);
    }
  }
};
