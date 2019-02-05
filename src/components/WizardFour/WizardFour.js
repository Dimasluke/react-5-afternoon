import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFound } from '../../ducks/reducer';

class WizardFour extends Component {
    render(){
    const { updateFound } = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">            
                    <p>Have you already found your new home?</p> <br />
                    
                    <div className="row">
                        <Link to="/wFive"><button onClick={e => updateFound("Yes")}>Yes</button></Link>
                        <Link to="/wFive"><button onClick={e => updateFound("No")}>No </button></Link>  
                    </div>         
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { found } = state;
    return {
        found
    }
}

export default connect(mapStateToProps, {updateFound})(WizardFour);