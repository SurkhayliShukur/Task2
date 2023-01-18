import './App.css';
import {listData} from './assets/listData';
import DraggableList from './Components/LIst/DraggableList';
import Card from './Components/Card/Card';

function App() {
  return (
    <>
      <h1 className='header'>
        Drag n Drop
      </h1>
      <DraggableList 
        data={listData}
        renderItemContent={(item) => LessonCard(item)}
      />
    </>
  );
}
const LessonCard = item => <Card item={item}/>

export default App;
