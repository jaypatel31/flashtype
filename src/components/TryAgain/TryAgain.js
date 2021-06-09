import React, {useContext} from 'react'
import "./TryAgain.css"
import {ResultContext} from "../ChallengeSection/ChallengeSection";

function TryAgain() {
	const results = useContext(ResultContext)
	return (
		<div className="try-again-container">
			<h1>Test Results</h1>
			<div className="result-container">
				<p>
					<strong>Characters: {results.characters}</strong>
				</p>
				<p>
					<strong>words: {results.words}</strong>
				</p>
				<p>
					<strong>Speed: {results.wpm}</strong>					
				</p>
			</div>

			<div className="social-buttons">
				<button onClick={results.startAgain} className="end-btn retry-btn">
					Re-try
				</button>
				<button onClick={()=>window.open('https://www.facebook.com/sharer/sharer.php?u=pateljay.me/flashtype', "facebook-share-dialog", "width=800,600")} 
					className="end-btn share-btn">
					Share
				</button>
				<button
					onClick={()=>{window.open("https://twitter.com/intent/tweet?text=pateljay.me/flashtype", "twitter-share-dialog", "width=800,600")}} 
					className="end-btn twitter-btn">
					Tweet
				</button>
			</div>
		</div>
	)
}

export default TryAgain