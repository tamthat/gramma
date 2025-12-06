const irregularVerbs = [
  {
    "id": 1,
    "infinitive": "arise",
    "past_simple": "arose",
    "past_participle": "arisen",
    "meaning_en": "to happen, to come into being",
    "meaning_vi": "nảy sinh, phát sinh, nổi lên"
  },
  {
    "id": 2,
    "infinitive": "awake",
    "past_simple": "awoke",
    "past_participle": "awoken",
    "meaning_en": "to wake up, to stop sleeping",
    "meaning_vi": "thức dậy, tỉnh dậy"
  },
  {
    "id": 3,
    "infinitive": "be",
    "past_simple": "was/were",
    "past_participle": "been",
    "meaning_en": "to exist, to stay, to have a certain quality",
    "meaning_vi": "là, thì, tồn tại"
  },
  {
    "id": 4,
    "infinitive": "bear",
    "past_simple": "bore",
    "past_participle": "borne/born",
    "meaning_en": "to carry, to endure, to give birth",
    "meaning_vi": "mang, chịu đựng, sinh ra"
  },
  {
    "id": 5,
    "infinitive": "beat",
    "past_simple": "beat",
    "past_participle": "beaten",
    "meaning_en": "to strike, to defeat, to overcome",
    "meaning_vi": "đánh, thắng, vượt qua"
  },
  {
    "id": 6,
    "infinitive": "become",
    "past_simple": "became",
    "past_participle": "become",
    "meaning_en": "to start to be, to grow into",
    "meaning_vi": "trở thành, trở nên"
  },
  {
    "id": 7,
    "infinitive": "beget",
    "past_simple": "begot/begat",
    "past_participle": "begot/begotten",
    "meaning_en": "to father, to cause",
    "meaning_vi": "sinh ra (con), gây ra"
  },
  {
    "id": 8,
    "infinitive": "begin",
    "past_simple": "began",
    "past_participle": "begun",
    "meaning_en": "to start, to commence",
    "meaning_vi": "bắt đầu, khởi hành"
  },
  {
    "id": 9,
    "infinitive": "bend",
    "past_simple": "bent",
    "past_participle": "bent",
    "meaning_en": "to curve, to flex, to bow",
    "meaning_vi": "cong, uốn, cúi"
  },
  {
    "id": 10,
    "infinitive": "bet",
    "past_simple": "bet",
    "past_participle": "bet",
    "meaning_en": "to wager, to stake money",
    "meaning_vi": "cược, đánh cược"
  },
  {
    "id": 11,
    "infinitive": "bind",
    "past_simple": "bound",
    "past_participle": "bound",
    "meaning_en": "to tie, to fasten, to connect",
    "meaning_vi": "buộc, ràng buộc"
  },
  {
    "id": 12,
    "infinitive": "bite",
    "past_simple": "bit",
    "past_participle": "bitten",
    "meaning_en": "to cut with teeth, to seize",
    "meaning_vi": "cắn, ngoạm"
  },
  {
    "id": 13,
    "infinitive": "bleed",
    "past_simple": "bled",
    "past_participle": "bled",
    "meaning_en": "to lose blood, to drain",
    "meaning_vi": "chảy máu, mất máu"
  },
  {
    "id": 14,
    "infinitive": "blend",
    "past_simple": "blended/blent",
    "past_participle": "blended/blent",
    "meaning_en": "to mix, to combine",
    "meaning_vi": "trộn, hòa trộn"
  },
  {
    "id": 15,
    "infinitive": "bless",
    "past_simple": "blessed/blest",
    "past_participle": "blessed/blest",
    "meaning_en": "to make holy, to give blessing",
    "meaning_vi": "ban phước, cầu chúc"
  },
  {
    "id": 16,
    "infinitive": "blow",
    "past_simple": "blew",
    "past_participle": "blown",
    "meaning_en": "to move air, to expel breath",
    "meaning_vi": "thổi, mở"
  },
  {
    "id": 17,
    "infinitive": "break",
    "past_simple": "broke",
    "past_participle": "broken",
    "meaning_en": "to fracture, to destroy, to interrupt",
    "meaning_vi": "vỡ, gãy, phá vỡ"
  },
  {
    "id": 18,
    "infinitive": "breed",
    "past_simple": "bred",
    "past_participle": "bred",
    "meaning_en": "to raise animals, to produce offspring",
    "meaning_vi": "sinh sản, nuôi (gia súc)"
  },
  {
    "id": 19,
    "infinitive": "bring",
    "past_simple": "brought",
    "past_participle": "brought",
    "meaning_en": "to carry towards, to transport",
    "meaning_vi": "mang, dẫn"
  },
  {
    "id": 20,
    "infinitive": "broadcast",
    "past_simple": "broadcast",
    "past_participle": "broadcast",
    "meaning_en": "to transmit by radio/TV, to spread widely",
    "meaning_vi": "phát sóng, phát hành"
  },
  {
    "id": 21,
    "infinitive": "build",
    "past_simple": "built",
    "past_participle": "built",
    "meaning_en": "to construct, to make",
    "meaning_vi": "xây dựng, xây"
  },
  {
    "id": 22,
    "infinitive": "burn",
    "past_simple": "burned/burnt",
    "past_participle": "burned/burnt",
    "meaning_en": "to consume with fire, to feel pain",
    "meaning_vi": "cháy, đốt"
  },
  {
    "id": 23,
    "infinitive": "burst",
    "past_simple": "burst",
    "past_participle": "burst",
    "meaning_en": "to break open, to explode",
    "meaning_vi": "vỡ, nổ, bùng phát"
  },
  {
    "id": 24,
    "infinitive": "buy",
    "past_simple": "bought",
    "past_participle": "bought",
    "meaning_en": "to purchase, to acquire",
    "meaning_vi": "mua, mua sắm"
  },
  {
    "id": 25,
    "infinitive": "catch",
    "past_simple": "caught",
    "past_participle": "caught",
    "meaning_en": "to seize, to grab, to capture",
    "meaning_vi": "bắt, nắm lấy"
  },
  {
    "id": 26,
    "infinitive": "choose",
    "past_simple": "chose",
    "past_participle": "chosen",
    "meaning_en": "to select, to pick",
    "meaning_vi": "chọn, lựa chọn"
  },
  {
    "id": 27,
    "infinitive": "cling",
    "past_simple": "clung",
    "past_participle": "clung",
    "meaning_en": "to hold tightly, to adhere",
    "meaning_vi": "bám vào, dính vào"
  },
  {
    "id": 28,
    "infinitive": "come",
    "past_simple": "came",
    "past_participle": "come",
    "meaning_en": "to move towards, to arrive",
    "meaning_vi": "đến, tới"
  },
  {
    "id": 29,
    "infinitive": "cost",
    "past_simple": "cost",
    "past_participle": "cost",
    "meaning_en": "to have a price, to require as payment",
    "meaning_vi": "có giá, tiêu tốn"
  },
  {
    "id": 30,
    "infinitive": "creep",
    "past_simple": "crept",
    "past_participle": "crept",
    "meaning_en": "to crawl, to move slowly",
    "meaning_vi": "bò, trườn, trèo"
  },
  {
    "id": 31,
    "infinitive": "cut",
    "past_simple": "cut",
    "past_participle": "cut",
    "meaning_en": "to sever, to slash, to divide",
    "meaning_vi": "cắt, chặt"
  },
  {
    "id": 32,
    "infinitive": "deal",
    "past_simple": "dealt",
    "past_participle": "dealt",
    "meaning_en": "to distribute, to trade, to manage",
    "meaning_vi": "chia, buôn bán, xử lý"
  },
  {
    "id": 33,
    "infinitive": "dig",
    "past_simple": "dug",
    "past_participle": "dug",
    "meaning_en": "to excavate, to unearth, to turn soil",
    "meaning_vi": "đào, khoét"
  },
  {
    "id": 34,
    "infinitive": "do",
    "past_simple": "did",
    "past_participle": "done",
    "meaning_en": "to perform, to carry out, to complete",
    "meaning_vi": "làm, thực hiện"
  },
  {
    "id": 35,
    "infinitive": "draw",
    "past_simple": "drew",
    "past_participle": "drawn",
    "meaning_en": "to sketch, to pull, to extract",
    "meaning_vi": "vẽ, kéo, rút"
  },
  {
    "id": 36,
    "infinitive": "dream",
    "past_simple": "dreamed/dreamt",
    "past_participle": "dreamed/dreamt",
    "meaning_en": "to experience a dream, to imagine",
    "meaning_vi": "mơ, nằm mơ"
  },
  {
    "id": 37,
    "infinitive": "drink",
    "past_simple": "drank",
    "past_participle": "drunk",
    "meaning_en": "to consume liquid, to swallow",
    "meaning_vi": "uống, ngụp"
  },
  {
    "id": 38,
    "infinitive": "drive",
    "past_simple": "drove",
    "past_participle": "driven",
    "meaning_en": "to operate a vehicle, to propel",
    "meaning_vi": "lái xe, lái"
  },
  {
    "id": 39,
    "infinitive": "dwell",
    "past_simple": "dwelt/dwelled",
    "past_participle": "dwelt/dwelled",
    "meaning_en": "to live, to reside, to inhabit",
    "meaning_vi": "ở, cư trú"
  },
  {
    "id": 40,
    "infinitive": "eat",
    "past_simple": "ate",
    "past_participle": "eaten",
    "meaning_en": "to consume food, to take in",
    "meaning_vi": "ăn"
  },
  {
    "id": 41,
    "infinitive": "fall",
    "past_simple": "fell",
    "past_participle": "fallen",
    "meaning_en": "to drop, to tumble, to decline",
    "meaning_vi": "rơi, ngã"
  },
  {
    "id": 42,
    "infinitive": "feed",
    "past_simple": "fed",
    "past_participle": "fed",
    "meaning_en": "to give food, to nourish",
    "meaning_vi": "cho ăn, nuôi"
  },
  {
    "id": 43,
    "infinitive": "feel",
    "past_simple": "felt",
    "past_participle": "felt",
    "meaning_en": "to sense, to touch, to experience emotion",
    "meaning_vi": "cảm thấy, sờ"
  },
  {
    "id": 44,
    "infinitive": "fight",
    "past_simple": "fought",
    "past_participle": "fought",
    "meaning_en": "to combat, to battle, to contend",
    "meaning_vi": "chiến đấu, đánh nhau"
  },
  {
    "id": 45,
    "infinitive": "find",
    "past_simple": "found",
    "past_participle": "found",
    "meaning_en": "to discover, to locate, to establish",
    "meaning_vi": "tìm, tìm thấy"
  },
  {
    "id": 46,
    "infinitive": "fit",
    "past_simple": "fitted/fit",
    "past_participle": "fitted/fit",
    "meaning_en": "to be the right size, to adapt",
    "meaning_vi": "vừa vặn, lắp"
  },
  {
    "id": 47,
    "infinitive": "flee",
    "past_simple": "fled",
    "past_participle": "fled",
    "meaning_en": "to run away, to escape",
    "meaning_vi": "bỏ chạy, trốn"
  },
  {
    "id": 48,
    "infinitive": "fling",
    "past_simple": "flung",
    "past_participle": "flung",
    "meaning_en": "to throw forcefully, to hurl",
    "meaning_vi": "ném, quẳng"
  },
  {
    "id": 49,
    "infinitive": "fly",
    "past_simple": "flew",
    "past_participle": "flown",
    "meaning_en": "to move through air, to travel by plane",
    "meaning_vi": "bay, lái máy bay"
  },
  {
    "id": 50,
    "infinitive": "forbid",
    "past_simple": "forbade",
    "past_participle": "forbidden",
    "meaning_en": "to prohibit, to ban, to prevent",
    "meaning_vi": "cấm, ngăn cấm"
  },
  {
    "id": 51,
    "infinitive": "forget",
    "past_simple": "forgot",
    "past_participle": "forgotten",
    "meaning_en": "to fail to remember, to lose memory",
    "meaning_vi": "quên, lãng quên"
  },
  {
    "id": 52,
    "infinitive": "forgive",
    "past_simple": "forgave",
    "past_participle": "forgiven",
    "meaning_en": "to pardon, to excuse, to cease blaming",
    "meaning_vi": "tha thứ, bỏ qua"
  },
  {
    "id": 53,
    "infinitive": "freeze",
    "past_simple": "froze",
    "past_participle": "frozen",
    "meaning_en": "to turn to ice, to become solid",
    "meaning_vi": "đông lạnh, đóng băng"
  },
  {
    "id": 54,
    "infinitive": "get",
    "past_simple": "got",
    "past_participle": "got/gotten",
    "meaning_en": "to obtain, to receive, to become",
    "meaning_vi": "được, nhận, trở thành"
  },
  {
    "id": 55,
    "infinitive": "give",
    "past_simple": "gave",
    "past_participle": "given",
    "meaning_en": "to provide, to present, to offer",
    "meaning_vi": "cho, tặng, cấp"
  },
  {
    "id": 56,
    "infinitive": "go",
    "past_simple": "went",
    "past_participle": "gone",
    "meaning_en": "to move, to travel, to depart",
    "meaning_vi": "đi, đi vào"
  },
  {
    "id": 57,
    "infinitive": "grind",
    "past_simple": "ground",
    "past_participle": "ground",
    "meaning_en": "to crush into powder, to sharpen",
    "meaning_vi": "xay, mài"
  },
  {
    "id": 58,
    "infinitive": "grow",
    "past_simple": "grew",
    "past_participle": "grown",
    "meaning_en": "to increase in size, to develop",
    "meaning_vi": "lớn lên, mọc, phát triển"
  },
  {
    "id": 59,
    "infinitive": "hang",
    "past_simple": "hung",
    "past_participle": "hung",
    "meaning_en": "to suspend, to attach from above",
    "meaning_vi": "treo, buộc"
  },
  {
    "id": 60,
    "infinitive": "have",
    "past_simple": "had",
    "past_participle": "had",
    "meaning_en": "to possess, to own, to hold",
    "meaning_vi": "có, sở hữu"
  },
  {
    "id": 61,
    "infinitive": "hear",
    "past_simple": "heard",
    "past_participle": "heard",
    "meaning_en": "to perceive sound, to listen",
    "meaning_vi": "nghe, nghe thấy"
  },
  {
    "id": 62,
    "infinitive": "hide",
    "past_simple": "hid",
    "past_participle": "hidden",
    "meaning_en": "to conceal, to keep secret, to take cover",
    "meaning_vi": "che giấu, trốn"
  },
  {
    "id": 63,
    "infinitive": "hit",
    "past_simple": "hit",
    "past_participle": "hit",
    "meaning_en": "to strike, to reach a target",
    "meaning_vi": "đánh, trúng"
  },
  {
    "id": 64,
    "infinitive": "hold",
    "past_simple": "held",
    "past_participle": "held",
    "meaning_en": "to grasp, to keep, to contain",
    "meaning_vi": "cầm, nắm, chứa"
  },
  {
    "id": 65,
    "infinitive": "hurt",
    "past_simple": "hurt",
    "past_participle": "hurt",
    "meaning_en": "to cause pain, to injure",
    "meaning_vi": "làm đau, thương tích"
  },
  {
    "id": 66,
    "infinitive": "keep",
    "past_simple": "kept",
    "past_participle": "kept",
    "meaning_en": "to retain, to maintain, to preserve",
    "meaning_vi": "giữ, cất, bảo quản"
  },
  {
    "id": 67,
    "infinitive": "know",
    "past_simple": "knew",
    "past_participle": "known",
    "meaning_en": "to be aware, to have knowledge, to recognize",
    "meaning_vi": "biết, quen"
  },
  {
    "id": 68,
    "infinitive": "lay",
    "past_simple": "laid",
    "past_participle": "laid",
    "meaning_en": "to place, to put down, to set",
    "meaning_vi": "đặt, để, buộc (bố)"
  },
  {
    "id": 69,
    "infinitive": "lead",
    "past_simple": "led",
    "past_participle": "led",
    "meaning_en": "to guide, to direct, to be in charge",
    "meaning_vi": "dẫn dắt, lãnh đạo"
  },
  {
    "id": 70,
    "infinitive": "learn",
    "past_simple": "learned/learnt",
    "past_participle": "learned/learnt",
    "meaning_en": "to acquire knowledge, to study",
    "meaning_vi": "học, học hỏi"
  },
  {
    "id": 71,
    "infinitive": "leave",
    "past_simple": "left",
    "past_participle": "left",
    "meaning_en": "to depart, to abandon, to remain",
    "meaning_vi": "bỏ đi, rời khỏi"
  },
  {
    "id": 72,
    "infinitive": "lend",
    "past_simple": "lent",
    "past_participle": "lent",
    "meaning_en": "to loan, to provide temporarily",
    "meaning_vi": "cho mượn, cho vay"
  },
  {
    "id": 73,
    "infinitive": "let",
    "past_simple": "let",
    "past_participle": "let",
    "meaning_en": "to allow, to permit, to enable",
    "meaning_vi": "cho phép, để cho"
  },
  {
    "id": 74,
    "infinitive": "lie",
    "past_simple": "lay",
    "past_participle": "lain",
    "meaning_en": "to recline, to be in a horizontal position",
    "meaning_vi": "nằm, nằm phía trên"
  },
  {
    "id": 75,
    "infinitive": "light",
    "past_simple": "lit/lighted",
    "past_participle": "lit/lighted",
    "meaning_en": "to ignite, to illuminate, to brighten",
    "meaning_vi": "thắp sáng, bật"
  },
  {
    "id": 76,
    "infinitive": "lose",
    "past_simple": "lost",
    "past_participle": "lost",
    "meaning_en": "to misplace, to be defeated, to fail",
    "meaning_vi": "mất, thua, lạc"
  },
  {
    "id": 77,
    "infinitive": "make",
    "past_simple": "made",
    "past_participle": "made",
    "meaning_en": "to create, to produce, to manufacture",
    "meaning_vi": "làm, tạo ra, chế tạo"
  },
  {
    "id": 78,
    "infinitive": "mean",
    "past_simple": "meant",
    "past_participle": "meant",
    "meaning_en": "to intend, to signify, to have as meaning",
    "meaning_vi": "có ý, có nghĩa, có dụng ý"
  },
  {
    "id": 79,
    "infinitive": "meet",
    "past_simple": "met",
    "past_participle": "met",
    "meaning_en": "to encounter, to assemble, to come together",
    "meaning_vi": "gặp, hội tụ"
  },
  {
    "id": 80,
    "infinitive": "pay",
    "past_simple": "paid",
    "past_participle": "paid",
    "meaning_en": "to give money, to settle a debt",
    "meaning_vi": "trả, thanh toán"
  },
  {
    "id": 81,
    "infinitive": "put",
    "past_simple": "put",
    "past_participle": "put",
    "meaning_en": "to place, to set, to position",
    "meaning_vi": "để, đặt, để vào"
  },
  {
    "id": 82,
    "infinitive": "read",
    "past_simple": "read",
    "past_participle": "read",
    "meaning_en": "to look at and understand written words",
    "meaning_vi": "đọc"
  },
  {
    "id": 83,
    "infinitive": "ride",
    "past_simple": "rode",
    "past_participle": "ridden",
    "meaning_en": "to travel on an animal or vehicle",
    "meaning_vi": "cưỡi, đi trên"
  },
  {
    "id": 84,
    "infinitive": "ring",
    "past_simple": "rang",
    "past_participle": "rung",
    "meaning_en": "to make a sound, to call",
    "meaning_vi": "rung chuông, gọi điện"
  },
  {
    "id": 85,
    "infinitive": "rise",
    "past_simple": "rose",
    "past_participle": "risen",
    "meaning_en": "to go up, to stand up, to increase",
    "meaning_vi": "dấy lên, tăng lên"
  },
  {
    "id": 86,
    "infinitive": "run",
    "past_simple": "ran",
    "past_participle": "run",
    "meaning_en": "to move quickly, to operate, to flow",
    "meaning_vi": "chạy, chạy để thoát"
  },
  {
    "id": 87,
    "infinitive": "say",
    "past_simple": "said",
    "past_participle": "said",
    "meaning_en": "to speak, to utter, to express",
    "meaning_vi": "nói, thốt lên"
  },
  {
    "id": 88,
    "infinitive": "see",
    "past_simple": "saw",
    "past_participle": "seen",
    "meaning_en": "to perceive with eyes, to observe, to understand",
    "meaning_vi": "thấy, nhìn thấy, hiểu"
  },
  {
    "id": 89,
    "infinitive": "seek",
    "past_simple": "sought",
    "past_participle": "sought",
    "meaning_en": "to search for, to look for, to pursue",
    "meaning_vi": "tìm kiếm, tìm"
  },
  {
    "id": 90,
    "infinitive": "sell",
    "past_simple": "sold",
    "past_participle": "sold",
    "meaning_en": "to exchange for money, to vend",
    "meaning_vi": "bán, tiêu thụ"
  },
  {
    "id": 91,
    "infinitive": "send",
    "past_simple": "sent",
    "past_participle": "sent",
    "meaning_en": "to dispatch, to transmit, to convey",
    "meaning_vi": "gửi, cử"
  },
  {
    "id": 92,
    "infinitive": "set",
    "past_simple": "set",
    "past_participle": "set",
    "meaning_en": "to place, to establish, to adjust",
    "meaning_vi": "để, lập, cài"
  },
  {
    "id": 93,
    "infinitive": "shake",
    "past_simple": "shook",
    "past_participle": "shaken",
    "meaning_en": "to tremble, to vibrate, to move back and forth",
    "meaning_vi": "lắc, rung"
  },
  {
    "id": 94,
    "infinitive": "shine",
    "past_simple": "shone",
    "past_participle": "shone",
    "meaning_en": "to emit light, to brighten, to stand out",
    "meaning_vi": "sáng, lấp lánh"
  },
  {
    "id": 95,
    "infinitive": "shoot",
    "past_simple": "shot",
    "past_participle": "shot",
    "meaning_en": "to fire a gun, to hit with a projectile",
    "meaning_vi": "bắn, bắn súng"
  },
  {
    "id": 96,
    "infinitive": "show",
    "past_simple": "showed",
    "past_participle": "shown",
    "meaning_en": "to display, to reveal, to demonstrate",
    "meaning_vi": "chỉ, trình diễn"
  },
  {
    "id": 97,
    "infinitive": "shrink",
    "past_simple": "shrank",
    "past_participle": "shrunk",
    "meaning_en": "to become smaller, to contract",
    "meaning_vi": "co lại, nheo nhóc"
  },
  {
    "id": 98,
    "infinitive": "shut",
    "past_simple": "shut",
    "past_participle": "shut",
    "meaning_en": "to close, to block, to seal",
    "meaning_vi": "đóng, khóa"
  },
  {
    "id": 99,
    "infinitive": "sing",
    "past_simple": "sang",
    "past_participle": "sung",
    "meaning_en": "to produce musical sounds with voice",
    "meaning_vi": "hát"
  },
  {
    "id": 100,
    "infinitive": "sink",
    "past_simple": "sank",
    "past_participle": "sunk",
    "meaning_en": "to go down below surface, to descend",
    "meaning_vi": "chìm, đắm, lún"
  },
  {
    "id": 101,
    "infinitive": "sit",
    "past_simple": "sat",
    "past_participle": "sat",
    "meaning_en": "to be seated, to occupy a chair",
    "meaning_vi": "ngồi"
  },
  {
    "id": 102,
    "infinitive": "sleep",
    "past_simple": "slept",
    "past_participle": "slept",
    "meaning_en": "to rest with eyes closed, to be inactive",
    "meaning_vi": "ngủ"
  },
  {
    "id": 103,
    "infinitive": "slide",
    "past_simple": "slid",
    "past_participle": "slid",
    "meaning_en": "to glide, to slip, to move smoothly",
    "meaning_vi": "trượt, trượt lên"
  },
  {
    "id": 104,
    "infinitive": "speak",
    "past_simple": "spoke",
    "past_participle": "spoken",
    "meaning_en": "to talk, to use language, to converse",
    "meaning_vi": "nói, phát biểu"
  },
  {
    "id": 105,
    "infinitive": "spend",
    "past_simple": "spent",
    "past_participle": "spent",
    "meaning_en": "to use money, to pass time, to expend",
    "meaning_vi": "tiêu xài, dành"
  },
  {
    "id": 106,
    "infinitive": "spin",
    "past_simple": "spun",
    "past_participle": "spun",
    "meaning_en": "to rotate, to turn around, to make thread",
    "meaning_vi": "quay, xoay, dệt"
  },
  {
    "id": 107,
    "infinitive": "split",
    "past_simple": "split",
    "past_participle": "split",
    "meaning_en": "to break apart, to divide, to separate",
    "meaning_vi": "chẻ, tách ra"
  },
  {
    "id": 108,
    "infinitive": "spread",
    "past_simple": "spread",
    "past_participle": "spread",
    "meaning_en": "to extend, to unfold, to scatter",
    "meaning_vi": "lan rộng, trải"
  },
  {
    "id": 109,
    "infinitive": "spring",
    "past_simple": "sprang",
    "past_participle": "sprung",
    "meaning_en": "to jump, to leap, to emerge",
    "meaning_vi": "nhảy, phụt ra"
  },
  {
    "id": 110,
    "infinitive": "stand",
    "past_simple": "stood",
    "past_participle": "stood",
    "meaning_en": "to be upright, to remain in place, to tolerate",
    "meaning_vi": "đứng, chịu đựng"
  },
  {
    "id": 111,
    "infinitive": "steal",
    "past_simple": "stole",
    "past_participle": "stolen",
    "meaning_en": "to take unlawfully, to rob, to move quietly",
    "meaning_vi": "trộm, cướp"
  },
  {
    "id": 112,
    "infinitive": "stick",
    "past_simple": "stuck",
    "past_participle": "stuck",
    "meaning_en": "to adhere, to fasten, to become fastened",
    "meaning_vi": "dán, dính, chọc"
  },
  {
    "id": 113,
    "infinitive": "sting",
    "past_simple": "stung",
    "past_participle": "stung",
    "meaning_en": "to prick with stinger, to cause sharp pain",
    "meaning_vi": "đốt, cắn"
  },
  {
    "id": 114,
    "infinitive": "stink",
    "past_simple": "stank",
    "past_participle": "stunk",
    "meaning_en": "to smell bad, to have foul odor",
    "meaning_vi": "hôi, bốc mùi"
  },
  {
    "id": 115,
    "infinitive": "strike",
    "past_simple": "struck",
    "past_participle": "struck",
    "meaning_en": "to hit, to attack, to impress",
    "meaning_vi": "đánh, gây ấn tượng"
  },
  {
    "id": 116,
    "infinitive": "string",
    "past_simple": "strung",
    "past_participle": "strung",
    "meaning_en": "to thread, to put on string, to extend",
    "meaning_vi": "xâu, kéo dài"
  },
  {
    "id": 117,
    "infinitive": "swear",
    "past_simple": "swore",
    "past_participle": "sworn",
    "meaning_en": "to use profanity, to vow, to promise",
    "meaning_vi": "thề, nguyền"
  },
  {
    "id": 118,
    "infinitive": "sweep",
    "past_simple": "swept",
    "past_participle": "swept",
    "meaning_en": "to clean with broom, to move quickly",
    "meaning_vi": "quét, lướt qua"
  },
  {
    "id": 119,
    "infinitive": "swell",
    "past_simple": "swelled",
    "past_participle": "swollen",
    "meaning_en": "to expand, to increase in size, to become puffed",
    "meaning_vi": "sưng lên, phồng lên"
  },
  {
    "id": 120,
    "infinitive": "swim",
    "past_simple": "swam",
    "past_participle": "swum",
    "meaning_en": "to move through water, to float",
    "meaning_vi": "bơi"
  },
  {
    "id": 121,
    "infinitive": "swing",
    "past_simple": "swung",
    "past_participle": "swung",
    "meaning_en": "to move back and forth, to turn, to pivot",
    "meaning_vi": "swing, đung đưa"
  },
  {
    "id": 122,
    "infinitive": "take",
    "past_simple": "took",
    "past_participle": "taken",
    "meaning_en": "to seize, to capture, to require",
    "meaning_vi": "lấy, cầm, mang"
  },
  {
    "id": 123,
    "infinitive": "teach",
    "past_simple": "taught",
    "past_participle": "taught",
    "meaning_en": "to instruct, to educate, to show",
    "meaning_vi": "dạy, dạy dỗ"
  },
  {
    "id": 124,
    "infinitive": "tear",
    "past_simple": "tore",
    "past_participle": "torn",
    "meaning_en": "to rip, to pull apart, to move rapidly",
    "meaning_vi": "rách, xé"
  },
  {
    "id": 125,
    "infinitive": "tell",
    "past_simple": "told",
    "past_participle": "told",
    "meaning_en": "to narrate, to inform, to distinguish",
    "meaning_vi": "nói, kể"
  },
  {
    "id": 126,
    "infinitive": "think",
    "past_simple": "thought",
    "past_participle": "thought",
    "meaning_en": "to use mind, to believe, to consider",
    "meaning_vi": "nghĩ, cho rằng"
  },
  {
    "id": 127,
    "infinitive": "throw",
    "past_simple": "threw",
    "past_participle": "thrown",
    "meaning_en": "to hurl, to cast, to project",
    "meaning_vi": "ném, quẳng"
  },
  {
    "id": 128,
    "infinitive": "understand",
    "past_simple": "understood",
    "past_participle": "understood",
    "meaning_en": "to comprehend, to grasp, to recognize",
    "meaning_vi": "hiểu, hiểu biết"
  },
  {
    "id": 129,
    "infinitive": "wake",
    "past_simple": "woke",
    "past_participle": "woken",
    "meaning_en": "to awake, to stop sleeping, to arouse",
    "meaning_vi": "thức dậy, đánh thức"
  },
  {
    "id": 130,
    "infinitive": "wear",
    "past_simple": "wore",
    "past_participle": "worn",
    "meaning_en": "to have on body, to use regularly, to erode",
    "meaning_vi": "mặc, mang"
  },
  {
    "id": 131,
    "infinitive": "weep",
    "past_simple": "wept",
    "past_participle": "wept",
    "meaning_en": "to cry, to shed tears, to lament",
    "meaning_vi": "khóc, rơi nước mắt"
  },
  {
    "id": 132,
    "infinitive": "wet",
    "past_simple": "wet",
    "past_participle": "wet",
    "meaning_en": "to make wet, to moisten, to urinate on",
    "meaning_vi": "làm ướt, ướt"
  },
  {
    "id": 133,
    "infinitive": "win",
    "past_simple": "won",
    "past_participle": "won",
    "meaning_en": "to be victorious, to get victory, to gain",
    "meaning_vi": "thắng, giành chiến thắng"
  },
  {
    "id": 134,
    "infinitive": "wind",
    "past_simple": "wound",
    "past_participle": "wound",
    "meaning_en": "to coil, to twist, to turn",
    "meaning_vi": "quấn, xoắn"
  },
  {
    "id": 135,
    "infinitive": "write",
    "past_simple": "wrote",
    "past_participle": "written",
    "meaning_en": "to mark letters/words, to compose, to author",
    "meaning_vi": "viết, sáng tác"
  },
  {
    "id": 136,
    "infinitive": "bid",
    "past_simple": "bid",
    "past_participle": "bid",
    "meaning_en": "to offer a price, to command",
    "meaning_vi": "trả giá, bảo, lệnh"
  },
  {
    "id": 137,
    "infinitive": "broadcast",
    "past_simple": "broadcast",
    "past_participle": "broadcast",
    "meaning_en": "to transmit, to spread",
    "meaning_vi": "phát sóng"
  },
  {
    "id": 138,
    "infinitive": "bust",
    "past_simple": "busted",
    "past_participle": "busted",
    "meaning_en": "to break, to catch red-handed",
    "meaning_vi": "phá, bắt quả tang"
  },
  {
    "id": 139,
    "infinitive": "dive",
    "past_simple": "dived/dove",
    "past_participle": "dived",
    "meaning_en": "to plunge, to jump into water",
    "meaning_vi": "lặn, nhảy xuống"
  },
  {
    "id": 140,
    "infinitive": "forbear",
    "past_simple": "forbore",
    "past_participle": "forborne",
    "meaning_en": "to refrain, to avoid, to endure",
    "meaning_vi": "kiềm chế, chịu đựng"
  },
  {
    "id": 141,
    "infinitive": "forsake",
    "past_simple": "forsook",
    "past_participle": "forsaken",
    "meaning_en": "to abandon, to desert, to leave",
    "meaning_vi": "bỏ bê, từ bỏ"
  },
  {
    "id": 142,
    "infinitive": "heave",
    "past_simple": "heaved/hove",
    "past_participle": "heaved/hove",
    "meaning_en": "to lift, to throw with effort, to breathe heavily",
    "meaning_vi": "nâng lên, thở hổn hển"
  },
  {
    "id": 143,
    "infinitive": "kneel",
    "past_simple": "knelt",
    "past_participle": "knelt",
    "meaning_en": "to go down on knees, to genuflect",
    "meaning_vi": "quỳ gối"
  },
  {
    "id": 144,
    "infinitive": "leap",
    "past_simple": "leaped/leapt",
    "past_participle": "leaped/leapt",
    "meaning_en": "to jump, to spring",
    "meaning_vi": "nhảy cao, bước nhảy"
  },
  {
    "id": 145,
    "infinitive": "mow",
    "past_simple": "mowed",
    "past_participle": "mowed/mown",
    "meaning_en": "to cut grass, to reap",
    "meaning_vi": "cắt cỏ, gặt"
  },
  {
    "id": 146,
    "infinitive": "plead",
    "past_simple": "pleaded/pled",
    "past_participle": "pleaded/pled",
    "meaning_en": "to make an emotional appeal, to argue in court",
    "meaning_vi": "nài nỉ, cầu xin"
  },
  {
    "id": 147,
    "infinitive": "prove",
    "past_simple": "proved",
    "past_participle": "proved/proven",
    "meaning_en": "to demonstrate, to establish truth",
    "meaning_vi": "chứng minh, chứng tỏ"
  },
  {
    "id": 148,
    "infinitive": "sew",
    "past_simple": "sewed",
    "past_participle": "sewn/sewed",
    "meaning_en": "to join with stitches, to stitch",
    "meaning_vi": "may, khâu"
  },
  {
    "id": 149,
    "infinitive": "shear",
    "past_simple": "sheared",
    "past_participle": "shorn",
    "meaning_en": "to cut with shears, to cut hair/wool",
    "meaning_vi": "cắt (lông cừu)"
  },
  {
    "id": 150,
    "infinitive": "sling",
    "past_simple": "slung",
    "past_participle": "slung",
    "meaning_en": "to throw, to fling, to hurl",
    "meaning_vi": "ném, quẳng"
  },
  {
    "id": 151,
    "infinitive": "slit",
    "past_simple": "slit",
    "past_participle": "slit",
    "meaning_en": "to cut a narrow opening, to slash",
    "meaning_vi": "rạch, cắt dọc"
  },
  {
    "id": 152,
    "infinitive": "smite",
    "past_simple": "smote",
    "past_participle": "smitten",
    "meaning_en": "to strike, to hit, to be infatuated",
    "meaning_vi": "đánh, thương ghiệt"
  },
  {
    "id": 153,
    "infinitive": "sow",
    "past_simple": "sowed",
    "past_participle": "sown",
    "meaning_en": "to plant seed, to scatter",
    "meaning_vi": "gieo hạt, gieo rắc"
  },
  {
    "id": 154,
    "infinitive": "spell",
    "past_simple": "spelled/spelt",
    "past_participle": "spelled/spelt",
    "meaning_en": "to name letters, to compose words",
    "meaning_vi": "đánh vần, kỳ vọng"
  },
  {
    "id": 155,
    "infinitive": "spill",
    "past_simple": "spilled/spilt",
    "past_participle": "spilled/spilt",
    "meaning_en": "to cause to flow out, to shed",
    "meaning_vi": "tràn, đổ đều"
  },
  {
    "id": 156,
    "infinitive": "spit",
    "past_simple": "spat",
    "past_participle": "spat",
    "meaning_en": "to eject saliva, to say with anger",
    "meaning_vi": "phun nước bọt, nhổ"
  },
  {
    "id": 157,
    "infinitive": "strew",
    "past_simple": "strewed",
    "past_participle": "strewn",
    "meaning_en": "to scatter, to spread over",
    "meaning_vi": "rải, phủ"
  },
  {
    "id": 158,
    "infinitive": "stride",
    "past_simple": "strode",
    "past_participle": "stridden",
    "meaning_en": "to walk with long steps, to straddle",
    "meaning_vi": "bước dài, sải bước"
  },
  {
    "id": 159,
    "infinitive": "strive",
    "past_simple": "strove",
    "past_participle": "striven",
    "meaning_en": "to make effort, to struggle, to try hard",
    "meaning_vi": "cố gắng, nỗ lực"
  },
  {
    "id": 160,
    "infinitive": "thrust",
    "past_simple": "thrust",
    "past_participle": "thrust",
    "meaning_en": "to push forcefully, to shove",
    "meaning_vi": "đẩy mạnh, chích"
  },
  {
    "id": 161,
    "infinitive": "tread",
    "past_simple": "trod",
    "past_participle": "trodden",
    "meaning_en": "to step on, to walk, to press down",
    "meaning_vi": "踏, bước đạp"
  },
  {
    "id": 162,
    "infinitive": "uphold",
    "past_simple": "upheld",
    "past_participle": "upheld",
    "meaning_en": "to support, to maintain, to defend",
    "meaning_vi": "ủng hộ, duy trì"
  },
  {
    "id": 163,
    "infinitive": "withdraw",
    "past_simple": "withdrew",
    "past_participle": "withdrawn",
    "meaning_en": "to take out, to remove, to retreat",
    "meaning_vi": "rút lại, rút lui"
  },
  {
    "id": 164,
    "infinitive": "withstand",
    "past_simple": "withstood",
    "past_participle": "withstood",
    "meaning_en": "to resist, to endure, to oppose",
    "meaning_vi": "chống lại, kháng cự"
  }
];
export default irregularVerbs;