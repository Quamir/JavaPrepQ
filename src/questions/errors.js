const errors = [
  {
    question: "What is a syntax error in Java?",
    answer:
      "An error that occurs when the code violates the rules of the programming language.",
    explanation:
      "A syntax error is caused by incorrect syntax in the code, such as missing a semicolon, using incorrect capitalization, or misspelling a keyword. This type of error is usually caught by the compiler when the code is being compiled.",
      img: "",
  },

  {
    question: "What is a logical error in Java?",
    answer:
      "An error that occurs when the code compiles and runs without errors, but the output is not what was expected.",
    explanation:
      "A logical error is caused by a mistake in the logic of the program. It can be difficult to detect because the code will still compile and run without errors, but the output will not be what was intended.",
      img: "",
  },

  {
    question: "What is a runtime error in Java?",
    answer:
      "An error that occurs while the program is running.",
    explanation:
      "A runtime error can be caused by a variety of factors, such as dividing by zero, accessing an array out of bounds, or attempting to open a file that does not exist. This type of error is not caught by the compiler and can cause the program to crash.",
      img: "",
  },

  {
    question: "What is a null pointer exception in Java?",
    answer:
      "An error that occurs when the program tries to access an object or variable that is null.",
    explanation:
      "A null pointer exception can occur when the program tries to access a method or property of an object that is null, or when the program tries to access an element of an array that is null. This type of error can be difficult to diagnose because it may not occur until the program is in a certain state.",
      img: "",
  },
  {
    question:
      "What is the difference between a syntax error and a logical error in Java?",
    answer:
      "A syntax error occurs when the code violates the language grammar rules, while a logical error occurs when the code is syntactically correct but produces unexpected results.",
    explanation:
      "Syntax errors are caused by typos, missing or misplaced punctuation, incorrect use of keywords, or incorrect syntax structure. Logical errors are caused by incorrect program logic or algorithms. Syntax errors are usually detected by the compiler, while logical errors may not be detected until the program is executed. Both types of errors can be fixed by debugging the code to find and correct the underlying problem.",
    img: "",
  },
  {
    question:
      "What is the difference between a runtime error and a logical error in Java?",
    answer:
      "A runtime error occurs during the execution of a program, while a logical error occurs when the code is syntactically correct but produces unexpected results.",
    explanation:
      "Runtime errors are usually caused by unexpected conditions or input values that cause the program to terminate abnormally. Logical errors are caused by incorrect program logic or algorithms. Runtime errors can be fixed by adding error handling code to the program to detect and respond to unexpected conditions, while logical errors can be fixed by debugging the code to find and correct the underlying problem. Both types of errors can be difficult to identify and may require careful testing and analysis to diagnose.",
    img: "",
  },
  {
    question:
      "What is the difference between a syntax error and a runtime error in Java?",
    answer:
      "A syntax error occurs when the code violates the language grammar rules, while a runtime error occurs during the execution of a program.",
    explanation:
      "Syntax errors are caused by typos, missing or misplaced punctuation, incorrect use of keywords, or incorrect syntax structure. Runtime errors are usually caused by unexpected conditions or input values that cause the program to terminate abnormally. Syntax errors are usually detected by the compiler, while runtime errors may not be detected until the program is executed. Both types of errors can be fixed by debugging the code to find and correct the underlying problem.",
    img: "",
  },
];

export default errors;
