var Appointment = React.createClass({
    render (){
        return(
                <div>
                    <h1>{ this.props.appointment.title }</h1>
                    <h2>{ this.props.appointment.appt_time }</h2>
                </div>
            )
    }
})