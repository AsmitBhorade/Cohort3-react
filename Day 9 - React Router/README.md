## Dynamic Routing

Dynamic routing is used for product details:

```jsx
<Route path="/detail/:id" element={<ProductDetail />} />
```

The `:id` part is a dynamic URL parameter. It allows the same component to display different products.

For example:

- `/detail/1`
- `/detail/2`
- `/detail/10`

Inside `ProductDetail.jsx`, the `useParams` hook can be used to read the product ID:

```jsx
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();

  return <h1>Product ID: {id}</h1>;
};
```

When a user selects a product from `ProductCard.jsx`, the product ID can be included in the navigation path:

```jsx
navigate(`/detail/${product.id}`);
```

This sends the user to the matching dynamic product detail page.

## Protected Routing

The About page is protected using `ProtectedRoute`:

```jsx
<Route
  path="/about"
  element={
    <ProtectedRoute>
      <About />
    </ProtectedRoute>
  }
/>
```

`ProtectedRoute.jsx` acts as a security wrapper. It checks whether the user is authenticated or has permission to access the page.

The protected route works as follows:

1. The user tries to visit `/about`.
2. `ProtectedRoute` checks the user's authentication status.
3. If the user is authenticated, the `About` component is rendered.
4. If the user is not authenticated, the user is redirected or denied access.

A protected route commonly follows this pattern:

```jsx
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = true; // Replace with actual authentication logic

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
```

In this project, only the `/about` route is protected. The Home, Products, and Product Detail pages can be accessed normally.