import React from 'react';
import Nav from './components/Nav';
import Cards from './components/Cards';
import Header from './components/Header';
import Footer from './components/Footer';
import images from './images.json';

class App extends React.Component {

    state = {
        images: images,
        currentScore: 0,
        topScore: 0,
        clicked: [],
        message: ''
    }

    cardShuffle = array => {
        const shuffled = array.map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]);
        return shuffled;
    }

    checkClicked = ids => {
        let matchFound = false;
        this.state.clicked.map(id => {
            if (ids === id) {
                matchFound = true;
            }
        })
        return matchFound;
    }

    

    handleClick = id => {
        console.log(`id: ${id}`)
        switch (this.checkClicked(id)) {
            case true:
                this.checkWinLose(true);
                break;
            case false:
                this.checkWinLose(false, id);
                break;
            default:
                break;
        }
    }

    checkWinLose = (lost, id) => {
        const newScore = this.state.currentScore
        console.log(this.state.clicked.length)
        if (this.state.clicked.length === 11) {
            this.setState({
                images: images,
                currentScore: 0,
                topScore: newScore > this.state.topScore ? newScore : this.state.topScore,
                clicked: [],
                message: 'You Won! Click any image to try again.'
            });
        } else {
            const score = this.state.currentScore + 1
            this.setState({
                clicked: [...this.state.clicked, id],
                images: this.cardShuffle(images),
                currentScore: score,
                message: ''
            });
        }
        if (lost) {
            this.setState({
                images: images,
                currentScore: 0,
                topScore: newScore > this.state.topScore ? newScore : this.state.topScore,
                clicked: [],
                message: 'You Lost! Click any image to try again.'
            });
        }
    }

    render () {
        return (
            <div className='container-fluid'>
                <Nav />
                <Header
                    currentScore={this.state.currentScore}
                    topScore={this.state.topScore}
                    message={this.state.message} />
                <div className='container'>
                    <div className='row flow-text'>
                        {this.state.images.map(image =>
                            <Cards
                                key={image.id}
                                image={image.image}
                                id={image.id}
                                handleClick={this.handleClick} />)}
                    </div>
                </div>
                <Footer />
            </div >

        );
    }
}

export default App;