/*import Block from "../block";*/
import { render } from "../utils-renderdom";

//создаем верстку элемента
export const template = `
  <div class="{{ className }}">
    {{ child }}
  </div>
`;

//создем новый класс, наследуя от класса Block, в него передаем название элемента, и задействуем метод рендер
/*class Button extends Block {
  constructor(props) {
    // Создаём враппер DOM-элемент button
    super("div", props);
  }
  componentDidUpdate(oldProps, newProps) {
    if (oldProps.buttonText !== newProps.buttonText) {
      this.children.button.setProps({ text: newProps.buttonText });
    }
    return true;
  }

  render() {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    return this.compile( `<div>${this.props.text}</div>`, this.props);
    //return compile(template, this.props);
  }
}

const button = new Button({
  //передача пропсов не работает, нужно разобраться с шаблоном

  text: 'Click me',
});

render(".app", button);

// Через секунду контент изменится сам, достаточно обновить пропсы
/*setTimeout(() => {
  button.setProps({
    text: 'John Doe',
  });
}, 1000);*/
