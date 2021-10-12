/*jshint quotmark:double */
/*jshint -W109 */
var sections = ["Study Skills", "Reading", "Writing", "Critical Thinking"];
var images = ["clock_animated.gif", "graph_progress_animated.gif", "mac_rmit_animated_v2.gif", "mortarboard_animated.gif", "typewriter_animated.gif"];
var data = [
  {
    "secNum": "0",
    "statement": "My study load, including assignments, will be evenly spaced throughout the program.",
    "answer": "F",
    "feedback-F": "Correct. You will need to develop effective time management skills to juggle your study and personal commitments. Set goals and prioritise your time. ",
    "feedback-T": "Probably not. You will need to develop effective time management skills to juggle your study and personal commitments. Try setting goals and prioritising your time. ",
    "feedback-N": "Your study load may vary throughout the semester. You will need to develop effective time management skills to juggle your study and personal commitments. Try setting goals and prioritising your time.",
    "chosen": null,
    "image": "./img/graphics/01_calendar_280x250.png"
  },
  {
    "secNum": "0",
    "statement": "My lecturers and tutors will tell me what I need to do at all stages.",
    "answer": "F",
    "feedback-F": "Correct. Your teacher will guide you throughout your studies but you will need to take responsibility for your own learning. Independent learning is an important tertiary skill.",
    "feedback-T": "Your teacher will guide you throughout your studies but you will need to take responsibility for your own learning. Independent learning is an important tertiary skill.",
    "feedback-N": "Your teacher will guide you throughout your studies but you will need to take responsibility for your own learning. Independent learning is an important tertiary skill.",
    "chosen": null,
    "image": "./img/graphics/02_progress_graph_265x270.gif"
  },
  {
    "secNum": "0",
    "statement": "I have to do more than highlight the key points in the lecture notes.",
    "answer": "T",
    "feedback-F": "That technique may not be enough. Learn actively by writing down what you understand (from your lecture or readings) in your own words. If you can express the ideas yourself, you have understood them.",
    "feedback-T": "Correct. That technique may not be enough. Learn actively by writing down what you understand (from your lecture or readings) in your own words. If you can express the ideas yourself, you have understood them.",
    "feedback-N": "That technique may not be enough. Learn actively by writing down what you understand (from your lecture or readings) in your own words. If you can express the ideas yourself, you have understood them.",
    "chosen": null,
    "image": "./img/graphics/03_highlighted_text_365x205.png"
  },
  {
    "secNum": "0",
    "statement": "I need to note down <em>everything</em> that is said in classes.",
    "answer": "F",
    "feedback-F": "Correct. You need to learn strategies for making effective notes. Focus on key concepts and ideas to guide your understanding of the course rather than trying to remember everything.",
    "feedback-T": "You need to learn strategies for making effective notes. Focus on key concepts and ideas to guide your understanding of the course rather than trying to remember everything.",
    "feedback-N": "You need to learn strategies for making effective notes. Focus on key concepts and ideas to guide your understanding of the course rather than trying to remember everything.",
    "chosen": null,
    "image": "./img/graphics/04_writing_book_375x245.png"
  },
  {
    "secNum": "0",
    "statement": "Revision is not necessary until later in the semester.",
    "answer": "F",
    "feedback-F": "Correct. Use active learning strategies such as mind mapping, forming study groups and revising your notes throughout the semester.",
    "feedback-T": "No, this is not enough. Use active learning strategies such as mind mapping, forming study groups and revising your notes throughout the semester.",
    "feedback-N": "This is not enough. Use active learning strategies such as mind mapping, forming study groups and revising your notes throughout the semester.",
    "chosen": null,
    "image": "./img/graphics/05_imac_335x290.gif"
  },
  {
    "secNum": "0",
    "statement": "My classes will be similar to the ones I had in high school.",
    "answer": "F",
    "feedback-F": "Correct. There are many different types of classes at RMIT and they may be different from high school (e.g. lectures, tutorials, practicals, studios, etc.).",
    "feedback-T": "There are many different types of classes at RMIT and they may be different from high school (e.g. lectures, tutorials, practicals, studios, etc.).",
    "feedback-N": "There are many different types of classes at RMIT and they may be different from high school (e.g. lectures, tutorials, practicals, studios, etc.).",
    "chosen": null,
    "image": "./img/graphics/06_banner_405x200.png"
  },
  {
    "secNum": "0",
    "statement": "Academic support services are only available for RMIT students who are struggling with their studies.",
    "answer": "F",
    "feedback-F": "There is lots of face-to-face and online support available to all students. It is important to explore these resources and services early to maximise study success.",
    "feedback-T": "No. There is lots of face-to-face and online support available to all students. It is important to explore these resources and services early to maximise study success.",
    "feedback-N": "There is lots of face-to-face and online support available to all students. It is important to explore these resources and services early to maximise study success",
    "chosen": null,
    "image": "./img/graphics/07_infocorner_520x310.png"
  },
  {
    "secNum": "0",
    "statement": "Turning up to face-to-face classes is not really important; the information is available online.",
    "answer": "F",
    "feedback-F": "Correct. It is important to attend classes. You’ll have the opportunity to ask questions, join discussions and engage with the deeper and more important course content. Attending classes is also a great way to meet other students.",
    "feedback-T": "It is important to attend classes. You’ll have the opportunity to ask questions, join discussions and engage with the deeper and more important course content. Attending classes is also a great way to meet other students.",
    "feedback-N": "It is important to attend classes. You’ll have the opportunity to ask questions, join discussions and engage with the deeper and more important course content. Attending classes is also a great way to meet other students.",
    "chosen": null,
    "image": "./img/graphics/08_imac_335x290.gif"
  },
  {
    "secNum": "1",
    "statement": "No one checks if you do the readings, so it’s not important to do them.",
    "answer": "F",
    "feedback-F": "Correct. It’s a good idea to look at required readings before class. However, use efficient reading strategies to maximise your time.",
    "feedback-T": "Not true. It’s a good idea to look at required readings before class. However, use efficient reading strategies to maximise your time.",
    "feedback-N": "It’s a good idea to look at required readings before class. However, use efficient reading strategies to maximise your time.",
    "chosen": null,
    "image": "./img/graphics/09_bookcase_425x215.png"
  },
  {
    "secNum": "1",
    "statement": "I’ll need to read all of my university texts carefully and thoroughly to understand them.",
    "answer": "F",
    "feedback-F": "Correct. Being a good reader at university means using appropriate reading strategies such as surveying, skimming and scanning. It’s important to get an overview of a text first to assess whether you need to read in detail.",
    "feedback-T": "No. Being a good reader at university means using appropriate reading strategies such as surveying, skimming and scanning. It’s important to get an overview of a text first to assess whether you need to read in detail.",
    "feedback-N": "Being a good reader at university means using appropriate reading strategies such as surveying, skimming and scanning. It’s important to get an overview of a text first to assess whether you need to read in detail.",
    "chosen": null,
    "image": "./img/graphics/10_magnified_book_385x215.png"
  },
  {
    "secNum": "1",
    "statement": "I need to read everything that is in my course reading list.",
    "answer": "F",
    "feedback-F": "Correct. Don’t waste time by trying to read every 'recommended' texts completely. Manage your reading load by only reading things that are relevant to a specific question or topic.",
    "feedback-T": "No. Don’t waste time by trying to read every 'recommended' texts completely. Manage your reading load by only reading things that are relevant to a specific question or topic.",
    "feedback-N": "Don’t waste time by trying to read every 'recommended' texts completely. Manage your reading load by only reading things that are relevant to a specific question or topic.",
    "chosen": null,
    "image": "./img/graphics/11_bookcase_425x215.png"
  },
  {
    "secNum": "2",
    "statement": "Academic writing is very different from everyday writing.",
    "answer": "T",
    "feedback-F": "Writing at university requires a more formal style and structure than non-academic writing. You will learn different academic writing conventions throughout your course.",
    "feedback-T": "Correct. Writing at university requires a more formal style and structure than non-academic writing. You will learn different academic writing conventions throughout your course.",
    "feedback-N": "Writing at university requires a more formal style and structure than non-academic writing. You will learn different academic writing conventions throughout your course.",
    "chosen": null,
    "image": "./img/graphics/12_mortarboard_and_typewriter_655x295.gif"
  },
  {
    "secNum": "2",
    "statement": "I work well under pressure, so writing my assignment the day before the deadline will work for me.",
    "answer": "F",
    "feedback-F": "Correct, you’ll need plenty of time to analyse the question, research, draft, revise and proofread. Leaving it to the last minute is not a good idea.",
    "feedback-T": "Wrong. You’ll need plenty of time to analyse the question, research, draft, revise and proofread. Leaving it to the last minute is not a good idea.",
    "feedback-N": "You’ll need plenty of time to analyse the question, research, draft, revise and proofread. Leaving it to the last minute is not a good idea.",
    "chosen": null,
    "image": "./img/graphics/13_clock_230x230.gif"
  },
  {
    "secNum": "2",
    "statement": "I will have to write essays in all of my courses.",
    "answer": "F",
    "feedback-F": "Correct. You may need to learn to write many different types of assessment tasks, which may include essays. Reports, case studies, reflections and group assignments are some other common examples.",
    "feedback-T": "You may need to learn to write many different types of assessment tasks, which may include essays. Reports, case studies, reflections and group assignments are some other common examples.",
    "feedback-N": "You may need to learn to write many different types of assessment tasks, which may include essays. Reports, case studies, reflections and group assignments are some other common examples.",
    "chosen": null,
    "image": "./img/graphics/14_writing_notes_375x245.png"
  },
  {
    "secNum": "2",
    "statement": "I will need to acknowledge the ideas I have formed from my readings in my assignments.",
    "answer": "T",
    "feedback-F": "You will need to acknowledge all your sources. This gives you credibility and shows you’ve done your research. If you don’t, you risk losing marks and being accused of plagiarism.",
    "feedback-T": "Definitely. Acknowledging your sources gives you credibility and shows you’ve done your research. If you don’t, you risk losing marks and being accused of plagiarism.",
    "feedback-N": "You will need to acknowledge all your sources. This gives you credibility and shows you’ve done your research. If you don’t, you risk losing marks and being accused of plagiarism.",
    "chosen": null,
    "image": "./img/graphics/15_idea_sources_285x220.png"
  },
  {
    "secNum": "3",
    "statement": "Asking questions in class is good.",
    "answer": "T",
    "feedback-T": "Absolutely. Asking questions is a great way to learn. Whatever you want to ask, there are probably many other students wondering the same thing.",
    "feedback-F": "Asking questions is good and a great way to learn. Whatever you want to ask, there are probably many other students wondering the same thing.",
    "feedback-N": "Asking questions is a great way to learn. Whatever you want to ask, there are probably many other students wondering the same thing.",
    "chosen": null,
    "image": "./img/graphics/16_questions_435x255.gif"
  },
  {
    "secNum": "3",
    "statement": "‘Critical thinking’ means finding problems in people’s ideas.",
    "answer": "F",
    "feedback-F": "Correct. Thinking critically is about analysing an idea to identify strengths as well as weaknesses in a thoughtful, balanced and informed way.",
    "feedback-T": "No, critical thinking is about analysing an idea to identify strengths as well as weaknesses in a thoughtful, balanced and informed way.",
    "feedback-N": "Thinking critically is not just about finding problems in people’s ideas. It is about analysing an idea to identify strengths as well as weaknesses in a thoughtful, balanced and informed way.",
    "chosen": null,
    "image": "./img/graphics/17_lightbulb_180x255.gif"
  },
  {
    "secNum": "3",
    "statement": "If something is published in a text book or journal, it must be correct.",
    "answer": "F",
    "feedback-F": "Yes, many published ideas are just that — ideas. As such, they are open to review and critique. Not only is it OK to question published ideas, you are expected to.",
    "feedback-T": "Not necessarily. Many published ideas are just that — ideas. As such, they are open to review and critique. Not only is it OK to question published ideas, you are expected to.",
    "feedback-N": "Not necessarily. Many published ideas are just that — ideas. As such, they are open to review and critique. Not only is it OK to question published ideas, you are expected to.",
    "chosen": null,
    "image": "./img/graphics/18_published_book_515_220.png"
  },
  {
    "secNum": "3",
    "statement": "Lecturers and tutors are only interested in my ability to show I’ve learned the material. They are not interested in my ideas.",
    "answer": "F",
    "feedback-F": "Correct. Teaching staff want to know that you understand a topic. You can show this by discussing and building on other people’s ideas to develop your own.",
    "feedback-T": "Teaching staff are interested in your ideas. They want to know that you understand a topic by discussing and building on other people’s ideas to develop your own.",
    "feedback-N": "Teaching staff are interested in your ideas. They want to know that you understand a topic by discussing and building on other people’s ideas to develop your own.",
    "chosen": null,
    "image": "./img/graphics/19_magnifying_lightbulb_360x255.png"
  },
  {
    "secNum": "3",
    "statement": "Critical thinking is an important academic skill but is not so relevant to my future employment.",
    "answer": "F",
    "feedback-F": "Correct. Critical thinking, along with problem-solving and communication skills, is highly prized by employers in all industries.",
    "feedback-T": "Wrong. Critical thinking, along with problem-solving and communication skills, is highly prized by employers in all industries.",
    "feedback-N": "Critical thinking, along with problem-solving and communication skills, is highly prized by employers in all industries.",
    "chosen": null,
    "image": "./img/graphics/20_degree_equals_career_625x225.gif"
  }
];