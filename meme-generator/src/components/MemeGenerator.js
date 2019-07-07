import React, { Component } from "react";

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
          topText: "",
          bottomText: "",
          randomImg: "http://i.imgflip.com/1bij.jpg",
          allMemeImgs: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.genMeme = this.genMeme.bind(this);
    }
    
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
            const { memes } = response.data
            console.log(memes)
            this.setState({ allMemeImgs: memes })
        })
    }

    genMeme(event) {
        event.preventDefault();
        let img = this.state.allMemeImgs[Math.floor(100 *Math.random(100))].url;
        this.setState({
            randomImg: img
        })
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.genMeme} className="meme-form">
                    <input
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt=""/>
                    <h1 className="top">{this.state.topText}</h1>
                    <h1 className="bottom">{this.state.bottomText}</h1>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;
