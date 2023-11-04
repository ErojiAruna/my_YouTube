import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState('');
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[542px] border border-black rounded-2xl ml-2 m-5 p-5 ">
        <h1 className="w-full font-normal mb-2 border-b-2">Live chat</h1>

        <div className="w-full h-[480px] overflow-y-scroll flex flex-col-reverse">
          {
            // Disclaimer: Don't use indexes as key
            ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log('On Form Submit', liveMessage);
          dispatch(
            addMessage({
              name: 'Aruna',
              message: liveMessage,
            })
          );
        }}
      >
        <input
          className="px-2 w-80 border border-black"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-400 ">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
