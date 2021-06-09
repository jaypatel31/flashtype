import React,{useState, useEffect} from 'react'
import "./ChallengeSection.css"
import TestContainer from "../TestContainer/TestContainer"
import { SAMPLE_PARAGRAPHS } from "./../../data/sampleParagraph";
export const ResultContext = React.createContext();

function ChallengeSection() {
	const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";
	const totalTime = 60;
	let tempSetting = 0;

	const [selectedParagraph, setSelectedParagraph] = useState("");
	const [timerStarted, setTimerStarted] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(totalTime);
	const [words, setWords] = useState(0);
	const [characters, setCharacters] = useState(0);
	const [wpm, setWpm] = useState(0);
	const [testInfo, setTestInfo] = useState([])

	const keyCheck = (e) =>{

		if(e.ctrlKey){
			e.preventDefault();
		}
	}

	const handleUserInput = (e)=>{
		
		let val = e.target.value;
		if(!timerStarted){
			startTimer()
		}
		const char = val.length;
		const word = (val)?val.split(" ").length:0;
		const index = char-1;
		let newTestInfo = [];
		let tmpInfo = [];
		tmpInfo = testInfo;

			newTestInfo = tmpInfo.map((item,index) => {
				if(val[index]){
					if(item.testLetter === val[index]){
						 item.status="correct"
					}else{
						item.status="incorrect"
					}
				}
				else{
					item.status="notAttempted"
				}
				return item;
			})
		
		setCharacters(char);
		setWords(word);
		setTestInfo(newTestInfo);
	}

	const startTimer = () =>{
		setTimerStarted(prevTimer => !prevTimer);

		const timersss = setInterval(() => {

			if(tempSetting != totalTime){
				tempSetting++;
				setTimeRemaining(prevTime => prevTime-1);
			}
			else{
				clearInterval(timersss);
			}
		}, 1000)	
	}

	useEffect(() => {
		if(timeRemaining>0){
			const timeSpent = totalTime - timeRemaining;
			const wpm = timeSpent > 0 ? (words/timeSpent) * totalTime:0;					  
			setWpm(parseInt(wpm))
		}
	}, [timeRemaining])


	const startAgain = () => {
		fetchParagraphFallback();
		window.scrollTo(0,0);
	}

	const fetchParagraphFallback = () =>{
		const data = SAMPLE_PARAGRAPHS[
			Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
		];
		let selectedParagraphArray = "";
		setSelectedParagraph(data);
			
			selectedParagraphArray = data.split("").map((char) => {
				return {
					testLetter:char,
					status:"notAttempted"
				}
			})
			setTimeRemaining(totalTime);
			setTimerStarted(false);
			setWords(0);
			setCharacters(0);
			setWpm(0);
			setTestInfo(selectedParagraphArray);
	}

	// const fetchPara = () =>{
	// 	let selectedParagraphArray = "";
	// 	fetch(serviceUrl)
	// 	.then(response=>response.text())
	// 	.then(data=>{
	// 		setSelectedParagraph(data);
	// 		
	// 		selectedParagraphArray = data.split("").map((char) => {
	// 			return {
	// 				testLetter:char,
	// 				status:"notAttempted"
	// 			}
	// 		})
	// 		setTimeRemaining(totalTime);
	// 		setTimerStarted(false);
	// 		setWords(0);
	// 		setCharacters(0);
	// 		setWpm(0);
	// 		setTestInfo(selectedParagraphArray);
	// 			
	// 	});
	// 	
	// }

	useEffect(() => {
		fetchParagraphFallback();
	}, [])

	return (
		<div>
			<div className="challenge-section-container">
				<h1 data-aos="fade-down" className="challenge-section-header">Take Speed Test Now</h1>
				<ResultContext.Provider value={{words:words,characters:characters,wpm:wpm,testInfo:testInfo,timerStarted:timerStarted,timeRemaining:timeRemaining,method:handleUserInput,startAgain:startAgain,keyCheck:keyCheck}}>
					<TestContainer timeRemaining={timeRemaining}/>
				</ResultContext.Provider>
			</div>

		</div>
	)
}


export default ChallengeSection