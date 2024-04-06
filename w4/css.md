# CSS

## What is Cascading

- **Cascading** is the way/order on how a document will be read/interpreted by the browser. The way styles are inherited and overridden in a hierarchical manner.
- There are *three* different styles sheets that fall into this order
  - ***Internal stylesheets***
    - Internal stylesheets are styles applied tho the html withing the head as a style tag
    - The internal stylesheet does not directly supersede the external CSS, where it falls in the html is where it will be applied
      - If a different stylesheet or style tag falls below it is overwritten
  - ***External stylesheets***
    - is **The preferred way** to go about styling
      - will keep out HTML and CSS separate from each other
    - An external stylesheet is its own document that we are referencing as a link ino the HTML
    - Is applied alongside internal and inline stylesheets even if browser is not displaying changes that may have been made
  - ***Inline stylesheets***
    - *Should be **avoided** whenever possible*
    - The inline stylesheets will be used directly inside of the body of the HTML
    - uses style as an attribute
    - *Will* take precedent since it isd applied directly to our document

## CSS Ruleset

*use english spelling as VsCode will ignore non american english spellings, and will ont display on our webpage, will also not display as errors*

- CSS comes with a **ruleset**, which is a set structure of how it is going about editing our page

```
p {
    color: red;
}
```

- **Selector** = The start of the rule, the selector defines what element will be styled
  - in this example it is ***p*** (a paragraph tag/all paragraphs if there are more than one)
- **Property** = Corresponds to a particular aspect of the element's appearance or behavior
  - property examples include: color, size, position, font, or alignment.
    - in This example it is ***color***
- **Property Value** = The specific setting or value assigned to the CSS property
  - the value is in which way the affected property will alter the appearance or behavior of the HTML element it's applied to.
  - in this example it is ***red***
- **Declaration** = Both the property and property Value

## Selectors

- **Element** selectors
  - will choose certain elements of our webpage and will apply specific styles to that selected element
  - Applies to all elements if there are multiples
- **Class** selectors
  - Used  to select HTML elements based on their assigned class attributes
  - They allow you to target and style specific groups of elements that share the same class name.
  - adds additional specificity
  - Class selectors in CSS begin with a dot (.) followed by the name of the class.
- **ID** Selector

```
#ID {
    font-style: italic;
}
```

- Used to select a specific HTML element based on its unique identifier (ID) attribute.
  - Intended to uniquely identify a single element within an HTML document.
  - Start with a hash (#) followed by the ID of the element
- **Not good practice to use ID within CSS**

```
h1, h2 {
    color: blue;
}
```

- **Group** Selector
  - Comma-separated selectors, allow you to apply the same styles to multiple selectors within a single rule.
    - They enable you to target multiple elements and apply the same styles to all of them without repeating the style declarations.
  - Group selectors are formed by separating individual selectors with commas (,).
  - If no comma is present, the declaration does not apply
    - without comma CSS will be looking for an h2 *nested* within the h1
- **Universal** Selector
  - the universal selector applies the specified styles to every element on the page
  - It is represented by an asterisk (*).

## Specificity

- CSS works from top down and will apply elements values as it reads applying the last elements value.
- Specificity will override the value regardless of position in the cascade.

## Inheritance

- When one element will receive their properties from the parent elements
- Things related to typography will be inherited
  - non related to typography will not be inherited
    - form elements do not inherit
  - universal selectors are **NOT** inheritance
  - helps keep code DRY (DON'T REPEAT YOURSELF)
  - **!important** will override everything else in the css
    - not recommended usage  

## Colors

- In VSCode we can use RGB as a selector
  - This uses the exact color values to select an exact color instead of names
    - displays as (0,0,0) [Red,Green,Blue]
- RGBA will include the *Alpha Channel*
  - that is the transparency of the selected element
  - will display as (0,0,0,0) [Red,Green,Blue,Alpha]
    - has a range of 0-1
      - decimals would be used to increase/decrease the transparency

### Hexadecimal (Hex-Codes) within color

- common was to specify colors, and works like RGB
  - using the RGB(0,0,0) but uses two 0s
  - 00FF00 This would be:
    - (00[RED]FF[highest value of GREEN]00[BLUE])
- works within the rangers 0-9 and uses the letters A-F (lowest-highest value)
  - Visual Studio code will have a list of hex codes when choosing colors by name
- In hexadecimal format we can use shorthand if the positions of pairs are matching

```
p {
    color: FF0000 = F00
}
```

### Color Palette

- When selecting over a color option we can use the color selection palette that is included within Vscode and will update the values of our selections within the CSS
  - Will display the RGB/transparency values
  - HSL = Hue, Saturation, Lightness

### Contrast checkers

- Legibility and accessibility are important when creating color pallets 
- we can compare multiple different back grounds and text colors to see how they compare on the WCAG (web content accessibility guidelines) minimum requirements
