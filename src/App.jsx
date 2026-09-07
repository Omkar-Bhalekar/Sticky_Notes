import { useState } from "react"
import Card from "../components/Card";

function App() {

  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [note,setNote] = useState([]);


  const deleteNote = (indexToDelete) => {
    setNote(
      note.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <>
      
      <div className="h-screen w-screen bg-black text-white lg:flex">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Form Submitted by",title);
            console.log(description);

            let newNote = [...note];

            newNote.push({title,description})
            setNote(newNote);

            setTitle('')
            setDescription('')
          }}
          className="flex flex-col lg:w-1/3  p-10  items-start">
          
          <h1 className="font-medium text-3xl p-5 pl-2">Add Note</h1>
         
          <input
            value={title}
            onChange={(e) => { setTitle(e.target.value) }}
            className="px-5 py-4 m-2 w-full font-medium outline-none border-2 rounded"
            type="text"
            placeholder="Enter title">
          </input>

          <textarea
            className="px-5 py-4 h-32 w-full font-medium outline-none m-2 border-2 rounded" 
            placeholder="Enter Note"
            value={description}
            onChange={(e)=>{ setDescription(e.target.value) }}>
          </textarea>

          <button
            type="submit"
            className="px-5 py-4 w-full  m-2  outline-none border-2 font-semibold rounded bg-white text-black">Add Note
          </button>

        </form>

        <div className=" bg-mist-900 w-full h-full lg:w-2/3 p-10 lg:border-l-2 overflow-auto">
          <h1 className="font-medium text-3xl p-5">My Notes</h1>
          <div className="flex flex-wrap">
            {note.map((data,index)=>{
             
            return <Card  title={data.title} description={data.description} deleteNote={deleteNote}/>
            })}
            
          </div>
        </div>
      </div>
    
    </>
  )
}

export default App
