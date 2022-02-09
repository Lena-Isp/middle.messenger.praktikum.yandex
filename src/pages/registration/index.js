//общие стили
import '../../assets/app.scss';

//компоненты(берет стили и js из index.js)
import '../../components/button';
import '../../components/inpPassword';
import '../../components/inpText';
import '../../components/inpTel';

//функциии которые используются во всем проекте
import {sum} from '../../utils/sum.js';

const root = document.querySelector('#root');
root.textContent = sum(5, 9).toString();