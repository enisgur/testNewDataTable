class ReturnData {
  constructor(index, value) {
    this.index = index;
    this.value = value;
  }
  displayInput() {
    return (
      <td key={checkObjectKeys_TD(this.value, this.index)}>
        <input placeholder="input" defaultValue={this.value} />
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
