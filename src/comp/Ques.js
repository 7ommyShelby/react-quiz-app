import './ques.css'

const Ques = ({ question, ans, wrong, number, setnumber, score, setScore }) => {

    return (
        <div className='quiz'>
            <h3>Question: {number}</h3>
            <h2>{question}</h2>
            <div className="options">
                <button onClick={() => {
                    setnumber((prev) => {
                        return prev + 1
                    })
                    setScore((prev) => {
                        return prev + 1
                    })
                }}>{ans}</button>

                {wrong.map((e) => {
                    return <button onClick={() => {
                        setnumber((prev) => {
                            return prev + 1
                        })
                        // console.log(number)
                    }}>{e}</button>
                })}
            </div>
        </div>
    )
}

export default Ques




