class ReturnData {
  constructor(index, value, onChange, row, key) {
    this.index = index;
    this.value = value;
    this.onChange = onChange;
    this.row = row;
    this.key = key;
  }
  displayInput() {
    // check if there is row data ?
    if (!this.row) return null;
    // check if there is rowDATA id? or _id?
    const rowID = this.row.id
      ? this.row.id
      : this.row._id
      ? this.row._id
      : false;

    // console.log(this.key);

    return (
      <td key={checkObjectKeys_TD(this.value, this.index)}>
        <input
          // id={this.key}
          placeholder="input"
          value={this.value}
          onChange={(e) => this.onChange(e, this.key, rowID)}
        />
      </td>
    );
  }
  displayTD() {
    return (
      <td key={checkObjectKeys_TD(this.value, this.index)}>{this.value}</td>
    );
  }
}

const checkObjectKeys_TD = (row, index) => {
  // if (row.id) return row.id;
  return index;
};

export default ReturnData;
