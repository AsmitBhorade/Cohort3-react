We remove App comp from main only and directly render AppRoutes

navlink only works inside router

always in data routing we need a layout

## React Router

`AppRoutes.jsx` defines the application’s routes using `createBrowserRouter` and renders them with `RouterProvider`.

The `/` route uses `AuthLayout` as its parent layout. Its index route displays the login page, and its `register` child route displays the registration page. The `/main` route uses `MainLayout` for the main application pages.

```text
/                  Login page inside AuthLayout
/register          Register page inside AuthLayout
/main              Home page inside MainLayout
/main/about        About page inside MainLayout
/main/services     Services page inside MainLayout
```

A layout route lets multiple pages share a common wrapper. The layout component must render `<Outlet />`; React Router places the active child page there.

`NavLink` and router navigation hooks must be used within the router context, beneath `RouterProvider`. Use `Link` or `NavLink` for navigation instead of regular `<a>` elements when navigating between app routes.

## AuthLayout

`AuthLayout.jsx` is the shared wrapper for authentication pages, such as login and registration. It can provide shared styling or elements around both pages.

Its `<Outlet />` is the placeholder where React Router renders the current child route:

```jsx
import { Outlet } from "react-router";

const AuthLayout = () => (
  <div>
    <Outlet />
  </div>
);

export default AuthLayout;
```

The layout does not decide the URL. The route’s `path` in `AppRoutes.jsx` decides the URL; `AuthLayout` decides what the matching pages share.

## React Hook Form

React Hook Form manages form values, validation, submission, and errors without requiring separate React state for every input. In this project, `Login.jsx` and `Register.jsx` use it to handle their forms.

### `useForm()`

```jsx
const {
  register,
  handleSubmit,
  reset,
  getValues,
  formState: { errors },
} = useForm();
```

`useForm()` provides the functions and state used to connect inputs to React Hook Form.

### `register`

`register` connects an input to the form and defines its validation rules.

```jsx
<input
  {...register("email", {
    required: "Email is required",
  })}
  type="email"
/>
```

The string `"email"` is the field name. React Hook Form uses it to track the field’s value and validation state.

### `handleSubmit`

`handleSubmit` validates the registered fields, then calls the submit function with the form data if validation passes.

```jsx
<form onSubmit={handleSubmit(formsubmit)}>
```

The submit button must use `type="submit"` to submit the form.

### `formState.errors`

`errors` contains validation errors for fields that did not pass their rules. The UI can display a field’s message near its input:

```jsx
{errors.email && <p>{errors.email.message}</p>}
```

### `getValues`

`getValues("password")` reads the current value of the password field. It is useful for checking that the confirmation password matches.

### `validate`

`validate` defines a custom validation rule. React Hook Form passes the current field value to the function. For the `confirmPassword` field:

```jsx
validate: (value) =>
  value === getValues("password") || "Passwords do not match"
```

If the values match, the rule returns `true` and validation passes. Otherwise, it returns the error message, which is available as `errors.confirmPassword.message`.

### `reset`

`reset()` clears the form and returns its fields to their initial values. It is often called after a successful submission.

## Auth context

`AuthContext.jsx` can store and share authentication-related state, such as the list of registered users, between components. Components access the context with `useContext(Auth)`.

The provider must wrap the router so route components such as `Register` and `Login` can access the context. The context provider’s `value` must include the same property names that those components destructure.

For example, if a component uses:

```jsx
const { registeredUsers, setregisteredUsers } = useContext(Auth);
```

then the provider must supply both `registeredUsers` and `setregisteredUsers`.

A React context that stores users in component state is only a learning/demo approach. It is in memory and is lost when the page reloads; it is not a secure authentication system. For a real application, use a backend or trusted authentication service, and never store plain-text passwords in client-side state or send them through a general-purpose form submission service.