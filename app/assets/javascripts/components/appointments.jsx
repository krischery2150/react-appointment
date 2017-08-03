var Appointments = React.createClass({
    getInitialState (){
       return {
           appointments: this.props.appointments,
           title: 'Meet Joe',
           appt_time: 'Tomorrow at 9:00AM'
       } 
    },
    
    handleUserInput: function(obj){
        this.setState(obj)
    },
    
    // This is the ajax call handling the submission
    handleFormSubmit: function(){
      var appointment = { title: this.state.title, appt_time: this.state.appt_time };
      $.post('/appointments',
             {appointment: appointment})
        .done(function(data){
            this.addNewAppointment(data);
        }.bind(this));
    },
    

  addNewAppointment: function(appointment) {
    var appointments = React.addons.update(this.state.appointments, { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      }) // Updating state and sorting from appointment time ascending
    });
  },
    
    render (){
        return(
            <div>
                <AppointmentForm 
                 input_title={this.state.title} 
                 input_appt_time={this.state.appt_time}
                 onUserInput={this.handleUserInput}
                 onFormSubmit={this.handleFormSubmit}/>
                <AppointmentList appointments={this.state.appointments}/>
            </div>
        )
    }
})