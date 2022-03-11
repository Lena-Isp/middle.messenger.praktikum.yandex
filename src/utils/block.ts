import {v4 as makeUUID} from 'uuid';
import EventBus from "./event-bus";

// Нельзя создавать экземпляр данного класса
class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  } as const;

  private _id = makeUUID();
  private _element: HTMLElement | null = null;
  private _meta: { props: any };

  protected props: any;
  protected children: Record<string, Block>;
  private eventBus: () => EventBus

  constructor(propsAndChildrens: any = {}) {
    const eventBus = new EventBus();
    const { props, children } = this._getPropsAndChildren(propsAndChildrens);

    this.children = children;
    this._meta  = {
      props
    };

    this._id = makeUUID();
    this.props = this._makePropsProxy({...props, __id: this._id});
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getPropsAndChildren(propsAndChildren: any) {
    const children: any = {};
    const props: any = {};

    Object.entries(propsAndChildren).map( ([key, value] ) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });
    return { props, children };
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount() {

  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps: any, newProps: any) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element(): HTMLElement | null   {
    return this._element;
  }

  _render() {
    const fragment = this.render();
    const newElement = fragment.firstElementChild as HTMLElement;
    if(this._element) {
      this._removeEvents()
      this._element.replaceWith(newElement)
    }
    this._element = newElement

    this._addEvents();
  }

  render(): DocumentFragment {
    return new DocumentFragment;
  }

  getContent(): HTMLElement | null  {
    return this.element;
  }

  _makePropsProxy(props: any): any {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },

      set(target, prop, value) {
        const oldProps = {...target};
        target[prop] = value;

        // Запускаем обновление компоненты
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldProps, target);
        return true;
      },

      deleteProperty() {
        throw new Error("Нет доступа");
      }
    });
  }

  _createDocumentElement(tagName: any) {
    const element = document.createElement(tagName);
    //element.setAttribute('data-id', this._id);
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    return element;
  }

  _removeEvents() {
    const {events = {}} = this.props as any;

    if (!events || !this._element) {
      return;
    }

    Object.keys(events).forEach(eventName => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  _addEvents() {
    const {events = {}} = this.props as any;

    Object.keys(events).forEach(eventName => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  compile(template: (context: any) => string, context: any) {
    const fragment = this._createDocumentElement('template');

    Object.entries(this.children).forEach( ([key, child]) => {
      context[key] = `<div data-id='${child._id}'></div>`
    });

    const htmlString = template(context);

    fragment.innerHTML = htmlString;

    Object.entries(this.children).forEach( ([key, child]) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`)
      if (!stub) {
        return;
      }
      stub.replaceWith(child.getContent()!)
    });

    return fragment.content;
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}

export default Block;
