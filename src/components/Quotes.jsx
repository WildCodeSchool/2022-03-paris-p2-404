const quotes = [
      {
        "character": "Ned",
        "sentence": "The man who passes the sentence should swing the sword."
      },
      {
        "character": "Ned",
        "sentence": "Winter is coming!"
      },
      {
        "character": "Ned",
        "sentence": "I, Eddard of the house Stark, lord of Winterfell and warden of the North, sentence you to die."
      },
      {
        "character": "Ned",
        "sentence": "A madman sees what he sees."
      },
      {
        "character": "Ned",
        "sentence": "I grew up with soldiers. I learNed how to die a long time ago."
      },
      {
        "character": "Jon",
        "sentence": "If I fall, don't bring me back."
      },
      {
        "character": "Jon",
        "sentence": "There is only one war that matters. The Great War. And it is here."
      },
      {
        "character": "Jon",
        "sentence": "Love is the death of duty."
      },
      {
        "character": "Jon",
        "sentence": "Everything before the word \"but\" is horseshit."
      },
      {
        "character": "Jon",
        "sentence": "The war is not over. And I promise you, friend, the true enemy won't wait out the storm. He brings the storm."
      },
      {
        "character": "Sansa",
        "sentence": "I hate the king more than any of them."
      },
      {
        "character": "Sansa",
        "sentence": "No need to seize the last word, Lord Baelish. I'll assume it was something clever."
      },
      {
        "character": "Arya",
        "sentence": "When people ask you what happeNed here, tell them the North remembers. Tell them winter came for House Frey."
      },
      {
        "character": "Arya",
        "sentence": "Nothing isn't better or worse than anything. Nothing is just nothing."
      },
      {
        "character": "Arya",
        "sentence": "Leave one wolf alive and the sheep are never safe."
      },
      {
        "character": "Bran",
        "sentence": "We don't have time for all this. The Night King has your dragon. He's one of them now. The Wall has fallen. The dead march south."
      },
      {
        "character": "Jamie",
        "sentence": "The things I do for love."
      },
      {
        "character": "Jamie",
        "sentence": "Fighting bravely for a losing cause is admirable. Fighting for a winning cause is far more rewarding."
      },
      {
        "character": "Jamie",
        "sentence": "Three victories don't make you a conqueror."
      },
      {
        "character": "Jamie",
        "sentence": "By what right does the wolf judge the lion?"
      },
      {
        "character": "Tyrion",
        "sentence": "I have a tender spot in my heart for cripples, bastards and broken things."
      },
      {
        "character": "Tyrion",
        "sentence": "Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you."
      },
      {
        "character": "Tyrion",
        "sentence": "The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth."
      },
      {
        "character": "Tyrion",
        "sentence": "That's what I do: I drink and I know things."
      },
      {
        "character": "Tyrion",
        "sentence": "I am your son. I have always been your son."
      },
      {
        "character": "Tyrion",
        "sentence": "You love your children. It's your one redeeming quality. That and your cheekbones."
      },
      {
        "character": "Tyrion",
        "sentence": "That bit of theatre will haunt our family for a generation."
      },
      {
        "character": "Tyrion",
        "sentence": "Love is more powerful than reason. We all know that."
      },
      {
        "character": "Tyrion",
        "sentence": "A Lannister always pays his debts."
      },
      {
        "character": "Tyrion",
        "sentence": "I know that our enemies hate each other almost as much as they hate us."
      },
      {
        "character": "Tyrion",
        "sentence": "Well, my brother has his sword, and I have my mind, and a mind needs books like a sword needs a whetstone."
      },
      {
        "character": "Tyrion",
        "sentence": "It's not easy being drunk all the time. Everyone would do it, if it were easy."
      },
      {
        "character": "Tyrion",
        "sentence": "A ruler who kills those devoted to her is not a ruler who inspires devotion."
      },
      {
        "character": "Tyrion",
        "sentence": "Never forget what you are. The rest of the world will not. Wear it like armor, and it can never be used to hurt you."
      },
      {
        "character": "Tyrion",
        "sentence": "Everyone who makes a joke about a dwarf's height thinks he's the only person ever to make a joke about a dwarf's height."
      },
      {
        "character": "Tyrion",
        "sentence": "No matter who you are, no matter how strong you are, sooner or later, you'll face circumstances beyond your control."
      },
      {
        "character": "Tyrion",
        "sentence": "I'm a constant disappointment to my own father, and I have learNed to live with it."
      },
      {
        "character": "Cersei",
        "sentence": "When you play the game of thrones, you win or you die. There is no middle ground."
      },
      {
        "character": "Cersei",
        "sentence": "If you ever call me sister again, I'll have you strangled in your sleep."
      },
      {
        "character": "Cersei",
        "sentence": "If you want a whore, buy one. If you want a Queen, earn her."
      },
      {
        "character": "Cersei",
        "sentence": "Tears aren't a woman's only weapon. The best one's between your legs."
      },
      {
        "character": "Cersei",
        "sentence": "The only way to keep your people loyal is to make certain they fear you more than they do the enemy."
      },
      {
        "character": "Cersei",
        "sentence": "I want our baby to live. Don't let me die, Jamie. Please don't let me die."
      },
      {
        "character": "Cersei",
        "sentence": "I don't care about checking my worst impulses. I don't care about making the world a better place. Hang the world."
      },
      {
        "character": "Tywin",
        "sentence": "A lion does not concern himself with the opinion of sheep."
      },
      {
        "character": "Tywin",
        "sentence": "Any man who must say 'I am the King' is no true King."
      },
      {
        "character": "Tywin",
        "sentence": "Every day that he remains a prisoner, the less our name commands respect."
      },
      {
        "character": "Tywin",
        "sentence": "I need you to become the man you were always meant to be. Not next year, not tomorrow, now."
      },
      {
        "character": "Joffrey",
        "sentence": "Everyone is mine to torment."
      },
      {
        "character": "Daenerys",
        "sentence": "I am the dragon's daughter, and I swear to you that those who would harm you will die screaming."
      },
      {
        "character": "Daenerys",
        "sentence": "He was no dragon. Fire cannot kill a dragon."
      },
      {
        "character": "Daenerys",
        "sentence": "All men must die, but we are not men."
      },
      {
        "character": "Ramsay",
        "sentence": "If you think this has a happy ending, you haven't been paying attention."
      },
      {
        "character": "Robert",
        "sentence": "I'm the King, I get what I want. I never loved my brothers. Sad thing for a man to admit, but it's true. You were the brother I chose."
      },
      {
        "character": "Theon",
        "sentence": "My sword is yours, in victory and defeat, from this day until my last day."
      },
      {
        "character": "Theon",
        "sentence": "It's better to be cruel than weak."
      },
      {
        "character": "Samwell",
        "sentence": "I was nothing at all. And when you're nothing at all, there's no reason to be afraid."
      },
      {
        "character": "Varys",
        "sentence": "The storms come and go, the big fish eat the little fish and I keep on paddling."
      },
      {
        "character": "Varys",
        "sentence": "Power resides where men believe it resides. It's a trick, a shadow on the wall. And a very small man can cast a very large shadow."
      },
      {
        "character": "Brienne",
        "sentence": "All I ever wanted was to fight for a lord I believed in. But the good lords are dead and the rest are monsters."
      },
      {
        "character": "Aerys",
        "sentence": "Burn them all!"
      },
      {
        "character": "Baelish",
        "sentence": "A man with no motive is a man no one suspects. Always keep your foes confused."
      },
      {
        "character": "Baelish",
        "sentence": "Chaos isn't a pit. Chaos is a ladder."
      },
      {
        "character": "Baelish",
        "sentence": "It doesn't matter what we want. Once we get it, then we want something else."
      },
      {
        "character": "Baelish",
        "sentence": "The fall breaks them. And some are given a chance to climb; they cling to the real or the gods or love."
      },
      {
        "character": "Baelish",
        "sentence": "I have always found revenge to be the purest of motivations."
      },
      {
        "character": "Tormund",
        "sentence": "Gingers are beautiful. We've been kissed by fire."
      },
      {
        "character": "Melisandre",
        "sentence": "The night is dark and full of terrors."
      },
      {
        "character": "Arya",
        "sentence": "Fear cuts deeper than swords."
      },
      {
        "character": "Olenna",
        "sentence": "The world is overflowing with horrible things, but they’re all a tray of cakes next to death."
      },
      {
        "character": "Mance",
        "sentence": "The freedom to make my own mistakes was all I ever wanted."
      },
      {
        "character": "Baelish",
        "sentence": "It doesn’t matter what we want. Once we get it, then we want something else."
      },
      {
        "character": "Wylis",
        "sentence": "Hodoooor !..."
      }
    ];
    export {quotes};