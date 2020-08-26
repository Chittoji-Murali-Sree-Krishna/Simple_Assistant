const btn = document.querySelector('.talk');
const content = document.querySelector('.content');
const body = document.querySelector('.back');
const ser = document.querySelector('.gsearch');

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function () {
  console.log('voice is activated');
};

recognition.onresult = function(event) {
  const current = event.resultIndex;
	const transcript = event.results[current][0].transcript;
	content.textContent = transcript;
	readOutLoud(transcript)
};

btn.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message){
	const speech = new SpeechSynthesisUtterance();
	speech.text = message;

	if(message.includes('hello')){
	const finalText ='Howdy, how can i help you?';
	speech.text = finalText;
	}
	else if(message.includes('my name')){
	speech.text = 'your name is Warlord';
	}
	else if(message.includes('dark mode')){
	speech.text = 'switching to dark mode';
	body.style.backgroundColor = 'black';
	body.style.color = 'green';
	}
	else if(message.includes('light mode')){
	speech.text = 'switching to light mode';
	body.style.backgroundColor = 'white';
	body.style.color = 'blue';
	}
	else if(message.includes('Google search')){
	ser.style.display = 'block';
	}
	speech.volume = 1;
	speech.rate = 1;
	speech.pitch = 1;

	window.speechSynthesis.speak(speech)
}
