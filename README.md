# 🔍 Deep Dive into TypeScript: Interfaces vs Types & `keyof` Keyword

TypeScript continues to grow in popularity for its ability to bring type safety to JavaScript applications. Today, we’ll explore two essential TypeScript features that empower developers to write cleaner, more maintainable code: **the differences between interfaces and types**, and the **`keyof` keyword**.

---

## 1️⃣ Interfaces vs Types in TypeScript

### 🔧 What They Are

In TypeScript, both `interface` and `type` are used to describe the shape of an object. While they often serve similar purposes, they differ in subtle but important ways.

### ✅ Key Differences

| Feature                | `interface`                      | `type`                            |
| ---------------------- | -------------------------------- | --------------------------------- |
| Extension              | Supports extension via `extends` | Supports composition via `&`      |
| Declaration merging    | Yes                              | No                                |
| Usable with primitives | No                               | Yes                               |
| Recommended for        | Object shapes                    | Unions, primitives, complex types |

### 🔍 Example

```ts
// Interface
interface User {
  name: string;
  age: number;
}

// Declaration merging
interface User {
  email: string;
}

// Resulting shape includes name, age, and email

// Type
type Product = {
  title: string;
  price: number;
};

// Union with type
type Status = "loading" | "success" | "error";
```

**Tip**: Use `interface` when designing object-oriented models or public APIs. Use `type` when working with complex unions or primitive aliases.

---

## 2️⃣ The `keyof` Keyword in TypeScript

### 🧠 What It Does

The `keyof` keyword is a **type operator** that returns a **union of property names** (keys) of a given object type.

This is particularly powerful when writing generic functions that work with dynamic keys safely.

### 🔍 Example

```ts
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 30 };
const userName = getProperty(user, "name"); // ✅ string
```

### 🚀 Why It Matters

- Prevents typos in property access
- Enables generic utility functions
- Improves type safety when working with dynamic keys

---

## 📌 Final Thoughts

Understanding the subtle but powerful tools TypeScript offers—like `interface` vs `type` and the `keyof` operator—can drastically improve your code’s **robustness**, **clarity**, and **maintainability**.

Use these tools mindfully to unlock the full potential of TypeScript in your next project!
