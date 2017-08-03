var AppointmentForm = React.createClass({
    handleChange: function(e){
       var name = e.target.name;
       obj = {};
       obj[name] = e.target.value;
       this.props.onUserInput(obj) // this function is from the parent component
    },
    
    handleSubmit: function(e){
      e.preventDefault(); // so the normal way of submission doesnt happen and we can use the call back
      this.props.onFormSubmit();
    },
    
    render (){
        return(
            <div>
              <h2>Make an Appointment</h2>
              <form onSubmit={this.handleSubmit}>
                <input name="title" placeholder="Appointment Title" 
                value={this.props.input_title} 
                onChange={this.handleChange}/>
                <input name="appt_time" placeholder="Appointment Time" 
                value={this.props.input_appt_time} 
                onChange={this.handleChange}/>
                <input type="submit" value="Make Appointment" />
              </form>
            </div>
            )
    }
})