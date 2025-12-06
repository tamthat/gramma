const questions = [
    {
        "id": 1,
        "question_type": "fill_blank",
        "question_text": "Why don't you join us for dinner? _____",
        "correct_answer": "That sounds great!",
        "suggest_answer": "That sounds great!",
        "explanation": "That sounds great! + Đồng ý với lời mời (Language Functions - Accepting invitation)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 2,
        "question_type": "fill_blank",
        "question_text": "Would you like some tea? _____",
        "correct_answer": "Yes, please!",
        "suggest_answer": "Yes, please!",
        "explanation": "Yes, please! + Đồng ý (Language Functions - Accepting)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 3,
        "question_type": "fill_blank",
        "question_text": "May I use your pen? _____",
        "correct_answer": "Of course!",
        "suggest_answer": "Of course!",
        "explanation": "Of course! + Cho phép (Language Functions - Giving permission)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 4,
        "question_type": "fill_blank",
        "question_text": "I'm sorry for being late. _____",
        "correct_answer": "It's okay, no problem!",
        "suggest_answer": "It's okay, no problem!",
        "explanation": "It's okay + Chấp nhận lời xin lỗi (Language Functions - Accepting apology)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 5,
        "question_type": "fill_blank",
        "question_text": "Can I help you? _____",
        "correct_answer": "Yes, thank you!",
        "suggest_answer": "Yes, thank you!",
        "explanation": "Yes, thank you! + Chấp nhận giúp đỡ (Language Functions - Accepting help)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 6,
        "question_type": "fill_blank",
        "question_text": "Would you mind passing the salt? _____",
        "correct_answer": "Sure, here you go!",
        "suggest_answer": "Sure, here you go!",
        "explanation": "Sure, here you go! + Đồng ý (Language Functions - Accepting request)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 7,
        "question_type": "fill_blank",
        "question_text": "I've been waiting for an hour! _____",
        "correct_answer": "That's frustrating!",
        "suggest_answer": "That's frustrating!",
        "explanation": "That's frustrating! + Thể hiện sự thông cảm (Language Functions - Showing sympathy)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 8,
        "question_type": "fill_blank",
        "question_text": "I failed my exam. _____",
        "correct_answer": "I'm sorry to hear that.",
        "suggest_answer": "I'm sorry to hear that.",
        "explanation": "I'm sorry to hear that. + Thể hiện sự thông cảm (Language Functions - Showing sympathy)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 9,
        "question_type": "fill_blank",
        "question_text": "Let's go to the beach tomorrow. _____",
        "correct_answer": "That's a good idea!",
        "suggest_answer": "That's a good idea!",
        "explanation": "That's a good idea! + Đồng ý với gợi ý (Language Functions - Accepting suggestion)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 10,
        "question_type": "fill_blank",
        "question_text": "Can you come to my party? _____",
        "correct_answer": "I'd love to!",
        "suggest_answer": "I'd love to!",
        "explanation": "I'd love to! + Chấp nhận lời mời (Language Functions - Accepting invitation)",
        "difficulty": "Easy",
        "topic_id": 49
    },
    {
        "id": 11,
        "question_type": "fill_blank",
        "question_text": "Would you like to see a movie tonight? _____",
        "correct_answer": "I'm afraid I can't, I have to study.",
        "suggest_answer": "I'm afraid I can't, I have to study.",
        "explanation": "I'm afraid I can't + Từ chối lời mời lịch sự (Language Functions - Refusing invitation politely)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 12,
        "question_type": "fill_blank",
        "question_text": "May I smoke here? _____",
        "correct_answer": "I'm sorry, you can't. It's not allowed.",
        "suggest_answer": "I'm sorry, you can't. It's not allowed.",
        "explanation": "I'm sorry, you can't + Từ chối cho phép lịch sự (Language Functions - Refusing permission)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 13,
        "question_type": "fill_blank",
        "question_text": "The weather is terrible today. _____",
        "correct_answer": "I know, it's really disappointing.",
        "suggest_answer": "I know, it's really disappointing.",
        "explanation": "I know, it's really disappointing + Than phiền (Language Functions - Complaining)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 14,
        "question_type": "fill_blank",
        "question_text": "I apologize for my mistake. _____",
        "correct_answer": "Don't worry, it happens to everyone.",
        "suggest_answer": "Don't worry, it happens to everyone.",
        "explanation": "Don't worry + Chấp nhận lời xin lỗi (Language Functions - Accepting apology)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 15,
        "question_type": "fill_blank",
        "question_text": "Why don't we meet for lunch? _____",
        "correct_answer": "That sounds wonderful!",
        "suggest_answer": "That sounds wonderful!",
        "explanation": "That sounds wonderful! + Chấp nhận gợi ý (Language Functions - Accepting suggestion)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 16,
        "question_type": "fill_blank",
        "question_text": "Can you help me move? I really need your help. _____",
        "correct_answer": "I'm sorry, but I'm busy this weekend.",
        "suggest_answer": "I'm sorry, but I'm busy this weekend.",
        "explanation": "I'm sorry, but + Từ chối lịch sự (Language Functions - Refusing politely)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 17,
        "question_type": "fill_blank",
        "question_text": "I broke your vase. I'm really sorry. _____",
        "correct_answer": "It's okay. These things happen.",
        "suggest_answer": "It's okay. These things happen.",
        "explanation": "It's okay + Chấp nhận lời xin lỗi (Language Functions - Accepting apology)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 18,
        "question_type": "fill_blank",
        "question_text": "The service here is terrible! _____",
        "correct_answer": "I completely understand your frustration.",
        "suggest_answer": "I completely understand your frustration.",
        "explanation": "I understand your frustration + Thể hiện đồng cảm (Language Functions - Showing empathy)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 19,
        "question_type": "fill_blank",
        "question_text": "Would you like to go shopping? _____",
        "correct_answer": "No, thanks. I'm tired.",
        "suggest_answer": "No, thanks. I'm tired.",
        "explanation": "No, thanks + Từ chối lịch sự (Language Functions - Refusing politely)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 20,
        "question_type": "fill_blank",
        "question_text": "I got the job! _____",
        "correct_answer": "Congratulations! That's wonderful news!",
        "suggest_answer": "Congratulations! That's wonderful news!",
        "explanation": "Congratulations! + Chúc mừng (Language Functions - Congratulating)",
        "difficulty": "Medium",
        "topic_id": 49
    },
    {
        "id": 21,
        "question_type": "fill_blank",
        "question_text": "I haven't heard from you in months. I was beginning to worry! _____",
        "correct_answer": "I apologize for that. I've been extremely busy.",
        "suggest_answer": "I apologize for that. I've been extremely busy.",
        "explanation": "I apologize for that + Xin lỗi (Language Functions - Apologizing)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 22,
        "question_type": "fill_blank",
        "question_text": "Would you mind if I borrowed your car? _____",
        "correct_answer": "I'm sorry, I need it today.",
        "suggest_answer": "I'm sorry, I need it today.",
        "explanation": "I'm sorry + Từ chối lịch sự (Language Functions - Refusing politely)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 23,
        "question_type": "fill_blank",
        "question_text": "The flights are always delayed at this airport. _____",
        "correct_answer": "That must be very annoying.",
        "suggest_answer": "That must be very annoying.",
        "explanation": "That must be annoying + Than phiền (Language Functions - Complaining)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 24,
        "question_type": "fill_blank",
        "question_text": "Why not try our new restaurant? _____",
        "correct_answer": "That's an excellent suggestion. I'll definitely go there.",
        "suggest_answer": "That's an excellent suggestion. I'll definitely go there.",
        "explanation": "That's an excellent suggestion + Chấp nhận gợi ý (Language Functions - Accepting suggestion)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 25,
        "question_type": "fill_blank",
        "question_text": "Can you forgive me for what I said? _____",
        "correct_answer": "Of course, I forgive you. Let's move on.",
        "suggest_answer": "Of course, I forgive you. Let's move on.",
        "explanation": "Of course + Chấp nhận lời xin lỗi (Language Functions - Accepting apology)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 26,
        "question_type": "fill_blank",
        "question_text": "Would you like to join our team? _____",
        "correct_answer": "I'd be honored to join your team.",
        "suggest_answer": "I'd be honored to join your team.",
        "explanation": "I'd be honored + Chấp nhận đề nghị (Language Functions - Accepting offer)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 27,
        "question_type": "fill_blank",
        "question_text": "I've been complaining about my job for weeks. My boss never listens! _____",
        "correct_answer": "That sounds frustrating. Have you considered looking for another job?",
        "suggest_answer": "That sounds frustrating. Have you considered looking for another job?",
        "explanation": "That sounds frustrating + Than phiền (Language Functions - Complaining)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 28,
        "question_type": "fill_blank",
        "question_text": "May I ask you a question? _____",
        "correct_answer": "Sure, go ahead!",
        "suggest_answer": "Sure, go ahead!",
        "explanation": "Sure, go ahead! + Cho phép (Language Functions - Giving permission)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 29,
        "question_type": "fill_blank",
        "question_text": "I'm sorry I cancelled our plans. _____",
        "correct_answer": "That's alright. I understand.",
        "suggest_answer": "That's alright. I understand.",
        "explanation": "That's alright + Chấp nhận lời xin lỗi (Language Functions - Accepting apology)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 30,
        "question_type": "fill_blank",
        "question_text": "Come visit us sometime! _____",
        "correct_answer": "I'd love to. Thank you for the invitation!",
        "suggest_answer": "I'd love to. Thank you for the invitation!",
        "explanation": "I'd love to + Chấp nhận lời mời (Language Functions - Accepting invitation)",
        "difficulty": "Hard",
        "topic_id": 49
    },
    {
        "id": 31,
        "question_type": "multiple_choice",
        "question_text": "What is the correct way to suggest something?",
        "correct_answer": "Why don't you try the new restaurant?",
        "difficulty": "Easy",
        "explanation": "Why don't you... + Gợi ý (Language Functions - Making suggestion)",
        "options": [
            {
                "id": 311,
                "option_text": "Why don't you try the new restaurant?",
                "is_correct": 1,
                "question_id": 31
            },
            {
                "id": 312,
                "option_text": "You must try the new restaurant!",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 313,
                "option_text": "Try the new restaurant!",
                "is_correct": 0,
                "question_id": 31
            },
            {
                "id": 314,
                "option_text": "The restaurant is new, try it!",
                "is_correct": 0,
                "question_id": 31
            }
        ],
        "topic_id": 49
    },
    {
        "id": 32,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct way to invite someone:",
        "correct_answer": "Would you like to come to my party?",
        "difficulty": "Easy",
        "explanation": "Would you like to... + Lời mời lịch sự (Language Functions - Inviting)",
        "options": [
            {
                "id": 321,
                "option_text": "Would you like to come to my party?",
                "is_correct": 1,
                "question_id": 32
            },
            {
                "id": 322,
                "option_text": "Come to my party!",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 323,
                "option_text": "You have to come to my party.",
                "is_correct": 0,
                "question_id": 32
            },
            {
                "id": 324,
                "option_text": "My party is tomorrow, come!",
                "is_correct": 0,
                "question_id": 32
            }
        ],
        "topic_id": 49
    },
    {
        "id": 33,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct way to ask for permission:",
        "correct_answer": "May I open the window?",
        "difficulty": "Easy",
        "explanation": "May I... + Xin phép (Language Functions - Asking for permission)",
        "options": [
            {
                "id": 331,
                "option_text": "May I open the window?",
                "is_correct": 1,
                "question_id": 33
            },
            {
                "id": 332,
                "option_text": "I'm opening the window!",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 333,
                "option_text": "Open the window for me!",
                "is_correct": 0,
                "question_id": 33
            },
            {
                "id": 334,
                "option_text": "You open the window!",
                "is_correct": 0,
                "question_id": 33
            }
        ],
        "topic_id": 49
    },
    {
        "id": 34,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct way to apologize:",
        "correct_answer": "I'm sorry. I made a mistake.",
        "difficulty": "Easy",
        "explanation": "I'm sorry + Xin lỗi (Language Functions - Apologizing)",
        "options": [
            {
                "id": 341,
                "option_text": "I'm sorry. I made a mistake.",
                "is_correct": 1,
                "question_id": 34
            },
            {
                "id": 342,
                "option_text": "I made a mistake!",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 343,
                "option_text": "It's your fault!",
                "is_correct": 0,
                "question_id": 34
            },
            {
                "id": 344,
                "option_text": "Mistake happened!",
                "is_correct": 0,
                "question_id": 34
            }
        ],
        "topic_id": 49
    },
    {
        "id": 35,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct way to decline an invitation:",
        "correct_answer": "Thank you for inviting me, but I can't make it.",
        "difficulty": "Easy",
        "explanation": "Thank you, but I can't + Từ chối lịch sự (Language Functions - Declining invitation)",
        "options": [
            {
                "id": 351,
                "option_text": "Thank you for inviting me, but I can't make it.",
                "is_correct": 1,
                "question_id": 35
            },
            {
                "id": 352,
                "option_text": "I don't want to come!",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 353,
                "option_text": "No, I won't go!",
                "is_correct": 0,
                "question_id": 35
            },
            {
                "id": 354,
                "option_text": "Your party is boring!",
                "is_correct": 0,
                "question_id": 35
            }
        ],
        "topic_id": 49
    },
    {
        "id": 36,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct way to congratulate:",
        "correct_answer": "Congratulations on your promotion!",
        "difficulty": "Easy",
        "explanation": "Congratulations + Chúc mừng (Language Functions - Congratulating)",
        "options": [
            {
                "id": 361,
                "option_text": "Congratulations on your promotion!",
                "is_correct": 1,
                "question_id": 36
            },
            {
                "id": 362,
                "option_text": "You got promoted!",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 363,
                "option_text": "Your promotion is good!",
                "is_correct": 0,
                "question_id": 36
            },
            {
                "id": 364,
                "option_text": "Nice promotion!",
                "is_correct": 0,
                "question_id": 36
            }
        ],
        "topic_id": 49
    },
    {
        "id": 37,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct way to complain:",
        "correct_answer": "I'm really frustrated with this situation.",
        "difficulty": "Easy",
        "explanation": "I'm frustrated + Than phiền (Language Functions - Complaining)",
        "options": [
            {
                "id": 371,
                "option_text": "I'm really frustrated with this situation.",
                "is_correct": 1,
                "question_id": 37
            },
            {
                "id": 372,
                "option_text": "This is bad!",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 373,
                "option_text": "I hate this!",
                "is_correct": 0,
                "question_id": 37
            },
            {
                "id": 374,
                "option_text": "This doesn't work!",
                "is_correct": 0,
                "question_id": 37
            }
        ],
        "topic_id": 49
    },
    {
        "id": 38,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct way to show sympathy:",
        "correct_answer": "I'm sorry to hear about your loss.",
        "difficulty": "Easy",
        "explanation": "I'm sorry to hear + Xin lỗi (Language Functions - Showing sympathy)",
        "options": [
            {
                "id": 381,
                "option_text": "I'm sorry to hear about your loss.",
                "is_correct": 1,
                "question_id": 38
            },
            {
                "id": 382,
                "option_text": "Your loss is sad!",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 383,
                "option_text": "That's sad!",
                "is_correct": 0,
                "question_id": 38
            },
            {
                "id": 384,
                "option_text": "You lost something!",
                "is_correct": 0,
                "question_id": 38
            }
        ],
        "topic_id": 49
    },
    {
        "id": 39,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct way to accept an offer:",
        "correct_answer": "Thank you, I'd be delighted to accept.",
        "difficulty": "Easy",
        "explanation": "Thank you + Chấp nhận (Language Functions - Accepting offer)",
        "options": [
            {
                "id": 391,
                "option_text": "Thank you, I'd be delighted to accept.",
                "is_correct": 1,
                "question_id": 39
            },
            {
                "id": 392,
                "option_text": "Yes, I accept!",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 393,
                "option_text": "I'll take it!",
                "is_correct": 0,
                "question_id": 39
            },
            {
                "id": 394,
                "option_text": "Okay, give it to me!",
                "is_correct": 0,
                "question_id": 39
            }
        ],
        "topic_id": 49
    },
    {
        "id": 40,
        "question_type": "multiple_choice",
        "question_text": "Choose the correct way to ask for help:",
        "correct_answer": "Could you help me with this?",
        "difficulty": "Easy",
        "explanation": "Could you help + Xin giúp (Language Functions - Asking for help)",
        "options": [
            {
                "id": 401,
                "option_text": "Could you help me with this?",
                "is_correct": 1,
                "question_id": 40
            },
            {
                "id": 402,
                "option_text": "Help me!",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 403,
                "option_text": "I need help!",
                "is_correct": 0,
                "question_id": 40
            },
            {
                "id": 404,
                "option_text": "You must help me!",
                "is_correct": 0,
                "question_id": 40
            }
        ],
        "topic_id": 49
    },
    {
        "id": 61,
        "question_type": "multiple_choice",
        "question_text": "Select the correct response to a suggestion:",
        "correct_answer": "That's a brilliant idea! Let's do it.",
        "difficulty": "Medium",
        "explanation": "Chấp nhận gợi ý (Language Functions - Accepting suggestion)",
        "options": [
            {
                "id": 611,
                "option_text": "That's a brilliant idea! Let's do it.",
                "is_correct": 1,
                "question_id": 61
            },
            {
                "id": 612,
                "option_text": "Your idea is bad!",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 613,
                "option_text": "I don't like your idea!",
                "is_correct": 0,
                "question_id": 61
            },
            {
                "id": 614,
                "option_text": "You always have bad ideas!",
                "is_correct": 0,
                "question_id": 61
            }
        ],
        "topic_id": 49
    },
    {
        "id": 62,
        "question_type": "multiple_choice",
        "question_text": "Select the polite way to refuse help:",
        "correct_answer": "Thank you, but I can manage on my own.",
        "difficulty": "Medium",
        "explanation": "Thank you, but + Từ chối lịch sự (Language Functions - Declining politely)",
        "options": [
            {
                "id": 621,
                "option_text": "Thank you, but I can manage on my own.",
                "is_correct": 1,
                "question_id": 62
            },
            {
                "id": 622,
                "option_text": "I don't need your help!",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 623,
                "option_text": "Leave me alone!",
                "is_correct": 0,
                "question_id": 62
            },
            {
                "id": 624,
                "option_text": "Go away!",
                "is_correct": 0,
                "question_id": 62
            }
        ],
        "topic_id": 49
    },
    {
        "id": 63,
        "question_type": "multiple_choice",
        "question_text": "Select the correct way to respond to a complaint:",
        "correct_answer": "I completely understand how you feel.",
        "difficulty": "Medium",
        "explanation": "I understand + Thể hiện đồng cảm (Language Functions - Showing empathy)",
        "options": [
            {
                "id": 631,
                "option_text": "I completely understand how you feel.",
                "is_correct": 1,
                "question_id": 63
            },
            {
                "id": 632,
                "option_text": "You're complaining too much!",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 633,
                "option_text": "Stop complaining!",
                "is_correct": 0,
                "question_id": 63
            },
            {
                "id": 634,
                "option_text": "That's not my problem!",
                "is_correct": 0,
                "question_id": 63
            }
        ],
        "topic_id": 49
    },
    {
        "id": 64,
        "question_type": "multiple_choice",
        "question_text": "Select the correct formal invitation:",
        "correct_answer": "You are cordially invited to our wedding.",
        "difficulty": "Medium",
        "explanation": "Formal invitation (Language Functions - Formal inviting)",
        "options": [
            {
                "id": 641,
                "option_text": "You are cordially invited to our wedding.",
                "is_correct": 1,
                "question_id": 64
            },
            {
                "id": 642,
                "option_text": "Come to my wedding!",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 643,
                "option_text": "My wedding is next week, come!",
                "is_correct": 0,
                "question_id": 64
            },
            {
                "id": 644,
                "option_text": "You must come to my wedding!",
                "is_correct": 0,
                "question_id": 64
            }
        ],
        "topic_id": 49
    },
    {
        "id": 65,
        "question_type": "multiple_choice",
        "question_text": "Select the correct way to make a polite request:",
        "correct_answer": "Would you mind passing the salt, please?",
        "difficulty": "Medium",
        "explanation": "Would you mind + Xin lịch sự (Language Functions - Polite request)",
        "options": [
            {
                "id": 651,
                "option_text": "Would you mind passing the salt, please?",
                "is_correct": 1,
                "question_id": 65
            },
            {
                "id": 652,
                "option_text": "Pass the salt!",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 653,
                "option_text": "I need the salt!",
                "is_correct": 0,
                "question_id": 65
            },
            {
                "id": 654,
                "option_text": "You pass the salt!",
                "is_correct": 0,
                "question_id": 65
            }
        ],
        "topic_id": 49
    },
    {
        "id": 66,
        "question_type": "multiple_choice",
        "question_text": "Select the correct way to express disagreement:",
        "correct_answer": "I see your point, but I have to disagree.",
        "difficulty": "Medium",
        "explanation": "I disagree + Không đồng ý (Language Functions - Disagreeing politely)",
        "options": [
            {
                "id": 661,
                "option_text": "I see your point, but I have to disagree.",
                "is_correct": 1,
                "question_id": 66
            },
            {
                "id": 662,
                "option_text": "You're wrong!",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 663,
                "option_text": "I don't agree with you!",
                "is_correct": 0,
                "question_id": 66
            },
            {
                "id": 664,
                "option_text": "That's stupid!",
                "is_correct": 0,
                "question_id": 66
            }
        ],
        "topic_id": 49
    },
    {
        "id": 67,
        "question_type": "multiple_choice",
        "question_text": "Select the correct way to warn someone:",
        "correct_answer": "Be careful! That's hot!",
        "difficulty": "Medium",
        "explanation": "Be careful + Cảnh báo (Language Functions - Warning)",
        "options": [
            {
                "id": 671,
                "option_text": "Be careful! That's hot!",
                "is_correct": 1,
                "question_id": 67
            },
            {
                "id": 672,
                "option_text": "That's hot!",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 673,
                "option_text": "Don't touch!",
                "is_correct": 0,
                "question_id": 67
            },
            {
                "id": 684,
                "option_text": "It's hot!",
                "is_correct": 0,
                "question_id": 67
            }
        ],
        "topic_id": 49
    },
    {
        "id": 68,
        "question_type": "multiple_choice",
        "question_text": "Select the correct way to express regret:",
        "correct_answer": "I wish I had known about this earlier.",
        "difficulty": "Medium",
        "explanation": "I wish + Hối tiếc (Language Functions - Expressing regret)",
        "options": [
            {
                "id": 681,
                "option_text": "I wish I had known about this earlier.",
                "is_correct": 1,
                "question_id": 68
            },
            {
                "id": 682,
                "option_text": "I didn't know!",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 683,
                "option_text": "That's bad!",
                "is_correct": 0,
                "question_id": 68
            },
            {
                "id": 684,
                "option_text": "Why didn't you tell me!",
                "is_correct": 0,
                "question_id": 68
            }
        ],
        "topic_id": 49
    },
    {
        "id": 69,
        "question_type": "multiple_choice",
        "question_text": "Select the correct way to make an excuse:",
        "correct_answer": "I'm sorry I'm late. The traffic was terrible.",
        "difficulty": "Medium",
        "explanation": "I'm sorry + Xin lỗi (Language Functions - Making excuse)",
        "options": [
            {
                "id": 691,
                "option_text": "I'm sorry I'm late. The traffic was terrible.",
                "is_correct": 1,
                "question_id": 69
            },
            {
                "id": 692,
                "option_text": "I'm late!",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 693,
                "option_text": "The traffic was bad!",
                "is_correct": 0,
                "question_id": 69
            },
            {
                "id": 694,
                "option_text": "I don't like being on time!",
                "is_correct": 0,
                "question_id": 69
            }
        ],
        "topic_id": 49
    },
    {
        "id": 70,
        "question_type": "multiple_choice",
        "question_text": "Select the correct way to give advice:",
        "correct_answer": "If I were you, I would study harder.",
        "difficulty": "Medium",
        "explanation": "If I were you + Gợi ý (Language Functions - Giving advice)",
        "options": [
            {
                "id": 701,
                "option_text": "If I were you, I would study harder.",
                "is_correct": 1,
                "question_id": 70
            },
            {
                "id": 702,
                "option_text": "You should study!",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 703,
                "option_text": "Study harder!",
                "is_correct": 0,
                "question_id": 70
            },
            {
                "id": 704,
                "option_text": "You're not studying enough!",
                "is_correct": 0,
                "question_id": 70
            }
        ],
        "topic_id": 49
    },
    {
        "id": 81,
        "question_type": "multiple_choice",
        "question_text": "Which shows the most polite way to ask for permission?",
        "correct_answer": "Would you mind if I used your phone?",
        "difficulty": "Hard",
        "explanation": "Would you mind + Xin phép lịch sự nhất (Language Functions - Most polite permission)",
        "options": [
            {
                "id": 811,
                "option_text": "Would you mind if I used your phone?",
                "is_correct": 1,
                "question_id": 81
            },
            {
                "id": 812,
                "option_text": "Can I use your phone?",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 813,
                "option_text": "May I use your phone?",
                "is_correct": 0,
                "question_id": 81
            },
            {
                "id": 824,
                "option_text": "Let me use your phone!",
                "is_correct": 0,
                "question_id": 81
            }
        ],
        "topic_id": 49
    },
    {
        "id": 82,
        "question_type": "multiple_choice",
        "question_text": "Which shows the most polite way to decline?",
        "correct_answer": "That's very kind of you to ask, but I'm afraid I can't.",
        "difficulty": "Hard",
        "explanation": "That's very kind + Từ chối lịch sự nhất (Language Functions - Most polite declining)",
        "options": [
            {
                "id": 821,
                "option_text": "That's very kind of you to ask, but I'm afraid I can't.",
                "is_correct": 1,
                "question_id": 82
            },
            {
                "id": 822,
                "option_text": "No, I can't!",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 823,
                "option_text": "I don't want to!",
                "is_correct": 0,
                "question_id": 82
            },
            {
                "id": 824,
                "option_text": "I'm too busy!",
                "is_correct": 0,
                "question_id": 82
            }
        ],
        "topic_id": 49
    },
    {
        "id": 83,
        "question_type": "multiple_choice",
        "question_text": "Which is the most formal way to apologize?",
        "correct_answer": "I sincerely apologize for my behavior.",
        "difficulty": "Hard",
        "explanation": "I sincerely apologize + Xin lỗi formal nhất (Language Functions - Formal apology)",
        "options": [
            {
                "id": 831,
                "option_text": "I sincerely apologize for my behavior.",
                "is_correct": 1,
                "question_id": 83
            },
            {
                "id": 832,
                "option_text": "I'm sorry!",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 833,
                "option_text": "Sorry about that!",
                "is_correct": 0,
                "question_id": 83
            },
            {
                "id": 844,
                "option_text": "My bad!",
                "is_correct": 0,
                "question_id": 83
            }
        ],
        "topic_id": 49
    },
    {
        "id": 84,
        "question_type": "multiple_choice",
        "question_text": "Which shows empathy effectively?",
        "correct_answer": "I can really understand how frustrating that must be for you.",
        "difficulty": "Hard",
        "explanation": "I can understand + Đồng cảm hiệu quả (Language Functions - Effective empathy)",
        "options": [
            {
                "id": 841,
                "option_text": "I can really understand how frustrating that must be for you.",
                "is_correct": 1,
                "question_id": 84
            },
            {
                "id": 842,
                "option_text": "That's frustrating!",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 843,
                "option_text": "You're frustrated!",
                "is_correct": 0,
                "question_id": 84
            },
            {
                "id": 844,
                "option_text": "I get frustrated too!",
                "is_correct": 0,
                "question_id": 84
            }
        ],
        "topic_id": 49
    },
    {
        "id": 85,
        "question_type": "multiple_choice",
        "question_text": "Which is the best way to accept an invitation enthusiastically?",
        "correct_answer": "I'd absolutely love to! Thank you so much for the invitation!",
        "difficulty": "Hard",
        "explanation": "I'd absolutely love + Chấp nhận nhiệt tình (Language Functions - Enthusiastic acceptance)",
        "options": [
            {
                "id": 851,
                "option_text": "I'd absolutely love to! Thank you so much for the invitation!",
                "is_correct": 1,
                "question_id": 85
            },
            {
                "id": 852,
                "option_text": "Yeah, I'll come!",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 853,
                "option_text": "Okay, I'll be there!",
                "is_correct": 0,
                "question_id": 85
            },
            {
                "id": 854,
                "option_text": "Sure, whatever!",
                "is_correct": 0,
                "question_id": 85
            }
        ],
        "topic_id": 49
    },
    {
        "id": 86,
        "question_type": "multiple_choice",
        "question_text": "Which shows the best way to disagree respectfully?",
        "correct_answer": "I appreciate your perspective, but I respectfully disagree.",
        "difficulty": "Hard",
        "explanation": "I appreciate + Không đồng ý lịch sự (Language Functions - Respectful disagreement)",
        "options": [
            {
                "id": 861,
                "option_text": "I appreciate your perspective, but I respectfully disagree.",
                "is_correct": 1,
                "question_id": 86
            },
            {
                "id": 862,
                "option_text": "You're wrong!",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 863,
                "option_text": "I don't agree!",
                "is_correct": 0,
                "question_id": 86
            },
            {
                "id": 884,
                "option_text": "That doesn't make sense!",
                "is_correct": 0,
                "question_id": 86
            }
        ],
        "topic_id": 49
    },
    {
        "id": 87,
        "question_type": "multiple_choice",
        "question_text": "Which shows the best way to offer help?",
        "correct_answer": "Is there anything I can do to help you?",
        "difficulty": "Hard",
        "explanation": "Is there anything + Giúp đỡ (Language Functions - Offering help)",
        "options": [
            {
                "id": 871,
                "option_text": "Is there anything I can do to help you?",
                "is_correct": 1,
                "question_id": 87
            },
            {
                "id": 872,
                "option_text": "I'll help you!",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 873,
                "option_text": "Do you need help?",
                "is_correct": 0,
                "question_id": 87
            },
            {
                "id": 884,
                "option_text": "I can help!",
                "is_correct": 0,
                "question_id": 87
            }
        ],
        "topic_id": 49
    },
    {
        "id": 88,
        "question_type": "multiple_choice",
        "question_text": "Which best expresses a compliment?",
        "correct_answer": "You've done an outstanding job on this project!",
        "difficulty": "Hard",
        "explanation": "Outstanding job + Khen ngợi (Language Functions - Complimenting)",
        "options": [
            {
                "id": 881,
                "option_text": "You've done an outstanding job on this project!",
                "is_correct": 1,
                "question_id": 88
            },
            {
                "id": 882,
                "option_text": "Good work!",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 883,
                "option_text": "Your project is done!",
                "is_correct": 0,
                "question_id": 88
            },
            {
                "id": 884,
                "option_text": "Nice job!",
                "is_correct": 0,
                "question_id": 88
            }
        ],
        "topic_id": 49
    },
    {
        "id": 89,
        "question_type": "multiple_choice",
        "question_text": "Which shows the best way to express concern?",
        "correct_answer": "I'm concerned about your health. Are you feeling okay?",
        "difficulty": "Hard",
        "explanation": "I'm concerned + Bày tỏ lo lắng (Language Functions - Expressing concern)",
        "options": [
            {
                "id": 891,
                "option_text": "I'm concerned about your health. Are you feeling okay?",
                "is_correct": 1,
                "question_id": 89
            },
            {
                "id": 892,
                "option_text": "You look sick!",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 893,
                "option_text": "What's wrong with you?",
                "is_correct": 0,
                "question_id": 89
            },
            {
                "id": 894,
                "option_text": "You're not healthy!",
                "is_correct": 0,
                "question_id": 89
            }
        ],
        "topic_id": 49
    },
    {
        "id": 90,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "difficulty": "Hard",
        "explanation": "Toàn bộ - Language Functions",
        "correct_answer": "Language functions are specific communication purposes using appropriate expressions and tone",
        "options": [
            {
                "id": 901,
                "option_text": "Language functions are specific communication purposes using appropriate expressions and tone",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All language functions are the same",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Politeness is never important in language",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Formal and informal expressions are identical",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "options": [
            {
                "id": 901,
                "option_text": "Language functions are specific communication purposes using appropriate expressions and tone",
                "is_correct": 1,
                "question_id": 90
            },
            {
                "id": 902,
                "option_text": "All language functions are the same",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 903,
                "option_text": "Politeness is never important in language",
                "is_correct": 0,
                "question_id": 90
            },
            {
                "id": 904,
                "option_text": "Formal and informal expressions are identical",
                "is_correct": 0,
                "question_id": 90
            }
        ],
        "topic_id": 49
    },
    {
        "id": 91,
        "question_type": "multiple_choice",
        "question_text": "Which correctly matches formal and informal suggesting?",
        "correct_answer": "Formal: Might I suggest...; Informal: Why don't you...",
        "difficulty": "Hard",
        "explanation": "Formal vs Informal suggestion",
        "options": [
            {
                "id": 911,
                "option_text": "Formal: Might I suggest...; Informal: Why don't you...",
                "is_correct": 1,
                "question_id": 91
            },
            {
                "id": 912,
                "option_text": "Formal: Why don't you...; Informal: Might I suggest...",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 913,
                "option_text": "Both are always formal",
                "is_correct": 0,
                "question_id": 91
            },
            {
                "id": 924,
                "option_text": "Both are always informal",
                "is_correct": 0,
                "question_id": 91
            }
        ],
        "topic_id": 49
    },
    {
        "id": 92,
        "question_type": "multiple_choice",
        "question_text": "Which correctly matches formal and informal invitations?",
        "correct_answer": "Formal: You are cordially invited...; Informal: Wanna come...?",
        "difficulty": "Hard",
        "explanation": "Formal vs Informal invitation",
        "options": [
            {
                "id": 921,
                "option_text": "Formal: You are cordially invited...; Informal: Wanna come...?",
                "is_correct": 1,
                "question_id": 92
            },
            {
                "id": 922,
                "option_text": "Formal: Wanna come...?; Informal: You are cordially invited...",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 923,
                "option_text": "Both are always formal",
                "is_correct": 0,
                "question_id": 92
            },
            {
                "id": 924,
                "option_text": "Both are always informal",
                "is_correct": 0,
                "question_id": 92
            }
        ],
        "topic_id": 49
    },
    {
        "id": 93,
        "question_type": "multiple_choice",
        "question_text": "Which correctly orders politeness levels for asking permission?",
        "correct_answer": "Would you mind + Could I + Can I + Give me",
        "difficulty": "Hard",
        "explanation": "Levels of politeness",
        "options": [
            {
                "id": 931,
                "option_text": "Would you mind + Could I + Can I + Give me",
                "is_correct": 1,
                "question_id": 93
            },
            {
                "id": 932,
                "option_text": "Give me + Can I + Could I + Would you mind",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 933,
                "option_text": "All have the same politeness level",
                "is_correct": 0,
                "question_id": 93
            },
            {
                "id": 944,
                "option_text": "Politeness levels don't exist",
                "is_correct": 0,
                "question_id": 93
            }
        ],
        "topic_id": 49
    },
    {
        "id": 94,
        "question_type": "multiple_choice",
        "question_text": "Which shows appropriate language for customer service?",
        "correct_answer": "How may I assist you today?",
        "difficulty": "Hard",
        "explanation": "Customer service language",
        "options": [
            {
                "id": 941,
                "option_text": "How may I assist you today?",
                "is_correct": 1,
                "question_id": 94
            },
            {
                "id": 942,
                "option_text": "What do you want?",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 943,
                "option_text": "Tell me your problem!",
                "is_correct": 0,
                "question_id": 94
            },
            {
                "id": 944,
                "option_text": "Hurry up and order!",
                "is_correct": 0,
                "question_id": 94
            }
        ],
        "topic_id": 49
    },
    {
        "id": 95,
        "question_type": "multiple_choice",
        "question_text": "Which shows appropriate language for a business meeting?",
        "correct_answer": "Let me present our proposal for your consideration.",
        "difficulty": "Hard",
        "explanation": "Business meeting language",
        "options": [
            {
                "id": 951,
                "option_text": "Let me present our proposal for your consideration.",
                "is_correct": 1,
                "question_id": 95
            },
            {
                "id": 952,
                "option_text": "Here's our proposal, take it or leave it!",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 953,
                "option_text": "Our proposal is the best!",
                "is_correct": 0,
                "question_id": 95
            },
            {
                "id": 954,
                "option_text": "You need to accept our proposal!",
                "is_correct": 0,
                "question_id": 95
            }
        ],
        "topic_id": 49
    },
    {
        "id": 96,
        "question_type": "multiple_choice",
        "question_text": "Which INCORRECT pair does NOT match function and expression?",
        "correct_answer": "Apologizing: That's great news! = WRONG",
        "difficulty": "Hard",
        "explanation": "Sai - không khớp chức năng",
        "options": [
            {
                "id": 961,
                "option_text": "Apologizing: That's great news! = WRONG",
                "is_correct": 1,
                "question_id": 96
            },
            {
                "id": 962,
                "option_text": "Congratulating: That's wonderful news! = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 963,
                "option_text": "Inviting: Would you like to join us? = CORRECT",
                "is_correct": 0,
                "question_id": 96
            },
            {
                "id": 964,
                "option_text": "Apologizing: I'm sorry for that. = CORRECT",
                "is_correct": 0,
                "question_id": 96
            }
        ],
        "topic_id": 49
    },
    {
        "id": 97,
        "question_type": "multiple_choice",
        "question_text": "Which shows context-appropriate sympathy?",
        "correct_answer": "I'm truly sorry for your loss. Please let me know if I can help.",
        "difficulty": "Hard",
        "explanation": "Sympathy trong ngữ cảnh (Context-appropriate sympathy)",
        "options": [
            {
                "id": 971,
                "option_text": "I'm truly sorry for your loss. Please let me know if I can help.",
                "is_correct": 1,
                "question_id": 97
            },
            {
                "id": 972,
                "option_text": "That's too bad!",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 973,
                "option_text": "I don't know what to say!",
                "is_correct": 0,
                "question_id": 97
            },
            {
                "id": 984,
                "option_text": "Everyone dies eventually!",
                "is_correct": 0,
                "question_id": 97
            }
        ],
        "topic_id": 49
    },
    {
        "id": 98,
        "question_type": "multiple_choice",
        "question_text": "Which shows an appropriate compliment?",
        "correct_answer": "Your presentation was excellent. The data was well-organized.",
        "difficulty": "Hard",
        "explanation": "Specific compliment",
        "options": [
            {
                "id": 981,
                "option_text": "Your presentation was excellent. The data was well-organized.",
                "is_correct": 1,
                "question_id": 98
            },
            {
                "id": 982,
                "option_text": "That was good!",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 983,
                "option_text": "You did okay!",
                "is_correct": 0,
                "question_id": 98
            },
            {
                "id": 984,
                "option_text": "It was fine!",
                "is_correct": 0,
                "question_id": 98
            }
        ],
        "topic_id": 49
    },
    {
        "id": 99,
        "question_type": "multiple_choice",
        "question_text": "Which shows an appropriate response to criticism?",
        "correct_answer": "Thank you for the feedback. I'll work on improving that.",
        "difficulty": "Hard",
        "explanation": "Response to criticism",
        "options": [
            {
                "id": 991,
                "option_text": "Thank you for the feedback. I'll work on improving that.",
                "is_correct": 1,
                "question_id": 99
            },
            {
                "id": 992,
                "option_text": "That's not fair!",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 993,
                "option_text": "You're wrong!",
                "is_correct": 0,
                "question_id": 99
            },
            {
                "id": 994,
                "option_text": "I don't care about your feedback!",
                "is_correct": 0,
                "question_id": 99
            }
        ],
        "topic_id": 49
    },
    {
        "id": 100,
        "question_type": "multiple_choice",
        "question_text": "Which comprehensive statement is correct?",
        "correct_answer": "Effective communication requires choosing appropriate functions, expressions, tone, and context",
        "difficulty": "Hard",
        "explanation": "Toàn bộ cấu trúc - Language Functions",
        "options": [
            {
                "id": 1001,
                "option_text": "Effective communication requires choosing appropriate functions, expressions, tone, and context",
                "is_correct": 1,
                "question_id": 100
            },
            {
                "id": 1002,
                "option_text": "Language functions are always the same regardless of context",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1003,
                "option_text": "Formal and informal language are never important",
                "is_correct": 0,
                "question_id": 100
            },
            {
                "id": 1004,
                "option_text": "Politeness is not necessary in communication",
                "is_correct": 0,
                "question_id": 100
            }
        ],
        "topic_id": 49
    }
];

export default questions;