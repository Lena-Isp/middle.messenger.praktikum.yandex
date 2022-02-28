export function render(query: string, block: Block) {
  const root = document.querySelector(query);
  block.dispatchComponentDidMount();
  // Можно завязаться на реализации вашего класса Block
  root.innerHTML = ""
  root.append(block.getContent()!);
}
