import React, {useContext} from 'react'
import "./TypingChallengeContainer.css"
import {ResultContext} from "../ChallengeSection/ChallengeSection";
import ChallengeDetailCard from "../ChallengeDetailCard/ChallengeDetailCard"
import TypingChallenge from "../TypingChallenge/TypingChallenge"

function TypingChallengeContainer() {
	const {words,characters,wpm} = useContext(ResultContext)

	return (
		<div className="typing-challenge-container">
			<div className="details-container">
				<ChallengeDetailCard cardName="Words" cardValue={words}/>
				<ChallengeDetailCard cardName="Characters" cardValue={characters}/>
				<ChallengeDetailCard cardName="Speed" cardValue={wpm}/>
			</div>
			<div className="typewriter-container">
				<TypingChallenge />
			</div>
		</div>
	)
}

export default TypingChallengeContainer