# Assignment-1 ( Corrected using Grammarly )
The block is based on these three questions.

5...What is type inference in TypeScript? Why is it helpful? 

1...What are some differences between interfaces and types in TypeScript?

6...How does TypeScript help in improving code quality and project maintainability?

If we've ever worked on a JavaScript project that got messy as it grew, we’re not alone. That’s where TypeScript comes in. It’s like JavaScript with extra superpowers that help us write better code, avoid bugs, and keep our project easy to manage over time.
1. It Catches Mistakes Early
TypeScript tells us when something doesn’t make sense before we even run our code.
2. Our Editor Becomes Smarter
With TypeScript, our code editor (like VS Code) helps with auto-complete, spot mistakes, and navigate your code faster. No more guessing what a function does or what data it needs.
3. Our Code Documents Itself
When we use types, our code becomes easier to understand at a glance.
4. Safer Refactoring
Want to rename a variable or change a function? TypeScript will tell us all the places that are affected, so we don’t accidentally break things.
Perfect for growing projects where small changes can have big effects.
5. Easier to Manage Large Projects
As your app grows, TypeScript helps keep things organized with features like:
Interfaces
Enums
Modules
Generics
These tools help you build scalable, clean, and maintainable code.
6. Less Time Testing, More Time Building
Because TypeScript catches issues early, we spend less time writing tests for basic type errors and more time building real features.
7. Easy to Adopt
You don’t need to rewrite everything to use TypeScript. You can add it slowly to an existing JavaScript project, one file at a time.
TypeScript is like a helpful teammate that keeps your code in check. It:
-Reduces bugs
-Speeds up development
-Makes your code easier to read and update

5.... What is type inference in TypeScript? Why is it helpful?
Imagine you write this in JavaScript code: | let name = “Roy” | You know it's a string, but JavaScript doesn’t remember that. It won’t stop you from doing this later.
In TypeScript’s Type Inference, TypeScript looks at how you define your variables and figures out the type for you, even if you don’t explicitly write it. You didn’t have to write: string — TypeScript figured it out automatically. That’s type inference.
Why It’s Helpful:
Less code to write (you don’t have to type everything)
Fewer bugs (TypeScript catches incorrect assignments)
Smarter editor help (autocomplete, suggestions, etc.)

1.... What are some differences between interfaces and types in TypeScript?
Interfaces vs. Types in TypeScript:
Interface:
Extend other types ( via )
Reopened/merged
Don’t use for primitives/unions
Preferred for Object shapes and class-like structures
Type:
Extend other types ( with & intersection )
Never reopened/merged
Used for primitives/unions ( like ‘string’ )
Preferred for Complex types, Unions, Functions, Primitives
Use interface for objects, especially when you're working with classes or want to allow future expansion. Use type when you need unions, complex combinations, or primitives.
Type inference saves time and helps you avoid mistakes. Interfaces and types both describe data shapes, but have slightly different strengths.
Choose whichever fits your needs — both are great tools that make your code safer, cleaner, and easier to understand.
