import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const API_KEY ='AIzaSyB80HRv4LXzcbhemdGlqWzu7BsyzdO6R9k';

class App extends React.Component{
    state ={videos:[], selectedVideo:null}
    onTermSubmit = async (term) =>{
        const response = await youtube.get('/search', {
            params:{
                q: term,
                part: 'snippet',
                maxResults: 5,
                key: API_KEY
            }
        })
        this.setState({videos: response.data.items});
        this.setState({selectedVideo: response.data.items[0]})
    };

    onVideoSelect =(video) =>{
        console.log('From the app', video);
        this.setState({selectedVideo: video});
    }

    componentDidMount(){
        this.onTermSubmit('beautiful sunsets')
    }

    render(){
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column" >
                        <VideoDetail videoSelected={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column" >
                        <VideoList 
                            onVideoSelect={this.onVideoSelect}
                            videos={this.state.videos} />
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default App;