import React from "react";

class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "") {
            alert("All the fields are required");
            return
        } 
        console.log(this.state); 
    }

    render() {
        return (
            <div className="form_container">
                <h2>Add contact</h2>
                <form className="form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={ (e) => this.setState({ name: e.target.value})}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={ (e) => this.setState({ email: e.target.value})}/>
                    </div>
                    <button className="btn">Add</button>
                </form>
            </div>
        )
    }
}

export default AddContact