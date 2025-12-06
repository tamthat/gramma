const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "___ I won the lottery!",
        "correct_answer": "Hooray",
        "suggest_answer": "Hooray",
        "explanation": "Hooray is an interjection expressing joy.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "___ You scared me!",
        "correct_answer": "Oh",
        "suggest_answer": "Oh",
        "explanation": "Oh is an interjection expressing surprise.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "___ That hurts!",
        "correct_answer": "Ouch",
        "suggest_answer": "Ouch",
        "explanation": "Ouch is an interjection expressing pain.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "___, how are you?",
        "correct_answer": "Hello",
        "suggest_answer": "Hello",
        "explanation": "Hello is an interjection used for greeting.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "___, I agree with you.",
        "correct_answer": "Yes",
        "suggest_answer": "Yes",
        "explanation": "Yes is an interjection showing agreement.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "___ What a beautiful sunset!",
        "correct_answer": "Wow",
        "suggest_answer": "Wow",
        "explanation": "Wow is an interjection expressing amazement.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "___ I can't believe that!",
        "correct_answer": "Gosh",
        "suggest_answer": "Gosh",
        "explanation": "Gosh is an interjection expressing surprise.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "___ My finger!",
        "correct_answer": "Ow",
        "suggest_answer": "Ow",
        "explanation": "Ow is an interjection expressing pain.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "___, nice to meet you.",
        "correct_answer": "Hi",
        "suggest_answer": "Hi",
        "explanation": "Hi is an interjection used for greeting.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "___, that's excellent news!",
        "correct_answer": "Yay",
        "suggest_answer": "Yay",
        "explanation": "Yay is an interjection expressing joy.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "___ I didn't expect that!",
        "correct_answer": "Wow",
        "suggest_answer": "Wow",
        "explanation": "Wow is an interjection expressing surprise.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "___ My leg is broken!",
        "correct_answer": "Ouch",
        "suggest_answer": "Ouch",
        "explanation": "Ouch is an interjection expressing pain.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "___, welcome home!",
        "correct_answer": "Hey",
        "suggest_answer": "Hey",
        "explanation": "Hey is an interjection used for greeting.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "___, definitely!",
        "correct_answer": "Sure",
        "suggest_answer": "Sure",
        "explanation": "Sure is an interjection showing agreement.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "___ We got the promotion!",
        "correct_answer": "Fantastic",
        "suggest_answer": "Fantastic",
        "explanation": "Fantastic is an interjection expressing joy.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "___ Is that really true?",
        "correct_answer": "Really",
        "suggest_answer": "Really",
        "explanation": "Really is an interjection expressing surprise.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "___ My foot!",
        "correct_answer": "Ouch",
        "suggest_answer": "Ouch",
        "explanation": "Ouch is an interjection expressing pain.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "___, what's up?",
        "correct_answer": "Yo",
        "suggest_answer": "Yo",
        "explanation": "Yo is an interjection used for greeting.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "___ Of course!",
        "correct_answer": "Absolutely",
        "suggest_answer": "Absolutely",
        "explanation": "Absolutely is an interjection showing strong agreement.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "___ I passed the test!",
        "correct_answer": "Hurray",
        "suggest_answer": "Hurray",
        "explanation": "Hurray is an interjection expressing joy.",
        "difficulty": "Easy",
        "topic_id": 21
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "___ That's incredible!",
        "correct_answer": "Amazing",
        "suggest_answer": "Amazing",
        "explanation": "Amazing is an interjection expressing surprise and joy.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "___ I hit my head!",
        "correct_answer": "Ow",
        "suggest_answer": "Ow",
        "explanation": "Ow is an interjection expressing pain.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "___ Long time no see!",
        "correct_answer": "Well",
        "suggest_answer": "Well",
        "explanation": "Well is an interjection used to start a conversation.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "___, I'm in!",
        "correct_answer": "Alright",
        "suggest_answer": "Alright",
        "explanation": "Alright is an interjection showing agreement.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "___ That's wonderful!",
        "correct_answer": "Excellent",
        "suggest_answer": "Excellent",
        "explanation": "Excellent is an interjection expressing approval.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "___ You're joking!",
        "correct_answer": "No way",
        "suggest_answer": "No way",
        "explanation": "No way is an interjection expressing disbelief.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "___ That burns!",
        "correct_answer": "Ouch",
        "suggest_answer": "Ouch",
        "explanation": "Ouch is an interjection expressing pain.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "___, good morning!",
        "correct_answer": "Good day",
        "suggest_answer": "Good day",
        "explanation": "Good day is an interjection used for greeting.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "___ Sounds perfect!",
        "correct_answer": "Great",
        "suggest_answer": "Great",
        "explanation": "Great is an interjection showing approval.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "___ I got promoted!",
        "correct_answer": "Lovely",
        "suggest_answer": "Lovely",
        "explanation": "Lovely is an interjection expressing joy.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 31,
        "question_type": "fill_blank",
        "question_text": "___ That shocked me!",
        "correct_answer": "My goodness",
        "suggest_answer": "My goodness",
        "explanation": "My goodness is an interjection expressing surprise.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 32,
        "question_type": "fill_blank",
        "question_text": "___ I twisted my ankle!",
        "correct_answer": "Ow",
        "suggest_answer": "Ow",
        "explanation": "Ow is an interjection expressing pain.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 33,
        "question_type": "fill_blank",
        "question_text": "___ See you later!",
        "correct_answer": "Goodbye",
        "suggest_answer": "Goodbye",
        "explanation": "Goodbye is an interjection used for parting.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 34,
        "question_type": "fill_blank",
        "question_text": "___ No problem!",
        "correct_answer": "Fine",
        "suggest_answer": "Fine",
        "explanation": "Fine is an interjection showing agreement.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 35,
        "question_type": "fill_blank",
        "question_text": "___ What a performance!",
        "correct_answer": "Bravo",
        "suggest_answer": "Bravo",
        "explanation": "Bravo is an interjection expressing approval.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 36,
        "question_type": "fill_blank",
        "question_text": "___ You didn't tell me!",
        "correct_answer": "Well",
        "suggest_answer": "Well",
        "explanation": "Well is an interjection expressing surprise.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 37,
        "question_type": "fill_blank",
        "question_text": "___ My hand!",
        "correct_answer": "Ouch",
        "suggest_answer": "Ouch",
        "explanation": "Ouch is an interjection expressing pain.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 38,
        "question_type": "fill_blank",
        "question_text": "___, take care!",
        "correct_answer": "Farewell",
        "suggest_answer": "Farewell",
        "explanation": "Farewell is an interjection used for parting.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 39,
        "question_type": "fill_blank",
        "question_text": "___ That works!",
        "correct_answer": "Perfect",
        "suggest_answer": "Perfect",
        "explanation": "Perfect is an interjection showing approval.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 40,
        "question_type": "fill_blank",
        "question_text": "___ She got married!",
        "correct_answer": "How wonderful",
        "suggest_answer": "How wonderful",
        "explanation": "How wonderful is an interjection expressing joy.",
        "difficulty": "Medium",
        "topic_id": 21
    },
    {
        "id": 41,
        "question_type": "fill_blank",
        "question_text": "___ No one told me!",
        "correct_answer": "Goodness",
        "suggest_answer": "Goodness",
        "explanation": "Goodness is an interjection expressing surprise.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 42,
        "question_type": "fill_blank",
        "question_text": "___ I cut myself!",
        "correct_answer": "Ouch",
        "suggest_answer": "Ouch",
        "explanation": "Ouch is an interjection expressing pain.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 43,
        "question_type": "fill_blank",
        "question_text": "___, let me tell you something.",
        "correct_answer": "Listen",
        "suggest_answer": "Listen",
        "explanation": "Listen is an interjection used to get attention.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 44,
        "question_type": "fill_blank",
        "question_text": "___ That's the best idea!",
        "correct_answer": "Splendid",
        "suggest_answer": "Splendid",
        "explanation": "Splendid is an interjection showing strong approval.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 45,
        "question_type": "fill_blank",
        "question_text": "___ This is fantastic!",
        "correct_answer": "Outstanding",
        "suggest_answer": "Outstanding",
        "explanation": "Outstanding is an interjection expressing approval.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 46,
        "question_type": "fill_blank",
        "question_text": "___ You can't be serious!",
        "correct_answer": "Come on",
        "suggest_answer": "Come on",
        "explanation": "Come on is an interjection expressing disbelief.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 47,
        "question_type": "fill_blank",
        "question_text": "___ That stings!",
        "correct_answer": "Ouch",
        "suggest_answer": "Ouch",
        "explanation": "Ouch is an interjection expressing pain.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 48,
        "question_type": "fill_blank",
        "question_text": "___, what do you think?",
        "correct_answer": "Well",
        "suggest_answer": "Well",
        "explanation": "Well is an interjection used to start conversation.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 49,
        "question_type": "fill_blank",
        "question_text": "___ What a masterpiece!",
        "correct_answer": "Magnificent",
        "suggest_answer": "Magnificent",
        "explanation": "Magnificent is an interjection expressing strong approval.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 50,
        "question_type": "fill_blank",
        "question_text": "___ They're getting divorced!",
        "correct_answer": "Dear me",
        "suggest_answer": "Dear me",
        "explanation": "Dear me is an interjection expressing surprise/concern.",
        "difficulty": "Hard",
        "topic_id": 21
    },
    {
        "id": 51,
        "question_type": "multiple_choice",
        "question_text": "I won the lottery! ___",
        "correct_answer": "Hooray",
        "difficulty": "Easy",
        "explanation": "Hooray is an interjection expressing joy.",
        "options": [
            {
                "id": 511,
                "option_text": "Hooray",
                "is_correct": 1,
                "question_id": 51
            },
            {
                "id": 512,
                "option_text": "Oh",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 513,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 51
            },
            {
                "id": 514,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 51
            }
        ],
        "topic_id": 21
    },
    {
        "id": 52,
        "question_type": "multiple_choice",
        "question_text": "You scared me! ___",
        "correct_answer": "Oh",
        "difficulty": "Easy",
        "explanation": "Oh is an interjection expressing surprise.",
        "options": [
            {
                "id": 521,
                "option_text": "Oh",
                "is_correct": 1,
                "question_id": 52
            },
            {
                "id": 522,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 523,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 52
            },
            {
                "id": 524,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 52
            }
        ],
        "topic_id": 21
    },
    {
        "id": 53,
        "question_type": "multiple_choice",
        "question_text": "That hurts! ___",
        "correct_answer": "Ouch",
        "difficulty": "Easy",
        "explanation": "Ouch is an interjection expressing pain.",
        "options": [
            {
                "id": 531,
                "option_text": "Ouch",
                "is_correct": 1,
                "question_id": 53
            },
            {
                "id": 532,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 533,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 53
            },
            {
                "id": 534,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 53
            }
        ],
        "topic_id": 21
    },
    {
        "id": 54,
        "question_type": "multiple_choice",
        "question_text": "How are you? ___",
        "correct_answer": "Hello",
        "difficulty": "Easy",
        "explanation": "Hello is an interjection used for greeting.",
        "options": [
            {
                "id": 541,
                "option_text": "Hello",
                "is_correct": 1,
                "question_id": 54
            },
            {
                "id": 542,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 543,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 54
            },
            {
                "id": 544,
                "option_text": "Gosh",
                "is_correct": 0,
                "question_id": 54
            }
        ],
        "topic_id": 21
    },
    {
        "id": 55,
        "question_type": "multiple_choice",
        "question_text": "I agree with you. ___",
        "correct_answer": "Yes",
        "difficulty": "Easy",
        "explanation": "Yes is an interjection showing agreement.",
        "options": [
            {
                "id": 551,
                "option_text": "Yes",
                "is_correct": 1,
                "question_id": 55
            },
            {
                "id": 552,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 553,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 55
            },
            {
                "id": 554,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 55
            }
        ],
        "topic_id": 21
    },
    {
        "id": 56,
        "question_type": "multiple_choice",
        "question_text": "What a beautiful sunset! ___",
        "correct_answer": "Wow",
        "difficulty": "Easy",
        "explanation": "Wow is an interjection expressing amazement.",
        "options": [
            {
                "id": 561,
                "option_text": "Wow",
                "is_correct": 1,
                "question_id": 56
            },
            {
                "id": 562,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 563,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 56
            },
            {
                "id": 564,
                "option_text": "Gosh",
                "is_correct": 0,
                "question_id": 56
            }
        ],
        "topic_id": 21
    },
    {
        "id": 57,
        "question_type": "multiple_choice",
        "question_text": "I can't believe that! ___",
        "correct_answer": "Gosh",
        "difficulty": "Easy",
        "explanation": "Gosh is an interjection expressing surprise.",
        "options": [
            {
                "id": 571,
                "option_text": "Gosh",
                "is_correct": 1,
                "question_id": 57
            },
            {
                "id": 572,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 573,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 57
            },
            {
                "id": 574,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 57
            }
        ],
        "topic_id": 21
    },
    {
        "id": 58,
        "question_type": "multiple_choice",
        "question_text": "My finger! ___",
        "correct_answer": "Ow",
        "difficulty": "Easy",
        "explanation": "Ow is an interjection expressing pain.",
        "options": [
            {
                "id": 581,
                "option_text": "Ow",
                "is_correct": 1,
                "question_id": 58
            },
            {
                "id": 582,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 583,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 58
            },
            {
                "id": 584,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 58
            }
        ],
        "topic_id": 21
    },
    {
        "id": 59,
        "question_type": "multiple_choice",
        "question_text": "Nice to meet you. ___",
        "correct_answer": "Hi",
        "difficulty": "Easy",
        "explanation": "Hi is an interjection used for greeting.",
        "options": [
            {
                "id": 591,
                "option_text": "Hi",
                "is_correct": 1,
                "question_id": 59
            },
            {
                "id": 592,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 593,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 59
            },
            {
                "id": 594,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 59
            }
        ],
        "topic_id": 21
    },
    {
        "id": 60,
        "question_type": "multiple_choice",
        "question_text": "That's excellent news! ___",
        "correct_answer": "Yay",
        "difficulty": "Easy",
        "explanation": "Yay is an interjection expressing joy.",
        "options": [
            {
                "id": 601,
                "option_text": "Yay",
                "is_correct": 1,
                "question_id": 60
            },
            {
                "id": 602,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 603,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 60
            },
            {
                "id": 604,
                "option_text": "Gosh",
                "is_correct": 0,
                "question_id": 60
            }
        ],
        "topic_id": 21
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "That's incredible! ___",
        "correct_answer": "Amazing",
        "difficulty": "Medium",
        "explanation": "Amazing is an interjection expressing surprise and joy.",
        "options": [
            {
                "id": 611,
                "option_text": "Amazing",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 21
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "I hit my head! ___",
        "correct_answer": "Ow",
        "difficulty": "Medium",
        "explanation": "Ow is an interjection expressing pain.",
        "options": [
            {
                "id": 621,
                "option_text": "Ow",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 21
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Long time no see! ___",
        "correct_answer": "Well",
        "difficulty": "Medium",
        "explanation": "Well is an interjection used to start a conversation.",
        "options": [
            {
                "id": 631,
                "option_text": "Well",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 21
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "I'm in! ___",
        "correct_answer": "Alright",
        "difficulty": "Medium",
        "explanation": "Alright is an interjection showing agreement.",
        "options": [
            {
                "id": 641,
                "option_text": "Alright",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 21
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "That's wonderful! ___",
        "correct_answer": "Excellent",
        "difficulty": "Medium",
        "explanation": "Excellent is an interjection expressing approval.",
        "options": [
            {
                "id": 651,
                "option_text": "Excellent",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 21
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "You're joking! ___",
        "correct_answer": "No way",
        "difficulty": "Medium",
        "explanation": "No way is an interjection expressing disbelief.",
        "options": [
            {
                "id": 661,
                "option_text": "No way",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "Goodbye",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 21
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "That burns! ___",
        "correct_answer": "Ouch",
        "difficulty": "Medium",
        "explanation": "Ouch is an interjection expressing pain.",
        "options": [
            {
                "id": 671,
                "option_text": "Ouch",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 674,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 21
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Good morning! ___",
        "correct_answer": "Good day",
        "difficulty": "Medium",
        "explanation": "Good day is an interjection used for greeting.",
        "options": [
            {
                "id": 681,
                "option_text": "Good day",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 21
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Sounds perfect! ___",
        "correct_answer": "Great",
        "difficulty": "Medium",
        "explanation": "Great is an interjection showing approval.",
        "options": [
            {
                "id": 691,
                "option_text": "Great",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 21
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "I got promoted! ___",
        "correct_answer": "Lovely",
        "difficulty": "Medium",
        "explanation": "Lovely is an interjection expressing joy.",
        "options": [
            {
                "id": 701,
                "option_text": "Lovely",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "Gosh",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 21
    },
    {
        "id": 71,
        "question_type": "multiple_choice",
        "question_text": "That shocked me! ___",
        "correct_answer": "My goodness",
        "difficulty": "Hard",
        "explanation": "My goodness is an interjection expressing surprise.",
        "options": [
            {
                "id": 711,
                "option_text": "My goodness",
                "is_correct": 1,
                "question_id": 71
            },
            {
                "id": 712,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 713,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 71
            },
            {
                "id": 714,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 71
            }
        ],
        "topic_id": 21
    },
    {
        "id": 72,
        "question_type": "multiple_choice",
        "question_text": "I twisted my ankle! ___",
        "correct_answer": "Ow",
        "difficulty": "Hard",
        "explanation": "Ow is an interjection expressing pain.",
        "options": [
            {
                "id": 721,
                "option_text": "Ow",
                "is_correct": 1,
                "question_id": 72
            },
            {
                "id": 722,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 723,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 72
            },
            {
                "id": 724,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 72
            }
        ],
        "topic_id": 21
    },
    {
        "id": 73,
        "question_type": "multiple_choice",
        "question_text": "See you later! ___",
        "correct_answer": "Goodbye",
        "difficulty": "Hard",
        "explanation": "Goodbye is an interjection used for parting.",
        "options": [
            {
                "id": 731,
                "option_text": "Goodbye",
                "is_correct": 1,
                "question_id": 73
            },
            {
                "id": 732,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 733,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 73
            },
            {
                "id": 734,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 73
            }
        ],
        "topic_id": 21
    },
    {
        "id": 74,
        "question_type": "multiple_choice",
        "question_text": "No problem! ___",
        "correct_answer": "Fine",
        "difficulty": "Hard",
        "explanation": "Fine is an interjection showing agreement.",
        "options": [
            {
                "id": 741,
                "option_text": "Fine",
                "is_correct": 1,
                "question_id": 74
            },
            {
                "id": 742,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 743,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 74
            },
            {
                "id": 744,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 74
            }
        ],
        "topic_id": 21
    },
    {
        "id": 75,
        "question_type": "multiple_choice",
        "question_text": "What a performance! ___",
        "correct_answer": "Bravo",
        "difficulty": "Hard",
        "explanation": "Bravo is an interjection expressing approval.",
        "options": [
            {
                "id": 751,
                "option_text": "Bravo",
                "is_correct": 1,
                "question_id": 75
            },
            {
                "id": 752,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 753,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 75
            },
            {
                "id": 754,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 75
            }
        ],
        "topic_id": 21
    },
    {
        "id": 76,
        "question_type": "multiple_choice",
        "question_text": "You didn't tell me! ___",
        "correct_answer": "Well",
        "difficulty": "Hard",
        "explanation": "Well is an interjection expressing surprise.",
        "options": [
            {
                "id": 761,
                "option_text": "Well",
                "is_correct": 1,
                "question_id": 76
            },
            {
                "id": 762,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 763,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 76
            },
            {
                "id": 764,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 76
            }
        ],
        "topic_id": 21
    },
    {
        "id": 77,
        "question_type": "multiple_choice",
        "question_text": "My hand! ___",
        "correct_answer": "Ouch",
        "difficulty": "Hard",
        "explanation": "Ouch is an interjection expressing pain.",
        "options": [
            {
                "id": 771,
                "option_text": "Ouch",
                "is_correct": 1,
                "question_id": 77
            },
            {
                "id": 772,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 773,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 77
            },
            {
                "id": 774,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 77
            }
        ],
        "topic_id": 21
    },
    {
        "id": 78,
        "question_type": "multiple_choice",
        "question_text": "Take care! ___",
        "correct_answer": "Farewell",
        "difficulty": "Hard",
        "explanation": "Farewell is an interjection used for parting.",
        "options": [
            {
                "id": 781,
                "option_text": "Farewell",
                "is_correct": 1,
                "question_id": 78
            },
            {
                "id": 782,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 783,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 78
            },
            {
                "id": 784,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 78
            }
        ],
        "topic_id": 21
    },
    {
        "id": 79,
        "question_type": "multiple_choice",
        "question_text": "That works! ___",
        "correct_answer": "Perfect",
        "difficulty": "Hard",
        "explanation": "Perfect is an interjection showing approval.",
        "options": [
            {
                "id": 791,
                "option_text": "Perfect",
                "is_correct": 1,
                "question_id": 79
            },
            {
                "id": 792,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 793,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 79
            },
            {
                "id": 794,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 79
            }
        ],
        "topic_id": 21
    },
    {
        "id": 80,
        "question_type": "multiple_choice",
        "question_text": "She got married! ___",
        "correct_answer": "How wonderful",
        "difficulty": "Hard",
        "explanation": "How wonderful is an interjection expressing joy.",
        "options": [
            {
                "id": 801,
                "option_text": "How wonderful",
                "is_correct": 1,
                "question_id": 80
            },
            {
                "id": 802,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 803,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 80
            },
            {
                "id": 804,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 80
            }
        ],
        "topic_id": 21
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "No one told me! ___",
        "correct_answer": "Goodness",
        "difficulty": "Hard",
        "explanation": "Goodness is an interjection expressing surprise.",
        "options": [
            {
                "id": 811,
                "option_text": "Goodness",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 814,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 21
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "I cut myself! ___",
        "correct_answer": "Ouch",
        "difficulty": "Hard",
        "explanation": "Ouch is an interjection expressing pain.",
        "options": [
            {
                "id": 821,
                "option_text": "Ouch",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 21
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Let me tell you something. ___",
        "correct_answer": "Listen",
        "difficulty": "Hard",
        "explanation": "Listen is an interjection used to get attention.",
        "options": [
            {
                "id": 831,
                "option_text": "Listen",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 834,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 21
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "That's the best idea! ___",
        "correct_answer": "Splendid",
        "difficulty": "Hard",
        "explanation": "Splendid is an interjection showing strong approval.",
        "options": [
            {
                "id": 841,
                "option_text": "Splendid",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 21
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "This is fantastic! ___",
        "correct_answer": "Outstanding",
        "difficulty": "Hard",
        "explanation": "Outstanding is an interjection expressing approval.",
        "options": [
            {
                "id": 851,
                "option_text": "Outstanding",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 21
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "You can't be serious! ___",
        "correct_answer": "Come on",
        "difficulty": "Hard",
        "explanation": "Come on is an interjection expressing disbelief.",
        "options": [
            {
                "id": 861,
                "option_text": "Come on",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 864,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 21
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "That stings! ___",
        "correct_answer": "Ouch",
        "difficulty": "Hard",
        "explanation": "Ouch is an interjection expressing pain.",
        "options": [
            {
                "id": 871,
                "option_text": "Ouch",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 874,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 21
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "What do you think? ___",
        "correct_answer": "Well",
        "difficulty": "Hard",
        "explanation": "Well is an interjection used to start conversation.",
        "options": [
            {
                "id": 881,
                "option_text": "Well",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 21
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "What a masterpiece! ___",
        "correct_answer": "Magnificent",
        "difficulty": "Hard",
        "explanation": "Magnificent is an interjection expressing strong approval.",
        "options": [
            {
                "id": 891,
                "option_text": "Magnificent",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 21
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "They're getting divorced! ___",
        "correct_answer": "Dear me",
        "difficulty": "Hard",
        "explanation": "Dear me is an interjection expressing surprise/concern.",
        "options": [
            {
                "id": 901,
                "option_text": "Dear me",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 21
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "I passed the test! ___",
        "correct_answer": "Hurray",
        "difficulty": "Hard",
        "explanation": "Hurray is an interjection expressing joy.",
        "options": [
            {
                "id": 911,
                "option_text": "Hurray",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 914,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 21
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "I didn't expect that! ___",
        "correct_answer": "Wow",
        "difficulty": "Hard",
        "explanation": "Wow is an interjection expressing surprise.",
        "options": [
            {
                "id": 921,
                "option_text": "Wow",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 21
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "My leg is broken! ___",
        "correct_answer": "Ouch",
        "difficulty": "Hard",
        "explanation": "Ouch is an interjection expressing pain.",
        "options": [
            {
                "id": 931,
                "option_text": "Ouch",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 934,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 21
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "We got the promotion! ___",
        "correct_answer": "Fantastic",
        "difficulty": "Hard",
        "explanation": "Fantastic is an interjection expressing joy.",
        "options": [
            {
                "id": 941,
                "option_text": "Fantastic",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 21
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Is that really true? ___",
        "correct_answer": "Really",
        "difficulty": "Hard",
        "explanation": "Really is an interjection expressing surprise.",
        "options": [
            {
                "id": 951,
                "option_text": "Really",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 21
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "My foot! ___",
        "correct_answer": "Ouch",
        "difficulty": "Hard",
        "explanation": "Ouch is an interjection expressing pain.",
        "options": [
            {
                "id": 961,
                "option_text": "Ouch",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 21
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "What's up? ___",
        "correct_answer": "Yo",
        "difficulty": "Hard",
        "explanation": "Yo is an interjection used for greeting.",
        "options": [
            {
                "id": 971,
                "option_text": "Yo",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 974,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 21
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Of course! ___",
        "correct_answer": "Absolutely",
        "difficulty": "Hard",
        "explanation": "Absolutely is an interjection showing strong agreement.",
        "options": [
            {
                "id": 981,
                "option_text": "Absolutely",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 21
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Welcome home! ___",
        "correct_answer": "Hey",
        "difficulty": "Hard",
        "explanation": "Hey is an interjection used for greeting.",
        "options": [
            {
                "id": 991,
                "option_text": "Hey",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "Yes",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "Wow",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 21
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Definitely! ___",
        "correct_answer": "Sure",
        "difficulty": "Hard",
        "explanation": "Sure is an interjection showing agreement.",
        "options": [
            {
                "id": 1001,
                "option_text": "Sure",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "Ouch",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "No",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Hello",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 21
    }
];

export default questions;