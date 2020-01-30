import React, { DetailedReactHTMLElement } from 'react';
import ReactDOM from 'react-dom';
interface Props {
    className: string;
}
let props: Props = { className: 'title' };
//<h1>hello</h1>
//createElement<P, T>箭头里的P, 和T分别代表什么？函数参数类型还是返回值类型？
//P代表元素的属性 T代表真实DOM元素的类型
let element: DetailedReactHTMLElement<Props, HTMLHeadingElement> = (
    React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello')
)
ReactDOM.render(element, document.getElementById('root'));