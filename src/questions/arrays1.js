const codingArrays1 = [
  {
    question:
      "Which of the following initializes an array arr containing five elements with the value ",
    answer:
      " Both int[] arr = {0, 0, 0, 0, 0}; And int[] arr = new int[]{0, 0, 0, 0, 0};",
    options: [
      "int[] arr = {0, 0, 0, 0, 0};",
      "int[] arr = new int[5];",
      "int[] arr = new int[]{0, 0, 0, 0, 0};",
    ],
    explanation: `(A) initializes an array with five elements and explicitly sets each element to 0 using the brace notation.
        (C) also initializes an array with five elements and sets each element to 0 using the array initialization syntax.
        (B) initializes an array with five elements, but does not set the initial value of the elements. By default, the elements of an int array are initialized to 0, but this is not explicitly stated in option (B).
        Therefore, options (A) and (C) are equivalent and both correctly initialize an array containing five elements with the value 0. Option (B) also creates an array with five elements, but does not explicitly set their values. Option (E) is incorrect because it includes option (B), which is not equivalent to options (A) and (C).`,
    img: "",
  },
  {
    question:
      "What is the default value for integer elements in a newly created array in Java?",
    answer: "0",
    options: ["0", "null", "-1", "undefined"],
    explanation:
      "The default value for integer elements in a newly created array in Java is (A) 0. When an array of integers is created in Java, all elements of the array are initialized to 0 by default.",
    img: "",
  },
  {
    question:
      "How can an array of length 4 with elements initialized to 1 be created in Java?",
    answer: "All options",
    options: [
      "int[] arr = {1, 1, 1, 1};",
      "int[] arr = new int[]{1, 1, 1, 1};",
      `int[] arr = new int[4];
      for (int i = 0; i < arr.length; i++)
      arr[i] = 1;`,
      "None of the options",
    ],
    explanation: `All of the options mentioned can be used to create an array of length 4 with elements initialized to 1 in Java.`,
    img: "",
  },
  {
    question:
      'What is the output of the following Java code snippet?\nint[] arr = new int[3];\nfor (int i = 0; i < arr.length; i++) {\nSystem.out.print(arr[i] + " ");\n}',
    answer: "0 0 0",
    options: ["111", "null null null", "No output", "Error"],
    explanation:
      "The output of the code snippet will be: 0 0 0 This is because the default value for an uninitialized int array element in Java is 0. When the for loop iterates over each element of the array, it prints out the value of each element concatenated with a space character. Since the elements of the array are all uninitialized, their default value of 0 is printed out.",
    img: "",
  },
];

export default codingArrays1;
