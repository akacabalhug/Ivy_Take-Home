import React from 'react';
import { Checkbox } from "@material-ui/core";
import { BsTrash } from "react-icons/bs";
import { BsPlusCircleFill } from "react-icons/bs";

import './card.css';

const Card = ({ tasks, handleCompletionUpdate, handleDelete, flag}) => {
    console.log('card', tasks);
    return(
        <ul>
        {
            (tasks && tasks.length > 0) ?

            tasks.map((task) => 
                <div className = 'col-12' key = {task._id}>
                     <div className="card mb-3 mx-auto to-do-card" style={{width: "90%"}}>
                         <div className="card-body">
                         <div className = "row">
                            <div className = "col-lg-11 col-md-10 d-flex">
                                <Checkbox
                                        checked={task.task_status}
                                        disabled = {window.location.pathname === '/completed' ? true : false}
                                        onClick={() => handleCompletionUpdate(task._id, flag)}
                                        color="primary"
                                    />
                                <p className = {'card-text task-name-text ' + (task.task_status === true ? "completed" : "")}>{task.task_name} {task.task_status}</p>
                         
                            </div>
                            <div className = "col-lg-1 col-md-2 d-flex justify-content-center">
                                <span className = 'card-icons'>
                                    <BsTrash size = '25px'  data-bs-toggle="modal" data-bs-target="#deleteTaskModal"/>
                                </span>

                                <div className="modal fade" id="deleteTaskModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog my-modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                    <h4 className="modal-title" id="exampleModalLabel"> Are you sure you want to delete task?</h4>

                                    <div className = "mt-5 mb-4 mx-auto d-flex">
                                        <button type="submit" className="btn cancel-btn" data-bs-dismiss="modal">Cancel</button>
                                        <button type="submit" className="btn btn-primary confirm-delete-btn" data-bs-dismiss="modal" onClick={() => handleDelete(task._id)}>Confirm Delete</button>
                                    </div>

                                    </div>

                                </div>
                                </div>
              </div>
                            </div>
                         </div>
                         
                         </div>
                     </div>
                 </div>
            ):                 
            <li className = "empty-task-text mt-5 ">
                <span className = {(window.location.pathname === '/completed' ? "hide":"")}>
                    Let's be productive today! <br/>
                    Click the <BsPlusCircleFill size = '1.5rem' color = 'var(--green)'/> to start adding tasks.
                </span>
                <span className = {(window.location.pathname === '/home' ? "hide":"")}>
                    Let's be productive today! <br/>
                    Proceed to the To-Do page and start adding some tasks!
                </span>

               
            </li>

        }

    </ul>
    )
  }
  export default Card;

