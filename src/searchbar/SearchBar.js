import React from "react";
import "./SearchBar.css"

class SearchBar extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            term:''
        };
        this.handleTermChange=this.handleTermChange.bind(this);
        this.search=this.search.bind(this);
        this.handleEnter=this.handelEnter.bind(this);
    }
    handleEnter(event){
        this.setState({term: event.target.value})
    }
    search(){
        this.props.onSearch(this.state.term)
    }
    hndleEnter(event){
        if(event.keycode === 13){
            this.search();
        }
    }
    render(){
        return(
            <div className="SearchBar">
                <input placeholder="Enter song album or artist" onchange={this.handleTermChange} onKeyUp={this.handleEnter}/>
                <button className="SearcButton" onclick={this.search}>SERACH</button>
                
            </div>
        )

    }
}
export default SearchBar;