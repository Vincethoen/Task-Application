# TaskBoard

This document describes the component structure for the `bit-todos` application.

## Components

### App.tsx
- The main file of the application that integrates all components and determines the overall structure.

### Header.tsx
- Responsible for displaying the main header of the application.
- Contains the `AddTask` and `SearchTask` components.

### AddTask.tsx
- Provides an input field and button to add a new task.

### SearchTask.tsx
- Provides an input field to search for tasks within the application.

### Content.tsx
- The main content area that holds all task groups (`OpenGroup`, `ActiveGroup`, and `ClosedGroup`).

### OpenGroup.tsx
- Displays tasks that are in the "Open" category.
- Contains a title and a counter of the number of tasks.

### ActiveGroup.tsx
- Displays tasks that are in the "Active" (previously "In Progress") category.
- Contains a title and a counter of the number of tasks.

### ClosedGroup.tsx
- Displays tasks that are in the "Closed" category.
- Contains a title and a counter of the number of tasks.

### TitleGroup.tsx
- Displays the title of the task group along with the task count.

### Item.tsx
- Displays an individual task within a task group.
- Composed of nested components such as `ItemInput`, `ItemSubject`, `ItemStatus`, and `ItemIcon`.

#### Nested Components

##### ItemInput.tsx
- A text input field for entering or editing the name of a task.
- Nested within the `Item` component.

##### ItemSubject.tsx
- Displays the subject or title of the task.
- Nested within the `Item` component.

##### ItemStatus.tsx
- Displays and allows changing the status of a task (e.g., from `Open` to `Active` or `Closed`).
- Nested within the `Item` component.

##### ItemIcon.tsx
- Displays an icon representing the task.
- Nested within the `Item` component.

### Footer.tsx
- Displays the footer of the application.

## Usage

1. **Adding a Task**: Use the `AddTask` component in the header to add new tasks.
2. **Searching Tasks**: Use the `SearchTask` component in the header to filter tasks.
3. **Task Groups**: Tasks are organized into three main groups: `Open`, `Active`, and `Closed`.
4. **Task Management**: Each task (`Item`) can be edited using the `ItemInput`, have its status changed via `ItemStatus`, and display relevant information through `ItemSubject` and `ItemIcon`.

## Development

To start the development server, run:

```bash
npm start
