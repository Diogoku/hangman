import React from "react";

// REDUX
import { useDispatch } from "react-redux";
import { createSecret } from "../../actions/hangmanActionCreators";

// REACT HOOK FORM
import { useForm } from "react-hook-form";

// FONT AWESOME ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CreateSecret() {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, getValues } = useForm();
  const onSubmit = (data) => {
    const secret = getValues("secret").split("");
    const hint = getValues("hint");
    dispatch(createSecret(secret, hint));
  };

  return (
    <form id="create-secret-form">
      <h2>Create Secret</h2>
      <div className="create-secret-input-wrapper">
        <label htmlFor="secret" className="label">
          Secret
        </label>
        <input
          type="text"
          name="secret"
          id="secret"
          className="create-secret-input"
          ref={register({ required: true, maxLength: 8 })}
        />
        {errors.secret && errors.secret.type === "required" && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" /> This field is
            required
          </span>
        )}
        {errors.secret && errors.secret.type === "maxLength" && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" /> Max of 8 Characters
          </span>
        )}
      </div>

      <div className="create-secret-input-wrapper">
        <label htmlFor="hint" className="label">
          Hint
        </label>
        <input
          type="text"
          name="hint"
          id="hint"
          className="create-secret-input"
          ref={register({ required: true })}
        />
        {errors.hint && (
          <span className="error-message">
            <FontAwesomeIcon icon="exclamation-triangle" />
            This field is required
          </span>
        )}
      </div>

      <button className="create-secret-button" onClick={handleSubmit(onSubmit)}>
        Create Secret&#160;
        <FontAwesomeIcon icon="key" />
      </button>
    </form>
  );
}
