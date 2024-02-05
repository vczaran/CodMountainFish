import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FaMicrophone } from "react-icons/fa";

const Dictaphone = () => {
    const {
      transcript,
      listening,
      resetTranscript,
      browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
      return <span>This browser doesn't support speech recognition - try Google Chrome.</span>;
    }
  
    return (
      <div className='text-right mr-10 space-y-1 space-x-2'>
        <p> <FaMicrophone className='text-2xl absolute right-20'/> {listening ? 'On' : 'Off'}</p>
        <button className="border-solid border-2 border-black rounded-sm p-1 hover:underline" onClick={SpeechRecognition.startListening}>Start</button>
        <button className="border-solid border-2 border-black rounded-sm p-1 hover:underline" onClick={SpeechRecognition.stopListening}>Stop</button>
        <button className="border-solid border-2 border-black rounded-sm p-1 hover:underline" onClick={resetTranscript}>Reset</button>
        <p>{transcript}</p>
      </div>
    );
  };
  export default Dictaphone;