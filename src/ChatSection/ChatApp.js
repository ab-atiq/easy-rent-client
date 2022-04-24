import { ChatEngine } from 'react-chat-engine';
import './ChatApp.css';
import ChatFeed from './compo/ChatFeed';


const ChatApp = () => {
    return (
        <ChatEngine
            height="100vh"
            projectID="62c1bcf4-5521-46d7-9374-ec9e64ae9cfd"
            userName="RentAdmin"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            

        />

    );
};

export default ChatApp;


