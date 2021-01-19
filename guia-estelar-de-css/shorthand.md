

# shorthand

* é uma junção de propriedades
* ideia de colocar diversas propriedades do CSS de forma resumida
* mais legível

{
    /* background properties */
    background-color: #000;
    background-image: url(images/background.gif);
    background-repeat: no-repeat;
    background-position: left top;

    /* background shorthand */
    background: #000 url(images/background.gif) no-repeat left top;

    /* font properites */
    font-style: italic;
    font-weight: bold;
    font-size: .8em;
    font-height: 1.2;
    font-family: Arial, sans-serif;

    /* font shorthand */
    font: italic bold .8em/1.2 Arial, sans-serif;
}

## detalhes

* não irá considerar propriedades anteriores
* valores não especificados irão assumir o valor padrão
* geralmente a ordem descrita não importa, mas se houver muitas propriedades com valores semelhantes, poderemos encontrar problemas

### propriedades que aceitam shorthand


animation, background, border, border-bottom, border-color, border-left, border-radius, border-right, border-style, border-top, border-width, column-rule, columns, flex, flex-flow, font, grid, grid-area, grid-column, grid-row, grid-template, list-style, margin, offset, outline, overflow, padding, place-content, place-items, text-decoration, transition

*https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties






