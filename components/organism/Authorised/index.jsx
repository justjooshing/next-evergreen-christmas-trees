import { nanoid } from "nanoid";
import { signOut } from "next-auth/client";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextareaAutoSize from "react-textarea-autosize";

import { adminActions, capitalisedWord } from "../../../helpers";
import DeleteButton from "../../atom/DeleteButton";
import ToggleVisibility from "../../atom/Toggle";

import style from "./Authorised.module.scss";

const SinglePost = ({ type, post }) => {
  const { value, id } = post;
  return (
    <div className={style.post}>
      <p>{value}</p>
      <div className={style.post_actions}>
        <ToggleVisibility
          type={type}
          messageToBeToggled={post}
          toggleState={adminActions[type].toggle}
        />
        <DeleteButton
          type={type}
          id={id}
          deleteFromState={adminActions[type].delete}
        />
      </div>
    </div>
  );
};

const AdminComponent = ({ type }) => {
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
      action: "Set Price",
      inputField: (
        <input
          type="number"
          id="price"
          onChange={(e) => setTempValue(e.target.value)}
          required
        />
      ),
      currentStateHeader: "Current Price",
      currentStateMap: () => <p>{`$${currentState} per foot`}</p>,
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
    <>
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
      {/* Only show Alerts/Annoucements header if they are some
      !currentState.isArray is to show price regardless */}
      {(currentState.length > 0 || !Array.isArray(currentState)) && (
        <div className={style.posts}>
          <h3>{currentStateHeader}</h3>
          {currentStateMap()}
        </div>
      )}
    </>
  );
};

const Authorised = () => {
  const signOutText = "Sign Out";
  return (
    <>
      <div className={style.auth}>
        <button className={style.auth__button} onClick={signOut}>
          {signOutText}
        </button>
      </div>
      <section className={style.current}>
        {["alerts", "announcements", "price"].map((type) => (
          <AdminComponent key={type} type={type} />
        ))}
      </section>
    </>
  );
};

export default Authorised;
