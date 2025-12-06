const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "She speaks ___ [slowly].",
        "correct_answer": "slowly",
        "suggest_answer": "slowly",
        "explanation": "Slowly is an adverb of manner describing how she speaks.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "I will come ___ [tomorrow].",
        "correct_answer": "tomorrow",
        "suggest_answer": "tomorrow",
        "explanation": "Tomorrow is an adverb of time indicating when.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "He went ___ [outside].",
        "correct_answer": "outside",
        "suggest_answer": "outside",
        "explanation": "Outside is an adverb of place indicating where.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "She ___ [always] arrives on time.",
        "correct_answer": "always",
        "suggest_answer": "always",
        "explanation": "Always is an adverb of frequency showing how often.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "The music is ___ [very] loud.",
        "correct_answer": "very",
        "suggest_answer": "very",
        "explanation": "Very is an adverb of degree modifying the adjective loud.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "I ___ [definitely] will attend the meeting.",
        "correct_answer": "definitely",
        "suggest_answer": "definitely",
        "explanation": "Definitely is an adverb of certainty expressing sureness.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "He ran ___ [quickly] to the store.",
        "correct_answer": "quickly",
        "suggest_answer": "quickly",
        "explanation": "Quickly is an adverb of manner describing how he ran.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "She works ___ [here] at the office.",
        "correct_answer": "here",
        "suggest_answer": "here",
        "explanation": "Here is an adverb of place showing where.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "We ___ [often] go to the beach.",
        "correct_answer": "often",
        "suggest_answer": "often",
        "explanation": "Often is an adverb of frequency indicating how often.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "The food is ___ [extremely] delicious.",
        "correct_answer": "extremely",
        "suggest_answer": "extremely",
        "explanation": "Extremely is an adverb of degree showing the extent.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "She answers ___ [correctly].",
        "correct_answer": "correctly",
        "suggest_answer": "correctly",
        "explanation": "Correctly is an adverb of manner describing how she answers.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "I saw him ___ [yesterday].",
        "correct_answer": "yesterday",
        "suggest_answer": "yesterday",
        "explanation": "Yesterday is an adverb of time indicating when.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "The children played ___ [inside].",
        "correct_answer": "inside",
        "suggest_answer": "inside",
        "explanation": "Inside is an adverb of place showing location.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "He ___ [never] lies.",
        "correct_answer": "never",
        "suggest_answer": "never",
        "explanation": "Never is an adverb of frequency meaning not at any time.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "The room is ___ [quite] spacious.",
        "correct_answer": "quite",
        "suggest_answer": "quite",
        "explanation": "Quite is an adverb of degree modifying spacious.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "I am ___ [probably] going to the party.",
        "correct_answer": "probably",
        "suggest_answer": "probably",
        "explanation": "Probably is an adverb of certainty showing likelihood.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "She danced ___ [gracefully].",
        "correct_answer": "gracefully",
        "suggest_answer": "gracefully",
        "explanation": "Gracefully is an adverb of manner describing how she danced.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "They arrived ___ [early] in the morning.",
        "correct_answer": "early",
        "suggest_answer": "early",
        "explanation": "Early is an adverb of time indicating when they arrived.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "He walked ___ [upstairs].",
        "correct_answer": "upstairs",
        "suggest_answer": "upstairs",
        "explanation": "Upstairs is an adverb of place showing direction.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "She ___ [rarely] complains.",
        "correct_answer": "rarely",
        "suggest_answer": "rarely",
        "explanation": "Rarely is an adverb of frequency meaning seldom.",
        "difficulty": "Easy",
        "topic_id": 18
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "The car is ___ [absolutely] beautiful.",
        "correct_answer": "absolutely",
        "suggest_answer": "absolutely",
        "explanation": "Absolutely is an adverb of degree expressing maximum extent.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "I ___ [certainly] agree with you.",
        "correct_answer": "certainly",
        "suggest_answer": "certainly",
        "explanation": "Certainly is an adverb of certainty expressing agreement.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "She speaks English ___ [fluently].",
        "correct_answer": "fluently",
        "suggest_answer": "fluently",
        "explanation": "Fluently is an adverb of manner describing how she speaks.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "The meeting is scheduled for ___ [next week].",
        "correct_answer": "next week",
        "suggest_answer": "next week",
        "explanation": "Next week is an adverb of time indicating when.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "The book is located ___ [downstairs] in the library.",
        "correct_answer": "downstairs",
        "suggest_answer": "downstairs",
        "explanation": "Downstairs is an adverb of place indicating location.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "I ___ [sometimes] eat breakfast late.",
        "correct_answer": "sometimes",
        "suggest_answer": "sometimes",
        "explanation": "Sometimes is an adverb of frequency showing occasional occurrence.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "The price is ___ [slightly] higher than before.",
        "correct_answer": "slightly",
        "suggest_answer": "slightly",
        "explanation": "Slightly is an adverb of degree showing small extent.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "I ___ [undoubtedly] made the right choice.",
        "correct_answer": "undoubtedly",
        "suggest_answer": "undoubtedly",
        "explanation": "Undoubtedly is an adverb of certainty expressing no doubt.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "The rain fell ___ [heavily] all night.",
        "correct_answer": "heavily",
        "suggest_answer": "heavily",
        "explanation": "Heavily is an adverb of manner describing the intensity.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "We travel ___ [there] every summer.",
        "correct_answer": "there",
        "suggest_answer": "there",
        "explanation": "There is an adverb of place indicating location.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "He ___ [hardly] ever misses work.",
        "correct_answer": "hardly",
        "suggest_answer": "hardly",
        "explanation": "Hardly is an adverb of frequency meaning almost not.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "The solution is ___ [far] better than before.",
        "correct_answer": "far",
        "suggest_answer": "far",
        "explanation": "Far is an adverb of degree showing extent of improvement.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "I ___ [possibly] cannot attend tomorrow.",
        "correct_answer": "possibly",
        "suggest_answer": "possibly",
        "explanation": "Possibly is an adverb of certainty showing uncertainty.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "The child wrote ___ [neatly].",
        "correct_answer": "neatly",
        "suggest_answer": "neatly",
        "explanation": "Neatly is an adverb of manner describing how he wrote.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "She arrives ___ [on time] every day.",
        "correct_answer": "on time",
        "suggest_answer": "on time",
        "explanation": "On time is an adverbial phrase indicating punctuality.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "They are ___ [evidently] happy with the results.",
        "correct_answer": "evidently",
        "suggest_answer": "evidently",
        "explanation": "Evidently is an adverb of certainty showing obviousness.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "He drives ___ [carefully] through the city.",
        "correct_answer": "carefully",
        "suggest_answer": "carefully",
        "explanation": "Carefully is an adverb of manner describing how he drives.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "The event will be held ___ [next month].",
        "correct_answer": "next month",
        "suggest_answer": "next month",
        "explanation": "Next month is an adverb of time indicating when.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "The museum is ___ [nearby].",
        "correct_answer": "nearby",
        "suggest_answer": "nearby",
        "explanation": "Nearby is an adverb of place showing proximity.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "I ___ [regularly] exercise three times a week.",
        "correct_answer": "regularly",
        "suggest_answer": "regularly",
        "explanation": "Regularly is an adverb of frequency showing habitual action.",
        "difficulty": "Medium",
        "topic_id": 18
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "The work is ___ [completely] finished.",
        "correct_answer": "completely",
        "suggest_answer": "completely",
        "explanation": "Completely is an adverb of degree showing total extent.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "I ___ [unquestionably] support your decision.",
        "correct_answer": "unquestionably",
        "suggest_answer": "unquestionably",
        "explanation": "Unquestionably is an adverb of certainty expressing conviction.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "The speaker presented the information ___ [eloquently].",
        "correct_answer": "eloquently",
        "suggest_answer": "eloquently",
        "explanation": "Eloquently is an adverb of manner describing delivery.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "The project will commence ___ [in two weeks].",
        "correct_answer": "in two weeks",
        "suggest_answer": "in two weeks",
        "explanation": "In two weeks is an adverb of time indicating timing.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "The laboratory is located ___ [across the street].",
        "correct_answer": "across the street",
        "suggest_answer": "across the street",
        "explanation": "Across the street is an adverbial phrase of place.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "She ___ [seldom] makes mistakes in her work.",
        "correct_answer": "seldom",
        "suggest_answer": "seldom",
        "explanation": "Seldom is an adverb of frequency meaning rarely.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "The results are ___ [remarkably] consistent.",
        "correct_answer": "remarkably",
        "suggest_answer": "remarkably",
        "explanation": "Remarkably is an adverb of degree showing surprising extent.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "The outcome is ___ [allegedly] due to weather conditions.",
        "correct_answer": "allegedly",
        "suggest_answer": "allegedly",
        "explanation": "Allegedly is an adverb of certainty expressing unconfirmed claim.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "The artist painted the mural ___ [meticulously].",
        "correct_answer": "meticulously",
        "suggest_answer": "meticulously",
        "explanation": "Meticulously is an adverb of manner showing careful attention.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "The conference will take place ___ [in the auditorium upstairs].",
        "correct_answer": "in the auditorium upstairs",
        "suggest_answer": "in the auditorium upstairs",
        "explanation": "Adverbial phrase combining place and direction.",
        "difficulty": "Hard",
        "topic_id": 18
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "She speaks ___.",
        "correct_answer": "slowly",
        "difficulty": "Easy",
        "explanation": "Slowly is an adverb of manner.",
        "options": [
            {
                "id": 511,
                "option_text": "slowly",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "slow",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "slowness",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "slowly speaking",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 18
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "I will come ___.",
        "correct_answer": "tomorrow",
        "difficulty": "Easy",
        "explanation": "Tomorrow is an adverb of time.",
        "options": [
            {
                "id": 521,
                "option_text": "tomorrow",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "tomorrows",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "tomorrow's",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "tomorrowly",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 18
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "He went ___.",
        "correct_answer": "outside",
        "difficulty": "Easy",
        "explanation": "Outside is an adverb of place.",
        "options": [
            {
                "id": 531,
                "option_text": "outside",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "outsider",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "outsidely",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "outside time",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 18
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "She ___ arrives on time.",
        "correct_answer": "always",
        "difficulty": "Easy",
        "explanation": "Always is an adverb of frequency.",
        "options": [
            {
                "id": 541,
                "option_text": "always",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "all ways",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "alway",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "all-ways",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 18
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "The music is ___ loud.",
        "correct_answer": "very",
        "difficulty": "Easy",
        "explanation": "Very is an adverb of degree.",
        "options": [
            {
                "id": 551,
                "option_text": "very",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "veryly",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "much",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "very much",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 18
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "I ___ will attend the meeting.",
        "correct_answer": "definitely",
        "difficulty": "Easy",
        "explanation": "Definitely is an adverb of certainty.",
        "options": [
            {
                "id": 561,
                "option_text": "definitely",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "definite",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "definitely-will",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "definition",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 18
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "He ran ___ to the store.",
        "correct_answer": "quickly",
        "difficulty": "Easy",
        "explanation": "Quickly is an adverb of manner.",
        "options": [
            {
                "id": 571,
                "option_text": "quickly",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "quick",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "quickest",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "quicker",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 18
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "She works ___ at the office.",
        "correct_answer": "here",
        "difficulty": "Easy",
        "explanation": "Here is an adverb of place.",
        "options": [
            {
                "id": 581,
                "option_text": "here",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "her",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "heres",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "herein",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 18
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "We ___ go to the beach.",
        "correct_answer": "often",
        "difficulty": "Easy",
        "explanation": "Often is an adverb of frequency.",
        "options": [
            {
                "id": 591,
                "option_text": "often",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "ofter",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "often times",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "oftenly",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 18
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "The food is ___ delicious.",
        "correct_answer": "extremely",
        "difficulty": "Easy",
        "explanation": "Extremely is an adverb of degree.",
        "options": [
            {
                "id": 601,
                "option_text": "extremely",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "extreme",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "extremelyly",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "extremeness",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 18
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "She answers ___.",
        "correct_answer": "correctly",
        "difficulty": "Easy",
        "explanation": "Correctly is an adverb of manner.",
        "options": [
            {
                "id": 611,
                "option_text": "correctly",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "correct",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "correctly speaking",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "correctl",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 18
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "I saw him ___.",
        "correct_answer": "yesterday",
        "difficulty": "Easy",
        "explanation": "Yesterday is an adverb of time.",
        "options": [
            {
                "id": 621,
                "option_text": "yesterday",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "yesterdays",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "yesterdays'",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "yesterdayly",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 18
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "The children played ___.",
        "correct_answer": "inside",
        "difficulty": "Easy",
        "explanation": "Inside is an adverb of place.",
        "options": [
            {
                "id": 631,
                "option_text": "inside",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "insidely",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "inside here",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "in-side",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 18
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "He ___ lies.",
        "correct_answer": "never",
        "difficulty": "Easy",
        "explanation": "Never is an adverb of frequency.",
        "options": [
            {
                "id": 641,
                "option_text": "never",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "never-er",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "neverly",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "neverless",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 18
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "The room is ___ spacious.",
        "correct_answer": "quite",
        "difficulty": "Easy",
        "explanation": "Quite is an adverb of degree.",
        "options": [
            {
                "id": 651,
                "option_text": "quite",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "quitely",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "quite so",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "quite a",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 18
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "I am ___ going to the party.",
        "correct_answer": "probably",
        "difficulty": "Easy",
        "explanation": "Probably is an adverb of certainty.",
        "options": [
            {
                "id": 661,
                "option_text": "probably",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "probable",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "probablyly",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "probably so",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 18
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "She danced ___.",
        "correct_answer": "gracefully",
        "difficulty": "Easy",
        "explanation": "Gracefully is an adverb of manner.",
        "options": [
            {
                "id": 671,
                "option_text": "gracefully",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "graceful",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "grace-fully",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "gracefullyly",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 18
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "They arrived ___ in the morning.",
        "correct_answer": "early",
        "difficulty": "Easy",
        "explanation": "Early is an adverb of time.",
        "options": [
            {
                "id": 681,
                "option_text": "early",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "earl",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "earlier",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "earliness",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 18
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "He walked ___.",
        "correct_answer": "upstairs",
        "difficulty": "Easy",
        "explanation": "Upstairs is an adverb of place.",
        "options": [
            {
                "id": 691,
                "option_text": "upstairs",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "up-stairs",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "upstairly",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "upstairs room",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 18
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "She ___ complains.",
        "correct_answer": "rarely",
        "difficulty": "Easy",
        "explanation": "Rarely is an adverb of frequency.",
        "options": [
            {
                "id": 701,
                "option_text": "rarely",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "rare",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "rarely speaking",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "rarely",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 18
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "The car is ___ beautiful.",
        "correct_answer": "absolutely",
        "difficulty": "Medium",
        "explanation": "Absolutely is an adverb of degree.",
        "options": [
            {
                "id": 711,
                "option_text": "absolutely",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "absolute",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "absolutelyly",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "absolutely beautiful",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 18
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "I ___ agree with you.",
        "correct_answer": "certainly",
        "difficulty": "Medium",
        "explanation": "Certainly is an adverb of certainty.",
        "options": [
            {
                "id": 721,
                "option_text": "certainly",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "certain",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "certainlyly",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "certain-ly",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 18
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "She speaks English ___.",
        "correct_answer": "fluently",
        "difficulty": "Medium",
        "explanation": "Fluently is an adverb of manner.",
        "options": [
            {
                "id": 731,
                "option_text": "fluently",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "fluent",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "fluence",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "fluentlyly",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 18
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "The meeting is scheduled for ___.",
        "correct_answer": "next week",
        "difficulty": "Medium",
        "explanation": "Next week is an adverb of time.",
        "options": [
            {
                "id": 741,
                "option_text": "next week",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "next weeks",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "next weekly",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "the next week",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 18
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "The book is located ___ in the library.",
        "correct_answer": "downstairs",
        "difficulty": "Medium",
        "explanation": "Downstairs is an adverb of place.",
        "options": [
            {
                "id": 751,
                "option_text": "downstairs",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "down stairs",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "downstairs room",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "down-stairs",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 18
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "I ___ eat breakfast late.",
        "correct_answer": "sometimes",
        "difficulty": "Medium",
        "explanation": "Sometimes is an adverb of frequency.",
        "options": [
            {
                "id": 761,
                "option_text": "sometimes",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "sometime",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "some times",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "sometimesl",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 18
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "The price is ___ higher than before.",
        "correct_answer": "slightly",
        "difficulty": "Medium",
        "explanation": "Slightly is an adverb of degree.",
        "options": [
            {
                "id": 771,
                "option_text": "slightly",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "slight",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "slightlyly",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "slighten",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 18
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "I ___ made the right choice.",
        "correct_answer": "undoubtedly",
        "difficulty": "Medium",
        "explanation": "Undoubtedly is an adverb of certainty.",
        "options": [
            {
                "id": 781,
                "option_text": "undoubtedly",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "undoubted",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "undoubtedlyly",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "un-doubtedly",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 18
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "The rain fell ___ all night.",
        "correct_answer": "heavily",
        "difficulty": "Medium",
        "explanation": "Heavily is an adverb of manner.",
        "options": [
            {
                "id": 791,
                "option_text": "heavily",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "heavy",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "heavyly",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "heavilyly",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 18
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "We travel ___ every summer.",
        "correct_answer": "there",
        "difficulty": "Medium",
        "explanation": "There is an adverb of place.",
        "options": [
            {
                "id": 801,
                "option_text": "there",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "their",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "they're",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "therein",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 18
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "The work is ___ finished.",
        "correct_answer": "completely",
        "difficulty": "Hard",
        "explanation": "Completely is an adverb of degree.",
        "options": [
            {
                "id": 811,
                "option_text": "completely",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "complete",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "completely-ly",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "completeness",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 18
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "I ___ support your decision.",
        "correct_answer": "unquestionably",
        "difficulty": "Hard",
        "explanation": "Unquestionably is an adverb of certainty.",
        "options": [
            {
                "id": 821,
                "option_text": "unquestionably",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "unquestioned",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "unquestionablyly",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "un-questionably",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 18
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "The speaker presented the information ___.",
        "correct_answer": "eloquently",
        "difficulty": "Hard",
        "explanation": "Eloquently is an adverb of manner.",
        "options": [
            {
                "id": 831,
                "option_text": "eloquently",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "eloquent",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "eloquentlyly",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "eloquence",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 18
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "The project will commence ___.",
        "correct_answer": "in two weeks",
        "difficulty": "Hard",
        "explanation": "In two weeks is an adverb of time.",
        "options": [
            {
                "id": 841,
                "option_text": "in two weeks",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "two weeks",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "in the two weeks",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "two-weeks",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 18
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "The laboratory is located ___.",
        "correct_answer": "across the street",
        "difficulty": "Hard",
        "explanation": "Across the street is an adverb of place.",
        "options": [
            {
                "id": 851,
                "option_text": "across the street",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "across",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "across to the street",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "a-cross the street",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 18
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "She ___ makes mistakes in her work.",
        "correct_answer": "seldom",
        "difficulty": "Hard",
        "explanation": "Seldom is an adverb of frequency.",
        "options": [
            {
                "id": 861,
                "option_text": "seldom",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "select",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "seldomy",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "seldomly",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 18
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "The results are ___ consistent.",
        "correct_answer": "remarkably",
        "difficulty": "Hard",
        "explanation": "Remarkably is an adverb of degree.",
        "options": [
            {
                "id": 871,
                "option_text": "remarkably",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "remarkable",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "remarkablyly",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "remark",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 18
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "The outcome is ___ due to weather conditions.",
        "correct_answer": "allegedly",
        "difficulty": "Hard",
        "explanation": "Allegedly is an adverb of certainty.",
        "options": [
            {
                "id": 881,
                "option_text": "allegedly",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "alleged",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "allegeds",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "allegedy",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 18
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "The artist painted the mural ___.",
        "correct_answer": "meticulously",
        "difficulty": "Hard",
        "explanation": "Meticulously is an adverb of manner.",
        "options": [
            {
                "id": 891,
                "option_text": "meticulously",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "meticulous",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "meticulouslyly",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "meticulousness",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 18
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "The conference will take place ___.",
        "correct_answer": "in the auditorium upstairs",
        "difficulty": "Hard",
        "explanation": "Adverbial phrase combining place and direction.",
        "options": [
            {
                "id": 901,
                "option_text": "in the auditorium upstairs",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "in the auditorium",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "upstairs auditorium",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "in-the-auditorium-upstairs",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 18
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "He ___ ever misses work.",
        "correct_answer": "hardly",
        "difficulty": "Hard",
        "explanation": "Hardly is an adverb of frequency.",
        "options": [
            {
                "id": 911,
                "option_text": "hardly",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "hard",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "hardly-ly",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "hardlyly",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 18
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "The solution is ___ better than before.",
        "correct_answer": "far",
        "difficulty": "Hard",
        "explanation": "Far is an adverb of degree.",
        "options": [
            {
                "id": 921,
                "option_text": "far",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "farther",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "farly",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "farness",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 18
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "I ___ cannot attend tomorrow.",
        "correct_answer": "possibly",
        "difficulty": "Hard",
        "explanation": "Possibly is an adverb of certainty.",
        "options": [
            {
                "id": 931,
                "option_text": "possibly",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "possible",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "possiblyly",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "possiblity",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 18
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "The child wrote ___.",
        "correct_answer": "neatly",
        "difficulty": "Hard",
        "explanation": "Neatly is an adverb of manner.",
        "options": [
            {
                "id": 941,
                "option_text": "neatly",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "neat",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "neatlyly",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "neatness",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 18
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "She arrives ___ every day.",
        "correct_answer": "on time",
        "difficulty": "Hard",
        "explanation": "On time is an adverbial phrase.",
        "options": [
            {
                "id": 951,
                "option_text": "on time",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "on the time",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "in time",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "timely",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 18
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "They are ___ happy with the results.",
        "correct_answer": "evidently",
        "difficulty": "Hard",
        "explanation": "Evidently is an adverb of certainty.",
        "options": [
            {
                "id": 961,
                "option_text": "evidently",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "evident",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "evidentlyly",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "evidence",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 18
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "He drives ___ through the city.",
        "correct_answer": "carefully",
        "difficulty": "Hard",
        "explanation": "Carefully is an adverb of manner.",
        "options": [
            {
                "id": 971,
                "option_text": "carefully",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "careful",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "carefullyly",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "carefulness",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 18
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "The event will be held ___.",
        "correct_answer": "next month",
        "difficulty": "Hard",
        "explanation": "Next month is an adverb of time.",
        "options": [
            {
                "id": 981,
                "option_text": "next month",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "the next month",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "next months",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "next monthly",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 18
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "The museum is ___.",
        "correct_answer": "nearby",
        "difficulty": "Hard",
        "explanation": "Nearby is an adverb of place.",
        "options": [
            {
                "id": 991,
                "option_text": "nearby",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "near by",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "nearbys",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "nearbyly",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 18
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "I ___ exercise three times a week.",
        "correct_answer": "regularly",
        "difficulty": "Hard",
        "explanation": "Regularly is an adverb of frequency.",
        "options": [
            {
                "id": 1001,
                "option_text": "regularly",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "regular",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "regularlyly",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "regularity",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 18
    }
];

export default questions;