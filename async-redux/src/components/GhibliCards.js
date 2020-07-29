import React from 'react';
import { getGhibli } from '../actions/index'
import { connect } from 'react-redux'
import styled from 'styled-components'

const CardHolder = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 50px;
    border: 1px dashed #a1afc0;
    border-radius: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const Card = styled.div`
    width: 300px;
    color: #594679;
    font-weight: 650;
    margin: 50px 50px 0 50px;  
    background-color: rgba(171, 230, 244, .5);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;    
    img {
        width: 280px;
        min-height: 280px;
        max-height: 280px;
        padding-top: 10px;
        margin: 0 auto;
        object-fit: contain;
        overflow: auto;
    }    
    span {
        font-size: 20px;
        color: #244B6F;
    }
`;

const FetchButton = styled.button`
    height: 40px;
    font-size: 16px;
    color: white;
    margin-bottom: 50px;
    background-color: #0C2F44;
    border-color: #0C2F44;
    border-radius: 8px;
    &:hover {
        background-color: #72A8D6;
    }
`;

const CharCard = (props) => {
    return (
        <Card>
            <img src={
                props.item.name === 'Ashitaka' ? 'https://vignette.wikia.nocookie.net/disney/images/4/49/Ashitaka.jpg/revision/latest/top-crop/width/360/height/450?cb=20140421213740' :
                props.item.name === 'San' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/2/22/San-0.jpg/revision/latest?cb=20200620033852' :
                props.item.name === 'Eboshi' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/9/9f/Eboshi.png/revision/latest/top-crop/width/360/height/450?cb=20181025001610' :
                props.item.name === 'Jigo' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/7/72/Jigo.jpg/revision/latest/top-crop/width/220/height/220?cb=20181011142443' :
                props.item.name === 'Kohroku' ? 'https://www.anime-planet.com/images/characters/koroku-2705.jpg' :
                props.item.name === 'Gonza' ? 'https://www.anime-planet.com/images/characters/gonza-2704.jpg?t=1548420639' :
                props.item.name === 'Hii-sama' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/8/83/Hii-sama.jpg/revision/latest/top-crop/width/360/height/450?cb=20181011141901' :
                props.item.name === 'Yakul' ? 'https://www.anime-planet.com/images/characters/yakul-2702.jpg' :
                props.item.name === 'Shishigami' ? 'https://i.pinimg.com/originals/fe/cd/3d/fecd3dfbdbe1689e437321232c24c970.jpg' :
                props.item.name === 'Moro' ? 'https://i.pinimg.com/originals/fe/cd/3d/fecd3dfbdbe1689e437321232c24c970.jpg' :
                props.item.name === 'Jiji' ? 'https://i.pinimg.com/originals/aa/98/f7/aa98f7cbdf68c550dc364c42fb0b7d3d.png' :
                props.item.name === 'Satsuki Kusakabe' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/e/eb/Satsuki%27s_outfit.png/revision/latest?cb=20160401030008' :
                props.item.name === 'Mei Kusakabe' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/6/6f/Mei.png/revision/latest?cb=20180815032007' :
                props.item.name === 'Tatsuo Kusakabe' ? 'https://i.pinimg.com/originals/17/12/6c/17126c835fdd614f948961d5597f9e13.jpg' :
                props.item.name === 'Yasuko Kusakabe' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/7/7b/Yasuko_Kusakabe.png/revision/latest?cb=20110705210532' :
                props.item.name === 'Granny' ? 'https://userscontent2.emaze.com/images/ee5e3eb5-b7ea-486e-9785-a680e729d4eb/633f7f504e2088b100862a854f739062.jpg' :
                props.item.name === 'Kanta Ogaki' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/c/c3/Kanta.jpg/revision/latest/top-crop/width/360/height/450?cb=20181028000058' :
                props.item.name === 'Totoro' ? 'https://vignette.wikia.nocookie.net/studio-ghibli/images/1/1f/Totoro.gif/revision/latest/scale-to-width-down/340?cb=20181023134744' :
                props.item.name === 'Chu Totoro' ? 'https://i.pinimg.com/originals/bb/dc/a6/bbdca6d61bd40e96cbf7a682bf49ef4f.jpg' :
                props.item.name === 'Chibi Totoro' ? 'https://pixeljoint.com/files/icons/full/chibitotoro.png' : ''
            } 
                alt='Ghibli character'
            />
            <h1>{props.item.name}</h1>
            <h3><span>gender: </span>{props.item.gender}</h3>
            <h3><span>age: </span>{props.item.age}</h3>
            <h3><span>hair color: </span>{props.item.hair_color}</h3>
            <h3><span>eye color: </span>{props.item.eye_color}</h3>
        </Card>
    )
}

class GhibliCards extends React.Component {
    
    render() {
        return (
            <div style={{minHeight: '100vh'}}>
                <FetchButton onClick={this.props.getGhibli}>Fetch Ghibli Characters!</FetchButton>
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