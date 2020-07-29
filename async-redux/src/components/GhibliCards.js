import React from 'react';
import { getGhibli } from '../actions/index'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CardHolder = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    border: 1px dashed black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const Card = styled.div`
    width: 300px;
    margin: 50px 50px 0 50px;    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    img {
        width: 280px;
        min-height: 280px;
        max-height: 280px;
        margin: 0 auto;
        object-fit: contain;
        overflow: auto;
    }    
`;

const CharCard = (props) => {
    return (
        <Card>
            <img src={
                props.item.name === 'Ashitaka' ? 'https://vignette.wikia.nocookie.net/disney/images/4/49/Ashitaka.jpg/revision/latest/top-crop/width/360/height/450?cb=20140421213740' :
                props.item.name === 'San' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/2/22/San-0.jpg/revision/latest?cb=20200620033852' : ''
            } 
                alt='Ghibli character'
            />
            <h1>{props.item.name}</h1>
        </Card>
    )
}

class GhibliCards extends React.Component {
    
    render() {
        return (
            <div>
                <button onClick={this.props.getGhibli}>Fetch Ghibli Characters!</button>
                <CardHolder>
                    {this.props.error.length > 0 ? <h2 style={{color: 'red'}}>{this.props.error}</h2> : 
                        this.props.ghibliChars.map(item => {
                            return <CharCard key={item.id} item={item} />
                        })
                    }
                </CardHolder>
            </div>
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