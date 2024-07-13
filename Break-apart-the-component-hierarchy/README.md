# TaskBoard

This document describes the component structure for the `TaskBoard` application.

## Main Component

### App.tsx
- This is the main file of the application that integrates all components and determines the overall structure.

## Components

### Header.tsx
- Responsible for displaying the main header of the application.
- Contains the `AddTask`, `AddGroup`, and `SearchTask` components.

### Content.tsx
- The main content area for content.

### Footer.tsx
- Displays the footer of the application.

## Nested Components of Header.tsx

### AddTask.tsx
- Provides an input field and button to add a new task.

### AddGroup.tsx
- Provides an input field and button to add a new group.

### SearchTask.tsx
- Provides an input field to search for tasks within the application.

## Nested Components of Content.tsx

### Group.tsx
- Displays a category of tasks such as `Open`, `Active`, `Closed` ( by default ) or `Anything you wish`.
- Contains the `TitleGroup` and a list of `Item` components.

## Nested Components of Group.tsx

#### TitleGroup.tsx
- Displays the title of the task group along with the task count.
- Contains the `ItemCount` component.

##### ItemCount.tsx, nested in Titlegroup.tsx
- Displays the count of tasks within a group.
- Child component of `TitleGroup`.

### Item.tsx 
- Displays an individual task within a task group.
- Multiple Items will be found in Group.tsx.
- Composed of nested components such as `ItemInput`, `ItemSubject`, `ItemStatus`, and `ItemIcon`.

#### Nested Components of Item

##### ItemInput.tsx
- A text input field for entering or editing the name of a task.
- Nested within the `Item` component.

##### ItemSubject.tsx
- Displays the subject or title of the task.
- Nested within the `Item` component.

##### ItemStatus.tsx
- Contains arrow buttons that allow moving the task to the adjacent group.
- Nested within the `Item` component.

##### ItemIcon.tsx
- Displays an icon representing the task.
- Nested within the `Item` component.

## Usage

1. **Adding a Task**: Use the `AddTask` component in the header to add new tasks.
2. **Adding a Group**: Use the `AddGroup` component in the header to add new groups.
3. **Searching Tasks**: Use the `SearchTask` component in the header to filter tasks.
4. **Task Groups**: Tasks are organized into three main groups: `Open`, `Active`, and `Closed`.
5. **Task Management**: Each task (`Item`) can be edited using the `ItemInput`, have its status changed via `ItemStatus` to move between groups, and display relevant information through `ItemSubject` and `ItemIcon`.

## Development

To start the development server, run:

```bash
npm run dev
