import React from 'react';
import Tasks from '../../components/tasks/tasks'
import Card from '../../components/card/card';
import './home.css';
import { BsPlusCircleFill } from "react-icons/bs";

class Home extends Tasks{
  state = { tasks: [], currentTask: "" };

  render() {
    const { tasks } = this.state;
    return (
      <div className='home-page'>
        <div className = 'container my-container'>
          <div className = 'row header mt-5 mb-4'>
            <span className = 'header-text'>
              Tasks
            </span>
          </div>
  
          <div className = "row pt-2 pb-4">
            <div className = "col-11 mx-auto">
              <span className = 'header-text float-left'> Today </span>
              <div className = 'circular-btn float-right' data-bs-toggle="modal" data-bs-target="#newTaskModal">
                <BsPlusCircleFill size = '40px' color = 'var(--green)'/>
              </div>
  
              <div className="modal fade" id="newTaskModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog my-modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                      <h4 className="modal-title" id="exampleModalLabel"> New Task</h4>
                      <form
                        onSubmit={this.handleSubmit} 
                      >
                          <div className="mb-2 mt-3">
                              <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                placeholder="Walk the dogs" 
                                value={this.state.currentTask}
                                onChange={this.handleChange}/>
                          </div>
                          <div className = "mt-4 mb-4">
                            <button type="submit" className="btn btn-primary add-task-btn" data-bs-dismiss="modal">Add Task</button>
                          </div>
                      </form>
                    </div>

                  </div>
                </div>
              </div>
  
            </div>
          </div>
  
          <div className = "row">
            <Card tasks = {tasks} handleCompletionUpdate = {this.handleCompletionUpdate} handleDelete = {this.handleDelete} flag = {false}/>
          </div>  
  
          </div>
        </div>
  
    );
  }
  
}

export default Home;