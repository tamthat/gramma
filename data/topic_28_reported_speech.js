const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "She said that she ___ very tired.",
        "correct_answer": "was",
        "suggest_answer": "was",
        "explanation": "Reported Statement: change present to past (Tường thuật câu kể)",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "He asked if she ___ coming to the party.",
        "correct_answer": "was",
        "suggest_answer": "was",
        "explanation": "Reported Question: change present to past (Tường thuật câu hỏi)",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "She told me to ___ the door.",
        "correct_answer": "close",
        "suggest_answer": "close",
        "explanation": "Reported Command: use tell + object + infinitive (Tường thuật câu mệnh lệnh)",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "The doctor advised him to ___ smoking.",
        "correct_answer": "quit",
        "suggest_answer": "quit",
        "explanation": "Reported Advice: use advise + object + infinitive (Tường thuật lời khuyên)",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "She said, 'I am happy.' → She said that she ___ happy.",
        "correct_answer": "was",
        "suggest_answer": "was",
        "explanation": "Reported Statement: present 'am' becomes past 'was'",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "He asked, 'Do you like coffee?' → He asked if I ___ coffee.",
        "correct_answer": "liked",
        "suggest_answer": "liked",
        "explanation": "Reported Yes/No Question: use 'if/whether', change tense",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "She said, 'Close the window!' → She told me to ___ the window.",
        "correct_answer": "close",
        "suggest_answer": "close",
        "explanation": "Reported Imperative: use tell/ask + infinitive",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "The teacher advised, 'Study hard.' → The teacher advised ___ to study hard.",
        "correct_answer": "me/us/the students",
        "suggest_answer": "me/us/the students",
        "explanation": "Reported Advice: use advise + object + infinitive",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "She said, 'I have finished.' → She said that she ___ finished.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Reported Statement: present perfect 'have' becomes past perfect 'had'",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "He asked, 'Where are you going?' → He asked where I ___ going.",
        "correct_answer": "was",
        "suggest_answer": "was",
        "explanation": "Reported Wh-Question: use wh-word, change tense",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "They said, 'We will come tomorrow.' → They said that they ___ come the next day.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Reported Statement: future 'will' becomes 'would'",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "She told him, 'Don't be late!' → She told him not to be ___.",
        "correct_answer": "late",
        "suggest_answer": "late",
        "explanation": "Reported Negative Command",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "The coach recommended, 'Eat healthy.' → The coach recommended ___ healthy.",
        "correct_answer": "eating",
        "suggest_answer": "eating",
        "explanation": "Reported Advice: can use recommend + gerund or recommend + infinitive",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "He said, 'Can you help me?' → He asked if I ___ help him.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Reported Question: 'can' becomes 'could'",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "She said, 'I was working.' → She said that she ___ working.",
        "correct_answer": "had been",
        "suggest_answer": "had been",
        "explanation": "Reported Statement: past continuous becomes past perfect continuous",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "They asked, 'What did you do?' → They asked what I ___.",
        "correct_answer": "had done",
        "suggest_answer": "had done",
        "explanation": "Reported Wh-Question: past simple becomes past perfect",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "She told me, 'Help your sister!' → She told me to ___ my sister.",
        "correct_answer": "help",
        "suggest_answer": "help",
        "explanation": "Reported Command",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "The doctor suggested, 'Take rest.' → The doctor suggested ___ rest.",
        "correct_answer": "taking",
        "suggest_answer": "taking",
        "explanation": "Reported Advice/Suggestion: use suggest + gerund",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "He said, 'I may come.' → He said that he ___ come.",
        "correct_answer": "might",
        "suggest_answer": "might",
        "explanation": "Reported Statement: 'may' becomes 'might'",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "She asked, 'Are you ready?' → She asked if I ___.",
        "correct_answer": "was ready",
        "suggest_answer": "was ready",
        "explanation": "Reported Yes/No Question",
        "difficulty": "Easy",
        "topic_id": 28
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "He said, 'I should do this.' → He said that he ___ do that.",
        "correct_answer": "should",
        "suggest_answer": "should",
        "explanation": "Reported Statement: 'should' remains unchanged",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "They said, 'We have been studying.' → They said that they ___ been studying.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Reported Statement: present perfect continuous becomes past perfect continuous",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "She asked, 'Who called you?' → She asked who ___ called me.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Reported Wh-Question: tense shift and word order change",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "The manager told employees, 'Finish this project today!' → The manager told employees to finish that project ___.",
        "correct_answer": "that day",
        "suggest_answer": "that day",
        "explanation": "Reported Command: time expression changes (today → that day)",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "He advised, 'You should exercise regularly.' → He advised me to ___ regularly.",
        "correct_answer": "exercise",
        "suggest_answer": "exercise",
        "explanation": "Reported Advice",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "She said, 'I must leave now.' → She said that she ___ leave then.",
        "correct_answer": "had to",
        "suggest_answer": "had to",
        "explanation": "Reported Statement: 'must' becomes 'had to'",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "They asked, 'Why didn't you call?' → They asked why I ___ call.",
        "correct_answer": "hadn't",
        "suggest_answer": "hadn't",
        "explanation": "Reported Wh-Question: past simple becomes past perfect",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "She told him, 'You should visit your parents.' → She told him that he ___ visit his parents.",
        "correct_answer": "should",
        "suggest_answer": "should",
        "explanation": "Reported Statement/Advice: 'should' remains in reported speech",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The teacher asked, 'Did you do your homework?' → The teacher asked if I ___ my homework.",
        "correct_answer": "had done",
        "suggest_answer": "had done",
        "explanation": "Reported Yes/No Question: past simple becomes past perfect",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "He recommended, 'Read this book.' → He recommended ___ that book.",
        "correct_answer": "reading",
        "suggest_answer": "reading",
        "explanation": "Reported Advice/Recommendation: use recommend + gerund",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "She said, 'I would help if I could.' → She said that she ___ help if she could.",
        "correct_answer": "would",
        "suggest_answer": "would",
        "explanation": "Reported Statement with conditional",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "They asked, 'Which option do you prefer?' → They asked which option I ___.",
        "correct_answer": "preferred",
        "suggest_answer": "preferred",
        "explanation": "Reported Wh-Question: tense changes and word order changes",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "He instructed, 'Turn left at the corner.' → He instructed me to turn left ___ the corner.",
        "correct_answer": "at",
        "suggest_answer": "at",
        "explanation": "Reported Instruction/Command",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "She suggested, 'Let's go to the cinema.' → She suggested ___ to the cinema.",
        "correct_answer": "going",
        "suggest_answer": "going",
        "explanation": "Reported Suggestion: use suggest + gerund",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "He said, 'I am not interested in sports.' → He said that he ___ interested in sports.",
        "correct_answer": "was not/wasn't",
        "suggest_answer": "was not/wasn't",
        "explanation": "Reported Negative Statement",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "The officer ordered, 'Stand up!' → The officer ordered the soldier to ___.",
        "correct_answer": "stand up",
        "suggest_answer": "stand up",
        "explanation": "Reported Imperative/Order",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "She said, 'I could swim well.' → She said that she ___ swim well.",
        "correct_answer": "could",
        "suggest_answer": "could",
        "explanation": "Reported Statement: 'could' remains unchanged",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "They asked, 'When will you arrive?' → They asked when I ___.",
        "correct_answer": "would arrive",
        "suggest_answer": "would arrive",
        "explanation": "Reported Wh-Question: 'will' becomes 'would'",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "The mentor advised, 'Focus on your goals.' → The mentor advised ___ on your goals.",
        "correct_answer": "focusing",
        "suggest_answer": "focusing",
        "explanation": "Reported Advice: use advise + gerund or infinitive",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "She said, 'I haven't seen him.' → She said that she ___ seen him.",
        "correct_answer": "hadn't",
        "suggest_answer": "hadn't",
        "explanation": "Reported Statement: present perfect becomes past perfect",
        "difficulty": "Medium",
        "topic_id": 28
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "He said, 'I have lived here for ten years.' → He said that he ___ lived there for ten years.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Reported Statement with time duration",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "She asked, 'Don't you think this is wrong?' → She asked if I ___ think that was wrong.",
        "correct_answer": "didn't",
        "suggest_answer": "didn't",
        "explanation": "Reported Negative Question with tag question structure",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "The principal instructed, 'All students must attend assembly.' → The principal instructed that all students ___ attend assembly.",
        "correct_answer": "must",
        "suggest_answer": "must",
        "explanation": "Reported Instruction: modality preservation",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "He urged, 'You must complete this task immediately.' → He urged me to ___ that task immediately.",
        "correct_answer": "complete",
        "suggest_answer": "complete",
        "explanation": "Reported Urging/Strong Advice",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "She said, 'If I were you, I would accept the offer.' → She said that if she ___ me, she would accept the offer.",
        "correct_answer": "were",
        "suggest_answer": "were",
        "explanation": "Reported Conditional Statement",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "They asked, 'How long have you been working here?' → They asked how long I ___ working there.",
        "correct_answer": "had been",
        "suggest_answer": "had been",
        "explanation": "Reported Wh-Question with present perfect continuous",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "The coordinator warned, 'Be careful with this equipment.' → The coordinator warned us to be careful ___ that equipment.",
        "correct_answer": "with",
        "suggest_answer": "with",
        "explanation": "Reported Warning",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "She insisted, 'You should tell the truth.' → She insisted that I ___ tell the truth.",
        "correct_answer": "should",
        "suggest_answer": "should",
        "explanation": "Reported Insistence: use insist + that + should",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "He said, 'I wish I had studied harder.' → He said that he wished he ___ studied harder.",
        "correct_answer": "had",
        "suggest_answer": "had",
        "explanation": "Reported Wish: tenses shift further back",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "They demanded, 'Explain your actions!' → They demanded that he ___ his actions.",
        "correct_answer": "explain",
        "suggest_answer": "explain",
        "explanation": "Reported Demand: use demand + that + base verb (formal)",
        "difficulty": "Hard",
        "topic_id": 28
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct reported statement?",
        "correct_answer": "She said that she was tired.",
        "difficulty": "Easy",
        "explanation": "Reported Statement: present 'is' becomes past 'was'",
        "options": [
            {
                "id": 511,
                "option_text": "She said that she was tired.",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "She said that she is tired.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "She said that she will be tired.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "She said that she has been tired.",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 28
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct reported yes/no question?",
        "correct_answer": "He asked if she was coming.",
        "difficulty": "Easy",
        "explanation": "Reported Yes/No Question: use 'if/whether', change tense",
        "options": [
            {
                "id": 521,
                "option_text": "He asked if she was coming.",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "He asked if she is coming.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "He asked is she coming.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "He asked does she come.",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 28
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct reported command?",
        "correct_answer": "She told me to close the door.",
        "difficulty": "Easy",
        "explanation": "Reported Command: use tell + object + infinitive",
        "options": [
            {
                "id": 531,
                "option_text": "She told me to close the door.",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "She told me that close the door.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "She said me to close the door.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "She told to close the door.",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 28
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct reported advice?",
        "correct_answer": "The doctor advised him to quit smoking.",
        "difficulty": "Easy",
        "explanation": "Reported Advice: use advise + object + infinitive",
        "options": [
            {
                "id": 541,
                "option_text": "The doctor advised him to quit smoking.",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "The doctor advised that he quit smoking.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "The doctor said to quit smoking.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "The doctor told him quitting smoking.",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 28
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "Which is the correct reported wh-question?",
        "correct_answer": "He asked where she was going.",
        "difficulty": "Easy",
        "explanation": "Reported Wh-Question: use wh-word, change tense, change word order",
        "options": [
            {
                "id": 551,
                "option_text": "He asked where she was going.",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "He asked where was she going.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "He asked where she is going.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "He asked that where she was going.",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 28
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct tense shift: 'I will come.' →",
        "correct_answer": "She said that she would come.",
        "difficulty": "Easy",
        "explanation": "Future 'will' becomes 'would' in reported speech",
        "options": [
            {
                "id": 561,
                "option_text": "She said that she would come.",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "She said that she will come.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "She said that she comes.",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "She said that she came.",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 28
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct tense shift: 'I have finished.' →",
        "correct_answer": "He said that he had finished.",
        "difficulty": "Easy",
        "explanation": "Present perfect becomes past perfect",
        "options": [
            {
                "id": 571,
                "option_text": "He said that he had finished.",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "He said that he has finished.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "He said that he finished.",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "He said that he will finish.",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 28
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported negative command:",
        "correct_answer": "She told him not to be late.",
        "difficulty": "Easy",
        "explanation": "Reported Negative Command: tell + object + not + infinitive",
        "options": [
            {
                "id": 581,
                "option_text": "She told him not to be late.",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "She told him to not be late.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "She told him don't be late.",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "She told him to be not late.",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 28
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported suggestion:",
        "correct_answer": "He suggested going to the cinema.",
        "difficulty": "Easy",
        "explanation": "Reported Suggestion: use suggest + gerund",
        "options": [
            {
                "id": 591,
                "option_text": "He suggested going to the cinema.",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "He suggested to go to the cinema.",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "He suggested that to go to the cinema.",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "He suggested that we go to the cinema.",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 28
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct modal verb shift: 'I can do this.' →",
        "correct_answer": "She said that she could do that.",
        "difficulty": "Easy",
        "explanation": "Modal 'can' becomes 'could' in reported speech",
        "options": [
            {
                "id": 601,
                "option_text": "She said that she could do that.",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "She said that she can do that.",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "She said that she will do that.",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "She said that she may do that.",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 28
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported statement with time change:",
        "correct_answer": "She said that she would come tomorrow → that day.",
        "difficulty": "Medium",
        "explanation": "Reported Speech: time expressions change (tomorrow → that day/the next day)",
        "options": [
            {
                "id": 611,
                "option_text": "She said that she would come tomorrow → that day.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "She said that she would come today → that day.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "She said that she would come tomorrow → tomorrow.",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "She said that she would come tomorrow → yesterday.",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 28
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported statement with pronoun change:",
        "correct_answer": "He said that he would help me.",
        "difficulty": "Medium",
        "explanation": "Reported Speech: pronouns change ('I' → 'he'; 'you' → 'me')",
        "options": [
            {
                "id": 621,
                "option_text": "He said that he would help me.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "He said that I would help you.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "He said that you would help me.",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "He said that he would help him.",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 28
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported question with had/has shift:",
        "correct_answer": "They asked if I had seen the movie.",
        "difficulty": "Medium",
        "explanation": "Reported Question: present perfect 'have' becomes 'had'",
        "options": [
            {
                "id": 631,
                "option_text": "They asked if I had seen the movie.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "They asked if I have seen the movie.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "They asked if I saw the movie.",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "They asked if I will see the movie.",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 28
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported command with 'tell':",
        "correct_answer": "He told them to wait outside.",
        "difficulty": "Medium",
        "explanation": "Reported Command: tell + object + infinitive",
        "options": [
            {
                "id": 641,
                "option_text": "He told them to wait outside.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "He told them waiting outside.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "He said them to wait outside.",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "He told that they wait outside.",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 28
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported advice with 'advise':",
        "correct_answer": "The nutritionist advised eating healthy food.",
        "difficulty": "Medium",
        "explanation": "Reported Advice: advise + object + infinitive or advise + gerund",
        "options": [
            {
                "id": 651,
                "option_text": "The nutritionist advised eating healthy food.",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "The nutritionist advised to eat healthy food.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "The nutritionist said eating healthy food.",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "The nutritionist advised that eat healthy food.",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 28
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct may/might shift:",
        "correct_answer": "She said that she might come.",
        "difficulty": "Medium",
        "explanation": "Modal 'may' becomes 'might' in reported speech",
        "options": [
            {
                "id": 661,
                "option_text": "She said that she might come.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "She said that she may come.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "She said that she could come.",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "She said that she will come.",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 28
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported question with 'why':",
        "correct_answer": "She asked why I was late.",
        "difficulty": "Medium",
        "explanation": "Reported Wh-Question: change tense and word order",
        "options": [
            {
                "id": 671,
                "option_text": "She asked why I was late.",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "She asked why was I late.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "She asked why I am late.",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "She asked that why I was late.",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 28
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported statement with 'must':",
        "correct_answer": "He said that he had to leave.",
        "difficulty": "Medium",
        "explanation": "Modal 'must' becomes 'had to' in reported speech",
        "options": [
            {
                "id": 681,
                "option_text": "He said that he had to leave.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "He said that he must leave.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "He said that he should leave.",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "He said that he would leave.",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 28
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported suggestion with 'suggest':",
        "correct_answer": "She suggested that we try the new restaurant.",
        "difficulty": "Medium",
        "explanation": "Reported Suggestion: suggest + that + subject verb (formal) or suggest + gerund",
        "options": [
            {
                "id": 691,
                "option_text": "She suggested that we try the new restaurant.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "She suggested that we should try the new restaurant.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "She suggested us to try the new restaurant.",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "She suggested that we tried the new restaurant.",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 28
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported negative question:",
        "correct_answer": "He asked if she didn't like coffee.",
        "difficulty": "Medium",
        "explanation": "Reported Negative Question: change tense, maintain negation",
        "options": [
            {
                "id": 701,
                "option_text": "He asked if she didn't like coffee.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "He asked if she doesn't like coffee.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "He asked if she won't like coffee.",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "He asked if she not like coffee.",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 28
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported statement with present perfect continuous:",
        "correct_answer": "They said that they had been working for hours.",
        "difficulty": "Hard",
        "explanation": "Reported Statement: present perfect continuous → past perfect continuous",
        "options": [
            {
                "id": 711,
                "option_text": "They said that they had been working for hours.",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "They said that they have been working for hours.",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "They said that they were working for hours.",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "They said that they had worked for hours.",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 28
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported question with past perfect:",
        "correct_answer": "They asked what I had been doing.",
        "difficulty": "Hard",
        "explanation": "Reported Wh-Question: shift tenses accordingly",
        "options": [
            {
                "id": 721,
                "option_text": "They asked what I had been doing.",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "They asked what I am doing.",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "They asked what was I doing.",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "They asked that what I had been doing.",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 28
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported command with 'ask':",
        "correct_answer": "He asked me to be quiet.",
        "difficulty": "Hard",
        "explanation": "Reported Polite Command: ask + object + infinitive",
        "options": [
            {
                "id": 731,
                "option_text": "He asked me to be quiet.",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "He told me to be quiet.",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "He asked that I be quiet.",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "He asked me being quiet.",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 28
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported urging/insistence:",
        "correct_answer": "She insisted that I should accept the offer.",
        "difficulty": "Hard",
        "explanation": "Reported Insistence: insist + that + should",
        "options": [
            {
                "id": 741,
                "option_text": "She insisted that I should accept the offer.",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "She insisted that I accept the offer.",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "She insisted me to accept the offer.",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "She insisted accepting the offer.",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 28
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported conditional statement:",
        "correct_answer": "She said if she had time, she would help.",
        "difficulty": "Hard",
        "explanation": "Reported Conditional: maintain conditional structure",
        "options": [
            {
                "id": 751,
                "option_text": "She said if she had time, she would help.",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "She said if she has time, she will help.",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "She said that she would help if she has time.",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "She said she had time and would help.",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 28
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported question with 'how many':",
        "correct_answer": "They asked how many books I had read.",
        "difficulty": "Hard",
        "explanation": "Reported Wh-Question: maintain wh-phrase, change tense",
        "options": [
            {
                "id": 761,
                "option_text": "They asked how many books I had read.",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "They asked how many books did I read.",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "They asked how many books I read.",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "They asked that how many books I had read.",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 28
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported warning:",
        "correct_answer": "The guard warned us not to touch anything.",
        "difficulty": "Hard",
        "explanation": "Reported Warning: warn + object + not + infinitive",
        "options": [
            {
                "id": 771,
                "option_text": "The guard warned us not to touch anything.",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "The guard warned us to not touch anything.",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "The guard told us not touching anything.",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "The guard warned that don't touch anything.",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 28
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported 'wish':",
        "correct_answer": "He said that he wished he had studied.",
        "difficulty": "Hard",
        "explanation": "Reported Wish: wish → wished; further tense shift",
        "options": [
            {
                "id": 781,
                "option_text": "He said that he wished he had studied.",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "He said that he wishes he had studied.",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "He said that he wishes he studied.",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "He said that he wished he studied.",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 28
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported demand/requirement:",
        "correct_answer": "They demanded that he submit the report.",
        "difficulty": "Hard",
        "explanation": "Reported Demand: demand + that + base verb (formal subjunctive)",
        "options": [
            {
                "id": 791,
                "option_text": "They demanded that he submit the report.",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "They demanded that he submits the report.",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "They demanded him to submit the report.",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "They demanded him submitting the report.",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 28
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "Select the correct reported 'recommend':",
        "correct_answer": "The reviewer recommended reading that book.",
        "difficulty": "Hard",
        "explanation": "Reported Recommendation: recommend + gerund or recommend + that",
        "options": [
            {
                "id": 801,
                "option_text": "The reviewer recommended reading that book.",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "The reviewer recommended to read that book.",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "The reviewer recommended that read that book.",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "The reviewer recommended read that book.",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 28
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct 'said that' with present simple:",
        "correct_answer": "She said that she studies engineering.",
        "difficulty": "Hard",
        "explanation": "Note: Present simple can remain if expressing general truth",
        "options": [
            {
                "id": 811,
                "option_text": "She said that she studies engineering.",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "She said that she studied engineering.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "She said that she is studying engineering.",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "She said that she was studying engineering.",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 28
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported statement with 'would' shift:",
        "correct_answer": "He said that he would do it.",
        "difficulty": "Hard",
        "explanation": "Reported Statement: maintain 'would' when expressing willingness",
        "options": [
            {
                "id": 821,
                "option_text": "He said that he would do it.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "He said that he will do it.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "He said that he will have done it.",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "He said that he had done it.",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 28
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported question with 'whether':",
        "correct_answer": "She asked whether I would attend.",
        "difficulty": "Hard",
        "explanation": "Reported Question: 'whether' is alternative to 'if'",
        "options": [
            {
                "id": 831,
                "option_text": "She asked whether I would attend.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "She asked whether I will attend.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "She asked whether will I attend.",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "She asked that whether I would attend.",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 28
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported offer/invitation:",
        "correct_answer": "He offered to help me.",
        "difficulty": "Hard",
        "explanation": "Reported Offer: offer + infinitive",
        "options": [
            {
                "id": 841,
                "option_text": "He offered to help me.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "He offered helping me.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "He offered me to help.",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "He offered that help me.",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 28
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported question with time shift:",
        "correct_answer": "He asked if I would come tomorrow → that day.",
        "difficulty": "Hard",
        "explanation": "Reported Question: change both tense and time expression",
        "options": [
            {
                "id": 851,
                "option_text": "He asked if I would come tomorrow → that day.",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "He asked if I would come tomorrow → tomorrow.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "He asked if I will come tomorrow → that day.",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "He asked if I came tomorrow → that day.",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 28
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported permission:",
        "correct_answer": "He allowed me to use his car.",
        "difficulty": "Hard",
        "explanation": "Reported Permission: allow + object + infinitive",
        "options": [
            {
                "id": 861,
                "option_text": "He allowed me to use his car.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "He allowed using his car.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "He told me to use his car.",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "He allowed that use his car.",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 28
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported accusation:",
        "correct_answer": "She accused him of stealing the money.",
        "difficulty": "Hard",
        "explanation": "Reported Accusation: accuse + of + gerund",
        "options": [
            {
                "id": 871,
                "option_text": "She accused him of stealing the money.",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "She accused him to steal the money.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "She accused him to stole the money.",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "She accused that he steal the money.",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 28
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported apology:",
        "correct_answer": "He apologized for being late.",
        "difficulty": "Hard",
        "explanation": "Reported Apology: apologize + for + gerund",
        "options": [
            {
                "id": 881,
                "option_text": "He apologized for being late.",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "He apologized to be late.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "He apologized that being late.",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "He apologized was late.",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 28
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported promise:",
        "correct_answer": "He promised to return the book tomorrow.",
        "difficulty": "Hard",
        "explanation": "Reported Promise: promise + infinitive",
        "options": [
            {
                "id": 891,
                "option_text": "He promised to return the book tomorrow.",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "He promised returning the book tomorrow.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "He promised that return the book tomorrow.",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "He promised will return the book tomorrow.",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 28
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported complaint:",
        "correct_answer": "She complained about the slow service.",
        "difficulty": "Hard",
        "explanation": "Reported Complaint: complain + about + noun/gerund",
        "options": [
            {
                "id": 901,
                "option_text": "She complained about the slow service.",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "She complained to the slow service.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "She complained the slow service.",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "She complained for the slow service.",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 28
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported inquiry/request for information:",
        "correct_answer": "She inquired whether the position was still available.",
        "difficulty": "Hard",
        "explanation": "Reported Inquiry: inquire + if/whether + past tense",
        "options": [
            {
                "id": 911,
                "option_text": "She inquired whether the position was still available.",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "She inquired whether the position is still available.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "She inquired that the position was still available.",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "She inquired if the position will be still available.",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 28
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported disagreement:",
        "correct_answer": "He disagreed with my proposal.",
        "difficulty": "Hard",
        "explanation": "Reported Disagreement: disagree + with + noun",
        "options": [
            {
                "id": 921,
                "option_text": "He disagreed with my proposal.",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "He disagreed to my proposal.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "He disagreed my proposal.",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "He disagreed for my proposal.",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 28
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported congratulation:",
        "correct_answer": "He congratulated her on winning the award.",
        "difficulty": "Hard",
        "explanation": "Reported Congratulation: congratulate + on + noun/gerund",
        "options": [
            {
                "id": 931,
                "option_text": "He congratulated her on winning the award.",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "He congratulated her for winning the award.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "He congratulated her to winning the award.",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "He congratulated that she won the award.",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 28
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported refusal:",
        "correct_answer": "He refused to sign the contract.",
        "difficulty": "Hard",
        "explanation": "Reported Refusal: refuse + infinitive",
        "options": [
            {
                "id": 941,
                "option_text": "He refused to sign the contract.",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "He refused signing the contract.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "He refused that sign the contract.",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "He refused for signing the contract.",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 28
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported agreement:",
        "correct_answer": "She agreed to help me with the project.",
        "difficulty": "Hard",
        "explanation": "Reported Agreement: agree + infinitive or agree + on/with",
        "options": [
            {
                "id": 951,
                "option_text": "She agreed to help me with the project.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "She agreed helping me with the project.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "She agreed that help me with the project.",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "She agreed with helping me with the project.",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 28
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported denial:",
        "correct_answer": "He denied stealing the money.",
        "difficulty": "Hard",
        "explanation": "Reported Denial: deny + gerund",
        "options": [
            {
                "id": 961,
                "option_text": "He denied stealing the money.",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "He denied to steal the money.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "He denied that stole the money.",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "He denied stole the money.",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 28
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported consent:",
        "correct_answer": "She consented to the terms.",
        "difficulty": "Hard",
        "explanation": "Reported Consent: consent + to + noun/gerund",
        "options": [
            {
                "id": 971,
                "option_text": "She consented to the terms.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "She consented the terms.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "She consented for the terms.",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "She consented that the terms.",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 28
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported plea/request:",
        "correct_answer": "He pleaded with her to forgive him.",
        "difficulty": "Hard",
        "explanation": "Reported Plea: plead + with + infinitive",
        "options": [
            {
                "id": 981,
                "option_text": "He pleaded with her to forgive him.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "He pleaded her to forgive him.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "He pleaded forgiving her.",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "He pleaded that forgive him.",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 28
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported acknowledgment:",
        "correct_answer": "She acknowledged making a mistake.",
        "difficulty": "Hard",
        "explanation": "Reported Acknowledgment: acknowledge + gerund",
        "options": [
            {
                "id": 991,
                "option_text": "She acknowledged making a mistake.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "She acknowledged to make a mistake.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "She acknowledged that made a mistake.",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "She acknowledged made a mistake.",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 28
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct reported admission:",
        "correct_answer": "He admitted to lying about his experience.",
        "difficulty": "Hard",
        "explanation": "Reported Admission: admit + to + gerund or admit + that",
        "options": [
            {
                "id": 1001,
                "option_text": "He admitted to lying about his experience.",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "He admitted lying about his experience.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "He admitted that lied about his experience.",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "He admitted to lie about his experience.",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 28
    }
];

export default questions;