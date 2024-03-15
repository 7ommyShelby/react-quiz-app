import React from 'react'
import './home.css'
import Ques from './Ques'
import { useEffect, useState } from 'react'


const Home = () => {
  // API https://opentdb.com/api.php?amount=10&category=19&type=multiple

  const [questions, setQuestions] = useState([]);

  useEffect(() => {

    async function quiz() {

      try {
        let x = await fetch("https://opentdb.com/api.php?amount=10&category=19&type=multiple");
        let y = await x.json();
        setQuestions(y.results);
      }
      catch (error) {
        console.error("error aagya bhai", error);
      }
    }
    quiz()

  }, [])


  const [timer, setTimer] = useState(0);

  useEffect(() => {

    setTimeout(() => {

      setTimer((prev) => {
        return prev + 1
      })

      if (timer >= 30) {
        setTimer(0)
        setQuestionNumber((prev) => {
          return prev + 1
        })
      }
    }, 1000);

  }, [timer])

  const [questionNumber, setQuestionNumber] = useState(1);
  const [score, setScore] = useState(0)

  return (

    <section className='questions'>
      <h1>Quiz App</h1>
      {
        questionNumber <= 10 ?
          questions.length != 0 &&
          questions.map((ele, idx) => {
            if (idx == questionNumber - 1) {
              return (
                <>
                  <Ques
                    question={ele.question}
                    ans={ele.correct_answer}
                    wrong={ele.incorrect_answers}
                    setnumber={setQuestionNumber}
                    number={questionNumber}
                    score={score}
                    setScore={setScore}
                  />

                  <p>Time left :{timer}</p>

                  <button className='skip' onClick={() => {
                    setQuestionNumber((prev) => {
                      return prev + 1
                    })
                  }}>Skip this question</button>

                </>

              )
            }
          })

          : <>
            <p style={{ fontSize: "1rem", fontWeight: "600" }}>Test Completed</p>
            <p style={{ fontSize: "1rem", fontWeight: "600" }}>Your Test Score : {score}/10</p>
          </>
      }
    </section>
  )
}

export default Home
