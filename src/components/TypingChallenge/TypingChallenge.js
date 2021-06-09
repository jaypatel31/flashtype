import React, {useContext} from 'react'
import "./TypingChallenge.css"
import {ResultContext} from "../ChallengeSection/ChallengeSection";
import TestLetter from "../TestLetter/TestLetter"

function TypingChallenge() {
	const {timeRemaining,testInfo,timerStarted, method ,keyCheck} = useContext(ResultContext);

	return (
		<div className="typing-challenge">
			<div className="timer-container">
				<p className="timer">
					00:
					{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}
				</p>
				<p className="timer-info">
				{
					(!timerStarted) && ("Start typing to start the test")
				}
				</p>		
			</div>
			<div className="textarea-container">
				<div className="textarea-left">
					<div className="textarea test-paragraph" >
						{
							testInfo.map((item,index)=>(
								<TestLetter key={index} letterInfo={item}/>
							))
						}
					</div>
				</div>
				<div className="textarea-right">
					<textarea className="textarea" onKeyDown={(e)=>keyCheck(e)} onChange={(e)=>method(e)} placeholder="Start Typing Here..." >
						
					</textarea>
				</div>
			</div>
		</div>
	)
}

export default TypingChallenge