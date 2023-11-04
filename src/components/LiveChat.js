import React, { useEffect } from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice';
import { generateRandomName, makeRandomMessage } from '../utils/helper';

const LiveChat = () => {
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
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
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
  );
};

export default LiveChat;
