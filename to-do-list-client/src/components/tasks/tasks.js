import { Component } from 'react';
import { addTask, getTasks, updateTask, deleteTask, getCompletedTasks} from '../../services/taskServices';
import './tasks.css';

class Tasks extends Component {
    state = { tasks: [], completedTasks: [], currentTask: "" };

    async componentDidMount() {
        try {
            let incompleteTasks = [];
            let completedTasks = [];
            const { data } = await getTasks();
            data.tasks.map( (task) => {
                console.log(task);
                task.task_status === false ? incompleteTasks.push(task) : completedTasks.push(task);
            })
            this.setState({ tasks: incompleteTasks });
            this.setState({ completedTasks: completedTasks });

        } catch (error) {
            console.log(error);
        }
    }

    handleChange = ({ currentTarget: input }) => {
        this.setState({ currentTask: input.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        window.location.reload();
        const originalTasks = this.state.tasks;
        try {
            let payload = {
                task_name: this.state.currentTask
            }
            const { data } = await addTask({ data: payload });
            const tasks = originalTasks;
            console.log('data', tasks)
            tasks.tasks.push(data.task);
            this.setState({ tasks, currentTask: "" });
        } catch (error) {
            console.log(error);
        }
    };

    handleCompletionUpdate = async (currentTask) => {
        window.location.reload();
        const originalTasks = this.state.tasks;
        try {
            const tasks = [...originalTasks];
            const index = tasks.findIndex((task) => task._id === currentTask);
            tasks[index] = { ...tasks[index] };
            tasks[index].task_status = !tasks[index].task_status;
            this.setState({ tasks });
            await updateTask(currentTask, {
                task_status: tasks[index].task_status,
            });
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.log('error', error);
        }
    };

    handleDelete = async (currentTask) => {
        window.location.reload();
        const originalTasks = this.state.tasks;
        try {
            const tasks = originalTasks.filter(
                (task) => task._id !== currentTask
            );
            this.setState({ tasks });
            await deleteTask(currentTask);
        } catch (error) {
            this.setState({ tasks: originalTasks });
            console.log(error);
        }
    };
}

export default Tasks;