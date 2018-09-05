var cname = document.getElementById('cname');
var randomB = document.querySelector('.randomB');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  var random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = 'It was 94 fahrenheit outside, so :x: went for a walk. When they got to :y:, they stared in horror for a few moments, then :z:. Bob saw the whole thing, but was not surprised — :x: weighs 300 pounds, and it was a hot day.';
var X = ['Willy the Goblin','Big Daddy','Father Christmas'];
var Y = ['the soup kitchen','Disneyland','the White House'];
var Z = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomB.addEventListener('click', result);

function result() {
  var newStory = storyText;

  var a = randomValueFromArray(X);
  var b = randomValueFromArray(Y);
  var c = randomValueFromArray(Z);

  newStory = newStory.replace(':x:',a);
  newStory = newStory.replace(':x:',a);
  newStory = newStory.replace(':y:',b);
  newStory = newStory.replace(':z:',c);

  if(cname.value !== '') {
    var name = cname.value;
    newStory = newStory.replace('Bob',name);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300*0.0714286) + ' stone';
    var temperature =  Math.round((94-32) * 5 / 9) + ' centigrade';
    newStory = newStory.replace('94 farenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
