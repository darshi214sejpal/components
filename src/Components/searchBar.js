import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import List from './List';
import './searchBar.css'
import { InputAdornment } from '@mui/material';
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";

function SearchBar() {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  
  return (
    <div className="main">
       {/* <h1>React Search</h1>  */}
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          //label="Search for Entity Name..."
          placeholder='Search for Entity Name...'
          //defaultValue="Search for Entity Name..."
          InputProps={{
          endAdornment: (
          <InputAdornment position="start">
           <IconButton>
           <SearchIcon />
           </IconButton>
            
           </InputAdornment>
   )
  }}
        />
      </div>
        <List input={inputText} />
    </div>
  );
}

export default SearchBar;


