import React, { Component } from 'react'

const HOC = (Comp,increase) => {
    
    class HOComponent extends Component {

        // State
        state={
            income:0
        };

        handleIncome = () => {
            this.setState({income: this.state.income + increase });
        };

        render(){
        return (
          <>
            <Comp Income={this.state.income} handleincome={this.handleIncome} {...this.props}/>
          </>
        )
      }
    }
    return HOComponent;
};

export default HOC;