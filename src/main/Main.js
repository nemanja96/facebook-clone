import React, { useEffect, useState } from 'react'
import './Main.css';
import firebase from "firebase/compat/app";
import FlipMove from 'react-flip-move';
import { db } from '../firebase.js';
import Story from '../story/Story';
import InputOption from '../inputOption/InputOption';
import Post from '../post/Post';
import Avatar from '@mui/material/Avatar';
import avatar from '../images/small-avatar.png';
import img1 from '../images/06.jpg';
import img2 from '../images/07.jpg';
import img3 from '../images/08.jpg';
import img4 from '../images/09.jpg';
import img5 from '../images/10.jpg';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import avatar1 from '../images/avatar5.jpg';
import avatar2 from '../images/avatar3.jpg';
import avatar3 from '../images/avatar4.jpg';
import avatar4 from '../images/avatar2.jpg';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Main() {

  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data: doc.data()
        }
      )))
    })
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      message: input,
      photoUrl: user.photoUrl,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  }

  return (
    <div className='main'>
        <div className='main__stories'>
            <div className='make__story'>
                <img src={user.photoUrl} className='make__storyImage' />
                <div className='make__storyBox'>
                    <AddSharpIcon className="make__storyIcon" />
                    <span>Napravite<br/>priču</span>
                </div>
            </div>
            <Story storyUrl={img1} title="Tamara Perić" icon={avatar1} />
            <Story storyUrl={img2} title="Radomir Terzić" icon={avatar2} />
            <Story storyUrl={img3} title="Ivana Gvozdenović" icon={avatar3} />
            <Story storyUrl={img4} title="Nikola Radivojević" icon={avatar4} />
        </div>
        <div className="main__post">
          <div className='main__postInput'>
            <Avatar src={user.photoUrl} photoUrl={user.photoUrl} />
            <form>
              <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder={`O čemu razmišljate, ${user.displayName}?`} />
              <button onClick={sendPost}>Posalji</button>
            </form>
          </div>
          <div className='main__postAdd'>
            <InputOption Icon={VideoCameraBackIcon} title="Video prenos uzivo" />
            <InputOption Icon={PhotoLibraryIcon} title="Fotografija/video" />
            <InputOption Icon={TagFacesIcon} title="Osećanje/aktivnost" />
          </div>
        </div>

        <FlipMove>{
          posts.map(({id, data: { name, message, photoUrl}}) => (
            <Post id={id} name={name} message={message} photoUrl={photoUrl} />
          ))
        }</FlipMove>
    </div>
  )
}

export default Main