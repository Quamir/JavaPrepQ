const primitiveAndNonPrimitive = [
  {
    question: "What are primitive data types in Java?",
    answer:
      "Primitive data types in Java are the most basic data types, such as int, double, boolean, and char, that are not objects and do not have any methods.",
    explanation:
      "Primitive data types in Java are the most basic data types, such as int, double, boolean, and char, that are not objects and do not have any methods. They are used to store simple values, and are passed by value rather than by reference. Primitive data types are stored in the stack memory area of the JVM, which is faster and more memory-efficient than the heap memory area where objects are stored.",
    img: "",
  },
  {
    question: "What are non-primitive data types in Java?",
    answer:
      "Non-primitive data types in Java are object references, such as String, arrays, and classes, that are created from primitive data types and have methods that can be called on them.",
    explanation:
      "Non-primitive data types in Java are object references, such as String, arrays, and classes, that are created from primitive data types and have methods that can be called on them. Non-primitive data types are stored in the heap memory area of the JVM, which is slower and less memory-efficient than the stack memory area where primitive data types are stored.",
    img: "",
  },
  {
    question:
      "What is the difference between primitive and non-primitive data types in Java?",
    answer:
      "Primitive data types in Java are the most basic data types that are not objects and do not have any methods, while non-primitive data types are object references that are created from primitive data types and have methods that can be called on them.",
    explanation:
      "The main difference between primitive and non-primitive data types in Java is that primitive data types are stored in the stack memory area of the JVM, which is faster and more memory-efficient than the heap memory area where objects are stored, while non-primitive data types are stored in the heap memory area. Primitive data types are also passed by value, while non-primitive data types are passed by reference.",
    img: "",
  },
  {
    question: "What is autoboxing in Java?",
    answer:
      "Autoboxing in Java is the automatic conversion of primitive data types into their corresponding wrapper classes, such as int to Integer, boolean to Boolean, etc.",
    explanation:
      "Autoboxing in Java is the automatic conversion of primitive data types into their corresponding wrapper classes, such as int to Integer, boolean to Boolean, etc. This is useful when working with collections that require objects instead of primitive types, as it allows for seamless conversion between the two.",
    img: "",
  },
  {
    question: "What is unboxing in Java?",
    answer:
      "Unboxing in Java is the automatic conversion of wrapper class objects to their corresponding primitive data types, such as Integer to int, Boolean to boolean, etc.",
    explanation:
      "Unboxing in Java is the automatic conversion of wrapper class objects to their corresponding primitive data types, such as Integer to int, Boolean to boolean, etc. This is useful when working with collections that require primitive types instead of objects, as it allows for seamless conversion between the two.",
    img: "",
  },
  {
    question: "What are the eight primitive data types in Java?",
    answer:
      "The eight primitive data types in Java are byte, short, int, long, float, double, char, and boolean.",
    explanation:
      "Primitive data types are the simplest data types in Java and are used to represent single values. They are not objects and do not have methods. There are eight primitive data types in Java, each with a different range of values and size in memory.",
    img: "",
  },
  {
    question:
      "What is the difference between a char array and a String in Java?",
    answer:
      "A char array is a collection of separate char type entities, while a String is designed to hold a sequence of characters in a single variable.",
    explanation:
      "While both char arrays and Strings can hold sequences of characters, they differ in their design and use. Char arrays are collections of separate char type entities, while Strings are objects designed to hold a sequence of characters in a single variable.",
    img: "",
  },
  {
    question: "What are some examples of primitive data types in Java?",
    answer:
      "Some examples of primitive data types in Java include int, double, boolean, char, and byte.",
    explanation:
      "Primitive data types in Java are the basic data types that are built-in to the language. These include int (integer), double (floating point number), boolean (true/false), char (character), and byte (8-bit integer).",
    img: "",
  },
  {
    question:
      "What are some examples of non-primitive (object) data types in Java?",
    answer:
      "Some examples of non-primitive (object) data types in Java include arrays, strings, classes, and interfaces.",
    explanation:
      "Non-primitive or object data types are created by the programmer and can be of any size. Examples of non-primitive data types in Java include arrays, which are used to store a collection of values of the same type, strings, which are used to represent a sequence of characters, classes, which are used to define a blueprint for creating objects, and interfaces, which are used to define a set of methods that a class must implement.",
    img: "",
  },
  {
    question:
      "What is the size difference between primitive and non-primitive (object) data types in Java?",
    answer:
      "Primitive data types have a fixed size, while non-primitive data types can be of any size.",
    explanation:
      "In Java, primitive data types have a fixed size that is determined by the language, while non-primitive or object data types can be of any size and are created by the programmer. This means that the size of a variable that is declared using a primitive data type is known at compile time, while the size of a variable that is declared using a non-primitive or object data type is determined at runtime.",
    img: "",
  },
  {
    question:
      "What is the difference between pass by value and pass by reference?",
    answer:
      "Primitive data types are passed by value, while non-primitive data types are passed by reference.",
    explanation:
      "In Java, pass by value means that a copy of the value of a variable is passed to a method or function, while pass by reference means that a reference to the variable is passed. Primitive data types are passed by value because they are immutable and cannot be changed, while non-primitive or object data types are passed by reference because they can be changed.",
    img: "",
  },
];

export default primitiveAndNonPrimitive;
