import React from "react";
import Transcript from "./Transcript";
import ButtonController from "./ButtonController";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  startListening: PropTypes.func,
  recognition: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

const SpeechTextInput = ({
  transcript,
  resetTranscript,
  startListening,
  recognition,
  browserSupportsSpeechRecognition,
}) => {
  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  recognition.lang = "en-En";

  return (
    <div>
      <Transcript text={transcript} />
      <ButtonController
        reset={resetTranscript}
        start={startListening}
      />
    </div>
  );
};

SpeechTextInput.propTypes = propTypes;

const options = {
  continuous: false,
  autoStart: false,
};

export default SpeechRecognition(options)(SpeechTextInput);

/*

  App
    SpeechTextInput <-- module is imported here
      Transcript <-- transcript text is passed here
        Div <-- text is displayed here
      ButtonController <-- reset and start functions are passed here
        Button <- reset function gets called here
        Button <- start function gets called here

*/
