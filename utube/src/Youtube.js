import React, { Component } from "react";
import APIkey from "./APIkey";

const API = APIkey;
const channelID = "UCXgGY0wkgOzynnHvSEVmE3A";
const result = 20;

var finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {
    constructor(props){
        super(props);
        this.state = {
            resultyt: []
        }
        this.clicked = this.clicked.bind(this);
    }

    clicked(){
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                this.setState({resultyt});
            })
            .catch((error) => {
                console.error(error);
        });
    }

  render() {
    // https://www.youtube.com/channel/UCXgGY0wkgOzynnHvSEVmE3A
      console.log(finalURL);
      console.log(this.state.resultyt);
    return (
      <div>
        <button onClick={this.clicked}>Get Youtube Videos</button>
            {
                this.state.resultyt.map((link, i) => {
                    console.log(link);
                    var frame =
                        <div className="youtube" key={i}><iframe
                        title="Youtube React App"
                        width="500"
                        height="280"
                        src={link}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    /></div>
                    return frame;
                })
            }
            {this.frame}
      </div>
    );
  }
}

export default Youtube;


// https://www.googleapis.com/youtube/v3/search?key={Your_API_key}&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10
