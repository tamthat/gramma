const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "By next month, I ___ [work] on this project for six months.",
        "correct_answer": "will have been working",
        "suggest_answer": "work",
        "explanation": "Future Perfect Continuous shows duration of an action up to a specific future time.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "She ___ [study] for the exam for three weeks by next Friday.",
        "correct_answer": "will have been studying",
        "suggest_answer": "study",
        "explanation": "Future Perfect Continuous indicates continuous action lasting until a future point.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "They ___ [travel] for two weeks by the time they return home.",
        "correct_answer": "will have been traveling",
        "suggest_answer": "travel",
        "explanation": "Use Future Perfect Continuous to show duration of ongoing travel.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "He ___ [work] on his thesis for a year by next summer.",
        "correct_answer": "will have been working",
        "suggest_answer": "work",
        "explanation": "Future Perfect Continuous describes duration of work before a deadline.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "The children ___ [play] in the garden for hours by dinner time.",
        "correct_answer": "will have been playing",
        "suggest_answer": "play",
        "explanation": "Future Perfect Continuous shows how long children will have played.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "We ___ [watch] this series for months by the time it ends.",
        "correct_answer": "will have been watching",
        "suggest_answer": "watch",
        "explanation": "Use Future Perfect Continuous to indicate series viewing duration.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "You ___ [swim] for two hours by the time we leave.",
        "correct_answer": "will have been swimming",
        "suggest_answer": "swim",
        "explanation": "Future Perfect Continuous shows swimming duration before departure.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "I ___ [read] books for the entire summer break.",
        "correct_answer": "will have been reading",
        "suggest_answer": "read",
        "explanation": "Future Perfect Continuous describes reading activity throughout a period.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "She ___ [teach] students for ten years by her retirement.",
        "correct_answer": "will have been teaching",
        "suggest_answer": "teach",
        "explanation": "Use Future Perfect Continuous to show career duration.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "They ___ [live] in this city for five years by next December.",
        "correct_answer": "will have been living",
        "suggest_answer": "live",
        "explanation": "Future Perfect Continuous indicates residential duration.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "The clients ___ [wait] for three hours by the time we arrive.",
        "correct_answer": "will have been waiting",
        "suggest_answer": "wait",
        "explanation": "Future Perfect Continuous shows waiting duration before arrival.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "The birds ___ [migrate] south for several weeks by December.",
        "correct_answer": "will have been migrating",
        "suggest_answer": "migrate",
        "explanation": "Future Perfect Continuous describes seasonal migration duration.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "Tom ___ [run] marathons for five years by next July.",
        "correct_answer": "will have been running",
        "suggest_answer": "run",
        "explanation": "Future Perfect Continuous shows athletic career duration.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "The servers ___ [process] data for 24 hours by tomorrow morning.",
        "correct_answer": "will have been processing",
        "suggest_answer": "process",
        "explanation": "Future Perfect Continuous indicates processing duration in hours.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "The baby ___ [sleep] for four hours by evening.",
        "correct_answer": "will have been sleeping",
        "suggest_answer": "sleep",
        "explanation": "Future Perfect Continuous shows sleep duration by a specific time.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "By tomorrow morning, I ___ [fly] for ten hours.",
        "correct_answer": "will have been flying",
        "suggest_answer": "fly",
        "explanation": "Future Perfect Continuous with time expressions shows flight duration.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "She ___ [teach] students for twenty years by her retirement next year.",
        "correct_answer": "will have been teaching",
        "suggest_answer": "teach",
        "explanation": "Future Perfect Continuous indicates teaching duration.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "They ___ [paint] the house for three weeks by next month.",
        "correct_answer": "will have been painting",
        "suggest_answer": "paint",
        "explanation": "Future Perfect Continuous shows painting duration over weeks.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "I ___ [shop] for groceries for two hours by Saturday.",
        "correct_answer": "will have been shopping",
        "suggest_answer": "shop",
        "explanation": "Future Perfect Continuous shows shopping duration by a day.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "The sun ___ [shine] brightly for the entire afternoon.",
        "correct_answer": "will have been shining",
        "suggest_answer": "shine",
        "explanation": "Future Perfect Continuous describes sunlight duration.",
        "difficulty": "Easy",
        "topic_id": 12
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "By the time the conference ends, specialists ___ [discuss] for three days.",
        "correct_answer": "will have been discussing",
        "suggest_answer": "discuss",
        "explanation": "Future Perfect Continuous shows discussion duration at an event.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "Before next Friday, contractors ___ [pour] concrete for two weeks.",
        "correct_answer": "will have been pouring",
        "suggest_answer": "pour",
        "explanation": "Future Perfect Continuous indicates construction work duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "By next month, researchers ___ [analyze] data for six weeks.",
        "correct_answer": "will have been analyzing",
        "suggest_answer": "analyze",
        "explanation": "Future Perfect Continuous shows research duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "By the time the storm passes, sailors ___ [navigate] for several hours.",
        "correct_answer": "will have been navigating",
        "suggest_answer": "navigate",
        "explanation": "Future Perfect Continuous describes navigation duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "Before the competition ends, athletes ___ [compete] for the entire day.",
        "correct_answer": "will have been competing",
        "suggest_answer": "compete",
        "explanation": "Future Perfect Continuous shows competition duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "By 5 PM next Tuesday, the band ___ [perform] for three hours.",
        "correct_answer": "will have been performing",
        "suggest_answer": "perform",
        "explanation": "Future Perfect Continuous indicates performance duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "Within six months, the company ___ [expand] for half a year.",
        "correct_answer": "will have been expanding",
        "suggest_answer": "expand",
        "explanation": "Future Perfect Continuous shows business expansion duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "Before next quarter, scientists ___ [experiment] for three months.",
        "correct_answer": "will have been experimenting",
        "suggest_answer": "experiment",
        "explanation": "Future Perfect Continuous indicates experimental duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "By next year, she ___ [work] as a teacher for five years.",
        "correct_answer": "will have been working",
        "suggest_answer": "work",
        "explanation": "Future Perfect Continuous shows employment duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "By 9 AM tomorrow, we ___ [attend] sessions for several hours.",
        "correct_answer": "will have been attending",
        "suggest_answer": "attend",
        "explanation": "Future Perfect Continuous describes attendance duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "Before you call, I ___ [prepare] dinner for an hour.",
        "correct_answer": "will have been preparing",
        "suggest_answer": "prepare",
        "explanation": "Future Perfect Continuous shows preparation duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "By next week, they ___ [build] the bridge for several weeks.",
        "correct_answer": "will have been building",
        "suggest_answer": "build",
        "explanation": "Future Perfect Continuous indicates construction duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "When he arrives, children ___ [do] homework for two hours.",
        "correct_answer": "will have been doing",
        "suggest_answer": "do",
        "explanation": "Future Perfect Continuous shows homework duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "By month end, I ___ [practice] piano for 100 hours.",
        "correct_answer": "will have been practicing",
        "suggest_answer": "practice",
        "explanation": "Future Perfect Continuous shows accumulated practice duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "At this time next month, we ___ [celebrate] for the whole week.",
        "correct_answer": "will have been celebrating",
        "suggest_answer": "celebrate",
        "explanation": "Future Perfect Continuous indicates celebration duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "Before next quarter, workers ___ [renovate] for three months.",
        "correct_answer": "will have been renovating",
        "suggest_answer": "renovate",
        "explanation": "Future Perfect Continuous shows renovation duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "By concert end, everyone ___ [enjoy] music for hours.",
        "correct_answer": "will have been enjoying",
        "suggest_answer": "enjoy",
        "explanation": "Future Perfect Continuous indicates enjoyment duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "Before lunch, the manager ___ [conduct] the meeting for two hours.",
        "correct_answer": "will have been conducting",
        "suggest_answer": "conduct",
        "explanation": "Future Perfect Continuous shows meeting duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "If weather is good, technicians ___ [install] equipment all summer.",
        "correct_answer": "will have been installing",
        "suggest_answer": "install",
        "explanation": "Future Perfect Continuous shows installation duration in summer.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "By conductor's arrival, orchestra ___ [rehearse] for three hours.",
        "correct_answer": "will have been rehearsing",
        "suggest_answer": "rehearse",
        "explanation": "Future Perfect Continuous indicates rehearsal duration.",
        "difficulty": "Medium",
        "topic_id": 12
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "If you ___ [arrive] late, we will have already started.",
        "correct_answer": "arrive",
        "suggest_answer": "will arrive",
        "explanation": "In conditional clauses, use Present tense, not Future Perfect Continuous.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "By the time you ___ [come], I will have prepared everything.",
        "correct_answer": "come",
        "suggest_answer": "will come",
        "explanation": "In temporal clauses, use Present tense, not Future Perfect Continuous.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "Unless you ___ [submit], it will be late.",
        "correct_answer": "submit",
        "suggest_answer": "will submit",
        "explanation": "In conditional clauses, use Present tense, not Future tense.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "Once the deadline ___ [pass], no submissions accepted.",
        "correct_answer": "passes",
        "suggest_answer": "will pass",
        "explanation": "In temporal clauses with 'once', use Present tense.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "As soon as you ___ [finish], we can leave.",
        "correct_answer": "finish",
        "suggest_answer": "will finish",
        "explanation": "In temporal clauses, use Present tense, not Future tense.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "By project end, we ___ [work] non-stop for six months.",
        "correct_answer": "will have been working",
        "suggest_answer": "will work",
        "explanation": "Future Perfect Continuous shows continuous work duration.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "Before contract expires, vendors ___ [deliver] for months.",
        "correct_answer": "will have been delivering",
        "suggest_answer": "will deliver",
        "explanation": "Future Perfect Continuous shows delivery duration.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "When deadline ___ [approach], we will have prepared.",
        "correct_answer": "approaches",
        "suggest_answer": "will approach",
        "explanation": "In temporal clauses, use Present tense for future reference.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "As long as conditions permit, they ___ [hike] for days.",
        "correct_answer": "will have been hiking",
        "suggest_answer": "will hike",
        "explanation": "Future Perfect Continuous shows hiking duration.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "In emergency, system ___ [alert] users for hours.",
        "correct_answer": "will have been alerting",
        "suggest_answer": "will alert",
        "explanation": "Future Perfect Continuous indicates alert duration.",
        "difficulty": "Hard",
        "topic_id": 12
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "By next month, I ___ on the project for six months.",
        "correct_answer": "will have been working",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows duration until a future time.",
        "options": [
            {
                "id": 511,
                "option_text": "will have been working",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "will work",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "am working",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "work",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 12
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "She ___ for the exam for three weeks by next Friday.",
        "correct_answer": "will have been studying",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous indicates continuous action lasting until a point.",
        "options": [
            {
                "id": 521,
                "option_text": "will have been studying",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "will study",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "studies",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "is studying",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 12
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "They ___ for two weeks by the time they return.",
        "correct_answer": "will have been traveling",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows ongoing travel duration.",
        "options": [
            {
                "id": 531,
                "option_text": "will have been traveling",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "will travel",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "travel",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "are traveling",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 12
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "He ___ on his thesis for a year by next summer.",
        "correct_answer": "will have been working",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows thesis work duration.",
        "options": [
            {
                "id": 541,
                "option_text": "will have been working",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "will work",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "works",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "is working",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 12
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "We ___ this series for months by the time it ends.",
        "correct_answer": "will have been watching",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows series viewing duration.",
        "options": [
            {
                "id": 551,
                "option_text": "will have been watching",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "will watch",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "watch",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "are watching",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 12
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "The children ___ in the garden for hours by dinner.",
        "correct_answer": "will have been playing",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows play duration before dinner.",
        "options": [
            {
                "id": 561,
                "option_text": "will have been playing",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "will play",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "play",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "are playing",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 12
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "By this time next year, I ___ in the new job.",
        "correct_answer": "will have been working",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows employment duration.",
        "options": [
            {
                "id": 571,
                "option_text": "will have been working",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "will work",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "work",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "am working",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 12
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "You ___ for us by the time we need you.",
        "correct_answer": "will have been working",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows work duration before need.",
        "options": [
            {
                "id": 581,
                "option_text": "will have been working",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "will work",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "work",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "are working",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 12
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "The team ___ on the project all next month.",
        "correct_answer": "will have been working",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows work duration during a month.",
        "options": [
            {
                "id": 591,
                "option_text": "will have been working",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "will work",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "works",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "are working",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 12
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "Before 7 PM, I ___ dinner for an hour.",
        "correct_answer": "will have been preparing",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows preparation duration.",
        "options": [
            {
                "id": 601,
                "option_text": "will have been preparing",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "will prepare",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "prepare",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "am preparing",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 12
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "By tomorrow, the crew ___ the building for weeks.",
        "correct_answer": "will have been demolishing",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows demolition duration.",
        "options": [
            {
                "id": 611,
                "option_text": "will have been demolishing",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "will demolish",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "demolishes",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "are demolishing",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 12
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "By next Friday, she ___ for the company for five years.",
        "correct_answer": "will have been working",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows employment duration.",
        "options": [
            {
                "id": 621,
                "option_text": "will have been working",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "will be working",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "will work",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "has been working",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 12
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Before the meeting, I ___ the report for hours.",
        "correct_answer": "will have been preparing",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows preparation duration.",
        "options": [
            {
                "id": 631,
                "option_text": "will have been preparing",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "will prepare",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "prepare",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "am preparing",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 12
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "When guests arrive, we ___ the presentation for hours.",
        "correct_answer": "will have been preparing",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows preparation duration.",
        "options": [
            {
                "id": 641,
                "option_text": "will have been preparing",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "will prepare",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "prepare",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "are preparing",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 12
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "By next month, students ___ for the exam for weeks.",
        "correct_answer": "will have been studying",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows study duration.",
        "options": [
            {
                "id": 651,
                "option_text": "will have been studying",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "will study",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "study",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "are studying",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 12
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "By next week, workers ___ the road for weeks.",
        "correct_answer": "will have been constructing",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows construction duration.",
        "options": [
            {
                "id": 661,
                "option_text": "will have been constructing",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "will construct",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "construct",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "are constructing",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 12
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "By noon, kids ___ in the pool for hours.",
        "correct_answer": "will have been swimming",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows swimming duration.",
        "options": [
            {
                "id": 671,
                "option_text": "will have been swimming",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "will swim",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "swim",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "are swimming",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 12
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Before midnight, he ___ the project for hours.",
        "correct_answer": "will have been completing",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows completion duration.",
        "options": [
            {
                "id": 681,
                "option_text": "will have been completing",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "will complete",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "completes",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "is completing",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 12
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "By year end, she ___ books for months.",
        "correct_answer": "will have been writing",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows writing duration.",
        "options": [
            {
                "id": 691,
                "option_text": "will have been writing",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "will write",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "writes",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "is writing",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 12
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Before deadline, they ___ requirements for weeks.",
        "correct_answer": "will have been meeting",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows duration meeting requirements.",
        "options": [
            {
                "id": 701,
                "option_text": "will have been meeting",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "will meet",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "meet",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "are meeting",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 12
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "By tomorrow, conference ___ issues for three days.",
        "correct_answer": "will have been discussing",
        "difficulty": "Medium",
        "explanation": "Future Perfect Continuous shows discussion duration.",
        "options": [
            {
                "id": 711,
                "option_text": "will have been discussing",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "will discuss",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "discusses",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "is discussing",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 12
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "By our arrival, bus ___ at the station for hours.",
        "correct_answer": "will have been waiting",
        "difficulty": "Medium",
        "explanation": "Future Perfect Continuous shows waiting duration.",
        "options": [
            {
                "id": 721,
                "option_text": "will have been waiting",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "will be waiting",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "will wait",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "has been waiting",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 12
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "Before children ___ lunch, teacher will explain.",
        "correct_answer": "eat",
        "difficulty": "Medium",
        "explanation": "In temporal clauses, use Present tense, not Future Perfect Continuous.",
        "options": [
            {
                "id": 731,
                "option_text": "eat",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "will have been eating",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "will eat",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "are eating",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 12
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "Throughout the event, delegates ___ for days.",
        "correct_answer": "will have been discussing",
        "difficulty": "Medium",
        "explanation": "Future Perfect Continuous shows discussion duration.",
        "options": [
            {
                "id": 741,
                "option_text": "will have been discussing",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "will discuss",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "discuss",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "are discussing",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 12
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "By Saturday, host ___ for hours.",
        "correct_answer": "will have been preparing",
        "difficulty": "Medium",
        "explanation": "Future Perfect Continuous shows preparation duration.",
        "options": [
            {
                "id": 751,
                "option_text": "will have been preparing",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "will prepare",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "prepares",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "is preparing",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 12
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "By next month, engineers ___ for weeks.",
        "correct_answer": "will have been inspecting",
        "difficulty": "Medium",
        "explanation": "Future Perfect Continuous shows inspection duration.",
        "options": [
            {
                "id": 761,
                "option_text": "will have been inspecting",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "will inspect",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "inspect",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "are inspecting",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 12
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "By meeting end, they ___ the budget for hours.",
        "correct_answer": "will have been reviewing",
        "difficulty": "Medium",
        "explanation": "Future Perfect Continuous shows review duration.",
        "options": [
            {
                "id": 771,
                "option_text": "will have been reviewing",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "will review",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "review",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "are reviewing",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 12
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "In the decade, scientists ___ treatments for years.",
        "correct_answer": "will have been developing",
        "difficulty": "Medium",
        "explanation": "Future Perfect Continuous shows development duration.",
        "options": [
            {
                "id": 781,
                "option_text": "will have been developing",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "will develop",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "develop",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "are developing",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 12
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "By year end, we ___ for months.",
        "correct_answer": "will have been achieving",
        "difficulty": "Medium",
        "explanation": "Future Perfect Continuous shows achievement duration.",
        "options": [
            {
                "id": 791,
                "option_text": "will have been achieving",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "will achieve",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "achieve",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "are achieving",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 12
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "By competition ___,athletes will have competed.",
        "correct_answer": "ends",
        "difficulty": "Medium",
        "explanation": "In temporal clauses, use Present tense for future reference.",
        "options": [
            {
                "id": 801,
                "option_text": "ends",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "will end",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "will have ended",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "is ending",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 12
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Unless you ___ hard, you won't succeed.",
        "correct_answer": "study",
        "difficulty": "Hard",
        "explanation": "In conditional clauses, use Present tense, not Future Perfect Continuous.",
        "options": [
            {
                "id": 811,
                "option_text": "study",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "will study",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "will have been studying",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "are studying",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 12
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "I'll call you when I ___ information.",
        "correct_answer": "have",
        "difficulty": "Hard",
        "explanation": "In temporal clauses, use Present tense, not Future Perfect Continuous.",
        "options": [
            {
                "id": 821,
                "option_text": "have",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "will have",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "will have been having",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "am having",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 12
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Once you ___ training, work independently.",
        "correct_answer": "complete",
        "difficulty": "Hard",
        "explanation": "In temporal clauses with 'once', use Present tense.",
        "options": [
            {
                "id": 831,
                "option_text": "complete",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "will complete",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "will have been completing",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "are completing",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 12
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "After guests ___, we will clean up.",
        "correct_answer": "leave",
        "difficulty": "Hard",
        "explanation": "In temporal clauses, use Present tense for future.",
        "options": [
            {
                "id": 841,
                "option_text": "leave",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "will leave",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "will have been leaving",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "are leaving",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 12
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "If it ___ tomorrow, we'll postpone.",
        "correct_answer": "rains",
        "difficulty": "Hard",
        "explanation": "In conditional clauses, use Present tense, not Future tense.",
        "options": [
            {
                "id": 851,
                "option_text": "rains",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "will rain",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "will have been raining",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "is raining",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 12
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "By report ___,deadline will have passed.",
        "correct_answer": "completion",
        "difficulty": "Hard",
        "explanation": "Use correct noun form in temporal expression.",
        "options": [
            {
                "id": 861,
                "option_text": "completion",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "completing",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "will be complete",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "are completing",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 12
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "By month end, team ___ for weeks.",
        "correct_answer": "will have been analyzing",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows analysis duration.",
        "options": [
            {
                "id": 871,
                "option_text": "will have been analyzing",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "will analyze",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "analyzes",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "is analyzing",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 12
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "While crew ___ foundation, we prepare.",
        "correct_answer": "is laying",
        "difficulty": "Hard",
        "explanation": "In temporal clauses, use Present Continuous, not Future Perfect.",
        "options": [
            {
                "id": 881,
                "option_text": "is laying",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "will be laying",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "will have been laying",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "lays",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 12
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "By month end, we ___ for weeks.",
        "correct_answer": "will have been processing",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows processing duration.",
        "options": [
            {
                "id": 891,
                "option_text": "will have been processing",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "will be processing",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "will process",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "are processing",
                "is_correct": 0,
                "question_id": 894
            }
        ],
        "topic_id": 12
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "By project end, satellites ___ for months.",
        "correct_answer": "will have been transmitting",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows transmission duration.",
        "options": [
            {
                "id": 901,
                "option_text": "will have been transmitting",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "will transmit",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "transmit",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "are transmitting",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 12
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "By phase end, developers ___ for months.",
        "correct_answer": "will have been coding",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows coding duration.",
        "options": [
            {
                "id": 911,
                "option_text": "will have been coding",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "will code",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "code",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "are coding",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 12
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "By event finish, marathoners ___ for hours.",
        "correct_answer": "will have been running",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows running duration.",
        "options": [
            {
                "id": 921,
                "option_text": "will have been running",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "will run",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "run",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "are running",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 12
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "By completion date, patient ___ for months.",
        "correct_answer": "will have been attending",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows attendance duration.",
        "options": [
            {
                "id": 931,
                "option_text": "will have been attending",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "will attend",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "attends",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "is attending",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 12
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "As you ___ stairs, hold the railing.",
        "correct_answer": "are climbing",
        "difficulty": "Hard",
        "explanation": "In imperative sentences, use Present Continuous.",
        "options": [
            {
                "id": 941,
                "option_text": "are climbing",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "will be climbing",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "will have been climbing",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "climb",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 12
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "In emergency, system ___ for hours.",
        "correct_answer": "will have been alerting",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows alert duration.",
        "options": [
            {
                "id": 951,
                "option_text": "will have been alerting",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "will alert",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "alerts",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "is alerting",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 12
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "By summer end, expedition ___ for weeks.",
        "correct_answer": "will have been venturing",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows expedition duration.",
        "options": [
            {
                "id": 961,
                "option_text": "will have been venturing",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "will venture",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "venture",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "are venturing",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 12
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Throughout year, infrastructure ___ for months.",
        "correct_answer": "will have been undergoing",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows upgrade duration.",
        "options": [
            {
                "id": 971,
                "option_text": "will have been undergoing",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "will undergo",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "undergoes",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "is undergoing",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 12
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "By next year, institutions ___ for months.",
        "correct_answer": "will have been implementing",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows implementation duration.",
        "options": [
            {
                "id": 981,
                "option_text": "will have been implementing",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "will implement",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "implement",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "are implementing",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 12
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "By target date, systems ___ for months.",
        "correct_answer": "will have been collecting",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows collection duration.",
        "options": [
            {
                "id": 991,
                "option_text": "will have been collecting",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "will collect",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "collects",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "is collecting",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 12
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "By quarter end, vendors ___ for months.",
        "correct_answer": "will have been delivering",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows delivery duration.",
        "options": [
            {
                "id": 1001,
                "option_text": "will have been delivering",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "will deliver",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "deliver",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "are delivering",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 12
    }
];

export default questions;