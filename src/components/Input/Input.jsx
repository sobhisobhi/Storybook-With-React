import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//import './input.css';

/**
 * Primary UI component for user interaction
 */
 const InputWrapper = styled.div`
 p{
   color:red;
 }
/*  span{
   color:black;
 }
 label{
  display: block;
   padding: 5px ;
 } */
 //input[type="text"],input[type="email"],input[type="password"] {
/*    input {
   width:60%;
   height:40px;
   border-radius:10px;
   border:solid gray 1px;
   padding:10px;
   margin-top:5px;
   color:black;
 } */
  --color-light: white;
  --color-dark: #212121;
  --color-signal: #fab700;

  --color-background: var(--color-light);
  --color-text: var(--color-dark);
  --color-accent: var(--color-signal);

  --size-bezel: 0.5rem;
  --size-radius: 4px;

  line-height: 1.4;

  color: var(--color-text);
  background: var(--color-background);
  font-weight: 300;
  padding: 0 calc(var(--size-bezel) * 3);
 
 .input {
  position: relative;
  top: 40px; left: 40px;

  
  &__label {
    position: absolute;
    left: 0;
    top: 0;
    padding: calc(var(--size-bezel) * 0.75) calc(var(--size-bezel) * .5);
    margin: calc(var(--size-bezel) * 0.75 + 3px) calc(var(--size-bezel) * .5);
    background: pink;
    white-space: nowrap;
    transform: translate(0, 0);
    transform-origin: 0 0;
    background: var(--color-background);
    transition: transform 120ms ease-in;
    font-weight: bold;
    line-height: 1.4;
  }
  &__field {
    box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid currentColor;
    padding: calc(var(--size-bezel) * 1.5) var(--size-bezel);
    color: currentColor;
    background: transparent;
    border-radius: var(--size-radius);
    
    &:focus,
    &:not(:placeholder-shown) {
      & + .input__label {
        transform: translate(.25rem, -65%) scale(.8);
        color: var(--color-accent);
      }
    }
  }
}
`;

export const Input = ({ className, label, value, type, onChange, onBlur, placeholder, error,id, required }) => {
  return (
    <InputWrapper className={className}
        type={type}
        error={error}
        required={required}
    >
    {label && (
      // eslint-disable-next-line jsx-a11y/label-has-for
      /*<label htmlFor= {id}>
        {label}
        {required && <span>*</span>}
        {label && ' :'}
      </label> */
    <label className="input">
      <input className="input__field"
        id={id}
        type={!type ? 'text' : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        required
      />
      <span className="input__label">{placeholder}</span>
    </label>
    )
    }
   {/*  <input
      id={id}
      type={!type ? 'text' : type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required
    /> */}
    <p>{error}</p>
  </InputWrapper>
  );
};

Input.propTypes = {
    required: PropTypes.bool,
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    id: PropTypes.string,
    value: PropTypes.any,
    error: PropTypes.string,
  };

Input.defaultProps = {

  };