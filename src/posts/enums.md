---
date: "2019-06-21"
title: "What problem do enums solve"
subtitle: "What are enums used for and how you can implement them in JavaScript"
---

![sign post](https://images.unsplash.com/photo-1508237866955-4439ca21b062?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)

### Photo by [Jens Johnsson](https://unsplash.com/photos/36a3U4_UUHY)

TLDR: Use enums if there are a definite number of fixed values a variable can
have variable\*

The typescript docs define enums like this:

> Enums allow us to define a set of named constants. Using enums can make it
> easier to document intent, or create a set of distinct cases. TypeScript
> provides both numeric and string-based enums.

This is a good definition but it can be unclear when and why to use them, let's
pick it apart:

We often use `booleans` to capture what state something is in

```js
const isAuth = true // or false
```

If you read this code it's immediately clear what is meant by that, what options
there are and what `isAuth` does, the problem is if we have more states than
`true` and `false`.

```js
const isAuth = "authenticating" //or 'loggedIn' / 'loggedOut'
```

using a string here is a problem because it makes things hard to debug and there
is no way to know what the other values are, `'loggedIn'` could also be called
`'authenticated'` or `'true'`. That's where enums come in.

Enums do not exist natively in JavaScript but here is the simplest way to
implement them:

```js
const authStatus = {
  SUCCESS: "auth_success",
  AUTHENTICATING: "auth_authenticating",
  FAILED: "auth_failed",
}

const isAuth = authStatus.SUCCESS
```

When using Typescript you can find the documentation on enums
[here](https://www.typescriptlang.org/docs/handbook/enums.html)
