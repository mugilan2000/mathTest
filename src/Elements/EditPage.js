import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const EditPage = ({ API_URL }) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const fetchData = async () => {

        const formData = {

            operation: 'getAllQuestions'
        }

        const response = await axios({
            method: 'post',
            url: API_URL,
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
    return (
        <>
            <div>
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
                                    <Link to={`/edit/${dt.question_no}`}><button className='btn btn-danger'>Edit</button></Link>
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

export default EditPage