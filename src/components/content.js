import React from 'react';

/* this page stores the content on the home page.*/
export class Content extends React.Component {

    render() {
        return (
            <div>
                <h1>Hello World!</h1>

                {/* this string is used to display the current time on the home page. */}
                <h2>It is {new Date().toLocaleTimeString()}.</h2>
            </div>
        );
    }
}