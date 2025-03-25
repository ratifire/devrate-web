# TanStack Form (React Hook Form)

Example of TanStack Form described in `FeedbackProjectModal.jsx` file.

From validation in `FeedbackProjectModalSchema.js`

## Useful links:
1. [Usage of TanStack Form with UI Libraries](https://tanstack.com/form/latest/docs/framework/react/guides/ui-libraries)
2. [Basic Concepts and Terminology](https://tanstack.com/form/latest/docs/framework/react/guides/basic-concepts)

### **Pros:**

Performance-Optimized:
* Uses uncontrolled components (by default) with direct DOM binding → fewer re-renders. The DOM itself holds the input value (like vanilla HTML). React only reads the value when needed (e.g., on submit).
* Better for large/complex forms.

Minimal Re-renders

* Only re-renders affected fields, not the entire form.

Small Bundle Size
* ~9kB (vs Formik’s ~13kB).

Flexible Validation
* Works seamlessly with Zod, Yup, or custom validation.
* Supports both field-level and schema-based validation.

First-Class TypeScript Support

* Strongly typed out of the box.

No Dependencies
* Lightweight and framework-agnostic (works with React Native too).
* When we say a library or tool is "framework-agnostic", it means it isn't tied to any specific framework (like React, Vue, Angular, etc.). It can work across multiple frameworks or even with vanilla JavaScript.

### **Cons:**

Learning Curve
* Requires understanding of uncontrolled components and refs.

Less "Batteries-Included"
* Needs manual integration for features like arrays/lists (though plugins exist).

Smaller Ecosystem
* Fewer third-party integrations compared to Formik.

# Formik

### **Pros:**

Developer Experience
* More intuitive for beginners (uses controlled components).
* Built-in helpers for forms (e.g., <Field>, <Formik>, useField).

Batteries-Included
* Handles forms, arrays, and nested objects out of the box.

Large Ecosystem
* Many integrations (e.g., validation with Yup, Material-UI bindings).

Better for Simple Forms
* Less boilerplate for basic use cases.

### **Cons:**

Performance Overhead
* Controlled components → re-renders entire form on every keystroke. The React state fully controls the input value. Every keystroke updates state → triggers a re-render.

Larger Bundle Size
* ~13kB (bigger than TanStack).

Verbose for Complex Forms
* Requires workarounds for optimizations (e.g., useMemo).

Deprecated
* No longer actively maintained (as of 2023).