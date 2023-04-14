const terminal = [
  {
    question: "What does the pwd command do in the terminal?",
    answer: "Prints the current working directory",
    explanation:"The pwd (print working directory) command displays the current working directory (the directory you are currently in) when executed in the terminal. This helps users understand their current location within the file system.",
    img: "",
  },
  {
    question: "What is the purpose of the echo command?",
    answer: "Prints text to the console",
    explanation:
      "The echo command is a Unix-based command that prints the specified text to the console. It is useful for displaying messages, variable values, or the contents of a file.",
    img: "",
  },
  {
    question: "What does the ls command do?",
    answer: "Lists the contents of a directory",
    explanation:
      "The ls (list) command is a Unix-based command that shows the contents of a directory. By default, it lists the files and folders in the current working directory, but it can also be used with specific directory paths or with various options for additional details.",
    img: "",
  },
  {
    question: "What does the single dot (.) represent in terminal commands?",
    answer: "Current directory",
    explanation:
      "In terminal commands, the single dot (.) represents the current directory. It is used as a shorthand when referencing the directory you are currently in, for example, when using commands like ls or cd.",
    img: "",
  },
  {
    question: "What does the cd command do?",
    answer: "Changes the current working directory",
    explanation:
      "The cd (change directory) command is used to navigate between directories in the terminal. By specifying a target directory, either by its name or an absolute path, the cd command allows users to change their current working directory.",
    img: "",
  },
  {
    question: "What does the mv command do?",
    answer: "Moves or renames files and directories",
    explanation:
      "The mv (move) command is used to move files or directories from one location to another, or to rename them. It takes two arguments: the source file or directory and the destination file or directory. It is useful for organizing files and directories within the file system.",
    img: "",
  },
  {
    question: "What is the purpose of the mkdir command?",
    answer: "Creates a new directory",
    explanation:
      "The mkdir (make directory) command is used to create a new directory with the specified name. This helps users organize their files by creating separate directories for different projects or categories.",
    img: "",
  },
  {
    question: "What does the rmdir command do?",
    answer: "Removes an empty directory",
    explanation:
      "The rmdir (remove directory) command is used to delete an empty directory. It takes one argument, which is the name of the directory you want to remove. Note that it can only remove directories that are empty; for directories containing files or other directories, you need to use the rm command with the -r (recursive) option.",
    img: "",
  },
  {
    question: "What is the purpose of the touch command?",
    answer: "Creates a new file or updates the timestamp of an existing file",
    explanation:
      "The touch command is used to create new, empty files or update the timestamp of existing files. When creating a new file, it takes the file name as an argument. If the file already exists, touch updates its last modified timestamp to the current time.",
    img: "",
  },
  {
    question: "What does the cp command do?",
    answer: "Copies files or directories from one location to another",
    explanation:
      "The cp (copy) command is used to duplicate files or directories from a source location to a destination location. It takes two arguments: the source file or directory and the destination file or directory. This is useful for creating backups or duplicating files for different purposes.",
    img: "",
  },
  {
    question: "What is the purpose of the whatis command?",
    answer: "Displays a brief one-line description of a Unix command",
    explanation:
      "The whatis command provides a quick and concise description of a Unix command. It takes one argument, which is the name of the command you want to look up. This is useful for getting a brief overview of a command without having to go through its entire manual page.",
    img: "",
  },
  {
    question: "What does the man command do?",
    answer: "Displays the manual page for a Unix command or system function",
    explanation:
      "The man (manual) command shows the manual page for a Unix command or system function, providing detailed documentation about its purpose, usage, options, and examples. This is useful for learning how to use a command correctly and efficiently, or for understanding the various options and parameters available.",
    img: "",
  },
  {
    question:
      "What does the single dot (.) refer to when used in a terminal command?",
    answer: "The directory you are currently in",
    explanation:
      'When you use the single dot (.) in a terminal command, it refers to the current directory. This allows for shorter and more convenient commands when referencing files or directories within the current directory, such as using "ls ." to list the contents of the current directory.',
    img: "",
  },
  {
    question: "What do the double dots (..) represent in a terminal command?",
    answer: "The parent directory of the current directory",
    explanation:
      "When you use the double dots (..) in a terminal command, it refers to the parent directory of the current directory, which is the directory one level up in the directory hierarchy. This is useful when you want to navigate up one level or perform operations on files or directories in the parent directory.",
    img: "",
  },
  {
    question:
      "How do you use the cd command to change the current working directory to the previous directory?",
    answer: "cd ..",
    explanation:
      'To change the current working directory to the previous directory, use the command "cd ..". The double dots (..) represent the parent directory of the current directory, and using the cd command with the double dots allows you to navigate up one level in the directory hierarchy.',
    img: "",
  },
  {
    question: "What does the rm command do?",
    answer: "Remove files or directories",
    explanation:
      "The rm command is a Unix-based command that is used to remove files or directories. It can be used with various options to remove single files, multiple files, empty directories, or directories with contents.",
    img: "",
  },
  {
    question:
      "How do you use the cp command to copy a directory and its contents to a different directory?",
    answer: "cp -r directory /path/to/directory",
    explanation:
      "To copy a directory and its contents to a different directory, use the cp command with the -r option followed by the source directory and the destination directory. The -r option tells the cp command to copy the files and directories recursively, which means it will copy the directory, its contents, and any subdirectories and their contents.",
    img: "",
  },
  {
    question: "What does the whatis command do?",
    answer: "Displays a brief one-line description of a Unix command",
    explanation:
      "The whatis command is a Unix-based command that displays a brief one-line description of a Unix command. It is helpful when you want to quickly understand the purpose of a command without referring to the full manual page.",
    img: "",
  },
  {
    question: "How do you display the manual page for a Unix command?",
    answer: "man command_name",
    explanation:
      'To display the manual page for a Unix command, use the "man" command followed by the name of the command you want to look up. The manual page provides detailed documentation about the command, including its purpose, usage, options, and examples.',
    img: "",
  },
  {
    question: "What does the touch command do?",
    answer: "Creates a new file or updates the timestamp of an existing file",
    explanation:
      "The touch command is a Unix-based command that is used to create a new file or update the timestamp of an existing file. When used with a file that does not exist, it creates the file; when used with an existing file, it updates the filetimestamp to the current time.",
    img: "",
  },
  {
    question: "How do you create a new directory using the mkdir command?",
    answer: "mkdir new_directory_name",
    explanation:
      'To create a new directory using the mkdir command, type "mkdir" followed by the name of the new directory you want to create. This will create the directory in the current working directory.',
    img: "",
  },
  {
    question: "How do you remove a file using the rm command?",
    answer: "rm file_name",
    explanation:
      'To remove a file using the rm command, type "rm" followed by the name of the file you want to remove. This will delete the specified file from the current working directory.',
    img: "",
  },
  {
    question:
      "How do you use the ls command to list the contents of a directory, including hidden files?",
    answer: "ls -a",
    explanation:
      "To list the contents of a directory, including hidden files, use the ls command with the -a option. The -a option tells the ls command to display all files and directories, including those that are hidden (whose names start with a dot).",
    img: "",
  },
  {
    question: "How do you create multiple new files using the touch command?",
    answer: "touch file1.txt file2.txt file3.txt",
    explanation:
      'To create multiple new files using the touch command, type "touch" followed by the names of the files you want to create, separated by spaces. This will create the specified files in the current working directory.',
    img: "",
  },

  {
    question:
      "How do you use the mv command to move a file to a different directory?",
    answer: "mv source_file /path/to/destination_directory",
    explanation:
      'To move a file to a different directory using the mv command, type "mv" followed by the source file and the destination directory. This will move the specified file from its current location to the specified directory.',
    img: "",
  },

  {
    question: 'What does the "." symbol represent in terminal commands?',
    answer: "Current directory",
    explanation:
      "In terminal commands, the single dot (.) symbol represents the current directory. When used in a command, it refers to the directory you are currently in.",
    img: "",
  },

  {
    question: 'What does the ".." symbol represent in terminal commands?',
    answer: "Parent directory",
    explanation:
      "In terminal commands, the two dots (..) symbol represents the parent directory of the current directory. When used in a command, it refers to the directory one level up in the directory hierarchy.",
    img: "",
  },

  {
    question:
      "How do you remove a directory and its contents using the rm command?",
    answer: "rm -r directory_name",
    explanation:
      'To remove a directory and its contents using the rm command, type "rm -r" followed by the name of the directory. The -r option tells the rm command to remove the directory and its contents recursively, which means it will delete the directory, its contents, and any subdirectories and their contents.',
    img: "",
  },

  {
    question: "What does the -l option do when used with the ls command?",
    answer: "Lists the contents of a directory in long format",
    explanation:
      "When used with the ls command, the -l option lists the contents of a directory in long format. This provides additional information about each file and directory, such as permissions, ownership, size, and modification date.",
    img: "",
  },

  {
    question:
      "How do you create a new file with content using the echo command?",
    answer: 'echo "file content" > file_name',
    explanation:
      'To create a new file with content using the echo command, type "echo" followed by the content you want to add, enclosed in quotes, then use the redirection operator ">" followed by the file name. This will create a new file with the specified content.',
    img: "",
  },
];

export default terminal;
