import { useDispatch } from 'react-redux';
import { setAudioFile } from 'src/redux/slices/AudioPlayer/state';
import styles from './PlayButton.module.scss';
import Button from '../dls/Button/Button';

interface Props {
  chapterId: number;
}
const PlayChapterAudioButton = (props: Props) => {
  const dispatch = useDispatch();
  const play = () => {
    dispatch(setAudioFile(props.chapterId));
  };
  return (
    <div className={styles.container}>
      <Button text="Play" onClick={play} />
    </div>
  );
};

export default PlayChapterAudioButton;
