import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';
import Chart from './Chart';
import { Scrollama, Step } from 'react-scrollama'

const FunctionalTest = () => {
    const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
    const [currentStepIndex, setCurrentStepIndex] = useState(null);
    const [ridership, setRidership] = useState(null);
    const [otp, setOtp] = useState(null);

    const fetchData = () => {
        const ridershipAPI = 'https://mario-object-storage.s3.us-east-2.amazonaws.com/MTA-article/plot1.json';
        const otpAPI = 'https://mario-object-storage.s3.us-east-2.amazonaws.com/MTA-article/plot2.json';

        const getRidership = axios.get(ridershipAPI);
        const getOtp = axios.get(otpAPI);
        axios.all([getRidership, getOtp]).then(
            axios.spread((...allData) => {
                const allDataRidership = allData[0].data
                const allDataOtp = allData[1].data

                setRidership(allDataRidership);
                setOtp(allDataOtp);
            })
        );
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const scrollFunction = () => {
            if (currentStepIndex === 0) {
                console.log('function 1 firing');
                setData([55, 40, 20, 44, 30, 65, 75]);
            } 
    
            if (currentStepIndex === 1) {
                console.log('function 2 firing');
                setData([40, 2, 10, 80, 10, 65, 75]);
            } 
    
            if (currentStepIndex === 2) {
                console.log('function 3 firing');
            } 
    
            if (currentStepIndex === 3) {
                console.log('function 4 firing');
            }
        }
        scrollFunction();
    }, [currentStepIndex]);

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);
    };  

    return(
        <div>
            <ArticleContainer>
                <ArticleHeader>
                    <h1>Stateless Functional Component</h1>
                    <p>Prototyping future D3 work.</p>
                </ArticleHeader>
                <Chart data={data} />
                <button onClick={() => setData(data.map(value => value + 5))}>
                    Update data
                </button>
                <button onClick={() => setData([...data, Math.round(Math.random() * 100)])}
                >
                    Add data
                </button>
                <h1>Let's try out scrollytelling below:</h1>
                <div style={{ margin: '50vh 0', border: '2px dashed skyblue' }}>
                    <div style={{ position: 'sticky', top: 200, border: '1px solid orchid' }}>
                        <Chart data={data} />
                    </div>
                    <Scrollama onStepEnter={onStepEnter} debug>
                        {[1, 2, 3, 4].map((_, stepIndex) => (
                            <Step data={stepIndex} key={stepIndex}>
                                <div style={{ margin: '50vh 0', border: '1px solid gray', opacity: currentStepIndex === stepIndex ? 1 : 0.2, }}>
                                    I'm a Scrollama Step of index {stepIndex}
                                </div>
                            </Step>
                        ))}
                    </Scrollama>
                </div>
            </ArticleContainer>
        </div>
    )
}

export default FunctionalTest