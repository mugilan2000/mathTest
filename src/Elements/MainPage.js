import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../Css/MainPage.css'

const MainPage = ({ API_URL }) => {

    const [solvedBtn, setSolvedBtn] = useState('active')
    const [unSolvedBtn, setUnSolvedBtn] = useState('hidden')
    const [status, setStatus] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false)

    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const navigate = useNavigate();

    let sstatus = 1;

    const fetchData = async () => {

        const formData = {

            operation: 'getAllQuestions'
        }

        const response = await axios({
            method: 'post',
            url: API_URL,
            headers: {
                'Access-Control-Allow-Origin': '*',
              },
            data: JSON.stringify(formData)
        });

        const res = response.data;

        if (res[0].result === "No Data Found") {
            setError(res[0].result);
        }
        else {
            setData(res)
            console.log(res)

        }
    }

    useEffect(() => {
        fetchData();
    }, [])


    const getStatus = (number) => {

        if (number === '1') {
            return "UnSolved"
        }
        else if (number === '2') {
            return "In Progress"
        }
        else if (number === '3') {
            return "Solved"
        }
        else if (number === '4') {
            return "Review in progress"
        }
        else if (number === '5') {
            return "Reviewed"
        }
        else if (number === '6') {
            return "Closed"
        }

    }

    const changeStatus = async (status, q_num) => {

        let derivedStatus = parseInt(status);

        if (derivedStatus === 2) {
            const formData1 = {
                operation: 'changeIsSolvedStatus',
                question_no: q_num
            }

            const response = await axios({
                method: 'post',
                url: API_URL,
                data: formData1
            })

            const res = response.data;

        }

        let addStatus = derivedStatus + 1;

        const formData = {
            status: addStatus,
            operation: 'changeStatus',
            question_no: q_num
        }

        const response = await axios({
            method: 'post',
            url: API_URL,
            data: formData
        })

        const res = response.data;

        fetchData();


    }
    return (
        <>
            <div>
                <h5>10th Maths Daily Questions</h5>
                {data.map((dt) => (
                    <div>
                        <br></br>
                        <div className='card' key={dt.question_no}>
                            <div className='header'>
                                <h6>Question No {dt.question_no}<span class="badge text-bg-secondary">{getStatus(dt.status)}</span></h6>
                                <p>Ch No - {dt.chapter_no}</p>
                                <p>Date - {dt.creation_date}</p>
                            </div>
                            <div className='card-text'>
                                <p>{dt.question_description}</p>
                            </div>
                            <div className='footer'>
                                <div className='sideLeft'>
                                    {dt.status == '1' ? <button className='btn btn-primary' onClick={() => changeStatus(dt.status, dt.question_no)}>Mark as In Progress</button> : <button className='btn btn-primary' disabled>Mark as In Progress</button>}
                                    {dt.status == '2' ? <button className='btn btn-primary' onClick={() => changeStatus(dt.status, dt.question_no)}>Mark as Solved</button> : <button className='btn btn-primary' disabled>Mark as Solved</button>}
                                </div>
                                <div className='sideRight'>
                                    <h6>Total Marks - {dt.total_marks}</h6>
                                    <h6 className='markScored'>Mark Scored - {dt.obtained_mark}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </>
    )
}

export default MainPage