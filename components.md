# Components State and Props

### App component
- **State:** Contains all states and functions that are passed down using `useContext`.

### Header component

#### AddTask component
- **State:** No state.
- **Context:**
  - Function to create a task via `useContext`.

#### AddGroup component
- **State:** No state.
- **Context:**
  - Function to create a group via `useContext`.

#### SearchTask component
- **State:** No state.
- **Context:**
  - Function to filter tasks based on a search term via `useContext`.

### Content component

#### Group component
- **Props:**
  - `id` (string): Unique group ID.
  - `groupName` (string): Name of the group.
  - `edit` (boolean): Indicates if the group is being edited.
  - `hidden` (boolean): Indicates if the group is hidden for task search filtering.

##### TitleGroup component
- **Props:**
  - `groupName` (string): The name of the group, received via props from the Group component.
- **State:** Contains a function to count the number of items in the current group.

###### ItemCount component
- **Props:**
  - `count` (number): The number of tasks, received via props.

##### Item (task) component
- **Props:**
  - `id` (string): Unique task/item ID.
  - `taskText` (string): The text of the task.
  - `edit` (boolean): Indicates if the item is being edited.
  - `groupIndex` (number): Index of the group in which the current item resides.
  - `iconPath` (string): Path to the icon file for the current item.
  - `subject` (string): Subject of the item.

### Footer component
- **Props:** Receives no data.

## Summary

- **State:** Used to manage mutable data that can change over time within the component itself.
- **Props:** Used to pass data from parent components to child components in a read-only manner.
- **Context:** Used to share functions and data between components without passing them explicitly via props.
