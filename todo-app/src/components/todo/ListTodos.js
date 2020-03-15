import React, { Component } from 'react';

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todo: [
                 { id: 1, description: "Learn Java", done: false, targetDate: new Date() },
                 { id: 2, description: "Learn React", done: false, targetDate: new Date() },
                 { id: 3, description: "Learn Spring Boot", done: false, targetDate: new Date() },
            ]
        }
    }
    
    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>S. No.</th>
                                <th>Description</th>
                                <th>isCompleted</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.todo.map((t, index) => {
                                return (
                                    <tr key={t.id}>
                                        <td>{index + 1}</td>
                                        <td>{t.description}</td>
                                        <td>{t.done.toString()}</td>
                                        <td>{t.targetDate.toString()}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;