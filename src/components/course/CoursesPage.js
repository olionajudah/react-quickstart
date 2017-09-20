import React, { Component, PropTypes } from 'react';

class CoursesPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);

        this.state = {
            course: {title: ""}
        };
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(event) {
        alert(`Saving ${this.state.course.title}`);
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <h2>Add Course</h2>
                <input 
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.course.title} 
                />
                <input
                    type="submit"
                    onClick={this.onClickSave} 
                    value="Save"
                />
            </div>
        );
    }
}

CoursesPage.propTypes = {

};

export default CoursesPage;