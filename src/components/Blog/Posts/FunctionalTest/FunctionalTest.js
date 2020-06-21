import React, { useState } from 'react';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';
import Chart from './Chart';

const FunctionalTest = () => {
    const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);

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
                <Chart data={data} />
                <button onClick={() => setData(data.map(value => value + 5))}>
                    Update data
                </button>
                <button onClick={() => setData([...data, Math.round(Math.random() * 100)])}
                >
                    Add data
                </button>
            </ArticleContainer>
        </div>
    )
}

export default FunctionalTest