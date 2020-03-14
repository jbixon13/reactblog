import React, { Component } from 'react';
import styles from './CycleNYC.module.scss';
import ArticleHeader from '../../ArticleHeader';
import ArticleContainer from '../../ArticleContainer';

export class CycleNYC extends Component {
    render() {
        return (
            <div className={styles.CycleNYC}>
                <ArticleContainer>
                    <ArticleHeader>
                        <h1>Mapping Cyclist Safety in NYC</h1>
                        <p>Is there a relationship between bike path access and cyclist injuries?</p>
                    </ArticleHeader>   
                <p>
                    New York City has seen an <a href='http://www.nyc.gov/html/dot/downloads/pdf/cycling-in-the-city.pdf'>exponential increase</a> in bicycle usage in the last 20 years. It reports <a href='https://www1.nyc.gov/html/dot/downloads/pdf/nyc-cycling-risk.pdf'>up to 76% fewer</a> injuries or deaths per 10 million miles biked since 2000, a measure of bike safety that controls for increased usage. Even so, the city has had an <a href='https://www.nytimes.com/2019/08/21/nyregion/bike-deaths-nyc.html'>exceptionally deadly year</a> for cyclists, leading many to feel the city needs to do more. There is <a href='https://ajph.aphapublications.org/doi/full/10.2105/AJPH.2012.300762?journalCode=ajph'>existing evidence</a>  that (protected) biking infrastructure is an effective risk-reduction method. Some questions I seek to address: 
                </p>
                <ul>
                    <li>What is the breakdown of biking infrastructure in New York City?</li>
                    <li>Where are injuries and deaths happening?</li>
                    <li>Is there a relationship between bike infrastructure (or lack thereof) and cyclist injuries and deaths?</li>
                    <li>Are there neighborhoods with less access to (protected) bike infrastructure?</li>
                </ul>
                <h2>Let’s get a quick understanding of bikes in New York.</h2>
                <h3>When do cyclist injuries and accidents happen?</h3>
                <p>Heatmap here</p>
                <h3>What about historic trends?</h3>
                <p>Scatterplot here</p>
                <h3>What kinds of bike paths are available in the city?</h3>
                <p>Stacked bar chart here</p>
                <h3>Where do cyclist injuries and deaths occur?</h3>
                <p>Leaflet/Deck map here</p>
                <p>My first attempt to understand accidents spatially led me to aggregate them within the Neighborhood Tabulation Area (NTA) they occur in and divide by NTA population. This shows not just which neighborhoods have the most accidents, but which have the most <strong>per capita.</strong> It shows more clearly where accidents are happening than by mapping each individual accident, but it does not say whether a neighborhood is over-indexed on accidents from an infrastructure perspective. Neighborhood population may not be insightful because it may have little to do with how many people bike there, or the kind of infrastructure they have, or traffic speeds. I will explore this further in the future.</p>
                <p>Animated map here</p>
                <p>I then wanted to understand one of my primary questions: whether bike infrastructure could predict cyclist accidents. To do so, I combined the <a href='https://data.cityofnewyork.us/Public-Safety/NYPD-Motor-Vehicle-Collisions-Crashes/h9gi-nx95'>NYPD Motor Vehicle Collisions</a> and <a href='https://data.cityofnewyork.us/City-Government/NYC-Street-Centerline-CSCL-/exjm-f27b'>NYC Street Centerline</a> datasets to get a distinct count of bike accidents for every street segment as a dependent variable.</p>
                <p>Two <a href='https://www.researchgate.net/publication/222659783_The_Statistical_Analysis_of_Crash-Frequency_Data_A_Review_and_Assessment_of_Methodological_Alternatives'>simple and proven</a> models for regressing discrete count data are the poisson regression and negative-binomial regression. They are not without their flaws, but they are a good starting point.</p>
                <p>Model results here</p>
                </ArticleContainer>            
            </div>
        )
    }
}

export default CycleNYC
