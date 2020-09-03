import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogsItems/DialogItem'
import Message from './DialogsItems/Message'


const Dialogs = (props) => {

  

    let deialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.messages.map(m => <Message message={m.message} />);

    return (<div className={s.dialogs}>
        <div className={s.DialogsItems}>
            {deialogsElements}
        </div>
        <div className={s.messages}>
            {messagesElements}
        </div>
      




    </div>



    );
}

export default Dialogs;