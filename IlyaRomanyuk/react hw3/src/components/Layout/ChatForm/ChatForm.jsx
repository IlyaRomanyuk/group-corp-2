import React, { useRef } from 'react';
import { Button } from '@material-ui/core'
import m1 from './../../../img/mans/m1.png';
import { nanoid } from 'nanoid';

export const ChatForm = ({ onMessageSend }) => {
    const mess = useRef(null);
    const person = useRef(null);

    const handleClick = () => {
        if (mess.current.value.trim() && person.current.value.trim()) {
            let message = mess.current.value;
            let author = person.current.value;

            onMessageSend({ id: nanoid(), author, message, image: m1 })

            mess.current.value = '';
            person.current.value = '';
        }
        return
    }

    const pressOnButton = (event) => {
        if (event.keyCode === 13 && event.ctrlKey) handleClick()
    }

    return (
        < div className="content__footer  footer" >
            <div>
                <input onKeyDown={pressOnButton} ref={person} type="text" placeholder="Your name ... " />
            </div>

            <div>
                <textarea onKeyDown={pressOnButton} ref={mess} type="text" placeholder="Write a message"></textarea>
            </div>

            <Button variant="contained" color="primary" onClick={handleClick}>send</Button>
        </div >
    )
}
