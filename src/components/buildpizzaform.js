import React, { useState, useEffect } from 'react'
import "../index.css";


// Inital States
const initialOrderFormValues = {
    // Text Inputs
    name: '',
    address: '',
    aptsuite: '',
    city: '',
    state: '',
    zip: '',
    // Dropdown Menu
    pickupordelivery: '',
    // Topings Checklist
    marinara: false,
    cheese: false,
    pepperoni: false,
    mushrooms: false,
    spinach: false,
    onions: false,
    bellpeppers: false,
    blackolives: false,
  }
  const initialOrderFormErrors = {
    name: '',
    address: '',
    aptsuite: '',
    city: '',
    state: '',
    zip: '',
    pickupordelivery: '',
  }
  const initialOrder = []
  const initialDisabled = true

// Build Pizza Form
    export default function BuildPizzaForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    // Prevent default action of refreshing the page when form is submitted.
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    // Form will listen for onChange event of checked box when form is submitted.
    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const returnValue = type === "checkbox" ? checked : value
        change(name, returnValue)
    }

    // Display form
    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group submit'>
                <h2>Add to Order</h2>
            </div>
        </form>
        )
    }