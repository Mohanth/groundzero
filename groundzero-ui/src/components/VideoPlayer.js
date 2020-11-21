import React from 'react';
import { PlyrComponent } from 'plyr-react';

export default class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sources: {
        type: 'video',
        sources: [
          {
            src: 'rpF_4dHmZIw',
            provider: 'youtube'
          }
        ]
      }
    };
  }

  render() {
    return (
      <div id={"videoPlayer"}>
        <PlyrComponent sources={this.state.sources}/>
      </div>
    );
  }
}
