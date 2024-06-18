import React, { useState } from 'react'
import '../Css/CreatePage.css'
import axios from 'axios';

const CreatePage = ({ API_URL }) => {

    const [chapterNo, setChapterNo] = useState('');
    const [isSolved, setIsSolved] = useState('');
    const [question, setQuestion] = useState('');
    const [totalMark, setTotalMark] = useState('');
    const [obtainedMark, setObtainedMark] = useState('');

    const handleChange = (e, text) => {

        switch (text) {
            case "ch":
                setChapterNo(e.target.value)
                break;
            case "sl":
                setIsSolved(e.target.value)
                break;
            case "que":
                setQuestion(e.target.value)
                break;
            case "tm":
                setTotalMark(e.target.value)
                break;
            case "obm":
                setObtainedMark(e.target.value)
                break;
            default:
                break;
        }

    }

    const handleSubmit = async (e) => {

        e.preventDefault()
        let intChNo = parseInt(chapterNo)
        let intTm = parseInt(totalMark)
        let intObm = parseInt(obtainedMark)

        const formData = {
            chapter_no: intChNo,
            question: question,
            solve_status: isSolved,
            total_marks: intTm,
            obtained_mark: intObm,
            status: null,
            question_no: null,
            operation: "CreateQuestion"
        }

        const response = await axios({
            method: 'post',
            url: API_URL,
            data: formData
        });

        const res = response.data;

        setChapterNo('')
        setIsSolved('')
        setQuestion('')
        setTotalMark('')
        setObtainedMark('')

    }

    const buttons = document.querySelectorAll('.btn')
    const textareaField = document.getElementById('textarea')

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            
        })
    });


    return (
        <>
            <div className='container'>
                <h6>Post Questions</h6>
                <form onSubmit={handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-6">

                            <input type="text" value={chapterNo} onChange={(e) => handleChange(e, 'ch')} class="form-control" id="inputEmail4" placeholder="Chapter No" />
                        </div>
                        <div class="form-group col-md-6">

                            <select value={isSolved} onChange={(e) => handleChange(e, 'sl')} class="form-control" id="exampleFormControlSelect1">
                                <option>Select Solved Status</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <textarea class="form-control" id="textarea" value={question} onChange={(e) => handleChange(e, 'que')} rows="3"></textarea>
                        </div>
                        <div className='onScreenKeyboard'>
                            <div className='col-md-6'>
                                <button className='btn'>&#8705;</button>
                                <button className='btn'>&#8706;</button>
                                <button className='btn'>&#8709;</button>
                                <button className='btn'>&#8710;</button>
                                <button className='btn'>&#8711;</button>
                                <button className='btn'>&#8712;</button>
                                <button className='btn'>&#8713;</button>
                                <button className='btn'>&#8714;</button>
                                <button className='btn'>&#8715;</button>
                                <button className='btn'>&#8716;</button>
                                <button className='btn'>&#8717;</button>
                                <button className='btn'>&#8719;</button>
                                <button className='btn'>&#8721;</button>
                                <button className='btn'>&#8722;</button>
                                <button className='btn'>&#8723;</button>
                                <button className='btn'>&#8725;</button>
                                <button className='btn'>&#8726;</button>
                                <button className='btn'>&#8728;</button>
                                <button className='btn'>&#8729;</button>
                                <button className='btn'>&#8730;</button>
                                <button className='btn'>&#8731;</button>
                                <button className='btn'>&#8732;</button>
                                <button className='btn'>&#8733;</button>
                                <button className='btn'>&#8734;</button>
                                <button className='btn'>&#8735;</button>
                            </div>
                            <div className='col-md-6'>

                                <button className='btn'>&#8736;</button>
                                <button className='btn'>&#8737;</button>
                                <button className='btn'>&#8738;</button>
                                <button className='btn'>&#8741;</button>
                                <button className='btn'>&#8742;</button>
                                <button className='btn'>&#8745;</button>
                                <button className='btn'>&#8746;</button>
                                <button className='btn'>&#8747;</button>
                                <button className='btn'>&#8748;</button>
                                <button className='btn'>&#8749;</button>
                                <button className='btn'>&#8750;</button>
                                <button className='btn'>&#8751;</button>
                                <button className='btn'>&#8752;</button>
                                <button className='btn'>&#8753;</button>
                                <button className='btn'>&#8754;</button>
                                <button className='btn'>&#8755;</button>
                                <button className='btn'>&#8764;</button>
                                <button className='btn'>&#8765;</button>
                                <button className='btn'>&#8766;</button>
                                <button className='btn'>&#8767;</button>
                                <button className='btn'>&#8769;</button>
                                <button className='btn'>&#8771;</button>
                                <button className='btn'>&#8772;</button>
                                <button className='btn'>&#8781;</button>
                                <button className='btn'>&#8797;</button>
                            </div>
                            <div className='col-md-6'>
                                <button className='btn'>&#8798;</button>
                                <button className='btn'>&#8800;</button>
                                <button className='btn'>&#8801;</button>
                                <button className='btn'>&#8804;</button>
                                <button className='btn'>&#8805;</button>
                                <button className='btn'>&#8806;</button>
                                <button className='btn'>&#8807;</button>
                                <button className='btn'>&#8808;</button>
                                <button className='btn'>&#8809;</button>
                                <button className='btn'>&#8810;</button>
                                <button className='btn'>&#8811;</button>
                                <button className='btn'>&#8814;</button>
                                <button className='btn'>&#8815;</button>
                                <button className='btn'>&#8816;</button>
                                <button className='btn'>&#8817;</button>
                                <button className='btn'>&#8834;</button>
                                <button className='btn'>&#8835;</button>
                                <button className='btn'>&#8836;</button>
                                <button className='btn'>&#8837;</button>
                                <button className='btn'>&#8838;</button>
                                <button className='btn'>&#8839;</button>
                                <button className='btn'>&#8840;</button>
                                <button className='btn'>&#8841;</button>
                                <button className='btn'>&#8842;</button>
                                <button className='btn'>&#8843;</button>
                                <button className='btn'>&#8898;</button>
                                <button className='btn'>&#8899;</button>
                                <button className='btn'>&#8907;</button>
                                <button className='btn'>&#8908;</button>
                                <button className='btn'>&#8909;</button>
                                <button className='btn'>&#8910;</button>
                                <button className='btn'>&#8911;</button>
                                <button className='btn'>&#8916;</button>
                            </div>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">

                            <input type="text" value={totalMark} onChange={(e) => handleChange(e, 'tm')} class="form-control" id="inputCity" placeholder='Total Mark' />
                        </div>
                        <div class="form-group col-md-6">

                            <input type="text" value={obtainedMark} onChange={(e) => handleChange(e, 'obm')} class="form-control" id="inputCity" placeholder='Obtained Mark' />
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default CreatePage