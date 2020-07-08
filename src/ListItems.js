import React,{Component} from 'react';
import './ListItems.css';


function ListItems(props){
  const items= props.listItems
  const showListItems=items.map(item =>(
    <div className="row List" key={item.id}>
      <div className="ListItems col-xs-6" >
        <p className="textItem">
          <input
            type="text"
            value={item.text}
            className="inputText"
            onChange={(e)=>{
              props.setUpdate(e.target.value, item.id)
            }}
          />
        </p>
      </div>
      <div className="col-xs-3">
          <span className="Trash-Icon "><i className="fas fa-highlighter"></i></span>
      </div>
      <div className="col-xs-3">
          <span onClick={()=>props.deleteItem(item.id)} className="Trash-Icon ">
            <i className="fas fa-trash-alt"></i>
          </span>
      </div>
    </div>
  ))
  return(
      <div>
        {showListItems}
      </div>
  )
}
export default ListItems;
