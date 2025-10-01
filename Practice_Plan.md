### 🔹 Day 1: Setup + Warmup

1. Setup a TypeScript project (Node + ts-node / Bun / Deno).

2. Create a repo typescript-design-patterns.

3. Write boilerplate code for testing patterns (basic index.ts runner).

4. Get comfortable with interface, abstract class, and generics.


### 🔹 Day 2: Creational Patterns (Part 1)

**Singleton**

Implement a Logger service ensuring only one instance.

**Factory Method**

Example: ShapeFactory that creates Circle / Square.

✅ Practice: Make a DatabaseConnection singleton + factory for MySQL vs MongoDB.



### 🔹 Day 3: Creational Patterns (Part 2)

**Abstract Factory**

Example: UI Toolkit (Button, Checkbox) for Mac vs Windows.

**Builder**

Example: UserBuilder to create User objects step by step.

**Prototype**

> Example: to be written

✅ Practice: Implement a MealBuilder for assembling fast-food orders.



### 🔹 Day 4: Structural Patterns (Part 1)

**Adapter**

Example: Adapter to make a new API compatible with an old interface.

**Bridge**

Example: Remote Control (Device abstraction, TV / Radio implementations).

✅ Practice: Implement an adapter for different payment gateways.



### 🔹 Day 5: Structural Patterns (Part 2)

**Composite**

Example: Filesystem (File + Folder).

**Decorator**

Example: Add toppings to pizza dynamically.

✅ Practice: Implement a Notification system where you can add decorators like EmailNotification, SMSNotification.



### 🔹 Day 6: Structural Patterns (Part 3)

**Facade**

Example: A VideoConverterFacade that hides complex APIs.

**Proxy**

Example: ImageProxy that loads images lazily.

**Fly weight**

> Example: to be written

✅ Practice: Implement a CacheProxy around a DataFetcher.


### 🔹 Day 7: Behavioral Patterns (Part 1)

**Strategy**

Example: Different sorting strategies.

**Observer**

Example: Event system (Subject + Observer).

✅ Practice: Implement a mini pub-sub system.



### 🔹 Day 8: Behavioral Patterns (Part 2)

**Command**

Example: Undo/redo operations.

**Iterator**

Example: Custom collection iteration.

✅ Practice: Implement command pattern for text editor actions.



### 🔹 Day 9: Behavioral Patterns (Part 3)

**Mediator**

Example: Chatroom mediator between users.

**Memento**

Example: Save & restore editor state.

✅ Practice: Implement a TextEditor with save/restore checkpoints.



### 🔹 Day 10: Behavioral Patterns (Part 4)

**State**

Example: Vending machine states.

**Template Method**

Example: Abstract class with steps (Game framework).

✅ Practice: ATM machine simulation using State.



### 🔹 Day 11: Behavioral Patterns (Part 5)

**Visitor**

Example: Apply operations on elements (Shape visitor for area calculation).

**Chain of Responsibility**

Example: Logging system with multiple handlers.

✅ Practice: Implement middleware pipeline (like Express).



### 🔹 Day 12: Review + Mini-Integration

Refactor some patterns together in a mini project:

- E-commerce checkout system:
- Payments → Strategy
- Discount rules → Chain of Responsibility
- Notifications → Observer + Decorator
- Inventory system → Singleton


### 🔹 Day 13: Larger Integration Project

**Chat Application:**

- Mediator → for chat room management.
- Observer → for live notifications.
- Command → for undo message.
- Memento → save drafts.
- Proxy → for caching user profiles.



### 🔹 Day 14: Final Wrap-Up

Pick one of your existing TS projects.

Identify places to apply patterns.

Write a blog post or README explaining each pattern with examples.

Push repo typescript-design-patterns to GitHub.