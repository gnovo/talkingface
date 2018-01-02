const delay = 200;
const message = "Arnold ipsum. Just bodies. I need your clothes, your boots, and your motorcycle. Grant me revenge! And if you do not listen, then to HELL with you. Make it quick because my horse is getting tired. Come on don't bullshit me. Into the tunnel. Bring your toy back to the carpet.";
const emojiMap = {
  "😮": ["o", "e"],
  "😐": ["b", "p", "m"],
  "🙂": ["c", "g", "j", "k", "n", "r", "s", "t", "v", "x", "z", "sh"],
  "😲": ["d", "l", "th"],
  "😯": ["q", "u", "w", "y"],
  "😀": ["a", "i"],
  "😦": []
};
const defaultEmoji = "😐";
const emojiCode = {};
const emojis = Object.keys(emojiMap);
const start = Date.now();
emojis.forEach(emoji => emojiCode[emoji] = twemoji.parse(emoji,{
  folder: 'svg',
  ext: '.svg'
}).slice('<img class="emoji" draggable="false" alt="😐" src="'.length, -3))
console.log(emojiCode)
function resolveCharacter(index) {
  const character = message.toLowerCase()[index]
  const previousDouble = message.toLowerCase().substr(index - 1, index + 1)
  const nextDouble = message.toLowerCase().substr(index, index + 2)
  return emojis.find(e => emojiMap[e].indexOf(previousDouble) !== -1) || emojis.find(e => emojiMap[e].indexOf(nextDouble) !== -1) || emojis.find(e => emojiMap[e].indexOf(character) !== -1)
}
setInterval(_=>{
  const index = Math.floor(( Date.now() - start )  / delay)%(message.length+1)
  emojiIcon.src = emojiCode[resolveCharacter(index) || defaultEmoji]
  const words = message.substr(0, index).split(' ')
  text.textContent = words.pop()
  previousText.textContent = words.pop()
},delay);