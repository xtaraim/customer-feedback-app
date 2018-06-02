// SurveyNew shows SurveyForm and SurveyFormReview
// =========================================
// REDUX FORM SETUP STEP 3:
// Create a react class component 

// REDUX FORM SETUP STEP 4:
// Add SurveyNew component to App component

// REDUX FORM SETUP STEP 6:
// Import the SurveyForm component
import React, { Component } from 'react';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';


class SurveyNew extends Component {
// =========================================
// REDUX FORM SETUP STEP 17:
// set state in this component to toggle wether or not we show the form review
state = { showFormReview: false };

// This helper function will determine if we show form review
renderContent() {
    if (this.state.showFormReview) {
        return <SurveyFormReview />
    }
    // in show form review we are going to pass a callback function
    // in the props that will set the state to true when is is called
    return <SurveyForm 
    onSurveySubmit={() => this.setState({ showFormReview: true })}
    // now in the survey foem we will call the prop onSurveySubmit function in 
    // the onSubmit event handler 
    />
}

// =========================================

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
}

export default SurveyNew;

// =========================================

