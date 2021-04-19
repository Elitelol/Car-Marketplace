import React, { Component } from "react";

export default class Upload extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>Upload an ad</h3>
          <form>
            <div>
              <label>
                Make
                <select>
                  <option value="audi">AUDI</option>
                  <option value="BMW">BMW</option>
                </select>
              </label>
              <label>
                Model
                <select>
                  <option value="audi">AUDI</option>
                  <option value="BMW">BMW</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                Description
                <textarea></textarea>
              </label>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
