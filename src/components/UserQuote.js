// Display content of user posts
export const UserQuote = ({ character }) => {
  let quote;

  switch (character.firstName) {
    case "Jon":
      quote = "If I fall, don't bring me back";
      break;
    case "Sansa":
      quote = "I hate the king more than any of them";
      break;
    case "Ned":
      quote = "The man who passes the sentence should swing the sword";
      break;
    case "Jamie":
      quote = "The things I do for love";
      break;
    case "Tyrion":
      quote =
        "No matter who you are, no matter how strong you are, sooner or later, you'll face circumstances beyond your control";
      break;
    case "Cersei":
      quote =
        "When you play the game of thrones, you win or you die. There is no middle ground";
      break;
    case "Joffrey":
      quote = "Everyone is mine to torment";
      break;
    case "Daenerys":
      quote =
        "I am the dragon's daughter, and I swear to you that those who would harm you will die screaming";
      break;
    case "Tywin":
      quote = "A lion does not concern himself with the opinion of sheep";
      break;
    case "Ramsey":
      quote =
        "If you think this has a happy ending, you haven't been paying attention";
      break;
    case "Arya":
      quote = "Leave one wolf alive and the sheep are never safe";
      break;
    case "Robert":
      quote =
        "I'm the King, I get what I want. I never loved my brothers. Sad thing for a man to admit, but it's true";
      break;
    case "Theon":
      quote = "It's better to be cruel than weak";
      break;
    case "Samwell":
      quote =
        "I was nothing at all. And when you're nothing at all, there's no reason to be afraid";
      break;
    case "Varys":
      quote =
        "Power resides where men believe it resides. It's a trick, a shadow on the wall. And a very small man can cast a very large shadow";
      break;
    case "Brandon":
      quote =
        "We don't have time for all this. The Wall has fallen. The dead march south";
      break;
    case "Brienne":
      quote =
        "All I ever wanted was to fight for a lord I believed in. But the good lords are dead and the rest are monsters";
      break;
    case "Petyr":
      quote =
        "A man with no motive is a man no one suspects. Always keep your foes confused";
      break;
    case "Tormund":
      quote = "Gingers are beautiful. We've been kissed by fire";
      break;
    case "Melisandre":
      quote = "The night is dark and full of terrors";
      break;
    case "Olenna":
      quote =
        "The world is overflowing with horrible things, but they’re all a tray of cakes next to death";
      break;
    case "Wylis":
      quote = "Hodoooor !...";
      break;
    default:
      quote = "Winter is coming!";
      break;
  }

  return (
    <div className="UserQuote w-full p-7 text-center font-bold text-lg">
      <p>{quote}</p>
    </div>
  );
};
