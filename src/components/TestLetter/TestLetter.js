import React from 'react'
import "./TestLetter.css"

function TestLetter({letterInfo}) {
	const {testLetter, status } = letterInfo;

	const statusClassName = {
		correct:"test-letter-correct",
		incorrect:"test-letter-incorrect",
		notAttempted:"test-letter-not-attempted"
	}[status]
	return (
		<span className={`test-letter ${statusClassName}`}>
			{testLetter}
		</span>
	)
}

export default TestLetter