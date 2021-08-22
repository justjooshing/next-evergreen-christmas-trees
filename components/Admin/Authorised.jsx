import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "next-auth/client";
import TextareaAutoSize from "react-textarea-autosize";
import { nanoid } from "nanoid";

import {
  setPrice,
  addAlert,
  addAnnouncement,
  deleteAlert,
  deleteAnnouncement,
  setAlerts,
  setAnnouncements,
  toggleAlert,
  toggleAnnouncement,
} from "../../redux/actions";

import ToggleVisibility from "./ToggleVisibility";
import DeleteButton from "./DeleteButton";

import adminStyle from "../../styles/Admin.module.css";

const actions = {
  alerts: {
    set: setAlerts,
    add: addAlert,
    toggle: toggleAlert,
    delete: deleteAlert,
  },
  announcements: {
    set: setAnnouncements,
    add: addAnnouncement,
    toggle: toggleAnnouncement,
    delete: deleteAnnouncement,
  },
  price: {
    set: setPrice,
  },
};

const SinglePost = ({ type, post }) => {
  const { value, id } = post;
  return (
    <div className={adminStyle.post}>
      <p>{value}</p>
      <div className={adminStyle.post_actions}>
        <ToggleVisibility
          route={type}
          messageToBeToggled={post}
          toggleState={actions[type].toggle}
        />
        <DeleteButton
          route={type}
          id={id}
          deleteFromState={actions[type].delete}
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
        updateState: actions[type].add({ value, id }),
      },
      price: {
        value: parseInt(tempValue),
        updateState: actions.price.set({ value }),
      },
    }[type];

    dispatch(updateState);
    e.target.reset();

    await fetch(`/api/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value, id }),
    });
  };

  const capitalisedWord = (string) => {
    return string[0].toUpperCase() + string.substring(1);
  };

  return (
    <>
      <div>
        <h2>{capitalisedWord(type)}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor={type}>
            <h3>{action}</h3>
            <div className={adminStyle.input_wrapper}>
              {inputField}
              <button type="submit">{submitText}</button>
            </div>
          </label>
        </form>
      </div>
      <div>
        <h3>{currentStateHeader}</h3>
        {currentStateMap()}
      </div>
    </>
  );
};

const Authorised = () => {
  const signOutText = "Sign Out";
  return (
    <>
      <div className={adminStyle.auth_wrapper}>
        <button className={adminStyle.auth_button} onClick={signOut}>
          {signOutText}
        </button>
      </div>
      <section className={adminStyle.current}>
        {["alerts", "announcements", "price"].map((type) => (
          <AdminComponent key={type} type={type} />
        ))}
      </section>
    </>
  );
};

export default Authorised;
