export function render(query: string, component: Block) {
  const root = document.querySelector(query);
  if (!root) {
    throw new Error('Root not found')
  }

  component.dispatchComponentDidMount();

  root.innerHTML = ""
  root.append(component.getContent()!);
}
