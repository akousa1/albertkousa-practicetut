import React, { Component } from 'react'

export class ClassExpressions extends Component {
    constructor(firstName, lastName) {
        super()
        this.firstName = firstName;
        this.lastName = lastName;
    };

    render() {
        const person = new ClassExpressions('Learn', 'JavaScript');
        console.log(person)
        // ClassExpressions {props: undefined, context: undefined, refs: {…}, updater: {…}, firstName: 'Learn', …}
        // context
        // : 
        // undefined
        // firstName
        // : 
        // "Learn"
        // lastName
        // : 
        // "JavaScript"
        return (
            <div>

            </div>
        )
    }
}

export default ClassExpressions
