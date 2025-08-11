import { HTMLAttributes } from 'react';
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
} from '@/components/ui/shadcn-io/video-player';

type ModuleVideosProps = HTMLAttributes<HTMLDivElement> & {
    file?: string;
}

const ModuleVideos = ({ file }: ModuleVideosProps) => {
    return (
    <VideoPlayer className="overflow-hidden rounded-lg border">
    <VideoPlayerContent
      crossOrigin=""
      muted
      preload="auto"
      slot="media"
      src={`https:${file}/stream.mux.com/DS00Spx1CV902MCtPj5WknGlR102V5HFkDe/high.mp4`}  // src={file}
    />
    <VideoPlayerControlBar>
      <VideoPlayerPlayButton />
      <VideoPlayerSeekBackwardButton />
      <VideoPlayerSeekForwardButton />
      <VideoPlayerTimeRange />
      <VideoPlayerTimeDisplay showDuration />
      <VideoPlayerMuteButton />
      <VideoPlayerVolumeRange />
    </VideoPlayerControlBar>
    </VideoPlayer>
    );
};

export default ModuleVideos;
