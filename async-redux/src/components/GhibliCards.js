import React from 'react';
import { getGhibli } from '../actions/index'
import { connect } from 'react-redux'
import styled from 'styled-components'

class GhibliCards extends React.Component {
    
    render() {
        return (
            <>
                <button onClick={this.props.getGhibli}>Fetch Ghibli Characters!</button>
                {this.props.error.length > 0 ? <h2 style={{color: 'red'}}>{this.props.error}</h2> : 
                    this.props.ghibliChars.map(item => {
                        return <h1 key={item.id}>{item.name}</h1>
                    })
                }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        ghibliChars: state.ghibliChars,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { getGhibli }
)(GhibliCards)