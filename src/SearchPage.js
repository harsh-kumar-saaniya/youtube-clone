import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchpage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://wallpapercave.com/wp/wp2465923.jpg"
                channel="Harsh Kumar"
                verified
                subs="100K"
                noOfVideo={382}
                description="You can find awesome programming contain here. Also can find amazing programming tips and tricks can will boost your carrer in the right direction"
            />
            <hr />
            <VideoRow
                title="Day in the life of Software enginneer"
                views="1.44M"
                timestamp="1 month"
                channelImage="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
                channel="Harsh Kumar"
                description="You can find awesome programming contain here. Also can find amazing programming tips and tricks can will boost your carrer in the right direction"
                image="https://i.ytimg.com/vi/DFW8MwstRwY/maxresdefault.jpg"
            />
            <VideoRow
                title="Day in the life of Software enginneer"
                views="1.44M"
                timestamp="1 month"
                channelImage="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
                channel="Harsh Kumar"
                description="You can find awesome programming contain here. Also can find amazing programming tips and tricks can will boost your carrer in the right direction"
                image="https://i.ytimg.com/vi/DFW8MwstRwY/maxresdefault.jpg"
            />
            <VideoRow
                title="Day in the life of Software enginneer"
                views="1.44M"
                timestamp="1 month"
                channelImage="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
                channel="Harsh Kumar"
                description="You can find awesome programming contain here. Also can find amazing programming tips and tricks can will boost your carrer in the right direction"
                image="https://i.ytimg.com/vi/DFW8MwstRwY/maxresdefault.jpg"
            />
            <VideoRow
                title="Day in the life of Software enginneer"
                views="1.44M"
                timestamp="1 month"
                channelImage="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
                channel="Harsh Kumar"
                description="You can find awesome programming contain here. Also can find amazing programming tips and tricks can will boost your carrer in the right direction"
                image="https://i.ytimg.com/vi/DFW8MwstRwY/maxresdefault.jpg"
            />
            <VideoRow
                title="Day in the life of Software enginneer"
                views="1.44M"
                timestamp="1 month"
                channelImage="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
                channel="Harsh Kumar"
                description="You can find awesome programming contain here. Also can find amazing programming tips and tricks can will boost your carrer in the right direction"
                image="https://i.ytimg.com/vi/DFW8MwstRwY/maxresdefault.jpg"
            />
            <VideoRow
                title="Day in the life of Software enginneer"
                views="1.44M"
                timestamp="1 month"
                channelImage="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
                channel="Harsh Kumar"
                description="You can find awesome programming contain here. Also can find amazing programming tips and tricks can will boost your carrer in the right direction"
                image="https://i.ytimg.com/vi/DFW8MwstRwY/maxresdefault.jpg"
            />

        </div>
    )
}

export default SearchPage;
