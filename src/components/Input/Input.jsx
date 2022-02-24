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
 span{
   color:black;
 }
 label{
  display: block;
   padding: 5px ;
 }
 //input[type="text"],input[type="email"],input[type="password"] {
   input {
   width:60%;
   height:40px;
   border-radius:10px;
   border:solid gray 1px;
   padding:10px;
   margin-top:5px;
   color:black;
 }
`;

export const Input = ({ label, value, type, onChange, onBlur, placeholder, error,id, required}) => {
  return (
    <InputWrapper
        type={type}
        error={error}
        required={required}
    >
    {label && (
      // eslint-disable-next-line jsx-a11y/label-has-for
      <label htmlFor= {id}>
        {label}
        {required && <span>*</span>}
        {label && ' :'}
      </label>
    )
    }
    <input
      id={id}
      type={!type ? 'text' : type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required
    />
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