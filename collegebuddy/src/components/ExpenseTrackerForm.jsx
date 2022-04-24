import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import axios from "axios";

const ExpenseTrackerForm = ({
  type,
  setType,
  note,
  setNote,
  Amount,
  setAmount,
  setOption,
}) => {
  const handleChange = (event) => {
    setType(event.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/expensetracker", {
        Transaction_type: type,
        amount: Amount,
        note: note,
      }, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 240 }}
          className="row text-left"
        >
          <InputLabel>Transaction Type</InputLabel>
          <Select
            id="Transaction_type"
            value={type}
            onChange={handleChange}
            label="Transaction Type"
            name="transaction_type"
          >
            <MenuItem value="+">Credit</MenuItem>
            <MenuItem value="-">Debit</MenuItem>
          </Select>
        </FormControl>

        <TextField
          sx={{ m: 1, minWidth: 240 }}
          label="Amount Credited/Debited"
          id="standard-size-normal"
          variant="standard"
          className="row text-left"
          name="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <TextField
          sx={{ m: 1, minWidth: 240 }}
          label="Add Note"
          id="standard-size-normal"
          variant="standard"
          className="row text-left"
          name="note"
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="row">
          <button
            type="submit"
            onClick={(e) => onClick(e)}
            className="sm:w-1/3 bg-purple text-white col"
            style={{ marginTop: "0.8rem", marginRight: "5px", padding: "5px" }}
          >
            Add Transaction
          </button>
          <button
            type="button"
            onClick={() => setOption("History")}
            className="sm:w-1/3 bg-purple text-white col"
            style={{ marginTop: "0.8rem", padding: "5px" }}
          >
            View History
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseTrackerForm;
