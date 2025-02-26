import React, { Component } from "react";

class NthEventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vtdSelectCheckBox: ["Apple"], // Trái cây mặc định đã chọn
    };
  }

  // Hàm xử lý khi chọn checkbox
  vtdHandleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    let selected = [...this.state.vtdSelectCheckBox];

    // Nếu chọn checkbox, thêm vào mảng; nếu bỏ chọn, loại bỏ khỏi mảng
    const selectedOptions = checked
      ? [...selected, value]
      : selected.filter((option) => option !== value);

    console.log("selected:", selected, "selectedOptions:", selectedOptions);

    this.setState(
      {
        vtdSelectCheckBox: selectedOptions,
      },
    );
  };

  // Hàm xử lý khi form được submit
  vtdHandleSubmit = (event) => {
    event.preventDefault();
    const { vtdSelectCheckBox } = this.state;
    console.log("Fruits selected:", vtdSelectCheckBox);
    
    alert("Selected fruits: " + vtdSelectCheckBox.join(", "));
  };

  render() {
    return (
      <div className="alert alert-success">
        <h2> Form input - Checkbox</h2>
        <form onSubmit={this.vtdHandleSubmit}>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="apple"
              value="Apple"
              checked={this.state.vtdSelectCheckBox.includes("Apple")}
              onChange={this.vtdHandleCheckboxChange}
            />
            <label htmlFor="apple">Apple</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.vtdSelectCheckBox.includes("Banana")}
              onChange={this.vtdHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.vtdSelectCheckBox.includes("Orange")}
              onChange={this.vtdHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
        
      </div>
    );
  }
}

export default NthEventForm4;