import React from "react";
import './styles/notes.sass';

// add icon
import attachment_added from '../../static/icon/attachment_added.svg';
import add_attachment from '../../static/icon/attachment_add.svg';
import send from '../../static/icon/send.svg';

// add avatar
import current from '../../static/avatar_user.jpg';
import another from '../../static/avatar_current.png';

const data = [
    {
        user : "Daniel Shiffman",
        message:
            `In as name to here them deny wise this.
            As rapid woody my he me which.
            Men but they fail shew just wish next put.
            Led all visitor musical calling nor her.
            Within coming figure sex things are.
            Pretended concluded did repulsive education smallness yet yet described.
            Had country man his pressed shewing. No gate dare rose he.
            Eyes year if miss he as upon. `,
        attachment : null
    },
    {
        user : "Rohit Tatu",
        message:
            `In as name to here them deny wise this.
            As rapid woody my he me which.
            Men but they fail shew just wish next put.
            Led all visitor musical calling nor her.
            Within coming figure sex things are.
            Pretended concluded did repulsive education smallness yet yet described.
            Had country man his pressed shewing. No gate dare rose he.
            Eyes year if miss he as upon. `,
        attachment : null
    },
    {
        user : "Rohit Tatu",
        message : null,
        attachment : {
            name : "project_guide.pdf",
            data : null
        }
    },
    {
        user : "Daniel Shiffman",
        message:
            `In as name to here them deny wise this.
            As rapid woody my he me which.
            Men but they fail shew just wish next put.
            Led all visitor musical calling nor her.
            Within coming figure sex things are.
            Pretended concluded did repulsive education smallness yet yet described.
            Had country man his pressed shewing. No gate dare rose he.
            Eyes year if miss he as upon. `,
        attachment : null
    },
    {
        user : "Daniel Shiffman",
        message:
            `In as name to here them deny wise this.
            As rapid woody my he me which.
            Men but they fail shew just wish next put.
            Led all visitor musical calling nor her.
            Within coming figure sex things are.
            Pretended concluded did repulsive education smallness yet yet described.
            Had country man his pressed shewing. No gate dare rose he.
            Eyes year if miss he as upon. `,
        attachment : null
    },

];

const CURRENT_USER = "Rohit Tatu"



const Notes = () =>
    <div className="notes_container">

        <div className="notes_data">
            {
                data.map( (item, index) =>
                    <div className={(CURRENT_USER == item.user) ? "notes_message right" : "notes_message"} key={index}>
                        <img src={(CURRENT_USER == item.user) ? current : another} className="notes_user_profile"/>
                        <div>
                            <span>{item.user}</span>
                            {
                                (item.message !== null) ?
                                <div className="message">
                                    <p>{item.message}</p>
                                </div>
                                : (item.attachment !== null)
                                    ? <div className="attachment">
                                            <img src={attachment_added}/>
                                            <span>{item.attachment.name}</span>
                                        </div>
                                    : null
                            }
                        </div>
                    </div>
                )
            }
        </div>

        <div className="notes_input">
            <div>
                <img src={add_attachment}/>
                <input type="text" placeholder="Enter your message"/>
            </div>
            <img src={send}/>
        </div>
    </div>

export default Notes;
