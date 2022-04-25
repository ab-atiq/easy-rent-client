import { ChatEngine } from 'react-chat-engine';
import './ChatApp.css';
import ChatFeed from './compo/ChatFeed';
import LoginForm from './compo/LoginForm';


const ChatApp = () => {
    // if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID="62c1bcf4-5521-46d7-9374-ec9e64ae9cfd"
            userName="RentAdmin"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}


        />

    );
};

export default ChatApp;


