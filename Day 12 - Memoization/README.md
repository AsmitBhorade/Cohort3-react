# React Memoization — Quick Guide

## The three tools

| Tool | Caches | Use it for |
|---|---|---|
| `React.memo(Component)` | A component’s rendered result | Skipping a child render when its props are unchanged |
| `useCallback(fn, deps)` | A function reference | Keeping a callback stable between renders |
| `useMemo(fn, deps)` | A calculated value | Avoiding an expensive recalculation |

## `React.memo`

Wrap a component to let React skip rendering it when its props are unchanged:

```jsx
import { memo } from "react";

const Home = memo(function Home({ greet }) {
  return <button onClick={greet}>Greet</button>;
});
```

**Important:** `memo` compares props shallowly:

- Same primitive value (`"hi"`, `5`, `true`) → usually unchanged.
- New object, array, or function reference → changed, even if its contents look the same.
- The component can still render when its own state or consumed context changes.
- It is an optimization, not a guarantee that React will never render the component.

## `useCallback`

Keeps the same function reference until a dependency changes:

```jsx
const greet = useCallback(() => {
  console.log("Good evening");
}, []);
```

Useful when passing a callback to a memoized child, or when a function is a dependency of another hook.

**It does not stop the function from running when called.** It only caches the function reference.

## `useMemo`

Keeps a calculated value until a dependency changes:

```jsx
const calculation = useMemo(() => {
  let sum = 0;

  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }

  return sum;
}, []);
```

Use it for expensive calculations or when a stable object/array value is needed by a memoized child.

## Dependencies

Dependencies are compared using `Object.is`.

```jsx
useMemo(() => calculate(value), [value]);
useCallback(() => doSomething(value), [value]);
```

- `[]` — reuse the result/reference until the component unmounts.
- `[value]` — recompute or recreate when `value` changes.
- Missing a dependency can make the callback use **stale values**.
- Don’t leave out dependencies just to prevent updates; include the values the function uses.

## References and rerenders

```jsx
<Child title="Users" />                 // string value: stable if unchanged
<Child options={{ sort: "name" }} />    // new object each render
<Child onClick={() => save()} />        // new function each render
```

A new object/function reference can make a memoized child render again. Stabilize it only when that matters:

```jsx
const options = useMemo(() => ({ sort: "name" }), []);
const handleClick = useCallback(() => save(), []);

<Child options={options} onClick={handleClick} />;
```

A stable prop alone does **not** prevent rerenders: the child must also be wrapped in `memo`.

## Applying this to `App.jsx`

Your `greet` callback is stable because its dependency list is empty. But `Home` and `About` can still render when `App` renders unless they are memoized.

Your calculation depends on `users`, so changing the user name recalculates the large sum:

```jsx
const calculation = useMemo(() => {
  // expensive calculation
}, [users]);
```

If the calculation does not use `users`, remove that dependency:

```jsx
const calculation = useMemo(() => {
  // expensive calculation
}, []);
```

Only do this when the calculation truly uses no changing values.

## Common mistakes / limitations

- **Using memoization everywhere:** adds complexity and can cost more than the work it skips.
- **Expecting `useCallback` to prevent child renders:** the child also needs `memo`, and its other props must remain unchanged.
- **Creating objects/functions inline:** these have new references on each render.
- **Mutating objects or arrays:** React may not detect a change correctly. Create a new value instead.
- **Using hooks conditionally:** call hooks at the top level of a component, not inside conditions or loops.
- **Putting side effects in `useMemo`:** use `useEffect` for side effects. Memo calculations should be pure.
- **Expecting `[]` to mean “exactly once in development”:** React Strict Mode may call render-related code more than once during development.

## Quick decision

1. Is a calculation measurably expensive? → Consider `useMemo`.
2. Does a memoized child need a stable function prop? → Consider `useCallback`.
3. Is a component often given the same props and expensive to render? → Consider `memo`.
4. Is there no measured performance problem? → Keep the code simple; don’t memoize yet.