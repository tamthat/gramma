const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "The cat ___.",
        "correct_answer": "sleeps",
        "suggest_answer": "sleeps",
        "explanation": "SV (Subject-Verb) structure: The cat is the subject, sleeps is the intransitive verb.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "She ___ a book.",
        "correct_answer": "reads",
        "suggest_answer": "reads",
        "explanation": "SVO (Subject-Verb-Object) structure: She reads a book.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He ___ happy.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC (Subject-Verb-Complement) structure: He is happy. 'is' is a linking verb.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "They made him ___.",
        "correct_answer": "captain",
        "suggest_answer": "captain",
        "explanation": "SVOC (Subject-Verb-Object-Complement) structure: They made him captain.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "She gave him a ___.",
        "correct_answer": "gift",
        "suggest_answer": "gift",
        "explanation": "SVOO (Subject-Verb-Object-Object) structure: She gave him a gift.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "The bird ___.",
        "correct_answer": "flies",
        "suggest_answer": "flies",
        "explanation": "SV structure: The bird flies.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "I ___ coffee.",
        "correct_answer": "drink",
        "suggest_answer": "drink",
        "explanation": "SVO structure: I drink coffee.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "The sky ___ blue.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC structure: The sky is blue.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "We consider her ___.",
        "correct_answer": "talented",
        "suggest_answer": "talented",
        "explanation": "SVOC structure: We consider her talented.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "He sent her a ___.",
        "correct_answer": "letter",
        "suggest_answer": "letter",
        "explanation": "SVOO structure: He sent her a letter.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "Dogs ___.",
        "correct_answer": "bark",
        "suggest_answer": "bark",
        "explanation": "SV structure: Dogs bark.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "You ___ water.",
        "correct_answer": "drink",
        "suggest_answer": "drink",
        "explanation": "SVO structure: You drink water.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "She ___ tired.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC structure: She is tired.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "They appointed him ___.",
        "correct_answer": "manager",
        "suggest_answer": "manager",
        "explanation": "SVOC structure: They appointed him manager.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "I bought her a ___.",
        "correct_answer": "dress",
        "suggest_answer": "dress",
        "explanation": "SVOO structure: I bought her a dress.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "Children ___.",
        "correct_answer": "play",
        "suggest_answer": "play",
        "explanation": "SV structure: Children play.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "He ___ music.",
        "correct_answer": "plays",
        "suggest_answer": "plays",
        "explanation": "SVO structure: He plays music.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "It ___ interesting.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC structure: It is interesting.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "We elected him ___.",
        "correct_answer": "president",
        "suggest_answer": "president",
        "explanation": "SVOC structure: We elected him president.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "She told me a ___.",
        "correct_answer": "story",
        "suggest_answer": "story",
        "explanation": "SVOO structure: She told me a story.",
        "difficulty": "Easy",
        "topic_id": 22
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "The student ___.",
        "correct_answer": "studies",
        "suggest_answer": "studies",
        "explanation": "SV structure: The student studies.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "They ___ English.",
        "correct_answer": "speak",
        "suggest_answer": "speak",
        "explanation": "SVO structure: They speak English.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "The water ___ cold.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC structure: The water is cold.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "They painted the house ___.",
        "correct_answer": "white",
        "suggest_answer": "white",
        "explanation": "SVOC structure: They painted the house white.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "She gave him an ___.",
        "correct_answer": "apple",
        "suggest_answer": "apple",
        "explanation": "SVOO structure: She gave him an apple.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "The engine ___.",
        "correct_answer": "runs",
        "suggest_answer": "runs",
        "explanation": "SV structure: The engine runs.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "I ___ a car.",
        "correct_answer": "drive",
        "suggest_answer": "drive",
        "explanation": "SVO structure: I drive a car.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "The dress ___ beautiful.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC structure: The dress is beautiful.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "They made her ___.",
        "correct_answer": "queen",
        "suggest_answer": "queen",
        "explanation": "SVOC structure: They made her queen.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "He lent me some ___.",
        "correct_answer": "money",
        "suggest_answer": "money",
        "explanation": "SVOO structure: He lent me some money.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "The athlete ___.",
        "correct_answer": "runs",
        "suggest_answer": "runs",
        "explanation": "SV structure: The athlete runs.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "We ___ the project.",
        "correct_answer": "completed",
        "suggest_answer": "completed",
        "explanation": "SVO structure: We completed the project.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "The food ___ delicious.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC structure: The food is delicious.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "They found her ___.",
        "correct_answer": "guilty",
        "suggest_answer": "guilty",
        "explanation": "SVOC structure: They found her guilty.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "She showed me a ___.",
        "correct_answer": "photo",
        "suggest_answer": "photo",
        "explanation": "SVOO structure: She showed me a photo.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "The river ___.",
        "correct_answer": "flows",
        "suggest_answer": "flows",
        "explanation": "SV structure: The river flows.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "He ___ his goals.",
        "correct_answer": "achieved",
        "suggest_answer": "achieved",
        "explanation": "SVO structure: He achieved his goals.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "The answer ___ correct.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC structure: The answer is correct.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "We declared him ___.",
        "correct_answer": "winner",
        "suggest_answer": "winner",
        "explanation": "SVOC structure: We declared him winner.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "They granted him a ___.",
        "correct_answer": "wish",
        "suggest_answer": "wish",
        "explanation": "SVOO structure: They granted him a wish.",
        "difficulty": "Medium",
        "topic_id": 22
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "The performer ___.",
        "correct_answer": "danced",
        "suggest_answer": "danced",
        "explanation": "SV structure: The performer danced.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "The scientist ___ the experiment.",
        "correct_answer": "conducted",
        "suggest_answer": "conducted",
        "explanation": "SVO structure: The scientist conducted the experiment.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "The proposal ___ feasible.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC structure: The proposal is feasible.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "The judge pronounced him ___.",
        "correct_answer": "innocent",
        "suggest_answer": "innocent",
        "explanation": "SVOC structure: The judge pronounced him innocent.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "She promised him a ___.",
        "correct_answer": "reward",
        "suggest_answer": "reward",
        "explanation": "SVOO structure: She promised him a reward.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "The speaker ___.",
        "correct_answer": "lectured",
        "suggest_answer": "lectured",
        "explanation": "SV structure: The speaker lectured.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "The author ___ a novel.",
        "correct_answer": "published",
        "suggest_answer": "published",
        "explanation": "SVO structure: The author published a novel.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "The atmosphere ___ tense.",
        "correct_answer": "is",
        "suggest_answer": "is",
        "explanation": "SVC structure: The atmosphere is tense.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "The committee deemed the candidate ___.",
        "correct_answer": "qualified",
        "suggest_answer": "qualified",
        "explanation": "SVOC structure: The committee deemed the candidate qualified.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "They offered him a ___.",
        "correct_answer": "promotion",
        "suggest_answer": "promotion",
        "explanation": "SVOO structure: They offered him a promotion.",
        "difficulty": "Hard",
        "topic_id": 22
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "Which sentence follows SV (Subject-Verb) structure?",
        "correct_answer": "The cat sleeps.",
        "difficulty": "Easy",
        "explanation": "SV structure has only subject and intransitive verb.",
        "options": [
            {
                "id": 511,
                "option_text": "The cat sleeps.",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "The cat eats food.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "The cat is happy.",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "She gave him a book.",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 22
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "Which sentence follows SVO (Subject-Verb-Object) structure?",
        "correct_answer": "She reads a book.",
        "difficulty": "Easy",
        "explanation": "SVO structure has subject, transitive verb, and direct object.",
        "options": [
            {
                "id": 521,
                "option_text": "She reads a book.",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "She is happy.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "She runs.",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "She gave him a book.",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 22
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "Which sentence follows SVC (Subject-Verb-Complement) structure?",
        "correct_answer": "He is happy.",
        "difficulty": "Easy",
        "explanation": "SVC structure has subject, linking verb, and complement.",
        "options": [
            {
                "id": 531,
                "option_text": "He is happy.",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "He reads a book.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "He runs.",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "He gave her a gift.",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 22
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "Which sentence follows SVOC (Subject-Verb-Object-Complement) structure?",
        "correct_answer": "They made him captain.",
        "difficulty": "Easy",
        "explanation": "SVOC structure has subject, verb, object, and complement.",
        "options": [
            {
                "id": 541,
                "option_text": "They made him captain.",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "They are happy.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "They read books.",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "They run.",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 22
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "Which sentence follows SVOO (Subject-Verb-Object-Object) structure?",
        "correct_answer": "She gave him a gift.",
        "difficulty": "Easy",
        "explanation": "SVOO structure has subject, verb, indirect object, and direct object.",
        "options": [
            {
                "id": 551,
                "option_text": "She gave him a gift.",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "She is happy.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "She runs.",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "She made him captain.",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 22
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "Dogs bark. What structure is this?",
        "correct_answer": "SV",
        "difficulty": "Easy",
        "explanation": "Subject (Dogs) + Intransitive Verb (bark) = SV structure.",
        "options": [
            {
                "id": 561,
                "option_text": "SV",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 22
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "I drink coffee. What structure is this?",
        "correct_answer": "SVO",
        "difficulty": "Easy",
        "explanation": "Subject (I) + Verb (drink) + Object (coffee) = SVO structure.",
        "options": [
            {
                "id": 571,
                "option_text": "SVO",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 22
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "The sky is blue. What structure is this?",
        "correct_answer": "SVC",
        "difficulty": "Easy",
        "explanation": "Subject (The sky) + Linking Verb (is) + Complement (blue) = SVC structure.",
        "options": [
            {
                "id": 581,
                "option_text": "SVC",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 22
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "They painted the house white. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Easy",
        "explanation": "Subject (They) + Verb (painted) + Object (the house) + Complement (white) = SVOC.",
        "options": [
            {
                "id": 591,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 22
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "She gave him a gift. What structure is this?",
        "correct_answer": "SVOO",
        "difficulty": "Easy",
        "explanation": "Subject (She) + Verb (gave) + Indirect Object (him) + Direct Object (a gift) = SVOO.",
        "options": [
            {
                "id": 601,
                "option_text": "SVOO",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "SVOC",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 22
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "The student studies. What structure is this?",
        "correct_answer": "SV",
        "difficulty": "Medium",
        "explanation": "SV structure contains only subject and intransitive verb.",
        "options": [
            {
                "id": 611,
                "option_text": "SV",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 22
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "They speak English. What structure is this?",
        "correct_answer": "SVO",
        "difficulty": "Medium",
        "explanation": "Subject (They) + Verb (speak) + Object (English) = SVO structure.",
        "options": [
            {
                "id": 621,
                "option_text": "SVO",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 22
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "The water is cold. What structure is this?",
        "correct_answer": "SVC",
        "difficulty": "Medium",
        "explanation": "Subject (The water) + Linking Verb (is) + Complement (cold) = SVC structure.",
        "options": [
            {
                "id": 631,
                "option_text": "SVC",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 22
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "They made her queen. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Medium",
        "explanation": "Subject (They) + Verb (made) + Object (her) + Complement (queen) = SVOC.",
        "options": [
            {
                "id": 641,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 22
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "He lent me some money. What structure is this?",
        "correct_answer": "SVOO",
        "difficulty": "Medium",
        "explanation": "Subject (He) + Verb (lent) + Indirect Object (me) + Direct Object (money) = SVOO.",
        "options": [
            {
                "id": 651,
                "option_text": "SVOO",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "SVOC",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 22
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "The engine runs. What structure is this?",
        "correct_answer": "SV",
        "difficulty": "Medium",
        "explanation": "SV structure with intransitive verb.",
        "options": [
            {
                "id": 661,
                "option_text": "SV",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 22
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "I drive a car. What structure is this?",
        "correct_answer": "SVO",
        "difficulty": "Medium",
        "explanation": "Subject (I) + Verb (drive) + Object (a car) = SVO structure.",
        "options": [
            {
                "id": 671,
                "option_text": "SVO",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 22
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "The dress is beautiful. What structure is this?",
        "correct_answer": "SVC",
        "difficulty": "Medium",
        "explanation": "Subject (The dress) + Linking Verb (is) + Complement (beautiful) = SVC structure.",
        "options": [
            {
                "id": 681,
                "option_text": "SVC",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 22
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "They found her guilty. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Medium",
        "explanation": "Subject (They) + Verb (found) + Object (her) + Complement (guilty) = SVOC.",
        "options": [
            {
                "id": 691,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 22
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "She showed me a photo. What structure is this?",
        "correct_answer": "SVOO",
        "difficulty": "Medium",
        "explanation": "Subject (She) + Verb (showed) + Indirect Object (me) + Direct Object (a photo) = SVOO.",
        "options": [
            {
                "id": 701,
                "option_text": "SVOO",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "SVOC",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 22
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "The performer danced. What structure is this?",
        "correct_answer": "SV",
        "difficulty": "Hard",
        "explanation": "Subject (The performer) + Intransitive Verb (danced) = SV structure.",
        "options": [
            {
                "id": 711,
                "option_text": "SV",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 22
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "The scientist conducted the experiment. What structure is this?",
        "correct_answer": "SVO",
        "difficulty": "Hard",
        "explanation": "Subject (The scientist) + Verb (conducted) + Object (the experiment) = SVO.",
        "options": [
            {
                "id": 721,
                "option_text": "SVO",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 22
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "The proposal is feasible. What structure is this?",
        "correct_answer": "SVC",
        "difficulty": "Hard",
        "explanation": "Subject (The proposal) + Linking Verb (is) + Complement (feasible) = SVC structure.",
        "options": [
            {
                "id": 731,
                "option_text": "SVC",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 22
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "The judge pronounced him innocent. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Hard",
        "explanation": "Subject (The judge) + Verb (pronounced) + Object (him) + Complement (innocent) = SVOC.",
        "options": [
            {
                "id": 741,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 22
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "She promised him a reward. What structure is this?",
        "correct_answer": "SVOO",
        "difficulty": "Hard",
        "explanation": "Subject (She) + Verb (promised) + Indirect Object (him) + Direct Object (a reward) = SVOO.",
        "options": [
            {
                "id": 751,
                "option_text": "SVOO",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "SVOC",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 22
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "The speaker lectured. What structure is this?",
        "correct_answer": "SV",
        "difficulty": "Hard",
        "explanation": "SV structure with intransitive verb.",
        "options": [
            {
                "id": 761,
                "option_text": "SV",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 22
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "The author published a novel. What structure is this?",
        "correct_answer": "SVO",
        "difficulty": "Hard",
        "explanation": "Subject (The author) + Verb (published) + Object (a novel) = SVO.",
        "options": [
            {
                "id": 771,
                "option_text": "SVO",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 22
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "The atmosphere is tense. What structure is this?",
        "correct_answer": "SVC",
        "difficulty": "Hard",
        "explanation": "Subject (The atmosphere) + Linking Verb (is) + Complement (tense) = SVC structure.",
        "options": [
            {
                "id": 781,
                "option_text": "SVC",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 22
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "The committee deemed the candidate qualified. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Hard",
        "explanation": "Subject (The committee) + Verb (deemed) + Object (the candidate) + Complement (qualified) = SVOC.",
        "options": [
            {
                "id": 791,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 22
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "They offered him a promotion. What structure is this?",
        "correct_answer": "SVOO",
        "difficulty": "Hard",
        "explanation": "Subject (They) + Verb (offered) + Indirect Object (him) + Direct Object (a promotion) = SVOO.",
        "options": [
            {
                "id": 801,
                "option_text": "SVOO",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "SVOC",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 22
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "We completed the project. What structure is this?",
        "correct_answer": "SVO",
        "difficulty": "Hard",
        "explanation": "Subject (We) + Verb (completed) + Object (the project) = SVO structure.",
        "options": [
            {
                "id": 811,
                "option_text": "SVO",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 22
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "The food is delicious. What structure is this?",
        "correct_answer": "SVC",
        "difficulty": "Hard",
        "explanation": "Subject (The food) + Linking Verb (is) + Complement (delicious) = SVC structure.",
        "options": [
            {
                "id": 821,
                "option_text": "SVC",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 22
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "He achieved his goals. What structure is this?",
        "correct_answer": "SVO",
        "difficulty": "Hard",
        "explanation": "Subject (He) + Verb (achieved) + Object (his goals) = SVO structure.",
        "options": [
            {
                "id": 831,
                "option_text": "SVO",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 22
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "The answer is correct. What structure is this?",
        "correct_answer": "SVC",
        "difficulty": "Hard",
        "explanation": "Subject (The answer) + Linking Verb (is) + Complement (correct) = SVC structure.",
        "options": [
            {
                "id": 841,
                "option_text": "SVC",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 22
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "We declared him winner. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Hard",
        "explanation": "Subject (We) + Verb (declared) + Object (him) + Complement (winner) = SVOC.",
        "options": [
            {
                "id": 851,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 22
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "They granted him a wish. What structure is this?",
        "correct_answer": "SVOO",
        "difficulty": "Hard",
        "explanation": "Subject (They) + Verb (granted) + Indirect Object (him) + Direct Object (a wish) = SVOO.",
        "options": [
            {
                "id": 861,
                "option_text": "SVOO",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "SVOC",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 22
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "The river flows. What structure is this?",
        "correct_answer": "SV",
        "difficulty": "Hard",
        "explanation": "Subject (The river) + Intransitive Verb (flows) = SV structure.",
        "options": [
            {
                "id": 871,
                "option_text": "SV",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 22
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "We elected him president. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Hard",
        "explanation": "Subject (We) + Verb (elected) + Object (him) + Complement (president) = SVOC.",
        "options": [
            {
                "id": 881,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 22
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "She told me a story. What structure is this?",
        "correct_answer": "SVOO",
        "difficulty": "Hard",
        "explanation": "Subject (She) + Verb (told) + Indirect Object (me) + Direct Object (a story) = SVOO.",
        "options": [
            {
                "id": 891,
                "option_text": "SVOO",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "SVOC",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 22
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "We consider her talented. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Hard",
        "explanation": "Subject (We) + Verb (consider) + Object (her) + Complement (talented) = SVOC.",
        "options": [
            {
                "id": 901,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 22
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "He sent her a letter. What structure is this?",
        "correct_answer": "SVOO",
        "difficulty": "Hard",
        "explanation": "Subject (He) + Verb (sent) + Indirect Object (her) + Direct Object (a letter) = SVOO.",
        "options": [
            {
                "id": 911,
                "option_text": "SVOO",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "SVOC",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 22
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "I bought her a dress. What structure is this?",
        "correct_answer": "SVOO",
        "difficulty": "Hard",
        "explanation": "Subject (I) + Verb (bought) + Indirect Object (her) + Direct Object (a dress) = SVOO.",
        "options": [
            {
                "id": 921,
                "option_text": "SVOO",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "SVOC",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 22
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Children play. What structure is this?",
        "correct_answer": "SV",
        "difficulty": "Hard",
        "explanation": "Subject (Children) + Intransitive Verb (play) = SV structure.",
        "options": [
            {
                "id": 931,
                "option_text": "SV",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 22
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "He plays music. What structure is this?",
        "correct_answer": "SVO",
        "difficulty": "Hard",
        "explanation": "Subject (He) + Verb (plays) + Object (music) = SVO structure.",
        "options": [
            {
                "id": 941,
                "option_text": "SVO",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 22
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "It is interesting. What structure is this?",
        "correct_answer": "SVC",
        "difficulty": "Hard",
        "explanation": "Subject (It) + Linking Verb (is) + Complement (interesting) = SVC structure.",
        "options": [
            {
                "id": 951,
                "option_text": "SVC",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 22
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "They appointed him manager. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Hard",
        "explanation": "Subject (They) + Verb (appointed) + Object (him) + Complement (manager) = SVOC.",
        "options": [
            {
                "id": 961,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 22
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "She is tired. What structure is this?",
        "correct_answer": "SVC",
        "difficulty": "Hard",
        "explanation": "Subject (She) + Linking Verb (is) + Complement (tired) = SVC structure.",
        "options": [
            {
                "id": 971,
                "option_text": "SVC",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 22
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "You drink water. What structure is this?",
        "correct_answer": "SVO",
        "difficulty": "Hard",
        "explanation": "Subject (You) + Verb (drink) + Object (water) = SVO structure.",
        "options": [
            {
                "id": 981,
                "option_text": "SVO",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 22
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Dogs bark. What structure is this?",
        "correct_answer": "SV",
        "difficulty": "Hard",
        "explanation": "Subject (Dogs) + Intransitive Verb (bark) = SV structure.",
        "options": [
            {
                "id": 991,
                "option_text": "SV",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "SVC",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 22
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "They made him captain. What structure is this?",
        "correct_answer": "SVOC",
        "difficulty": "Hard",
        "explanation": "Subject (They) + Verb (made) + Object (him) + Complement (captain) = SVOC.",
        "options": [
            {
                "id": 1001,
                "option_text": "SVOC",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "SV",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "SVO",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "SVOO",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 22
    }
];

export default questions;