export const getEllipsisTxt = (str, n = 5) => {
  if (str) {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
  }
  return "";
};

export const getRoundedString = (data, n = 2) => {
  if (data) {
    return `${Number(data).toFixed(2).toString()}`;
  }
  return "";
};

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}


export function makeid(length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
  }
  return result;
}

export function randomNickNameGenarate() {
  var adjs = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry",
      "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring",
      "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered",
      "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green",
      "long", "late", "lingering", "bold", "little", "morning", "muddy", "old",
      "red", "rough", "still", "small", "sparkling", "throbbing", "shy",
      "wandering", "withered", "wild", "black", "young", "holy", "solitary",
      "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine",
      "polished", "ancient", "purple", "lively", "nameless"
    ]

    ,
    nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea",
      "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn",
      "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird",
      "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower",
      "firefly", "feather", "grass", "haze", "mountain", "night", "pond",
      "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf",
      "thunder", "violet", "water", "wildflower", "wave", "water", "resonance",
      "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper",
      "frog", "smoke", "star"
    ];

  return adjs[Math.floor(Math.random() * (adjs.length - 1))] + "_" + nouns[Math.floor(Math.random() * (nouns.length - 1))];
}

// console.log(makeid(5));