const LESSONS = [
  {
    "id": 1,
    "category": "Slow Back Swing",
    "quote": "DON’T RUSH THE MOMENT.",
    "explanation": "A hurried mind can make a swing feel hurried. Settle into your own comfortable tempo before you begin.",
    "challenge": "Take one easy breath and make a relaxed takeaway on your next practice swing."
  },
  {
    "id": 2,
    "category": "Smooth Follow Through",
    "quote": "COMMIT TO THE SHOT.",
    "explanation": "Indecision can follow you into the swing. Make your choice, then give it your full commitment.",
    "challenge": "Pick a clear target and swing without second-guessing halfway through."
  },
  {
    "id": 3,
    "category": "Confidence",
    "quote": "BELIEVE IN YOUR PREPARATION.",
    "explanation": "Confidence grows from the work you have done, not from expecting every shot to be perfect.",
    "challenge": "Recall one practice improvement before your next round."
  },
  {
    "id": 4,
    "category": "Focus",
    "quote": "ONE SHOT AT A TIME.",
    "explanation": "Your score, the last hole, and the next hole can wait. This shot deserves your attention.",
    "challenge": "Name your target before every full swing today."
  },
  {
    "id": 5,
    "category": "Have Fun",
    "quote": "REMEMBER WHY YOU PLAY.",
    "explanation": "Golf is a chance to challenge yourself, learn, and spend time doing something you enjoy.",
    "challenge": "Notice three things you appreciate about your next round."
  },
  {
    "id": 6,
    "category": "Slow Back Swing",
    "quote": "TEMPO OVER TENSION.",
    "explanation": "Trying harder does not always mean swinging faster. A comfortable rhythm can help you stay composed.",
    "challenge": "Find a rhythm that feels natural and repeat it for five practice swings."
  },
  {
    "id": 7,
    "category": "Smooth Follow Through",
    "quote": "FINISH WHAT YOU START.",
    "explanation": "A balanced finish can be a useful reminder to avoid steering the club in fear.",
    "challenge": "Hold your finish for a moment during five practice shots."
  },
  {
    "id": 8,
    "category": "Confidence",
    "quote": "ONE BAD SHOT IS NOT YOUR STORY.",
    "explanation": "Every golfer misses. A single swing does not define your ability or your day.",
    "challenge": "After a miss, name one useful next step instead of judging yourself."
  },
  {
    "id": 9,
    "category": "Focus",
    "quote": "BE WHERE YOUR FEET ARE.",
    "explanation": "The most useful place for your attention is right here. Notice your lie, your target, and your plan.",
    "challenge": "Pause to observe your surroundings before choosing a club."
  },
  {
    "id": 10,
    "category": "Have Fun",
    "quote": "A ROUND IS MORE THAN A SCORE.",
    "explanation": "Your score is only one part of the day. Good company, fresh air, and small improvements matter too.",
    "challenge": "At the end of your round, name one moment you enjoyed."
  },
  {
    "id": 11,
    "category": "Slow Back Swing",
    "quote": "START CALM. STAY CALM.",
    "explanation": "Your preparation sets the tone. Give yourself a moment to settle before addressing the ball.",
    "challenge": "Before your first tee shot, relax your shoulders and choose one calming cue."
  },
  {
    "id": 12,
    "category": "Smooth Follow Through",
    "quote": "SWING WITH FREEDOM.",
    "explanation": "Trying to control every detail can create tension. Let your practiced motion happen.",
    "challenge": "Choose one simple swing cue and release the rest."
  },
  {
    "id": 13,
    "category": "Confidence",
    "quote": "TALK LIKE A GOOD CADDIE.",
    "explanation": "Helpful self-talk is honest, calm, and specific. Harsh words rarely help with your next shot.",
    "challenge": "Replace one critical thought with a constructive instruction."
  },
  {
    "id": 14,
    "category": "Focus",
    "quote": "PICK A TARGET, THEN COMMIT.",
    "explanation": "A clear intention can simplify a complicated moment. Make a decision and trust your routine.",
    "challenge": "Choose a specific target for five consecutive shots."
  },
  {
    "id": 15,
    "category": "Have Fun",
    "quote": "SMILE AFTER THE MISSES TOO.",
    "explanation": "Missing a shot is part of golf. Keeping perspective makes the next challenge easier to approach.",
    "challenge": "After a harmless mistake, smile and move on without dwelling."
  },
  {
    "id": 16,
    "category": "Slow Back Swing",
    "quote": "LET THE SWING UNFOLD.",
    "explanation": "You do not need to force every movement. Trust a tempo you have practiced.",
    "challenge": "During practice, focus on a smooth start instead of trying to hit farther."
  },
  {
    "id": 17,
    "category": "Smooth Follow Through",
    "quote": "TRUST THE MOTION.",
    "explanation": "Your body learns through repetition. On the course, give your prepared swing a chance.",
    "challenge": "Make a practice swing, then step in and commit."
  },
  {
    "id": 18,
    "category": "Confidence",
    "quote": "YOU CAN HANDLE THE NEXT SHOT.",
    "explanation": "You do not have to know how the round will end. You only have to make your next good decision.",
    "challenge": "Say “I can handle this shot” before a challenging lie."
  },
  {
    "id": 19,
    "category": "Focus",
    "quote": "RESET BETWEEN SHOTS.",
    "explanation": "You do not need to think about technique for the entire walk. Give your mind permission to rest.",
    "challenge": "Between shots, notice the course rather than rehearsing mistakes."
  },
  {
    "id": 20,
    "category": "Have Fun",
    "quote": "CELEBRATE SMALL WINS.",
    "explanation": "A smart layup, a patient putt, or a good recovery deserves recognition even when the card is imperfect.",
    "challenge": "Give yourself credit for one good decision today."
  },
  {
    "id": 21,
    "category": "Slow Back Swing",
    "quote": "YOUR PACE IS YOUR POWER.",
    "explanation": "Comparison can tempt golfers into rushing. Your own rhythm matters more than someone else’s speed.",
    "challenge": "Play or practice at a deliberate pace without copying another golfer’s swing."
  },
  {
    "id": 22,
    "category": "Smooth Follow Through",
    "quote": "A FULL FINISH, A FRESH START.",
    "explanation": "Your follow-through marks the end of the swing. Whatever happens, the next shot is a new decision.",
    "challenge": "After each shot, watch it finish, then move your attention forward."
  },
  {
    "id": 23,
    "category": "Confidence",
    "quote": "CONFIDENCE IS QUIET COMMITMENT.",
    "explanation": "You do not need to feel fearless. You can act with purpose even when you are nervous.",
    "challenge": "Choose your target and follow your routine despite nerves."
  },
  {
    "id": 24,
    "category": "Focus",
    "quote": "FOCUS ON THE PROCESS.",
    "explanation": "You can influence preparation and decision-making, not every outcome. Keep attention on the parts you can control.",
    "challenge": "Evaluate your pre-shot routine instead of judging only the result."
  },
  {
    "id": 25,
    "category": "Have Fun",
    "quote": "BE A GREAT PLAYING PARTNER.",
    "explanation": "A good attitude makes the game better for everyone in your group.",
    "challenge": "Encourage another golfer sincerely during your next round."
  },
  {
    "id": 26,
    "category": "Slow Back Swing",
    "quote": "BREATHE BEFORE YOU BEGIN.",
    "explanation": "A simple breath can interrupt the feeling of being rushed. It is a reminder to return to your routine.",
    "challenge": "Before each tee shot today, take one comfortable breath."
  },
  {
    "id": 27,
    "category": "Smooth Follow Through",
    "quote": "DON’T STEER THE RESULT.",
    "explanation": "You can choose your target and execute your routine, but you cannot control every bounce.",
    "challenge": "Focus on the quality of your commitment rather than the final distance."
  },
  {
    "id": 28,
    "category": "Confidence",
    "quote": "NOTICE WHAT’S WORKING.",
    "explanation": "Your mind may replay missed shots. Give equal attention to choices and swings you handled well.",
    "challenge": "Write down one good decision after practice."
  },
  {
    "id": 29,
    "category": "Focus",
    "quote": "SMALL ROUTINES MAKE ROOM FOR CALM.",
    "explanation": "A short, consistent routine can give you something familiar when the round gets difficult.",
    "challenge": "Use the same three-step routine for your next five shots."
  },
  {
    "id": 30,
    "category": "Have Fun",
    "quote": "LET GOLF BE GOLF.",
    "explanation": "Unpredictable bounces and tough lies are part of the challenge. Curiosity beats constant frustration.",
    "challenge": "Approach one unusual lie as a puzzle to solve."
  },
  {
    "id": 31,
    "category": "Slow Back Swing",
    "quote": "SLOW DOWN TO SET UP.",
    "explanation": "Taking a few seconds to choose a target and get comfortable can support a calmer swing.",
    "challenge": "Use the same brief setup routine for five shots."
  },
  {
    "id": 32,
    "category": "Smooth Follow Through",
    "quote": "LET GO AFTER CONTACT.",
    "explanation": "The ball’s flight is not something you can change after impact. Observe it and prepare for what is next.",
    "challenge": "After every swing, notice the result without criticizing yourself."
  },
  {
    "id": 33,
    "category": "Confidence",
    "quote": "BUILD BELIEF ONE REP AT A TIME.",
    "explanation": "Confidence is strengthened by patient repetition and learning, not perfection.",
    "challenge": "Practice one manageable skill and acknowledge your progress."
  },
  {
    "id": 34,
    "category": "Focus",
    "quote": "CLEAR YOUR MIND, SEE YOUR SHOT.",
    "explanation": "Visualizing a reasonable shot can give your attention a direction before you swing.",
    "challenge": "Picture the intended starting line before a practice shot."
  },
  {
    "id": 35,
    "category": "Have Fun",
    "quote": "TAKE THE JOY WITH YOU.",
    "explanation": "The goal is not a flawless round. It is to keep learning and finding reasons to return.",
    "challenge": "End your day by noting one thing you look forward to next time."
  }
];
