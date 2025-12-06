const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "By next month, I ___ [finish] this project.",
        "correct_answer": "will have finished",
        "suggest_answer": "finish",
        "explanation": "Future Perfect is used for an action that will be completed before a specific time in the future.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "She ___ [complete] her studies by next year.",
        "correct_answer": "will have completed",
        "suggest_answer": "complete",
        "explanation": "Future Perfect shows an action that will be done before a future point in time.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "They ___ [arrive] at the airport by 5 PM tomorrow.",
        "correct_answer": "will have arrived",
        "suggest_answer": "arrive",
        "explanation": "Use Future Perfect to express completion before a specified future time.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "He ___ [finish] his homework before dinner tonight.",
        "correct_answer": "will have finished",
        "suggest_answer": "finish",
        "explanation": "Future Perfect indicates an action completed before another future event.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "The children ___ [eat] lunch by the time we arrive.",
        "correct_answer": "will have eaten",
        "suggest_answer": "eat",
        "explanation": "Future Perfect shows completion before a future moment.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "We ___ [finish] the movie before you come home.",
        "correct_answer": "will have finished",
        "suggest_answer": "finish",
        "explanation": "Use Future Perfect for an action that will end before another future action.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "You ___ [swim] for two hours by 6 PM.",
        "correct_answer": "will have swum",
        "suggest_answer": "swim",
        "explanation": "Future Perfect describes duration completed by a specific future time.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "I ___ [read] three books by the end of the month.",
        "correct_answer": "will have read",
        "suggest_answer": "read",
        "explanation": "Future Perfect is used for accomplishment before a deadline.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "She ___ [cook] dinner by the time the guests arrive.",
        "correct_answer": "will have cooked",
        "suggest_answer": "cook",
        "explanation": "Use Future Perfect to show an action completed before a future event.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "They ___ [travel] to five countries by next summer.",
        "correct_answer": "will have traveled",
        "suggest_answer": "travel",
        "explanation": "Future Perfect indicates completion of multiple actions by a future time.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "The clients ___ [wait] for an hour by 3 PM.",
        "correct_answer": "will have waited",
        "suggest_answer": "wait",
        "explanation": "Future Perfect shows duration completed at a specific future moment.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "The birds ___ [migrate] south by December.",
        "correct_answer": "will have migrated",
        "suggest_answer": "migrate",
        "explanation": "Future Perfect describes seasonal completion by a future date.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "Tom ___ [run] ten miles by lunch time.",
        "correct_answer": "will have run",
        "suggest_answer": "run",
        "explanation": "Future Perfect shows exercise completion by a specific time.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "The computers ___ [process] the data by midnight.",
        "correct_answer": "will have processed",
        "suggest_answer": "process",
        "explanation": "Future Perfect indicates technical completion by a deadline.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "The baby ___ [sleep] for two hours by evening.",
        "correct_answer": "will have slept",
        "suggest_answer": "sleep",
        "explanation": "Future Perfect shows duration of sleep before a future time.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "By tomorrow morning, I ___ [fly] to Singapore.",
        "correct_answer": "will have flown",
        "suggest_answer": "fly",
        "explanation": "Future Perfect with time expressions shows completion by that moment.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "She ___ [teach] the class by 3 PM next Monday.",
        "correct_answer": "will have taught",
        "suggest_answer": "teach",
        "explanation": "Future Perfect describes teaching completion at a specific future time.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "They ___ [paint] the house by next week.",
        "correct_answer": "will have painted",
        "suggest_answer": "paint",
        "explanation": "Future Perfect indicates project completion by a future deadline.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "I ___ [shop] for groceries by Saturday afternoon.",
        "correct_answer": "will have shopped",
        "suggest_answer": "shop",
        "explanation": "Future Perfect shows shopping completion before a specific day.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "The sun ___ [set] by 7 PM tomorrow.",
        "correct_answer": "will have set",
        "suggest_answer": "set",
        "explanation": "Future Perfect describes natural event completion at a specific time.",
        "difficulty": "Easy",
        "topic_id": 11
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "By the time the conference starts, specialists ___ [arrive] from all countries.",
        "correct_answer": "will have arrived",
        "suggest_answer": "arrive",
        "explanation": "Future Perfect shows completion before a major future event.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "Before next Friday, the contractors ___ [pour] the concrete foundation.",
        "correct_answer": "will have poured",
        "suggest_answer": "pour",
        "explanation": "Future Perfect indicates construction completion by a deadline.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "By next month, the researchers ___ [analyze] all the data.",
        "correct_answer": "will have analyzed",
        "suggest_answer": "analyze",
        "explanation": "Future Perfect shows research completion in a time period.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "By the time the storm passes, sailors ___ [navigate] their vessels to safety.",
        "correct_answer": "will have navigated",
        "suggest_answer": "navigate",
        "explanation": "Future Perfect describes completion of a challenging action.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "Before the competition ends, athletes ___ [compete] for the championship.",
        "correct_answer": "will have competed",
        "suggest_answer": "compete",
        "explanation": "Future Perfect shows completion during a future event.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "By 5 PM next Tuesday, the band ___ [perform] at the concert.",
        "correct_answer": "will have performed",
        "suggest_answer": "perform",
        "explanation": "Future Perfect indicates performance completion at a specific time.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "Within the next six months, the company ___ [expand] to three new markets.",
        "correct_answer": "will have expanded",
        "suggest_answer": "expand",
        "explanation": "Future Perfect shows business expansion completion in a timeframe.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "Before next quarter, scientists ___ [experiment] with the new formula.",
        "correct_answer": "will have experimented",
        "suggest_answer": "experiment",
        "explanation": "Future Perfect indicates experimental completion before a deadline.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "By next year, she ___ [work] as a teacher for five years.",
        "correct_answer": "will have worked",
        "suggest_answer": "work",
        "explanation": "Future Perfect shows duration of employment by a future point.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "By 9 AM tomorrow, we ___ [attend] the entire first session.",
        "correct_answer": "will have attended",
        "suggest_answer": "attend",
        "explanation": "Future Perfect describes event attendance completion by a time.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "Before you call, I ___ [take] a shower.",
        "correct_answer": "will have taken",
        "suggest_answer": "take",
        "explanation": "Future Perfect shows action completion before another future action.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "By next week, they ___ [build] a new bridge across the river.",
        "correct_answer": "will have built",
        "suggest_answer": "build",
        "explanation": "Future Perfect indicates construction completion by a deadline.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "When he arrives, the children ___ [finish] their homework.",
        "correct_answer": "will have finished",
        "suggest_answer": "finish",
        "explanation": "Future Perfect shows completion before another person arrives.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "By the end of this month, I ___ [practice] the piano for 100 hours.",
        "correct_answer": "will have practiced",
        "suggest_answer": "practice",
        "explanation": "Future Perfect shows accumulated practice hours by a date.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "At this time next month, we ___ [celebrate] our anniversary.",
        "correct_answer": "will have celebrated",
        "suggest_answer": "celebrate",
        "explanation": "Future Perfect indicates celebration completion at that moment.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "Before the next quarter, construction workers ___ [renovate] the building.",
        "correct_answer": "will have renovated",
        "suggest_answer": "renovate",
        "explanation": "Future Perfect shows renovation completion in a timeframe.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "By the time the concert ends, everyone ___ [enjoy] the music.",
        "correct_answer": "will have enjoyed",
        "suggest_answer": "enjoy",
        "explanation": "Future Perfect indicates enjoyment completion during an event.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "Before lunch, the manager ___ [conduct] the meeting.",
        "correct_answer": "will have conducted",
        "suggest_answer": "conduct",
        "explanation": "Future Perfect shows meeting completion before a meal time.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "If the weather is favorable, technicians ___ [install] all equipment before summer ends.",
        "correct_answer": "will have installed",
        "suggest_answer": "install",
        "explanation": "Future Perfect shows installation completion in a conditional future scenario.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "By the time the conductor arrives, the orchestra ___ [rehearse] Beethoven's symphony.",
        "correct_answer": "will have rehearsed",
        "suggest_answer": "rehearse",
        "explanation": "Future Perfect indicates rehearsal completion before leadership arrives.",
        "difficulty": "Medium",
        "topic_id": 11
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "If you ___ [arrive] late, we will have already started.",
        "correct_answer": "arrive",
        "suggest_answer": "will arrive",
        "explanation": "In conditional clauses, use Present tense, not Future Perfect.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "By the time you ___ [come], I will have prepared everything.",
        "correct_answer": "come",
        "suggest_answer": "will come",
        "explanation": "In temporal clauses, use Present tense, not Future Perfect.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "Unless you ___ [submit] the report today, it will be late.",
        "correct_answer": "submit",
        "suggest_answer": "will submit",
        "explanation": "In conditional clauses, use Present tense, not Future Perfect.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "Once the deadline ___ [pass], no more submissions will be accepted.",
        "correct_answer": "passes",
        "suggest_answer": "will pass",
        "explanation": "In temporal clauses with 'once', use Present tense.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "As soon as you ___ [finish] eating, we can leave.",
        "correct_answer": "finish",
        "suggest_answer": "will finish",
        "explanation": "In temporal clauses, use Present tense, not Future tense.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "By the time the project deadline arrives, we ___ [work] non-stop for six months.",
        "correct_answer": "will have been working",
        "suggest_answer": "will work",
        "explanation": "Use Future Perfect Continuous to show duration up to a future point.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "Before the contract expires, vendors ___ [deliver] all supplies.",
        "correct_answer": "will have delivered",
        "suggest_answer": "will deliver",
        "explanation": "Future Perfect shows delivery completion before contract end.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "When the deadline ___ [approach] next week, we will have prepared the report.",
        "correct_answer": "approaches",
        "suggest_answer": "will approach",
        "explanation": "In temporal clauses, use Present tense when referring to a future moment.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "As long as conditions permit, they ___ [hike] to the summit by weekend.",
        "correct_answer": "will have hiked",
        "suggest_answer": "will hike",
        "explanation": "Future Perfect shows completion of hiking before weekend arrives.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "In case of delays, the system ___ [alert] all users before midnight.",
        "correct_answer": "will have alerted",
        "suggest_answer": "will alert",
        "explanation": "Future Perfect indicates alert completion before a specific time.",
        "difficulty": "Hard",
        "topic_id": 11
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "By next month, I ___ the project.",
        "correct_answer": "will have finished",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows completion before a specific future time.",
        "options": [
            {
                "id": 511,
                "option_text": "will have finished",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "will finish",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "am finishing",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "finish",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 11
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "She ___ her studies by next year.",
        "correct_answer": "will have completed",
        "difficulty": "Easy",
        "explanation": "Future Perfect is used for completion before a future point.",
        "options": [
            {
                "id": 521,
                "option_text": "will have completed",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "will complete",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "completes",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "is completing",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 11
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "They ___ at the airport by 5 PM tomorrow.",
        "correct_answer": "will have arrived",
        "difficulty": "Easy",
        "explanation": "Future Perfect expresses completion before a specified time.",
        "options": [
            {
                "id": 531,
                "option_text": "will have arrived",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "will arrive",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "arrive",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "are arriving",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 11
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "He ___ his homework before dinner tonight.",
        "correct_answer": "will have finished",
        "difficulty": "Easy",
        "explanation": "Future Perfect indicates completion before another event.",
        "options": [
            {
                "id": 541,
                "option_text": "will have finished",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "will finish",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "finishes",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "is finishing",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 11
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "We ___ the movie before you come home.",
        "correct_answer": "will have finished",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows completion before another future action.",
        "options": [
            {
                "id": 551,
                "option_text": "will have finished",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "will finish",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "finish",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "are finishing",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 11
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "The children ___ lunch by the time we arrive.",
        "correct_answer": "will have eaten",
        "difficulty": "Easy",
        "explanation": "Future Perfect describes completion before arrival.",
        "options": [
            {
                "id": 561,
                "option_text": "will have eaten",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "will eat",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "eat",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "are eating",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 11
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "By this time next year, I ___ in a new job.",
        "correct_answer": "will have been working",
        "difficulty": "Easy",
        "explanation": "Future Perfect Continuous shows duration by a specific time.",
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
        "topic_id": 11
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "You ___ for us by the time we need you.",
        "correct_answer": "will have worked",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows work completion by a future need.",
        "options": [
            {
                "id": 581,
                "option_text": "will have worked",
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
        "topic_id": 11
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "The team ___ on the project all next month.",
        "correct_answer": "will have worked",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows work completion during a period.",
        "options": [
            {
                "id": 591,
                "option_text": "will have worked",
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
        "topic_id": 11
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "Before 7 PM, I ___ a shower.",
        "correct_answer": "will have taken",
        "difficulty": "Easy",
        "explanation": "Future Perfect indicates shower completion before a time.",
        "options": [
            {
                "id": 601,
                "option_text": "will have taken",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "will take",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "take",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "am taking",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 11
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "By tomorrow morning, the construction crew ___ the building.",
        "correct_answer": "will have demolished",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows demolition completion by a date.",
        "options": [
            {
                "id": 611,
                "option_text": "will have demolished",
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
        "topic_id": 11
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "By next Friday, she ___ for the company for five years.",
        "correct_answer": "will have worked",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows duration of employment.",
        "options": [
            {
                "id": 621,
                "option_text": "will have worked",
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
        "topic_id": 11
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Before the meeting, I ___ the report.",
        "correct_answer": "will have prepared",
        "difficulty": "Easy",
        "explanation": "Future Perfect indicates preparation completion before an event.",
        "options": [
            {
                "id": 631,
                "option_text": "will have prepared",
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
        "topic_id": 11
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "When the guests arrive, we ___ the presentation.",
        "correct_answer": "will have finished",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows completion before arrival.",
        "options": [
            {
                "id": 641,
                "option_text": "will have finished",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "will finish",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "finish",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "are finishing",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 11
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "By next month, the students ___ for the final exam.",
        "correct_answer": "will have studied",
        "difficulty": "Easy",
        "explanation": "Future Perfect indicates study completion by a deadline.",
        "options": [
            {
                "id": 651,
                "option_text": "will have studied",
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
        "topic_id": 11
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "By next week, the workers ___ the new road.",
        "correct_answer": "will have constructed",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows construction completion by a date.",
        "options": [
            {
                "id": 661,
                "option_text": "will have constructed",
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
        "topic_id": 11
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "By noon tomorrow, the kids ___ in the swimming pool.",
        "correct_answer": "will have swum",
        "difficulty": "Easy",
        "explanation": "Future Perfect indicates swimming completion by a time.",
        "options": [
            {
                "id": 671,
                "option_text": "will have swum",
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
        "topic_id": 11
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Before midnight, he ___ the entire project.",
        "correct_answer": "will have completed",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows project completion before midnight.",
        "options": [
            {
                "id": 681,
                "option_text": "will have completed",
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
        "topic_id": 11
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "By the end of the year, she ___ three books.",
        "correct_answer": "will have written",
        "difficulty": "Easy",
        "explanation": "Future Perfect indicates writing completion by year-end.",
        "options": [
            {
                "id": 691,
                "option_text": "will have written",
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
        "topic_id": 11
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Before the deadline, they ___ all requirements.",
        "correct_answer": "will have met",
        "difficulty": "Easy",
        "explanation": "Future Perfect shows requirement completion before deadline.",
        "options": [
            {
                "id": 701,
                "option_text": "will have met",
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
        "topic_id": 11
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "At this time tomorrow, the conference ___ important issues.",
        "correct_answer": "will have discussed",
        "difficulty": "Medium",
        "explanation": "Future Perfect shows discussion completion by a specific time.",
        "options": [
            {
                "id": 711,
                "option_text": "will have discussed",
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
        "topic_id": 11
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "By the time we arrive, the bus ___ at the station.",
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
        "topic_id": 11
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "Before the children ___ lunch, the teacher will explain.",
        "correct_answer": "eat",
        "difficulty": "Medium",
        "explanation": "In temporal clauses, use Present tense, not Future Perfect.",
        "options": [
            {
                "id": 731,
                "option_text": "eat",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "will have eaten",
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
        "topic_id": 11
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "Throughout the conference, delegates ___ about global issues.",
        "correct_answer": "will have discussed",
        "difficulty": "Medium",
        "explanation": "Future Perfect shows discussion completion during an event.",
        "options": [
            {
                "id": 741,
                "option_text": "will have discussed",
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
        "topic_id": 11
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "By Saturday, the host ___ the presentation.",
        "correct_answer": "will have finished",
        "difficulty": "Medium",
        "explanation": "Future Perfect indicates completion by a specific day.",
        "options": [
            {
                "id": 751,
                "option_text": "will have finished",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "will finish",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "finishes",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "is finishing",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 11
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "By next month, engineers ___ the bridge.",
        "correct_answer": "will have inspected",
        "difficulty": "Medium",
        "explanation": "Future Perfect shows inspection completion by a deadline.",
        "options": [
            {
                "id": 761,
                "option_text": "will have inspected",
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
        "topic_id": 11
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "By the time the meeting ends, they ___ the budget.",
        "correct_answer": "will have reviewed",
        "difficulty": "Medium",
        "explanation": "Future Perfect shows review completion before meeting end.",
        "options": [
            {
                "id": 771,
                "option_text": "will have reviewed",
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
        "topic_id": 11
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "In the next decade, scientists ___ new medical treatments.",
        "correct_answer": "will have developed",
        "difficulty": "Medium",
        "explanation": "Future Perfect shows development completion over a period.",
        "options": [
            {
                "id": 781,
                "option_text": "will have developed",
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
        "topic_id": 11
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "Before the end of the year, we ___ all targets.",
        "correct_answer": "will have achieved",
        "difficulty": "Medium",
        "explanation": "Future Perfect shows achievement completion by year-end.",
        "options": [
            {
                "id": 791,
                "option_text": "will have achieved",
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
                "option_text": "will have been achieving",
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
        "topic_id": 11
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "By the time the competition ___, athletes will have competed.",
        "correct_answer": "ends",
        "difficulty": "Medium",
        "explanation": "In temporal clauses, use Present tense when referring to future.",
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
        "topic_id": 11
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Unless you ___ hard, you won't succeed.",
        "correct_answer": "study",
        "difficulty": "Hard",
        "explanation": "In conditional clauses, use Present tense, not Future Perfect.",
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
                "option_text": "will have studied",
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
        "topic_id": 11
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "I'll call you when I ___ more information.",
        "correct_answer": "have",
        "difficulty": "Hard",
        "explanation": "In temporal clauses, use Present tense, not Future Perfect.",
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
                "option_text": "will have had",
                "is_correct": 0,
                "question_id": 823
            },
            {
                "id": 824,
                "option_text": "am having",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 11
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Once you ___ the training, you can work independently.",
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
                "option_text": "will have completed",
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
        "topic_id": 11
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "After the guests ___, we will clean up.",
        "correct_answer": "leave",
        "difficulty": "Hard",
        "explanation": "In temporal clauses, use Present tense for future reference.",
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
                "option_text": "will have left",
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
        "topic_id": 11
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "If it ___ tomorrow, we will postpone the event.",
        "correct_answer": "rains",
        "difficulty": "Hard",
        "explanation": "In conditional clauses, use Present tense, not Future Perfect.",
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
                "option_text": "will have rained",
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
        "topic_id": 11
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "By the time we ___ the report, the deadline will pass.",
        "correct_answer": "finish",
        "difficulty": "Hard",
        "explanation": "In temporal clauses, use Present tense, not Future Perfect.",
        "options": [
            {
                "id": 861,
                "option_text": "finish",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "will finish",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "will have finished",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "are finishing",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 11
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "By next month, the team ___ the data analysis.",
        "correct_answer": "will have initiated",
        "difficulty": "Hard",
        "explanation": "Future Perfect shows completion by a deadline.",
        "options": [
            {
                "id": 871,
                "option_text": "will have initiated",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "will initiate",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "initiates",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "is initiating",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 11
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "While the construction crew ___ the foundation, we will prepare.",
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
                "option_text": "will have laid",
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
        "topic_id": 11
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "By the end of next month, we ___ the goods.",
        "correct_answer": "will have processed",
        "difficulty": "Hard",
        "explanation": "Future Perfect shows processing completion by month-end.",
        "options": [
            {
                "id": 891,
                "option_text": "will have processed",
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
                "question_id": 89
            }
        ],
        "topic_id": 11
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "By the time the project ends, satellites ___ data continuously.",
        "correct_answer": "will have been transmitting",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows ongoing transmission until project end.",
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
        "topic_id": 11
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "By the end of the development phase, developers ___ the new features.",
        "correct_answer": "will have coded",
        "difficulty": "Hard",
        "explanation": "Future Perfect shows coding completion by phase end.",
        "options": [
            {
                "id": 911,
                "option_text": "will have coded",
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
        "topic_id": 11
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "By the time the event finishes, marathoners ___ for hours.",
        "correct_answer": "will have been running",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows running duration through event.",
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
        "topic_id": 11
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "By the completion date, the patient ___ physiotherapy sessions.",
        "correct_answer": "will have attended",
        "difficulty": "Hard",
        "explanation": "Future Perfect shows therapy attendance by completion.",
        "options": [
            {
                "id": 931,
                "option_text": "will have attended",
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
        "topic_id": 11
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "As you ___ the stairs, hold the railing.",
        "correct_answer": "are climbing",
        "difficulty": "Hard",
        "explanation": "In imperative sentences, use Present Continuous, not Future Perfect.",
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
                "option_text": "will have climbed",
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
        "topic_id": 11
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "In case of emergency, the system ___ all users.",
        "correct_answer": "will have alerted",
        "difficulty": "Hard",
        "explanation": "Future Perfect shows alert completion during emergency.",
        "options": [
            {
                "id": 951,
                "option_text": "will have alerted",
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
        "topic_id": 11
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "By summer's end, the expedition ___ into the mountains.",
        "correct_answer": "will have ventured",
        "difficulty": "Hard",
        "explanation": "Future Perfect shows expedition completion by season end.",
        "options": [
            {
                "id": 961,
                "option_text": "will have ventured",
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
        "topic_id": 11
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Throughout the year, the infrastructure ___ upgrades.",
        "correct_answer": "will have undergone",
        "difficulty": "Hard",
        "explanation": "Future Perfect shows infrastructure upgrade completion.",
        "options": [
            {
                "id": 971,
                "option_text": "will have undergone",
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
        "topic_id": 11
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "By next year, institutions ___ online learning platforms.",
        "correct_answer": "will have implemented",
        "difficulty": "Hard",
        "explanation": "Future Perfect shows implementation completion by year-end.",
        "options": [
            {
                "id": 981,
                "option_text": "will have implemented",
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
        "topic_id": 11
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "By the target date, systems ___ data continuously.",
        "correct_answer": "will have been collecting",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows data collection through date.",
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
        "topic_id": 11
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "By quarter's end, vendors ___ products throughout distribution.",
        "correct_answer": "will have been delivering",
        "difficulty": "Hard",
        "explanation": "Future Perfect Continuous shows delivery through quarter.",
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
        "topic_id": 11
    }
];

export default questions;