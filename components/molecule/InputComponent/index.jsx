import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextareaAutoSize from "react-textarea-autosize";
import { nanoid } from "nanoid";

import SinglePost from "../SinglePost";
import { capitalisedWord } from "../../../helpers";

import style from "./InputComponent.module.scss";

const InputComponent = ({ type }) => {
  const currentState = useSelector((state) => state[type]);
  const dispatch = useDispatch();
  const [tempValue, setTempValue] = useState();

  const bigTextBox = (
    <TextareaAutoSize
      type="text"
      id={type}
      onChange={(e) => setTempValue(e.target.value)}
      required
    />
  );

  const { action, inputField, currentStateHeader, currentStateMap } = {
    alerts: {
      action: "Add Alert",
      inputField: bigTextBox,
      currentStateHeader: "Current Alerts",
      currentStateMap: () =>
        currentState.map((post) => (
          <SinglePost key={post.id} type={type} post={post} />
        )),
    },
    announcements: {
      action: "Add Announcement",
      inputField: bigTextBox,
      currentStateHeader: "Current Announcements",
      currentStateMap: () =>
        currentState.map((post) => (
          <SinglePost key={post.id} type={type} post={post} />
        )),
    },
    price: {
      action: "Set Price per foot",
      inputField: (
        <input
          type="number"
          id="price"
          onChange={(e) => setTempValue(e.target.value)}
          required
        />
      ),
      currentStateHeader: "Current Price",
      currentStateMap: () => <p>{`$10, plus $${currentState} per foot`}</p>,
    },
  }[type];

  const submitText = "Submit";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { value, id, updateState } = {
      [type]: {
        value: tempValue,
        id: nanoid(10),
        updateState: () => adminActions[type].add({ value, id }),
      },
      price: {
        value: parseInt(tempValue),
        updateState: () => adminActions.price.set({ value }),
      },
    }[type];

    dispatch(updateState());
    e.target.reset();

    await fetch(`/api/requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value, id, type }),
    });
  };

  return (
    <div>
      <h2>{capitalisedWord(type)}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor={type}>
          <h3>{action}</h3>
          <div className={style.input_wrapper}>
            {inputField}
            <button type="submit">{submitText}</button>
          </div>
        </label>
      </form>
      {/* Only show Alerts/Annoucements header if there are some
      !currentState.isArray is to show price regardless */}
      {(currentState.length > 0 || !Array.isArray(currentState)) && (
        <div className={style.posts}>
          <h3>{currentStateHeader}</h3>
          {currentStateMap()}
        </div>
      )}
    </div>
  );
};

export default InputComponent;
