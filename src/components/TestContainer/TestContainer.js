import React from 'react'
import "./TestContainer.css";
import TryAgain from "../TryAgain/TryAgain"
import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer"

function TestContainer({timeRemaining}) {

	return (
		<div className="test-container">
			{
				timeRemaining > 0 ? (<div data-aos="fade-up" className='typing-challenge-cont'>
				<TypingChallengeContainer/>
			</div>): (<div className="try-again-cont">
				<TryAgain/>
			</div>)
			}
			
			
		</div>
	)
}

export default TestContainer