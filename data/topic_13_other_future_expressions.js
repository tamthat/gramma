const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "I ___ [go] to the store tomorrow morning.",
        "correct_answer": "am going to go",
        "suggest_answer": "go",
        "explanation": "Be going to is used for plans or intentions made before the moment of speaking.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "She ___ [finish] her project by Friday.",
        "correct_answer": "is going to finish",
        "suggest_answer": "finish",
        "explanation": "Be going to shows an intended action in the near future.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "They ___ [start] the meeting in five minutes.",
        "correct_answer": "are about to start",
        "suggest_answer": "start",
        "explanation": "Be about to indicates something will happen very soon, in the immediate future.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "The train ___ [leave] the station at 3 PM.",
        "correct_answer": "is due to leave",
        "suggest_answer": "leave",
        "explanation": "Be due to shows a scheduled time for an event.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "It ___ [rain] this afternoon according to the forecast.",
        "correct_answer": "is likely to rain",
        "suggest_answer": "rain",
        "explanation": "Be likely to indicates probability of something happening.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "We ___ [have] dinner at 7 PM tonight.",
        "correct_answer": "are going to have",
        "suggest_answer": "have",
        "explanation": "Be going to shows a planned future action.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "You ___ [be] surprised by the news.",
        "correct_answer": "are going to be",
        "suggest_answer": "be",
        "explanation": "Be going to is used for predictions based on evidence or plans.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "The package ___ [arrive] tomorrow morning.",
        "correct_answer": "is due to arrive",
        "suggest_answer": "arrive",
        "explanation": "Be due to indicates an expected time of arrival.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "He ___ [propose] to her next week.",
        "correct_answer": "is going to propose",
        "suggest_answer": "propose",
        "explanation": "Be going to shows an intended future action.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "The concert ___ [start] any moment now.",
        "correct_answer": "is about to start",
        "suggest_answer": "start",
        "explanation": "Be about to indicates imminent action.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "The students ___ [take] the exam next Monday.",
        "correct_answer": "are going to take",
        "suggest_answer": "take",
        "explanation": "Be going to shows a planned or scheduled future action.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "The company ___ [announce] the results tomorrow.",
        "correct_answer": "is likely to announce",
        "suggest_answer": "announce",
        "explanation": "Be likely to shows probability or expectation.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "I ___ [call] you when I get home.",
        "correct_answer": "am going to call",
        "suggest_answer": "call",
        "explanation": "Be going to indicates an intention for the future.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "The movie ___ [begin] at 8 PM sharp.",
        "correct_answer": "is due to begin",
        "suggest_answer": "begin",
        "explanation": "Be due to shows a scheduled start time.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "The prices ___ [increase] soon.",
        "correct_answer": "are about to increase",
        "suggest_answer": "increase",
        "explanation": "Be about to indicates imminent change.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "They ___ [graduate] next month.",
        "correct_answer": "are going to graduate",
        "suggest_answer": "graduate",
        "explanation": "Be going to shows a planned future event.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "The flight ___ [depart] in thirty minutes.",
        "correct_answer": "is due to depart",
        "suggest_answer": "depart",
        "explanation": "Be due to indicates scheduled departure time.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "She ___ [succeed] in her career.",
        "correct_answer": "is likely to succeed",
        "suggest_answer": "succeed",
        "explanation": "Be likely to shows expectation or probability.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "We ___ [travel] to Europe next summer.",
        "correct_answer": "are going to travel",
        "suggest_answer": "travel",
        "explanation": "Be going to indicates a planned future trip.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "The presentation ___ [begin] very soon.",
        "correct_answer": "is about to begin",
        "suggest_answer": "begin",
        "explanation": "Be about to shows imminent commencement.",
        "difficulty": "Easy",
        "topic_id": 13
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "By next week, the government ___ [announce] new policies affecting businesses.",
        "correct_answer": "is likely to announce",
        "suggest_answer": "announce",
        "explanation": "Be likely to shows probability of future government action.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "The conference ___ [commence] in approximately two hours.",
        "correct_answer": "is due to commence",
        "suggest_answer": "commence",
        "explanation": "Be due to indicates scheduled conference start time.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "Scientists ___ [discover] new species in the rainforest soon.",
        "correct_answer": "are going to discover",
        "suggest_answer": "discover",
        "explanation": "Be going to shows anticipated future discovery.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "The market ___ [crash] if these trends continue.",
        "correct_answer": "is likely to crash",
        "suggest_answer": "crash",
        "explanation": "Be likely to shows probability based on current conditions.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "The project ___ [fail] without proper funding.",
        "correct_answer": "is about to fail",
        "suggest_answer": "fail",
        "explanation": "Be about to indicates imminent negative outcome.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "The contract ___ [expire] at the end of this month.",
        "correct_answer": "is due to expire",
        "suggest_answer": "expire",
        "explanation": "Be due to shows scheduled expiration date.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "Technology companies ___ [invest] heavily in AI development.",
        "correct_answer": "are going to invest",
        "suggest_answer": "invest",
        "explanation": "Be going to indicates future industry plans.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "The economy ___ [improve] within the next quarter.",
        "correct_answer": "is likely to improve",
        "suggest_answer": "improve",
        "explanation": "Be likely to shows probability of economic recovery.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The building ___ [collapse] if repairs are not completed soon.",
        "correct_answer": "is about to collapse",
        "suggest_answer": "collapse",
        "explanation": "Be about to indicates imminent structural failure.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "The election results ___ [come] in after 9 PM.",
        "correct_answer": "are due to come",
        "suggest_answer": "come",
        "explanation": "Be due to shows scheduled release of results.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "Environmental changes ___ [accelerate] over the coming decades.",
        "correct_answer": "are going to accelerate",
        "suggest_answer": "accelerate",
        "explanation": "Be going to shows anticipated future environmental change.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "The team ___ [qualify] for the championship based on their performance.",
        "correct_answer": "is likely to qualify",
        "suggest_answer": "qualify",
        "explanation": "Be likely to shows probability of qualification.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "The patient ___ [recover] fully with proper treatment.",
        "correct_answer": "is going to recover",
        "suggest_answer": "recover",
        "explanation": "Be going to indicates expected medical recovery.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "Production ___ [halt] if the machinery breaks down.",
        "correct_answer": "is about to halt",
        "suggest_answer": "halt",
        "explanation": "Be about to shows imminent production interruption.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "The report ___ [release] on Monday morning.",
        "correct_answer": "is due to release",
        "suggest_answer": "release",
        "explanation": "Be due to indicates scheduled report publication.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "Urban areas ___ [experience] increased congestion.",
        "correct_answer": "are going to experience",
        "suggest_answer": "experience",
        "explanation": "Be going to shows predicted urban challenges.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "The film ___ [become] a box office hit.",
        "correct_answer": "is likely to become",
        "suggest_answer": "become",
        "explanation": "Be likely to shows probability of film success.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "The budget ___ [face] significant cuts next fiscal year.",
        "correct_answer": "is about to face",
        "suggest_answer": "face",
        "explanation": "Be about to indicates imminent budget challenges.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "New regulations ___ [take] effect next month.",
        "correct_answer": "are due to take",
        "suggest_answer": "take",
        "explanation": "Be due to shows scheduled regulation implementation.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "Global cooperation ___ [increase] on climate issues.",
        "correct_answer": "is going to increase",
        "suggest_answer": "increase",
        "explanation": "Be going to indicates expected international cooperation.",
        "difficulty": "Medium",
        "topic_id": 13
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "If you ___ [arrive] late, we will have finished.",
        "correct_answer": "arrive",
        "suggest_answer": "will arrive",
        "explanation": "In conditional clauses, use Present tense, not future expressions.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "When you ___ [call], I will be ready.",
        "correct_answer": "call",
        "suggest_answer": "are going to call",
        "explanation": "In temporal clauses, use Present tense, not future expressions.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "Unless the situation ___ [improve], we will leave.",
        "correct_answer": "improves",
        "suggest_answer": "is going to improve",
        "explanation": "In conditional clauses, use Present tense.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "Once the meeting ___ [begin], no more admissions.",
        "correct_answer": "begins",
        "suggest_answer": "is about to begin",
        "explanation": "In temporal clauses with 'once', use Present tense.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "As soon as you ___ [finish], let me know.",
        "correct_answer": "finish",
        "suggest_answer": "are going to finish",
        "explanation": "In temporal clauses, use Present tense, not future expressions.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "The manufacturer ___ [produce] vehicles with advanced battery technology.",
        "correct_answer": "is going to produce",
        "suggest_answer": "produce",
        "explanation": "Be going to shows company manufacturing plans.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "Climate patterns ___ [shift] dramatically this century.",
        "correct_answer": "are likely to shift",
        "suggest_answer": "shift",
        "explanation": "Be likely to shows probability of climate change.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "The satellite ___ [orbit] Earth every ninety minutes.",
        "correct_answer": "is due to orbit",
        "suggest_answer": "orbit",
        "explanation": "Be due to indicates scheduled orbital pattern.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "The volcano ___ [erupt] based on seismic readings.",
        "correct_answer": "is about to erupt",
        "suggest_answer": "erupt",
        "explanation": "Be about to shows imminent geological event.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "Society ___ [undergo] massive digital transformation.",
        "correct_answer": "is going to undergo",
        "suggest_answer": "undergo",
        "explanation": "Be going to indicates anticipated social change.",
        "difficulty": "Hard",
        "topic_id": 13
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "I ___ to the store tomorrow morning.",
        "correct_answer": "am going to go",
        "difficulty": "Easy",
        "explanation": "Be going to is used for planned future actions.",
        "options": [
            {
                "id": 511,
                "option_text": "am going to go",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "will go",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "am going",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "go",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 13
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "She ___ her project by Friday.",
        "correct_answer": "is going to finish",
        "difficulty": "Easy",
        "explanation": "Be going to shows an intended future action.",
        "options": [
            {
                "id": 521,
                "option_text": "is going to finish",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "will finish",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "finishes",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "is finishing",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 13
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "They ___ the meeting in five minutes.",
        "correct_answer": "are about to start",
        "difficulty": "Easy",
        "explanation": "Be about to indicates immediate future action.",
        "options": [
            {
                "id": 531,
                "option_text": "are about to start",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "will start",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "start",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "are starting",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 13
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "The train ___ the station at 3 PM.",
        "correct_answer": "is due to leave",
        "difficulty": "Easy",
        "explanation": "Be due to indicates scheduled time of departure.",
        "options": [
            {
                "id": 541,
                "option_text": "is due to leave",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "will leave",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "leaves",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "is leaving",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 13
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "It ___ this afternoon according to the forecast.",
        "correct_answer": "is likely to rain",
        "difficulty": "Easy",
        "explanation": "Be likely to shows probability based on forecasts.",
        "options": [
            {
                "id": 551,
                "option_text": "is likely to rain",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "will rain",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "rains",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "is raining",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 13
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "We ___ dinner at 7 PM tonight.",
        "correct_answer": "are going to have",
        "difficulty": "Easy",
        "explanation": "Be going to indicates planned meal time.",
        "options": [
            {
                "id": 561,
                "option_text": "are going to have",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "will have",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "have",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "are having",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 13
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "You ___ surprised by the news.",
        "correct_answer": "are going to be",
        "difficulty": "Easy",
        "explanation": "Be going to shows prediction based on certainty.",
        "options": [
            {
                "id": 571,
                "option_text": "are going to be",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "will be",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "are",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "will surprise",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 13
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "The package ___ tomorrow morning.",
        "correct_answer": "is due to arrive",
        "difficulty": "Easy",
        "explanation": "Be due to indicates expected delivery time.",
        "options": [
            {
                "id": 581,
                "option_text": "is due to arrive",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "will arrive",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "arrives",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "is arriving",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 13
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "He ___ to her next week.",
        "correct_answer": "is going to propose",
        "difficulty": "Easy",
        "explanation": "Be going to shows romantic intention.",
        "options": [
            {
                "id": 591,
                "option_text": "is going to propose",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "will propose",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "proposes",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "is proposing",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 13
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "The concert ___ any moment now.",
        "correct_answer": "is about to start",
        "difficulty": "Easy",
        "explanation": "Be about to indicates imminent event.",
        "options": [
            {
                "id": 601,
                "option_text": "is about to start",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "will start",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "starts",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "is starting",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 13
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "The students ___ the exam next Monday.",
        "correct_answer": "are going to take",
        "difficulty": "Easy",
        "explanation": "Be going to shows scheduled academic activity.",
        "options": [
            {
                "id": 611,
                "option_text": "are going to take",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "will take",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "take",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "are taking",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 13
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "The company ___ the results tomorrow.",
        "correct_answer": "is likely to announce",
        "difficulty": "Easy",
        "explanation": "Be likely to shows expectation of announcement.",
        "options": [
            {
                "id": 621,
                "option_text": "is likely to announce",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "will announce",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "announces",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "is announcing",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 13
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "I ___ you when I get home.",
        "correct_answer": "am going to call",
        "difficulty": "Easy",
        "explanation": "Be going to indicates intention to call.",
        "options": [
            {
                "id": 631,
                "option_text": "am going to call",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "will call",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "call",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "am calling",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 13
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "The movie ___ at 8 PM sharp.",
        "correct_answer": "is due to begin",
        "difficulty": "Easy",
        "explanation": "Be due to indicates scheduled movie time.",
        "options": [
            {
                "id": 641,
                "option_text": "is due to begin",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "will begin",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "begins",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "is beginning",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 13
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "The prices ___ soon.",
        "correct_answer": "are about to increase",
        "difficulty": "Easy",
        "explanation": "Be about to indicates imminent price rise.",
        "options": [
            {
                "id": 651,
                "option_text": "are about to increase",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "will increase",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "increase",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "are increasing",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 13
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "They ___ next month.",
        "correct_answer": "are going to graduate",
        "difficulty": "Easy",
        "explanation": "Be going to shows planned graduation.",
        "options": [
            {
                "id": 661,
                "option_text": "are going to graduate",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "will graduate",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "graduate",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "are graduating",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 13
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "The flight ___ in thirty minutes.",
        "correct_answer": "is due to depart",
        "difficulty": "Easy",
        "explanation": "Be due to indicates scheduled departure.",
        "options": [
            {
                "id": 671,
                "option_text": "is due to depart",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "will depart",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "departs",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "is departing",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 13
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "She ___ in her career.",
        "correct_answer": "is likely to succeed",
        "difficulty": "Easy",
        "explanation": "Be likely to shows confidence in success.",
        "options": [
            {
                "id": 681,
                "option_text": "is likely to succeed",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "will succeed",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "succeeds",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "is succeeding",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 13
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "We ___ to Europe next summer.",
        "correct_answer": "are going to travel",
        "difficulty": "Easy",
        "explanation": "Be going to indicates planned vacation.",
        "options": [
            {
                "id": 691,
                "option_text": "are going to travel",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "will travel",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "travel",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "are traveling",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 13
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "The presentation ___ very soon.",
        "correct_answer": "is about to begin",
        "difficulty": "Easy",
        "explanation": "Be about to shows imminent presentation.",
        "options": [
            {
                "id": 701,
                "option_text": "is about to begin",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "will begin",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "begins",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "is beginning",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 13
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "By next week, government ___ new business policies.",
        "correct_answer": "is likely to announce",
        "difficulty": "Medium",
        "explanation": "Be likely to shows probable government action.",
        "options": [
            {
                "id": 711,
                "option_text": "is likely to announce",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "will announce",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "announces",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "is announcing",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 13
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "The conference ___ in approximately two hours.",
        "correct_answer": "is due to commence",
        "difficulty": "Medium",
        "explanation": "Be due to indicates scheduled conference start.",
        "options": [
            {
                "id": 721,
                "option_text": "is due to commence",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "will commence",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "commences",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "is commencing",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 13
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "Scientists ___ new rainforest species soon.",
        "correct_answer": "are going to discover",
        "difficulty": "Medium",
        "explanation": "Be going to indicates anticipated discovery.",
        "options": [
            {
                "id": 731,
                "option_text": "are going to discover",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "will discover",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "discover",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "are discovering",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 13
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "The market ___ if these trends continue.",
        "correct_answer": "is likely to crash",
        "difficulty": "Medium",
        "explanation": "Be likely to shows probable market outcome.",
        "options": [
            {
                "id": 741,
                "option_text": "is likely to crash",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "will crash",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "crashes",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "is crashing",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 13
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "The project ___ without proper funding.",
        "correct_answer": "is about to fail",
        "difficulty": "Medium",
        "explanation": "Be about to indicates imminent failure.",
        "options": [
            {
                "id": 751,
                "option_text": "is about to fail",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "will fail",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "fails",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "is failing",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 13
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "The contract ___ at month end.",
        "correct_answer": "is due to expire",
        "difficulty": "Medium",
        "explanation": "Be due to indicates scheduled expiration.",
        "options": [
            {
                "id": 761,
                "option_text": "is due to expire",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "will expire",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "expires",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "is expiring",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 13
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "Companies ___ in AI development.",
        "correct_answer": "are going to invest",
        "difficulty": "Medium",
        "explanation": "Be going to indicates planned investment.",
        "options": [
            {
                "id": 771,
                "option_text": "are going to invest",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "will invest",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "invest",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "are investing",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 13
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "The economy ___ within the next quarter.",
        "correct_answer": "is likely to improve",
        "difficulty": "Medium",
        "explanation": "Be likely to shows probable economic recovery.",
        "options": [
            {
                "id": 781,
                "option_text": "is likely to improve",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "will improve",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "improves",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "is improving",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 13
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "The building ___ if repairs are not completed.",
        "correct_answer": "is about to collapse",
        "difficulty": "Medium",
        "explanation": "Be about to indicates imminent structural failure.",
        "options": [
            {
                "id": 791,
                "option_text": "is about to collapse",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "will collapse",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "collapses",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "is collapsing",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 13
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "The results ___ after 9 PM.",
        "correct_answer": "are due to come",
        "difficulty": "Medium",
        "explanation": "Be due to indicates scheduled result release.",
        "options": [
            {
                "id": 801,
                "option_text": "are due to come",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "will come",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "come",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "are coming",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 13
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "If you ___ late, we will have finished.",
        "correct_answer": "arrive",
        "difficulty": "Hard",
        "explanation": "In conditional clauses, use Present tense, not future expressions.",
        "options": [
            {
                "id": 811,
                "option_text": "arrive",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "are going to arrive",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "will arrive",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "are arriving",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 13
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "When you ___, I will be ready.",
        "correct_answer": "call",
        "difficulty": "Hard",
        "explanation": "In temporal clauses, use Present tense, not future expressions.",
        "options": [
            {
                "id": 821,
                "option_text": "call",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "are going to call",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "will call",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "are calling",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 13
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Unless the situation ___, we will leave.",
        "correct_answer": "improves",
        "difficulty": "Hard",
        "explanation": "In conditional clauses, use Present tense.",
        "options": [
            {
                "id": 831,
                "option_text": "improves",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "is going to improve",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "will improve",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "are improving",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 13
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Once the meeting ___, no more admissions.",
        "correct_answer": "begins",
        "difficulty": "Hard",
        "explanation": "In temporal clauses with 'once', use Present tense.",
        "options": [
            {
                "id": 841,
                "option_text": "begins",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "is about to begin",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "will begin",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "is beginning",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 13
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "As soon as you ___, let me know.",
        "correct_answer": "finish",
        "difficulty": "Hard",
        "explanation": "In temporal clauses, use Present tense, not future expressions.",
        "options": [
            {
                "id": 851,
                "option_text": "finish",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "are going to finish",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "will finish",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "are finishing",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 13
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "The manufacturer ___ advanced battery technology vehicles.",
        "correct_answer": "is going to produce",
        "difficulty": "Hard",
        "explanation": "Be going to shows company manufacturing plans.",
        "options": [
            {
                "id": 861,
                "option_text": "is going to produce",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "will produce",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "produces",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "is producing",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 13
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Climate patterns ___ dramatically this century.",
        "correct_answer": "are likely to shift",
        "difficulty": "Hard",
        "explanation": "Be likely to shows probability of climate change.",
        "options": [
            {
                "id": 871,
                "option_text": "are likely to shift",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "will shift",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "shift",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "are shifting",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 13
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "The satellite ___ Earth every ninety minutes.",
        "correct_answer": "is due to orbit",
        "difficulty": "Hard",
        "explanation": "Be due to indicates scheduled orbital pattern.",
        "options": [
            {
                "id": 881,
                "option_text": "is due to orbit",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "will orbit",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "orbits",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "is orbiting",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 13
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "The volcano ___ based on seismic readings.",
        "correct_answer": "is about to erupt",
        "difficulty": "Hard",
        "explanation": "Be about to shows imminent geological event.",
        "options": [
            {
                "id": 891,
                "option_text": "is about to erupt",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "will erupt",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "erupts",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "is erupting",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 13
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Society ___ massive digital transformation.",
        "correct_answer": "is going to undergo",
        "difficulty": "Hard",
        "explanation": "Be going to indicates anticipated social change.",
        "options": [
            {
                "id": 901,
                "option_text": "is going to undergo",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "will undergo",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "undergoes",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "is undergoing",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 13
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Environmental changes ___ dramatically.",
        "correct_answer": "are likely to accelerate",
        "difficulty": "Hard",
        "explanation": "Be likely to shows probability of acceleration.",
        "options": [
            {
                "id": 911,
                "option_text": "are likely to accelerate",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "will accelerate",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "accelerate",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "are accelerating",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 13
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "The team ___ for championship based on performance.",
        "correct_answer": "is likely to qualify",
        "difficulty": "Hard",
        "explanation": "Be likely to shows probability of qualification.",
        "options": [
            {
                "id": 921,
                "option_text": "is likely to qualify",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "will qualify",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "qualifies",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "is qualifying",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 13
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "The patient ___ with proper treatment.",
        "correct_answer": "is going to recover",
        "difficulty": "Hard",
        "explanation": "Be going to indicates expected medical recovery.",
        "options": [
            {
                "id": 931,
                "option_text": "is going to recover",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "will recover",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "recovers",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "is recovering",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 13
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Production ___ if machinery breaks down.",
        "correct_answer": "is about to halt",
        "difficulty": "Hard",
        "explanation": "Be about to shows imminent production halt.",
        "options": [
            {
                "id": 941,
                "option_text": "is about to halt",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "will halt",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "halts",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "is halting",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 13
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "The report ___ on Monday morning.",
        "correct_answer": "is due to release",
        "difficulty": "Hard",
        "explanation": "Be due to indicates scheduled report publication.",
        "options": [
            {
                "id": 951,
                "option_text": "is due to release",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "will release",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "releases",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "is releasing",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 13
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Urban areas ___ increased congestion.",
        "correct_answer": "are going to experience",
        "difficulty": "Hard",
        "explanation": "Be going to shows predicted urban challenges.",
        "options": [
            {
                "id": 961,
                "option_text": "are going to experience",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "will experience",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "experience",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "are experiencing",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 13
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "The film ___ a box office hit.",
        "correct_answer": "is likely to become",
        "difficulty": "Hard",
        "explanation": "Be likely to shows probability of film success.",
        "options": [
            {
                "id": 971,
                "option_text": "is likely to become",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "will become",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "becomes",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "is becoming",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 13
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "The budget ___ significant cuts next year.",
        "correct_answer": "is about to face",
        "difficulty": "Hard",
        "explanation": "Be about to indicates imminent budget challenges.",
        "options": [
            {
                "id": 981,
                "option_text": "is about to face",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "will face",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "faces",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "is facing",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 13
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "New regulations ___ effect next month.",
        "correct_answer": "are due to take",
        "difficulty": "Hard",
        "explanation": "Be due to shows scheduled regulation implementation.",
        "options": [
            {
                "id": 991,
                "option_text": "are due to take",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "will take",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "take",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "are taking",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 13
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Global cooperation ___ on climate issues.",
        "correct_answer": "is going to increase",
        "difficulty": "Hard",
        "explanation": "Be going to indicates expected international cooperation.",
        "options": [
            {
                "id": 1001,
                "option_text": "is going to increase",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "will increase",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "increases",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "is increasing",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 13
    }
];

export default questions;