# Things to Consider:

- Core functionality:
  - userInput array where each time a user clicks on a button (the calculator is gonna be a div filled with buttons), that input is pushed to the userInput array (essentially a stack)
- Functions:
  - "Clear" button that, onClick, triggers clear() to clear the stack and "reset" the calculator display
  - "=" button that, onClick, triggers solve(), that evaluates based on the operator used. For a smoother UX--could make it so that solve() is triggered whenever a number is inputted directly after an operator, so calculations can be "stringed"
    - This "ignores" order of operations, however, so if a user wanted to calculate something like (2 + 3 \* 4 / 2), then they would have to input the proper ordering themselves.
      - So I'll use a two-stage display instead, mimicking Google's calculator. I'll handle order of operations with a two-pass evaluation:
        - First pass: Iterate and check if an index is either "\*" or "/"; then handle those specific cases and replace values in the array after evaluation
        - Second pass: Iterate and solve addition and subtraction
- Error Handling:
  - Divison by zero
  - Invalid input sequences (multiple operators in a row)
  - Malformed expressions (i.e., "5+")
