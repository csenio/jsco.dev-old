---
date: "2019-06-21"
title: "Useful functional Patterns"
subtitle: "Write better code with some of my favourite functional patterns"
---

arrays:

​ - [modify a value in an array](#modify-a-value--object-in-an-array)

## arrays

#### modify a value / object in an array

```js
const bestAnimals = ["honeybadger", "cat", "fox"]
// replace 'cats' with 'raccoon'

const newBestAnimals = bestAnimals.map(animal =>
  animal === "cat" ? "raccoon" : animal
)

// ->  ['honeybadger', 'raccoon', 'fox']
```
