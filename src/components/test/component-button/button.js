import Block from "../block";
//import { compile } from "../../utils/templator";
import { template } from "./button-template";

export default class Button extends Block {
  constructor(props) {
    // Создаём враппер DOM-элемент button
    super("div", props);
  }

  render() {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    return template;
    //return compile(template, this.props);
  }
}
