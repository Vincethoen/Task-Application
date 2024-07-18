import { useContext } from 'react';
import { GroupType, GroupContext } from './App';
import Group from './NestedContent/Group';
import './style.css';

const Content = () => {

  const context = useContext<GroupType[] | undefined>(GroupContext);

  if (!context) {
    return null;
  }
  return (
    <section>
      {context.map(group => (
        <Group
        key={group.id}
        id={group.id}
        />
      ))}
    </section>
  )
}

export default Content