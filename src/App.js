import React,{useState, useEffect} from 'react'
import { View } from './components/View';

// getting the values of local storage
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  // main array of objects state || books state || books array of objects
  const [books, setbooks]=useState(getDatafromLS());

  // input field states
  const [title, setTitle]=useState('');
  const [desc, setDesc]=useState('');
  const [email, setEmail]=useState('');
  const [range, setRange]=useState('');

  // form submit event
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    // creating an object
    let book={
      title,
      desc,
      email,
      range
    }
    setbooks([...books,book]);
    setTitle('');
    setDesc('');
    setEmail('');
    setRange('');
  }

  

  // saving data to local storage
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])

  return (
    <div className='wrapper'>
     
      <div className='main'> 

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Description</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setDesc(e.target.value)} value={desc}></input>
            <br></br>
            <label>email</label>
            <input type="email" className='form-control' required
            onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>

            <label>range</label>
            <input type="number" className='form-control' required 
            min="26"
            max="61"
            onChange={(e)=>setRange(e.target.value)} value={range}></input>
            <br></br>
            

        
            <br></br>
            <br></br>   <br></br>
            
            <button type="submit" className='btn btn-success btn-md'>
              ADD
            </button>
          </form>
        </div>

        <div className='view-container'>
          {books.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
              
                  <th>Title</th>
                  <th>desc</th>
                    <th>email</th>
               
                    
                    <th>Range</th>
                  </tr>
                </thead>
                <tbody>
                  <View books={books}/>
                </tbody>
              </table>
            </div>
          </>}
          {books.length < 1 && <div>No Records are added yet</div>}
        </div>

      </div>
    </div>
  )
}

export default App
