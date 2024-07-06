import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const EditInputs = ({ API_URL }) => {

    const { id } = useParams();

    const [chapterNo, setChapterNo] = useState('');
    const [isSolved, setIsSolved] = useState('');
    const [question, setQuestion] = useState('');
    const [totalMark, setTotalMark] = useState('');
    const [obtainedMark, setObtainedMark] = useState('');
    const [status, setStatus] = useState('')

    useEffect(() => {
        const fetchDataForUpdate = async () => {
            const formData = {
                question_no: id,
                operation: 'fetchValuesForUpdate'
            }

            try {
                // const response = await axios({
                //     method: 'post',
                //     url: API_URL,
                //     data: JSON.stringify(formData)
                // })

                const res = fetch(API_URL, {
                    method: 'post',
                    body: JSON.stringify(formData),
                    referrerPolicy: "unsafe-url"
                }).then((response) => response.json()).then((data) => {

                

                

                setChapterNo(data[0].chapter_no);
                setIsSolved(data[0].isSolved);
                setObtainedMark(data[0].obtained_mark);
                setQuestion(data[0].question_description);
                setStatus(data[0].status);
                setTotalMark(data[0].total_marks);

            })

            }
            catch (e) {
                console.log(e);
            }
        }


        (async () => await fetchDataForUpdate())()

    }, [])


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
            case "st":
                setStatus(e.target.value)
                break;
            default:
                break;
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (status === 'UnSolved') {
            setStatus('1')
        }
        else if (status === 'In Progress') {
            setStatus('2')
        }
        else if (status === 'Solved') {
            setStatus('3')
        }
        else if (status === 'Review In Progress') {
            setStatus('4')
        }
        else if (status === 'Reviewed') {
            setStatus('5')
        }
        else if (status === 'Closed') {
            setStatus('6')
        }

        console.log(status)
        let derivedStatus = parseInt(status);



        console.log(derivedStatus)

        let q_num = parseInt(id)

        if (obtainedMark !== 0) {

            let derivedObtainedMark = parseInt(obtainedMark)

            const formData1 = {
                question_no: q_num,
                obtained_mark: derivedObtainedMark,
                operation: 'changeMark'
            }

            // const response1 = await axios({
            //     method: 'post',
            //     url: API_URL,
            //     data: formData1
            // })

            fetch(API_URL, {
                method: 'post',
                body: JSON.stringify(formData1),
                referrerPolicy: "unsafe-url"
            }).then((response) => response.json())

            // const res = response1.data
        }

        const formData1 = {
            question_no: q_num,
            status: derivedStatus,
            operation: 'changeStatus'
        }

        // const response = await axios({
        //     method: 'post',
        //     url: API_URL,
        //     data: formData1
        // })

        fetch(API_URL, {
            method: 'post',
            body: JSON.stringify(formData1),
            referrerPolicy: "unsafe-url"
        }).then((response) => response.json())

        // const res = response.data

        setChapterNo(' ')
        setIsSolved(' ')
        setQuestion(' ')
        setTotalMark(' ')
        setObtainedMark(' ')
        setStatus(' ')

    }


    return (
        <>

            <div className='container'>
                <h6>Update Questions</h6>
                <form onSubmit={handleSubmit}>
                    <div class="form-row">
                        <div class="form-group col-md-6">

                            <input type="text" value={chapterNo} onChange={(e) => handleChange(e, 'ch')} class="form-control" id="inputEmail4" placeholder="Chapter No" />
                        </div>
                        <div class="form-group col-md-6">

                            <input type="text" value={isSolved} onChange={(e) => handleChange(e, 'sl')} class="form-control" id="inputEmail4" placeholder="" />
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <textarea class="form-control" value={question} onChange={(e) => handleChange(e, 'que')} id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">

                            <input type="text" value={totalMark} onChange={(e) => handleChange(e, 'tm')} class="form-control" id="inputCity" placeholder='Total Mark' />
                        </div>
                        <div class="form-group col-md-3">

                            <input type="text" value={obtainedMark} onChange={(e) => handleChange(e, 'obm')} class="form-control" id="inputCity" placeholder='Obtained Mark' />
                        </div>
                        <div class="form-group col-md-3">

                            <select value={status} onChange={(e) => handleChange(e, 'st')} class="form-control" id="exampleFormControlSelect1">
                                <option>Select Status</option>
                                <option value={1}>UnSolved</option>
                                <option value={2}>In Progress</option>
                                <option value={3}>Solved</option>
                                <option value={4}>Review In Progress</option>
                                <option value={5}>Reviewed</option>
                                <option value={6}>Closed</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}

export default EditInputs