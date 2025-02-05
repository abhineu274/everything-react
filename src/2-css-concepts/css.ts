export const CSSS=1;

/*
CSS Concepts for React Developers :

- CSS stands for Cascading Style Sheets.
- CSS describes how HTML elements are to be displayed on screen.
- CSS is used to style web pages.

CSS Syntax :
- CSS is a rule-based language.
- CSS rules are made up of selectors and declarations.
- Selectors are used to target HTML elements.
- Declarations are made up of properties and values.
- Properties are the style attributes of an element.

CSS Selectors :
- Universal Selector : Selects all elements on the page. e.g. * { color: red; }
- Type Selector : Selects elements of a specific type. e.g. h1 { color: blue; }
- Class Selector : Selects elements with a specific class attribute. e.g. .highlight { background-color: yellow; }
- ID Selector : Selects an element with a specific ID attribute. e.g. #header { font-size: 24px; }
- Descendant Selector : Selects an element that is a descendant of another element. e.g. div p { color: green; }
- Child Selector : Selects an element that is a child of another element. e.g. div > p { color: green; }
- Adjacent Sibling Selector : Selects an element that is the adjacent sibling of another element. e.g. h1 + p { color: red; }

CSS Properties :
- color : Sets the color of text.
- background-color : Sets the background color of an element.
- font-family : Sets the font family of text.
- font-size : Sets the font size of text.
- font-weight : Sets the font weight of text.
- text-align : Sets the alignment of text.
- text-decoration : Sets the decoration of text.
- margin : Sets the margin of an element.
- padding : Sets the padding of an element.
- border : Sets the border of an element.
- border-radius : Sets the border radius of an element. To create rounded corners.
- width : Sets the width of an element.
- height : Sets the height of an element.
- display : Sets the display behavior of an element.
- position : Sets the position of an element.
- z-index : Sets the stack order of an element.
- float : Sets the floating behavior of an element.
- clear : Sets the clearing behavior of an element.
- overflow : Sets the overflow behavior of an element.
- cursor : Sets the mouse cursor of an element.
- opacity : Sets the opacity of an element.

CSS Layout :
- Box Model : The CSS box model describes the space around an element.
- Flexbox : Flexbox is a layout model that allows elements to align and distribute space within a container.
example:
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row; // or column. row-to display elements horizontally, column-to display elements vertically.
}

- Grid : Grid is a layout model that allows elements to be placed in rows and columns.
example:
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

- Position : The position property specifies the type of positioning method used for an element.
- Relative : The element is positioned relative to its normal position.
- Absolute : The element is positioned relative to its nearest positioned ancestor.
- Fixed : The element is positioned relative to the browser window.


CSS Units :
- px : Pixels.
- % : Percentage.
- em : Relative to the font-size of the element.
- rem : Relative to the font-size of the root element.
- vh : Relative to the height of the viewport.
- vw : Relative to the width of the viewport.

CSS Pseudo-classes :
- :hover : Selects an element when you mouse over it.
- :active : Selects an element when you click on it.
- :focus : Selects an element when it is focused.

CSS Pseudo-elements :
- ::before : Inserts content before the content of an element.
- ::after : Inserts content after the content of an element.

CSS Media Queries :
- Media queries are used to apply different styles based on the device characteristics.
example:
@media (max-width: 600px) { //max-width is used to target devices with a maximum width of 600px.
  body {
    background-color: lightblue;
  }
}

Styled Components :
- Styled components are a way to style React components using CSS-in-JS.
example:
import styled from 'styled-components';
const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 16px;
`;

Styling in React :
- Inline Styling : Inline styles are defined as objects.
example:
const style = {
  color: 'red',
  fontSize: '16px',
};
<div style={style}>Hello</div>

- CSS Modules : CSS Modules are a way to scope CSS locally by default.
example:
import styles from './Button.module.css';
<div className={styles.button}>Hello</div>





*/