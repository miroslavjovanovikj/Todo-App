import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItems from './ListItems';



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      todoItems:[],
      currentItem:{
        text:'',
        id:''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem     = this.addItem.bind(this);
    this.deleteItem  = this.deleteItem.bind(this);
    this.setUpdate   = this.setUpdate.bind(this);
  }
  handleInput(e){
    this.setState({
    currentItem:{
      text:e.target.value,
      id:Date.now()
    }
    })
  }
  addItem(e){
    e.preventDefault();
    const newItem= this.state.currentItem
    if(newItem.text!==''){
      const items=[...this.state.todoItems, newItem];
      this.setState({
        todoItems:items,
        currentItem:{
          text:'',
          id:''
        }
      })
    }
  }
  deleteItem(id){
    const filteredItems =  this.state.todoItems.filter(item=>(
      item.id!==id
    ))
    this.setState({
      todoItems:filteredItems
    })
  }
  setUpdate(text,id){
    const updateItem = this.state.todoItems;
     updateItem.map(item=>{
       if(item.id===id){
         item.text=text;
       }
     })
     this.setState({
       todoItems:updateItem
     })
  }
  render(){
    return(
    <div className="conatiner">
      <div className="row">
      <div className="App col-xs-6 col-xs-offset-3">
        <section>
          <header>
            <form className="TodoForm" onSubmit={this.addItem}>
              <input type="text"
                     placeholder="Enter text"
                     value={this.state.currentItem.text}
                     onChange={this.handleInput}
                />
              <button type="submit"><i className="far fa-plus-square plusIcon"></i></button>
              <ListItems
                listItems={this.state.todoItems}
                deleteItem={this.deleteItem}
                setUpdate={this.setUpdate}
              />
            </form>
          </header>
        </section>
      </div>
      </div>
    </div>
    )
  }
}

export default App;
