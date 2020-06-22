import React, { useState } from 'react';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';
import Chart from './Chart';
import { Scrollama, Step } from 'react-scrollama'

const FunctionalTest = () => {
    const [vizData, setVizData] = useState([25, 30, 45, 60, 10, 65, 75]);
    const [currentStepIndex, setCurrentStepIndex] = useState(null);

    const onStepEnter = ({ data }) => {
        setCurrentStepIndex(data);

        // setData(data.map(value => value + 5));
    };

    // prototype how to read in data from S3 using hooks
    // const [ridership, setRidership] = useState([]);

    // useEffect(() => {
    //     fetch('s3 api')
    //       .then(response => response.json())
    //       .then(items => {
    //           setRidership();
    //       })
    //       .catch(console.error);
    // }, []);      

    return(
        <div>
            <ArticleContainer>
                <ArticleHeader>
                    <h1>Stateless Functional Component</h1>
                    <p>Prototyping future D3 work.</p>
                </ArticleHeader>
                <Chart data={vizData} />
                <button onClick={() => setVizData(vizData.map(value => value + 5))}>
                    Update data
                </button>
                <button onClick={() => setVizData([...vizData, Math.round(Math.random() * 100)])}
                >
                    Add data
                </button>
                <h1>Let's try out scrollytelling below:</h1>
                <div style={{ margin: '50vh 0', border: '2px dashed skyblue' }}>
                    <div style={{ position: 'sticky', top: 200, border: '1px solid orchid' }}>
                        <Chart data={vizData} />
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