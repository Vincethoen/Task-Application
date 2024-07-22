import { useState, createContext } from "react";
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './style.css';

export type GroupType = {
  id: string;
  name: string;
  edit: boolean;
  hidden: boolean;
}

export type TaskType = {
  id: string;
  task: string;
  edit: boolean;
  groupIndex: number;
  hidden: boolean;
  icon: string;
  subject: string;
}

export type GroupFunctionsType = {
  addGroup: () => void;
  editGroup: (text: string, id: string) => void;
  removeGroup: () => void;
};

export type TaskFunctionsType = {
  addTask: () => void;
  editTask: (text: string, id: string) => void;
  editSubject: (text: string, id: string) => void;
  removeTask: () => void;
  searchTask: (searchTerm: string) => void;
  incrementTask: (task: TaskType) => void;
  decrementTask: (task: TaskType) => void;
  newRandomIcon: (id: string) => void;
};

export const GroupFunctionsContext = createContext<GroupFunctionsType | undefined>(undefined);
export const TaskFunctionsContext = createContext<TaskFunctionsType | undefined>(undefined);
export const GroupContext = createContext<GroupType[] | undefined>([]);
export const TaskContext = createContext<TaskType[] | undefined>([]);

function App() {

  const [group, setGroup] = useState<GroupType[]>([]);
  const [count, setCount] = useState<number>(1);
  const [task, setTask] = useState<TaskType[]>([]);

  /* Extra Group functions */

  function getRandomName(name: string = '') {
    if (name === '') {
      const adjectives = ['Big', 'Tiny', 'Great', 'Holy', 'Unholy', 'Awesome', 'Fantastic', 'Sad', 'Whimsical', 'Gigantic', 'Jolly', 'Silly', 'Fancy', 'Cheerful', 'Glorious', 'Majestic'];
      const nouns = ['Shopping', 'Groceries', 'Tasks', 'Bucket', 'Wishes', 'Checks', 'Agenda', 'Plan', 'Schedule', 'Inventory', 'Menu', 'Recipes', 'Books', 'Goals', 'Dreams'];

      const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

      name = `${randomAdjective} ${randomNoun}`;
    }
    return name;
  }

  /* Group functions  */

  const addGroup = () => {
    const randomName = getRandomName();
    const newGroup = {
      id: crypto.randomUUID(),
      name: randomName,
      edit: false,
      hidden: false,
    };
    setGroup((prevGroup) => [...prevGroup, newGroup]);
  }

  const editGroup = (text: string, id: string) => {
    setGroup(prevGroup => {
      return prevGroup.map(group => group.id === id 
        ? { ...group, name: text } : group
      )
    })
  }

  const removeGroup = () => {
    console.log('deleteGroup');
  }

  /* Extra Task functions  */
  const getRandomIcon = () => {
    const randomIndex = Math.floor(Math.random() * 20) + 1;
    return `../../../../src/assets/icons/${String(randomIndex).padStart(2, '0')}.png`;
  }
  const newRandomIcon = (id: string) => {
    const newIcon = getRandomIcon();
    setTask(prevTask => {
      return prevTask.map(task => task.id === id 
        ? { ...task, icon: newIcon} : task
      )
    })
    return newIcon;
  }

  function getRandomTask() {
    const tasks: string[] = [
      'Teach a fish to ride a bicycle.',
      'Paint the sky green.',
      'Convince a rock to sing.',
      'Count the stars during the day.',
      'Train a cat to do taxes.',
      'Measure the length of a rainbow.',
      'Bathe a squirrel in a teacup.',
      'Host a chess tournament for chickens.',
      'Teach a snail to breakdance.',
      'Convince a cloud to write a novel.',
      'Get a sunburn from the moon.',
      'Teach a tree to do yoga.',
      'Train a hamster to conduct an orchestra.',
      'Find the WiFi password for Atlantis.',
      'Convince a shadow to play hide and seek.',
      'Organize a marathon for turtles.',
      'Build a skyscraper out of marshmallows.',
      'Have a staring contest with the sun.'
    ];
    const randomIndex: number = Math.floor(Math.random() * tasks.length);

    return tasks[randomIndex];
  }
  
  const incrementTask = (currentTask: TaskType) => {
    const newIndex = (currentTask.groupIndex + 1) % group.length;

    setTask(prevTask => {
      return prevTask.map(task => task.id === currentTask.id
        ? { ...task, groupIndex: newIndex } : task
      )
    })
  }
  const decrementTask = (currentTask: TaskType) => {
    const newIndex = (currentTask.groupIndex - 1 + group.length) % group.length;

    setTask(prevTask => {
      return prevTask.map(task => task.id === currentTask.id 
        ? { ...task, groupIndex: newIndex } : task
      )
    })
  }

  /* Task functions  */

  const addTask = () => {
    if (group.length === 0) {
      addGroup();
    }
    const randomTask = `#${count} ${getRandomTask()}`;
    const newTask = {
      id: crypto.randomUUID(),
      edit: false,
      task: randomTask,
      groupIndex: 0,
      hidden: false,
      icon: getRandomIcon(),
      subject: getRandomName(),
    };

    setTask((prevTasks) => [...prevTasks, newTask]);
    setCount((prevCount) => prevCount + 1);
  };

  const editTask = (text: string, id: string) => {
    setTask(prevTask => {
      return prevTask.map(task => task.id === id 
        ? { ...task, task: text } : task
      )
    })
  }

  const editSubject = (text: string, id: string) => {
    setTask(prevTask => {
      return prevTask.map(task => task.id === id 
        ? { ...task, subject: text } : task
      )
    })
  }

  const removeTask = () => {
    console.log('deleteTask');
  };

  const searchTask = (searchTerm: string) => {
    console.log(`searchTask: ${searchTerm}`);
  };

  const groupFunctions: GroupFunctionsType = {
    addGroup,
    editGroup,
    removeGroup,
  };

  const taskFunctions: TaskFunctionsType = {
    addTask,
    editTask,
    editSubject,
    removeTask,
    searchTask,
    incrementTask,
    decrementTask,
    newRandomIcon,
  };

  // temp
  console.log('tasks: ', task);
  console.log('group: ', group);

  return (
    <>
      <GroupFunctionsContext.Provider value={groupFunctions}>
        <TaskFunctionsContext.Provider value={taskFunctions}>
          <Header />
          <GroupContext.Provider
            value={group}>
            <TaskContext.Provider
              value={task}>
              <Content />
            </TaskContext.Provider>
          </GroupContext.Provider>
          <Footer />
        </TaskFunctionsContext.Provider>
      </GroupFunctionsContext.Provider >
    </>
  )
}

export default App
