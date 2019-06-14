window.SpeechRecognition = window.webkitSpeechRecognition
 || window.SpeechRecognition;

 if ('SpeechRecognition' in window) {
    console.log('speech recognition API supported')
  } else {
    console.log('speech recognition API not supported')
  }

  const recognition = new window.SpeechRecognition();

  recognition.onresult = (event) => {
    const speechToText = event.results[0][0].transcript;
    console.log(speechToText)
  }
  recognition.start();