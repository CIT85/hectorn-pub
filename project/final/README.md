# Improving light pollution

I will be creating a site that people can use as a jumping off point to become informed on how to combat/ be informed of the results of light pollution. I choose this topic because I personally don't hear to  many people talk about it (with the understanding there may be more pressing worldwide issues), long term issues that may affect human/wildlife. Honestly my own knowledge on the subject is surface level; but i plan to become more informed by the end of the project.

## Menu

1. Home
2. What is Light Pollution?

- CHAT PROMPT:  "I am trying to inform someone who was no idea what light pollution is. How can I go about explaining this concept"
  - descriptions of light pollution
  - how its classified

3. How bad is it?

- CHAT PROMPT: how can i simply explain the affects/ issues that may arise from both long and short term light pollution
  - affects on wildlife and human
  - how has city expansion increased the amount of light pollution over time

4. Possible solutions

- CHAT PROMPT: With the information we  have available,  what are some ways we can mitigate these effects, include what an individual can do  and what society as a whole can do
  - local advocacy
  - what do people have to say about this issue

## CSS Documentation

The CSS stylesheet used for styling the Light Pollution in 2024 website contains a variety of rule sets to complete the looks. I used grid for majority of layout across website

### Global Styles

- Global styles are CSS rules that are applied universally across the entire website, affecting multiple elements or components.
- **html**: Sets smooth scrolling behavior and defines the default font family for the site.
- **.BTT**: Styles the back-to-top button along with following changes to selectors make selection of back to top.
- **a:visited**: Defines styles for visited links.

### Layout Styles

- **.container**: Defines the container for content on the site with a responsive width and background gradient.
- **.grid**: Creates a grid layout for main sections with two columns.
- **.grid#-child#**: Styles specific child elements within the grid layout. Used heavily for location of subjects on page

## Media Queries

- for the Media queries onm this site we will be following the Bootstrap breakpoints

```
### Bootstrap breakpoints:
| Breakpoint | Description |
| -------- | ---------- |
| < 576px | xs |
| >=576px | small |
| >=768px | medium |
| >=992px | large |
| >=1200px | xl |
| >=1400px | 2xl |
```

- For my process in completing the media queries i went through each page using the responsive dimension in devtools. Going through each page to see how I would need to stack my sections above another. Originally went with a min-with for media queries but while going this process i learned of new queries container selectors. While I did not apply the container query I did take the new size selectors syntax, and as far as I can tell on my screen it seems to work as needed.

- for each page my sections will stack on one another
- grids available will follow into one column
- the navbar will move inward to stack vertically and relocate underneath title of site as pages size down.