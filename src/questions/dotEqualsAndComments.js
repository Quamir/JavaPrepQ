const dotEqualsAndComments = [
  {
    question: "What is the purpose of the .equals() method in Java?",
    answer:
      "To compare the values of two objects in Java.",
    explanation:
      "In Java, the == operator is used to compare the reference values of two objects, while the .equals() method is used to compare their actual values. This is particularly useful when working with objects that contain complex data types, such as strings or arrays.",
    img: ""
  },
  {
    question:
      "How is the .equals() method different from the == operator in Java?",
    answer:
      "The == operator compares the reference values of two objects, while the .equals() method compares their actual values.",
    explanation:
      "In Java, the == operator checks if two objects have the same reference value in memory, while the .equals() method checks if their actual values are the same. This means that two objects with the same values may not be equal if they have different reference values.",
    img: ""
  },
  {
    question: "What is object comparison in Java?",
    answer:
      "Checking whether two objects are equal.",
    explanation:
      "Object comparison can be performed using the == operator or the .equals() method. The == operator checks whether two object references point to the same object in memory, while the .equals() method checks whether two objects are equal in value.",
    img: ""
  },
  {
    question: "What is the syntax for a single-line comment in Java?",
    answer: "//",
    explanation:
      "In Java, a single-line comment begins with two forward slashes (//) and continues to the end of the line.",
    img: ""
  },
  {
    question: "What is the syntax for a multi-line comment in Java?",
    answer: "/* /",
    explanation:
      "In Java, a multi-line comment begins with a forward slash followed by an asterisk (/) and ends with an asterisk followed by a forward slash (*/). Everything between these symbols is a comment.",
    img: ""
  },
  {
    question: "Can comments be nested in Java?",
    answer: "No",
    explanation:
      "Java does not support nested comments. If you try to nest a multi-line comment inside another multi-line comment, it will cause a syntax error.",
    img: ""
  },
  {
    question: "What is the purpose of comments in Java?",
    answer: "To explain the code and make it more readable",
    explanation:
      "Comments are added to code to explain what it does, how it works, and why certain decisions were made. This makes the code easier to read and understand for other developers.",
    img: ""
  },
  {
    question: "Are comments executable code in Java?",
    answer: "No",
    explanation:
      "Comments are not executed by the Java compiler and do not affect the program's functionality. They are simply used to annotate and explain the code.",
    img: ""
  },
  {
    question: "What is a Javadoc comment in Java?",
    answer: "/** /",
    explanation:
      "A Javadoc comment is a special type of multi-line comment that begins with a forward slash followed by two asterisks (/**) and ends with an asterisk followed by a forward slash (/). It is used to generate documentation for Java code.",
    img: ""
  },
  {
    question:
      "Can Javadoc comments be used to generate documentation for non-public classes or methods?",
    answer: "No",
    explanation:
      "Javadoc comments can only be used to generate documentation for public classes and methods. Non-public classes and methods are not included in the generated documentation.",
    img: ""
  },
  {
    question: "What is the purpose of a @return tag in a Javadoc comment?",
    answer: "To describe the return value of a method",
    explanation:
      "A @return tag is used in a Javadoc comment to describe the value returned by a method. It is followed by a description of the expected return value and any special cases that may affect the return value.",
    img: ""
  },
  {
    question: "What is the purpose of a @throws tag in a Javadoc comment?",
    answer: "To describe an exception that a method can throw",
    explanation:
      "A @throws tag is used in a Javadoc comment to describe an exception that a method can throw. It is followed by the name of the exception and a description of when and why it may be thrown.",
    img: ""
  },
  {
    question: "What is the @param tag used for in JavaDocs?",
    answer:
      "A tag used to document a method's parameter and its purpose.",
    explanation:
      "JavaDocs is a documentation generation tool used to generate documentation from source code comments. The @param tag is used to document a method's parameter and its purpose. This helps developers understand what each parameter does and how to use it correctly.",
    img: "",
  },
  {
    question: "What is the @author tag used for in JavaDocs?",
    answer: "The @author tag is used to document the author of a class.",
    explanation:
      "JavaDocs is a documentation generation tool used to generate documentation from source code comments. The @author tag is used to document the author of a class.",
    img: "",
  },
  {
    question: "What is the @see tag used for in JavaDocs?",
    answer: "The @see tag is used to create a link to another class or method.",
    explanation:
      "JavaDocs is a documentation generation tool used to generate documentation from source code comments. The @see tag is used to create a link to another class or method. This helps developers quickly navigate to related documentation.",
    img: "",
  },
  {
    question: "What is the @version tag used for in JavaDocs?",
    answer:
      "A tag used to document the version number of a class or method.",
    explanation:
      "JavaDocs is a documentation generation tool used to generate documentation from source code comments. The @version tag is used to document the version number of a class or method. This helps developers keep track of changes and ensure that the correct version of a class or method is being used.",
    img: "",
  },
  {
    question: "What is the @return tag used for in JavaDocs?",
    answer: "A tag used to document the return value of a method.",
    explanation:
      "JavaDocs is a documentation generation tool used to generate documentation from source code comments. The @return tag is used to document the return value of a method. This helps developers understand what the method returns and how to use the returned value.",
    img: "",
  },
  {
    question: "What is the @deprecated tag used for in JavaDocs?",
    answer:
      "A tag used to document that a method or class is no longer recommended for use.",
    explanation:
      "JavaDocs is a documentation generation tool used to generate documentation from source code comments. The @deprecated tag is used to document that a method or class is no longer recommended for use. This helps developers understand that the method or class may be removed in future versions and that they should use an alternative.",
    img: "",
  },
  {
    question: "What is the @inheritDoc tag used for in JavaDocs?",
    answer:
      "A tag used to inherit documentation from a superclass or interface.",
    explanation:
      "JavaDocs is a documentation generation tool used to generate documentation from source code comments. The @inheritDoc tag is used to inherit documentation from a superclass or interface. This helps developers avoid duplicating documentation and keeps the documentation up-to-date with changes to the superclass or interface.",
    img: "",
  },
];

export default dotEqualsAndComments;
