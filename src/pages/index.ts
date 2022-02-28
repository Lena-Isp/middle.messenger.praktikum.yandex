// У кнопки есть index.js, который экспортирует только нужное
//общие стили
import '../assets/app.scss';

//компоненты(берет стили и js из index.js)
import '../components/input';
import '../components/form';


import Block from "../utils/block";
import { render } from "../utils/renderDom";

//класс компонента
import {TestButton} from "../components/testButton";
import template from "./profileTemplate.hbs";

//создаем кнопку с нужными параметрами
/*const testButton = new TestButton({
  modifer: 'button--my-class',
  child: 'войти',
});*/

//добавляем testButton в верстку
//render(".form__button", testButton);



class profileTemplate extends Block {
  constructor(props) {
    super(props);
  }

  render() {

    // В данном случае render возвращает строкой разметку из шаблонизатора
    return this.compile(template, { ...this.props } );
  }
}

const profile = new profileTemplate({
  buttons: new TestButton({
    modifer: 'button--my-class',
    child: 'войтиxcvcx',
  }),
  buttons5: new TestButton({
    modifer: 'button--my-class',
    child: 'vv',
  })
});


render(".app", profile);


