import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';
import 'stream-chat-react/dist/css/index.css';
import './Chat.css';
import ChannelListContainer from './ChannelListContainer';
import ChannelContainer from './ChannelContainer';
import { Container } from '@mui/material';
import Register from '../Shared/Register/Register';
import useAuth from '../../hooks/useAuth';
import Auth from './Auth';
// import Auth from './Auth';

const cookies = new Cookies();

const apiKey = '62bs9tyydqkw';
const authToken = cookies.get("token");

const client = StreamChat.getInstance(apiKey);


const ChatApp = () => {

    const { user } = useAuth();
    const [createType, setCreateType] = useState('');
    const [isCreating, setIsCreating] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    if (!authToken) return <Auth />


    return (
        <div className='chat_container' >

            <div className="app__wrapper">
                <Chat client={client} theme="team light">
                    <ChannelListContainer

                    />
                    <ChannelContainer

                    />
                </Chat>
            </div>
        </div>
    );
}

export default ChatApp;


