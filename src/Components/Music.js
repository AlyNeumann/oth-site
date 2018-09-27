import React, { Component } from 'react';
import data from './tracks.json';
import './Music.css'
import Controls from './Controls';
import TrackList from './TrackList';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Email from './Email';
import Socialmedia from './Socialmedia';



class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentTrackIndex: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
    this.selectTrackNumber = this.selectTrackNumber.bind(this);
  }
  playAudio() {
    this.audioElement.load();
    this.audioElement.play();
  }
  pauseAudio() {
    this.audioElement.pause();
  }
  selectTrackNumber(trackId) {
    this.setState({ currentTrackIndex: trackId, playing: true }, this.playAudio);
  }
  handleClick(e) {
    switch (e.target.id) {
      case "play":
        this.setState((state, props) => {
          let currentTrackIndex = state.currentTrackIndex;
          if (currentTrackIndex === 0) {
            currentTrackIndex = 1;
          }
          return {
            playing: true,
            currentTrackIndex: currentTrackIndex
          };
        }, this.playAudio);
        break;
      case "pause":
        this.setState({ playing: false }, this.pauseAudio);
        break;
      case "prev":
        this.setState((state, props) => {
          let currentIndex = state.currentTrackIndex - 1;
          if (currentIndex <= 0) {
            return null;
          } else {
            return { playing: true, currentTrackIndex: currentIndex };
          }
        }, this.playAudio);
        break;
      case "next":
        this.setState((state, props) => {
          let currentIndex = state.currentTrackIndex + 1;
          if (currentIndex > data.tracks.length) {
            return null;
          } else {
            return { playing: true, currentTrackIndex: currentIndex };
          }
        }, this.playAudio);
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Grid>
        <Grid className="music-container">
          <Grid className="Music">
            <Row
              className="Artwork"
            //   style={{ backgroundImage: "Images/lovesongs.jpg" }}
            >
              <Col xs={12}>
                <Image src="Images/lovesongs.jpg" className="AlbumCover" />
              </Col>
              <Controls onClick={this.handleClick} playing={this.state.playing} />
              <audio ref={(audio) => { this.audioElement = audio }} src={"/songs/" + this.state.currentTrackIndex + ".mp3"} />
            </Row>
            <TrackList
              currentTrackIndex={this.state.currentTrackIndex}
              selectTrackNumber={this.selectTrackNumber}
            />
            <Row className="MusicCredit"><a href="https://oldtimehoney.bandcamp.com/">https://oldtimehoney.bandcamp.com/</a></Row>

          </Grid>
        </Grid>
        <Socialmedia />
        <Email />
      </Grid>
    );
  }
}





export default Music;


