import { Component } from "react";
import "../stylesheets/AddColorForm.scss";
import propTypes from "prop-types";

// export default class AddColorForm extends Component {
//   constructor(props) {
//     super(props);
//     this.submit = this.submit.bind(this);
//   }

//   submit(e) {
//     const { _title, _color } = this.refs;
//     e.preventDefault();
//     this.props.onNewColor(_title.value, _color.value);
//     _title.value = "";
//     _color.value = "";
//     _title.focus();
//   }

//   render() {
//     return (
//       <form className="form" action="#" onSubmit={this.submit}>
//         <input
//           type="text"
//           ref="_title"
//           placeholder="color title ..."
//           required
//           className="form__input"
//         />
//         <input type="color" ref="_color" required className="form__color" />
//         <button className="form__button">Add</button>
//       </form>
//     );
//   }
// }

const AddColorForm = ({ onNewColor = (f) => f }) => {
  let _title, _color;
  const submit = (e) => {
    e.preventDefault();
    onNewColor(_title.value, _color.value);
    _title.value = "";
    _color.value = "";
    _title.focus;
  };

  return (
    <form className="form" onSubmit={submit}>
      <input
        className="form__input"
        type="text"
        ref={(input) => (_title = input)}
        placeholder="Color title ..."
        required
      />
      <input
        className="form__color"
        type="color"
        ref={(input) => (_color = input)}
        required
      />
      <button className="form__button">Add</button>
    </form>
  );
};

AddColorForm.propTypes = {
  onNewColor: propTypes.func,
};

export default AddColorForm;
