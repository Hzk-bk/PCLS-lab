# PCLS-lab

## Overview

This is a JavaScript learning laboratory repository containing educational exercises focused on fundamental JavaScript concepts. The repository is structured as a collection of standalone JavaScript files that demonstrate core language features including variable declarations, type checking, control flow, and data manipulation.

The project serves as a practical learning resource for understanding JavaScript fundamentals without any build tools, frameworks, or external dependencies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Project Structure

The repository follows a simple, flat file organization pattern:

```
js/
├── task1/      # Variable and type-related exercises
└── task1b/     # Control flow (if/else) exercises
```

**Design Decision**: Each exercise is a self-contained JavaScript file that can be run independently via Node.js or browser console. This approach was chosen to:
- Keep exercises isolated and easy to understand
- Allow learners to run individual files without setup complexity
- Focus on core JavaScript without framework overhead

### Exercise Categories

**Task 1 (S1_VAR series)**: Covers JavaScript variable fundamentals:
- Variable declarations (var, let, const)
- Block scoping behavior
- Type detection and checking
- Number handling (NaN, BigInt, type coercion)
- Object inspection utilities

**Task 1b (S1_IF series)**: Covers control flow:
- Conditional logic with if/else chains
- Input validation and normalization
- Return value patterns

### Runtime Environment

- **Target**: Node.js or browser JavaScript console
- **No build step required**: Files are plain ES6+ JavaScript
- **No module system**: Each file is standalone with no imports/exports

## External Dependencies

**None** - This repository intentionally has no external dependencies, package.json, or third-party integrations. All exercises use only built-in JavaScript features and APIs.