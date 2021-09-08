import React from 'react';
import Tasks from '../../components/tasks/tasks'
import Card from '../../components/card/card';
import './completed.css';

class Completed extends Tasks{
  state = { tasks: [], completedTasks: [], currentTask: "" };

  render() {
    const { completedTasks } = this.state;
    console.log('complete', completedTasks);
    return (
      <div className='home-page'>
        <div className = 'container my-container'>
          <div className = 'row header mt-5 mb-4'>
            <span className = 'header-text'>
              Completed Tasks
            </span>
          </div>

          <div className = "row">
            <Card tasks = {completedTasks} handleCompletionUpdate = {this.handleCompletionUpdate} handleDelete = {this.handleDelete} flag = {true}/>
          </div>  
  
          </div>
        </div>
  
    );
  }
  
}

export default Completed;