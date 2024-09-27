import { useState } from "react";

const initialItems = [
  { name: 'iron', color: 'black', size: 'large'}, {name: 'metal', color: 'red', size: 'large' }, {name: 'hair', color: 'black', size: 'medium'}
]

const InventoryList = () => {
  const [items, setItems] = useState(initialItems)
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleChangeName = (e: any) => {
    setName(e.target.value)
  }
  const handleChangeColor = (e: any) => {
    setColor(e.target.value)
  }
  const handleChangeSize = (e: any) => {
    setSize(e.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setItems((prev) => [...prev, { name, color, size }]);
    setName('');
    setColor('')
    setSize('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Inventory List</h4>
        <h6>Add New Item</h6>
        <input onChange={(e) => handleChangeName(e)} />
        <input onChange={(e) => handleChangeColor(e)} />
        <input onChange={(e) => handleChangeSize(e)} />
        <button title="ADD" type="submit"/>
      </form>
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Color</th>
          <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.color}</td>
              <td>{ item.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <MyForm/>
  </>)
};

export default InventoryList;

const MyForm: React.FC = () => {
  const [hobbies, setHobby] = useState([{ name: '' }]);


  const handleChange = (e: any, index: any) => {
    const updatedHobbies = [...hobbies]
    updatedHobbies[index].name = e.target.value
    setHobby(updatedHobbies)
  }

  const handleDelete = (index:any) => {
    const updatedHobbies = hobbies.filter((_, i) => i !== index);
    setHobby(updatedHobbies);
  }

  const handleAdd = (e: any) => {
    e.preventDefault()
    setHobby(prev => [...prev, { name: '' }]);
    
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('New Entry Submitted!')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {hobbies.map((hobby, index) => (
          <div key={index}>
            <input onChange={(e) => handleChange(e, index)} value={ hobby.name} />
            <button onClick={() => handleDelete(index)}>DELETE</button>
             <button type="submit">Submit</button>
          </div>
        ))}
      </form>
      <button onClick={handleAdd}>ADD</button>
    </>);
};

