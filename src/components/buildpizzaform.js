// Import React library from node_modules folder
    import React from 'react'

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