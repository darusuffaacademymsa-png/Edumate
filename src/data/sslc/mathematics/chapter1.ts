export const chapter1 = {
  id: "sslc-math-1",
  title: "Arithmetic Sequences",
  description: "Introduction to arithmetic sequences, common difference, and nth term.",
  notes: "An arithmetic sequence is a sequence of numbers such that the difference between the consecutive terms is constant. For instance, the sequence 5, 7, 9, 11, 13, 15, . . . is an arithmetic progression with a common difference of 2.",
  videos: [
    {
      title: "Introduction to Arithmetic Sequences",
      url: "https://www.youtube.com/watch?v=example1"
    }
  ],
  quiz: [
    {
      question: "What is the common difference of the sequence 3, 7, 11, 15...?",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "The difference between consecutive terms is 7 - 3 = 4, 11 - 7 = 4, etc."
    },
    {
      question: "If the first term is 2 and the common difference is 3, what is the 5th term?",
      options: ["11", "14", "17", "20"],
      answer: "14",
      explanation: "The nth term is a + (n-1)d. So, 2 + (5-1)3 = 2 + 12 = 14."
    }
  ],
  practice: [
    {
      question: "Find the 10th term of the sequence 5, 10, 15, 20...",
      answer: "50"
    }
  ],
  labs: []
};
