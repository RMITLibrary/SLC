var sections = ['Study skills', 'Reading', 'Writing', 'Critical thinking'];
var images = ['clock_animated.gif', 'graph_progress_animated.gif', 'mac_rmit_animated_v2.gif', 'mortarboard_animated.gif', 'typewriter_animated.gif'];
var data = [
  {
    'secNum': 0,
    'statement': 'My workload, including assignments, will be evenly spaced throughout the semester.',
    'answer': 'F',
    'feedback-F': 'The amount of work you need to do will probably vary through the semester. You will need to develop good time management skills to balance your study and personal life. Do this by setting goals and prioritise your time.',
    'feedback-T': 'Probably not. The amount of work you need to do may vary through the semester. You will need to develop good time management skills to balance your study and personal life. Do this by setting goals and prioritising your study. ',
    'feedback-N': 'The amount of work you need to do may vary through the semester. You will need to develop good time management skills to balance your study and personal life. Do this by setting goals and prioritising your study. ',
    'chosen': null,
    'image': './img/graphics/01_calendar_280x250.png'
  },
  {
    'secNum': 0,
    'statement': 'My teachers will tell me what I need to do all throughout the semester.',
    'answer': 'F',
    'feedback-F': 'Your teacher will guide you throughout your studies but you will need to take responsibility for your own learning. Independent learning is an important tertiary skill.',
    'feedback-T': 'Your teachers will guide you throughout your studies but you will need to take responsibility for your own learning. Independent learning is an important tertiary skill.',
    'feedback-N': 'Your teachers will guide you throughout your studies but you will need to take responsibility for your own learning. Independent learning is an important tertiary skill.',
    'chosen': null,
    'image': './img/graphics/02_progress_graph_265x270.gif'
  },
  {
    'secNum': 0,
    'statement': 'I have to do more than highlight the key points in the learning material.',
    'answer': 'F',
    'feedback-F': 'That technique may not be enough. Learn actively by writing down what you understand (from your  classes or readings) in your own words. If you can express the ideas yourself, you have understood them. ',
    'feedback-T': 'Highlighting may not be enough. Learn actively by writing down what you understand (from your classes or readings) in your own words. If you can express the ideas yourself, you have understood them. ',
    'feedback-N': 'Highlighting may not be enough. Learn actively by writing down what you understand (from your classes or readings) in your own words. If you can express the ideas yourself, you have understood them.',
    'chosen': null,
    'image': './img/graphics/03_highlighted_text_365x205.png'
  },
  {
    'secNum': 0,
    'statement': 'Taking notes in class should help me.',
    'answer': 'T',
    'feedback-F': 'You need to learn strategies for making effective notes. Focus on key concepts and ideas to guide your understanding of the course. Don\'t try to make notes on everything. ',
    'feedback-T': 'Correct. However, you need to learn strategies for making effective notes. Focus on key concepts and ideas to guide your understanding. Don\'t try to take notes on everything.',
    'feedback-N': 'You need to learn strategies for making effective notes. Focus on key concepts and ideas to guide your understanding. Don\'t try to take notes on everything. '
    'chosen': null,
    'image': './img/graphics/04_writing_book_375x245.png'
  },
  {
    'secNum': 0,
    'statement': 'Revision is not necessary until later in the semester.',
    'answer': 'F',
    'feedback-F': 'That\'s correct. Use active learning strategies such as mind mapping, forming study groups and revising your notes throughout the semester. ',
    'feedback-T': 'No, this is not enough. Use active learning strategies throughout the semester. Mind mapping, forming study groups and revising your notes are all good strategies. ',
    'feedback-N': 'This is not enough. Use active learning strategies throughout the semester. Mind mapping, forming study groups and revising your notes are all good strategies. ',
    'chosen': null,
    'image': './img/graphics/05_imac_335x290.gif'
  },
  {
    'secNum': 0,
    'statement': 'My RMIT classes will be similar to the ones I had in high school.',
    'answer': 'F',
    'feedback-F': 'There are many different types of classes at RMIT and they will probably be different from high school (e.g. lectures, tutorials, practicals, studios, etc.). ',
    'feedback-T': 'There are many different types of classes at RMIT and they will probably be different from high school (e.g. lectures, tutorials, practicals, studios, etc.). ',
    'feedback-N': 'There are many different types of classes at RMIT and they will probably be different from high school (e.g. lectures, tutorials, practicals, studios, etc.). ',
    'chosen': null,
    'image': './img/graphics/06_banner_405x200.png'
  },
  {
    'secNum': 0,
    'statement': 'There are RMIT support services to help me with my studies.',
    'answer': 'T',
    'feedback-F': 'RMIT has face-to-face and online support available to all students. Use these resources and services as soon as possible to maximise study success. ',
    'feedback-T': 'Correct. RMIT has face-to-face and online support services available to all students. Use these resources and services available to you as soon as possible to maximise study success. ',
    'feedback-N': 'RMIT has face-to-face and online support available to all students. Use these resources and services as soon as possible to maximise study success.',
    'chosen': null,
    'image': './img/graphics/07_infocorner_520x310.png'
  },
  {
    'secNum': 0,
    'statement': 'Attending classes is not so important because many teachers put the information online.',
    'answer': 'F',
    'feedback-F': 'It is usually very important to attend classes. You need to ask questions, join discussions and talk about important course content. This is also a great way to meet other students. ',
    'feedback-T': 'It is usually very important to attend classes. You need to ask questions, join discussions and talk about important course content. This is also a great way to interact and collaborate with other students. ',
    'feedback-N': 'It is usually very important to attend classes. You need to ask questions, join discussions and talk about important course content. This is also a great way to interact and collaborate with other students. ',
    'chosen': null,
    'image': './img/graphics/08_imac_335x290.gif'
  },
  {
    'secNum': 1,
    'statement': 'No one checks if you do the required readings, so it\'s not important to do them.',
    'answer': 'F',
    'feedback-F': 'It\'s a good idea to look at required readings before class. However, use efficient reading strategies to maximise your time. ',
    'feedback-T': 'Not true. It\'s a good idea to look at required readings before class. However, use efficient reading strategies to maximise your time. ',
    'feedback-N': 'It\'s a good idea to look at required readings before class. However, use efficient reading strategies to maximise your time. ',
    'chosen': null,
    'image': './img/graphics/09_bookcase_425x215.png'
  },
  {
    'secNum': 1,
    'statement': ' I\'ll need to read my learning material very carefully.',
    'answer': 'F',
    'feedback-F': 'It\'s important to get an overview of learning material first to assess whether you need to read in detail. Good readers at university use reading strategies such as surveying, skimming and scanning.',
    'feedback-T': 'It depends. Good readers use reading strategies such as surveying, skimming, and scanning to decide whether they need to read in detail.',
    'feedback-N': 'It depends. Good readers use reading strategies such as surveying, skimming, and scanning to decide whether they need to read in detail. ',
    'chosen': null,
    'image': './img/graphics/10_magnified_book_385x215.png'
  },
  {
    'secNum': 1,
    'statement': 'I need to read everything that is in my course reading list.',
    'answer': 'F',
    'feedback-F': 'Don\'t waste time by trying to read every \'recommended\' texts completely. Manage your reading load by only reading things that are relevant to a specific question or topic. ',
    'feedback-T': 'No - manage your reading load by only reading things that are relevant to the specific question or topic. Don\'t waste time by trying to read every \'recommended\' text.  ',
    'feedback-N': 'Manage your reading load by only reading things that are relevant to the specific question or topic. Don\'t waste time by trying to read every \'recommended\' text. ',
    'chosen': null,
    'image': './img/graphics/11_bookcase_425x215.png'
  },
  {
    'secNum': 2,
    'statement': 'Academic writing at RMIT is similar to the writing I did at high school.',
    'answer': 'F',
    'feedback-F': 'Correct. Writing at tertiary level requires a formal style and structure. You will learn different academic writing conventions throughout your program.',
    'feedback-T': 'Writing at tertiary level requires a formal style and structure. You will learn different academic writing conventions throughout your program.',
    'feedback-N': 'Writing at tertiary level requires a formal style and structure. You will learn different academic writing conventions throughout your program.',
    'chosen': null,
    'image': './img/graphics/12_mortarboard_and_typewriter_655x295.gif'
  },
  {
    'secNum': 2,
    'statement': 'I work well under pressure, so starting my assignment a few days before the deadline should be OK.',
    'answer': 'F',
    'feedback-F': 'Correct. You\'ll need time to analyse the question, research, draft, revise and proofread. Leaving it to the last minute is not a good idea.',
    'feedback-T': 'Wrong. You\'ll need time to analyse the question, research, draft, revise and proofread. Leaving it to the last minute is not a good idea.',
    'feedback-N': 'You\'ll need time to analyse the question, research, draft, revise and proofread. Leaving it to the last minute is not a good idea.',
    'chosen': null,
    'image': './img/graphics/13_clock_230x230.gif'
  },
  {
    'secNum': 2,
    'statement': 'I know how to write at tertiary level because I learnt how to write essays at school.',
    'answer': 'F', 
    'feedback-F': 'Correct. You may need to learn different types of writing for assessment tasks. Essays, reports, case studies, and reflections are some common tertiary writing tasks.',
    'feedback-T': 'You may need to learn different types of writing for assessment tasks. Essays, reports, case studies, and reflections are some common tertiary writing tasks.',
    'feedback-N': 'You may need to learn different types of writing for assessment tasks. Essays, reports, case studies, and reflections are some common tertiary writing tasks.',
    'chosen': null,
    'image': './img/graphics/14_writing_notes_375x245.png'
  },
  {
    'secNum': 2,
    'statement': 'If I use someone\'s ideas, data, or images in my written work, I need to say where they came from.',
    'answer': 'T',
    'feedback-F': 'You must acknowledge all your sources in academic writing. Citing correctly gives your work credibility and shows you\'ve done your research.',
    'feedback-T': 'Definitely. You must acknowledge all your sources in academic writing. Citing correctly gives your work credibility and shows you\'ve done your research.',
    'feedback-N': 'You must acknowledge all your sources in academic writing. Citing correctly gives your work credibility and shows you\'ve done your research.',
    'chosen': null,
    'image': './img/graphics/15_idea_sources_285x220.png'
  },
  {
    'secNum': 3,
    'statement': 'Asking questions in class is good.',
    'answer': 'T',
    'feedback-T': 'Correct. Asking questions is good and a great way to learn. There may be other students wondering the same thing.',
    'feedback-F': 'Asking questions is a great way to learn. There may be other students wondering the same thing.',
    'feedback-N': 'Asking questions is a great way to learn. There may be other students wondering the same thing.',
    'chosen': null,
    'image': './img/graphics/16_questions_435x255.gif'
  },
  {
    'secNum': 3,
    'statement': '\'Critical thinking\' means being critical of other people’s work or ideas.',
    'answer': 'F',
    'feedback-F': 'Correct. Thinking critically is about analysing and evaluating ideas to identify their usefulness and implications.',
    'feedback-T': 'Not quite. Thinking critically is about analysing and evaluating ideas to identify their usefulness and implications.',
    'feedback-N': 'Thinking critically is about analysing and evaluating ideas to identify their usefulness and implications.',
    'chosen': null,
    'image': './img/graphics/17_lightbulb_180x255.gif'
  },
  {
    'secNum': 3,
    'statement': 'If something is in a textbook or journal, I can use it.',
    'answer': 'F',
    'feedback-F': 'Correct. You need to check the publication, date, author and audience to decide the value of the information for your purpose.',
    'feedback-T': 'Not necessarily. You need to check the publication, date, author and audience to decide the value of the information for your purpose.',
    'feedback-N': 'Not necessarily. You need to check the publication, date, author and audience to decide the value of the information for your purpose.',
    'chosen': null,
    'image': './img/graphics/18_published_book_515_220.png'
  },
  {
    'secNum': 3,
    'statement': 'Lecturers and tutors are interested in my ideas and my ability to show I\'ve learned the material.',
    'answer': 'T',
    'feedback-F': 'Teaching staff use assessment to know that you understand a topic. You can show this by discussing and building on other researchers\' ideas to develop your own.',
    'feedback-T': 'Correct. Teaching staff use assessment to know that you understand a topic. You can show this by discussing and building on other researchers\' ideas to develop your own.',
    'feedback-N': 'Teaching staff use assessment to know that you understand a topic. You can show this by discussing and building on other researchers\' ideas to develop your own.',
    'chosen': null,
    'image': './img/graphics/19_magnifying_lightbulb_360x255.png'
  },
  {
    'secNum': 3,
    'statement': 'Critical thinking is relevant to my future career.',
    'answer': 'T',
    'feedback-F': 'Not quite. Critical thinking is highly prized by employers in all industries (along with problem-solving and communication skills).',
    'feedback-T': 'Correct. Critical thinking is highly prized by employers in all industries (along with problem-solving and communication skills).',
    'feedback-N': 'Critical thinking is highly prized by employers in all industries (along with problem-solving and communication skills).',
    'chosen': null,
    'image': './img/graphics/20_degree_equals_career_625x225.gif'
  },
  {
    'secNum': 3,
    'statement': '<h1 class="email-h1">You\'re Done</h1><p class="email-paragraph"> \
      You\'ve completed the self assessment quiz, you can now skip forward to your results. \</p>',
    'answer': '',
    'feedback-F': '',
    'feedback-T': '',
    'feedback-N': '',
    'chosen': null,
    'image': ''    
  }
];