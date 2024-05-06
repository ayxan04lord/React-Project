import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      comment: '',
      submitted: false, 
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    
    console.log('Göndərilənlər:', this.state);
    // Form gönderildikten sonra, alanları temizle ve gönderildiği bildirimi göster
    this.setState({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      comment: '',
      submitted: true,
    });
  };

  render() {
    return (
      <div>
        <h2>Form</h2>
        <label>
          Ad:
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Soyad:
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Telefon:
          <input
            type="tel"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Şərh:
          <textarea
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button onClick={this.handleSubmit}>Göndər</button>
        
        {this.state.submitted && <p>Form müvəffəqiyyətlə göndərildi!</p>}
      </div>
    );
  }
}


Form.propTypes = {
  onSubmit: PropTypes.func,
};


Form.defaultProps = {
  onSubmit: () => {},
};


ReactDOM.render(<Form />, document.getElementById('root'));
