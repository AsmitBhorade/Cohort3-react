# Authentication and Axios Concepts

## 1. What is authentication?

Authentication checks **who a user is**—for example, by verifying an email and password. After successful login, an app may receive a token that represents the authenticated session.

Authorization is different: it determines **what an authenticated user is allowed to do**.

A typical flow is:

1. The user submits login details.
2. The app sends them to an API.
3. The API verifies them and may return a token and user details.
4. The app stores the authentication state.
5. Later API requests include the token.
6. Protected pages or API endpoints check the user's authentication or permissions.

> A frontend route guard improves the user experience, but it is not security by itself. The backend must also protect private data and operations.

## 2. What is React Context?

React Context lets components access shared values without passing props through every component in between.

Authentication state is often shared this way because many components may need to know:

- Whether the user is logged in
- The current user's details
- The token
- How to log in or log out

A context provider makes those values available to components beneath it.

## 3. What is a custom `useAuth` hook?

A custom hook is a function whose name starts with `use` and which can use React hooks. An authentication hook commonly provides a convenient way to read the authentication context.

Instead of repeating this in many components:

```jsx
const auth = useContext(AuthContext);
```

components can use:

```jsx
const { user, isAuthenticated, logout } = useAuth();
```

Example:

```jsx
// filepath: src/hooks/useAuth.js
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside an AuthProvider");
  }

  return context;
}
```

The provider supplies the shared values:

```jsx
// filepath: src/context/AuthContext.jsx
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const isAuthenticated = Boolean(token);

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const value = { user, token, isAuthenticated, setUser, setToken, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
```

Wrap the application with the provider so its children can use `useAuth`:

```jsx
// filepath: src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
```

Example use in a component:

```jsx
// filepath: src/components/Profile.jsx
import { useAuth } from "../hooks/useAuth";

export default function Profile() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) return <p>Please log in.</p>;

  return <p>Welcome, {user?.name}!</p>;
}
```

### Why check the context in `useAuth`?

If a component uses `useAuth` outside `AuthProvider`, the context value is missing. Throwing a clear error points directly to the issue instead of causing a less helpful error later.

## 4. What is Axios?

Axios is a library for making HTTP requests from JavaScript. It can send requests such as:

- `GET` — retrieve data
- `POST` — create or submit data
- `PUT` / `PATCH` — update data
- `DELETE` — remove data

Axios returns a Promise. A Promise represents a result that may be available later. Use `.then()` / `.catch()` or `async` / `await` to handle it.

```jsx
const response = await axios.get("/users");
console.log(response.data);
```

`response.data` is the response body returned by the API.

## 5. What is an Axios instance?

An Axios instance is a configured Axios client that can be reused across the app. It can define common settings once, such as the API base URL and default headers.

Without an instance, every request may repeat the full URL:

```jsx
axios.get("https://api.example.com/users");
axios.get("https://api.example.com/products");
```

With an instance, requests use relative paths:

```jsx
api.get("/users");
api.get("/products");
```

Example:

```jsx
// filepath: src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
```

Then use the instance in a component or service:

```jsx
import api from "./api";

const response = await api.get("/users");
```

The `baseURL` is combined with the request path. For example, `api.get("/users")` requests `https://api.example.com/users`.

## 6. What is an Axios interceptor?

An interceptor is a function that runs automatically for requests or responses made through an Axios instance. It is useful for shared behavior, so you don't repeat the same logic in every API call.

### Request interceptor

Runs before a request is sent. A common use is adding an authentication token to a request header.

```jsx
// filepath: src/api/api.js
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);
```

The `Authorization: Bearer ...` format is common, but the API's documentation determines the required header format.

The interceptor must return `config`; otherwise Axios will not receive the request configuration.

### Response interceptor

Runs when a response arrives, or when a request fails. It can provide common error handling.

```jsx
// filepath: src/api/api.js
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // The server says the request is unauthenticated.
      // The app may clear authentication state or redirect to login.
    }

    return Promise.reject(error);
  }
);
```

Returning `response` lets successful requests continue normally. Returning `Promise.reject(error)` allows the component that made the request to handle the error in its own `catch` block.

A `401` usually means authentication is missing or invalid. A `403` usually means the server understood the request but does not allow access.

## 7. How authentication and Axios work together

The usual sequence is:

1. The login form sends credentials to the API.
2. The API returns user information and, if applicable, a token.
3. The app stores the authentication state.
4. The Axios request interceptor attaches the token to later requests.
5. The backend validates the token for protected API endpoints.
6. A response interceptor can handle shared errors, such as an expired session.
7. `useAuth` gives React components access to the current authentication state and actions.

## 8. Handling API errors

A failed request should be handled so the user sees a helpful message and the developer can inspect the actual problem.

```jsx
try {
  const response = await api.get("/users");
  setUsers(response.data);
} catch (error) {
  console.error("Could not load users:", error);
  setError("Could not load users. Please try again.");
}
```

Common causes include:

- The API server is unavailable.
- The URL or `baseURL` is incorrect.
- The browser blocks the request due to CORS.
- The request needs a token.
- The server returns an error status.
- The internet connection is unavailable.

## 9. Security notes

- Do not treat a hidden page or frontend route as protection for backend data. Enforce permissions on the server.
- Avoid putting passwords or sensitive personal data in `localStorage`.
- JavaScript running on the page can read values stored in `localStorage`. For sensitive sessions, secure, `HttpOnly`, `Secure`, `SameSite` cookies are often preferable when supported by the backend.
- Follow the API's authentication instructions; not every API uses tokens or the `Bearer` format.
- Never log passwords or tokens to the browser console.